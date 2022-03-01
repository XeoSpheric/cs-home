import {
  Button,
  Group,
  PasswordInput,
  SimpleGrid,
  TextInput,
  Text,
  Popover,
  Progress,
} from "@mantine/core";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { EyeCheck, EyeOff } from "tabler-icons-react";
import {
  PasswordRequirement,
  getStrength,
  requirements,
} from "../components/Password";
import Requirement from "../models/passwordRequirement";
import UserDetails from "../models/userDetails";
import { useUser } from "../services/authContext";

const AuthPage = ({ close }: { close: () => void }) => {
  const { signUp, updateUserDetails, signIn } = useUser();

  const [popoverOpened, setPopoverOpened] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setMatchStatus] = useState<boolean>(false);
  const [isEnabled, setSaveEnabled] = useState<boolean>(false);
  const [isSignUp, setLoginType] = useState<boolean>(false);

  const checks = requirements.map((requirement: Requirement, index: number) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(confirmPassword)}
    />
  ));

  const strength = getStrength(confirmPassword);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  const handleSave = async () => {
    if (isSignUp) {
      const userDetails: UserDetails = {
        email,
        first_name: firstName,
        last_name: lastName,
        language: "en",
        about: "",
        creation_date: Timestamp.now(),
      };
      const user = await signUp(email, password).catch((err: Error) => {
        console.warn(err.message);
      });
      if (!user) return;
      updateUserDetails(userDetails).catch((err: Error) => {
        console.warn(err.message);
      });
      close();
    } else {
      const user = await signIn(email, password).catch((err: Error) => {
        console.warn(err.message);
      });
      if (!user) return;
      close();
    }
  };

  useEffect(() => {
    setMatchStatus(password !== "" && password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setSaveEnabled(false);
    if (isSignUp && email && firstName && lastName && strength === 100) {
      setSaveEnabled(true);
    }
    if (!isSignUp && email && password) {
      setSaveEnabled(true);
    }
  }, [email, firstName, lastName, isSignUp, strength, password]);

  return (
    <>
      <SimpleGrid cols={1}>
        {isSignUp ? (
          <>
            <TextInput
              label="First Name"
              placeholder="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              required
            />
            <TextInput
              label="Last Name"
              placeholder="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
              required
            />
          </>
        ) : null}

        <TextInput
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        {isSignUp ? (
          <>
            <PasswordInput
              label="Password"
              placeholder="Password"
              description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
              }
            />
            <Popover
              opened={popoverOpened}
              position="bottom"
              placement="start"
              withArrow
              styles={{ popover: { width: "100%" } }}
              noFocusTrap
              transition="pop-top-left"
              onFocusCapture={() => setPopoverOpened(true)}
              onBlurCapture={() => setPopoverOpened(false)}
              target={
                <PasswordInput
                  label="Confirm password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.currentTarget.value)
                  }
                  visibilityToggleIcon={({ reveal, size }) =>
                    reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
                  }
                />
              }
            >
              <Progress
                color={color}
                value={strength}
                size={6}
                style={{ marginBottom: 10 }}
              />
              <PasswordRequirement
                label="Includes at least 6 characters"
                meets={confirmPassword.length > 5}
              />
              <PasswordRequirement
                label="Password matches"
                meets={passwordsMatch}
              />
              {checks}
            </Popover>
          </>
        ) : (
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            visibilityToggleIcon={({ reveal, size }) =>
              reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
            }
          />
        )}
        <Group position="right" mt="xl">
          <Text
            color="dimmed"
            className="hover:underline flex-1"
            onClick={() => setLoginType(!isSignUp)}
          >
            {isSignUp ? "Already have an account?" : "Need to make an account?"}
          </Text>
          <Button
            variant="outline"
            color="blue"
            onClick={() => handleSave()}
            disabled={!isEnabled}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </Group>
      </SimpleGrid>
    </>
  );
};

export default AuthPage;

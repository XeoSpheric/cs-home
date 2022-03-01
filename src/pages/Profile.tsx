import {
  Accordion,
  Button,
  Group,
  Select,
  SimpleGrid,
  Textarea,
  TextInput,
  useAccordionState,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { User, InfoCircle } from "tabler-icons-react";
import UserDetails from "../models/userDetails";
import { useUser } from "../services/authContext";

const Profile = () => {
  const { userDetails, isLoggedIn, updateUserDetails } = useUser();
  const [state, handlers] = useAccordionState({ total: 1, initialItem: 0 });
  const breakpoints = [{ maxWidth: "sm" as const, cols: 1 }];

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [language, setLanguage] = useState<string>("");

  const languages = [{ value: "en", label: "English" }];

  useEffect(() => {
    if (isLoggedIn && userDetails) {
      console.log(userDetails.creation_date.toDate())
      setEmail(userDetails.email);
      setFirstName(userDetails.first_name);
      setLastName(userDetails.last_name);
      setAbout(userDetails.about);
      setLanguage(userDetails.language);
    } else {
      setEmail("");
      setFirstName("");
      setLastName("");
      setAbout("");
      setLanguage("en");
    }
    return;
  }, [userDetails, isLoggedIn]);

  const handleSave = () => {
    const newUserDetails: UserDetails = {
      first_name: firstName,
      last_name: lastName,
      about: about,
      email: email,
      language: language,
      creation_date: userDetails.creation_date
    };

    console.log(newUserDetails);
    updateUserDetails(newUserDetails);
  };

  return (
    <Accordion
      state={state}
      onChange={handlers.setState}
      disableIconRotation
      multiple
    >
      <Accordion.Item label="Personal information" icon={<User />}>
        <SimpleGrid cols={3} breakpoints={breakpoints}>
          <TextInput
            label="First Name"
            placeholder="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            error={!firstName ? "First name is required" : null}
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            error={!lastName ? "Last name is required" : null}
            required
          />
          <TextInput
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            disabled
            required
          />
          <Select
            label="Language"
            placeholder="Language"
            value={language}
            onChange={(event) => setLanguage(event ?? "")}
            data={languages}
          />
        </SimpleGrid>
        <Textarea
          label="Bio"
          placeholder="Optional"
          mt="md"
          minRows={2}
          value={about}
          onChange={(event) => setAbout(event.currentTarget.value)}
          autosize
        />
        <Group position="right" mt="xl">
          <Button variant="outline" color="blue" onClick={() => handleSave()} disabled={!firstName || !lastName}>
            Update Profile
          </Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Future features" icon={<InfoCircle />}>
        Nothing is here yet...
      </Accordion.Item>
    </Accordion>
  );
};

export default Profile;

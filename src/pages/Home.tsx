import { Badge, Card, Group, Text, useMantineTheme } from "@mantine/core";
import "../styles/Home.scss";

const Home = () => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <>
      <div className="home-hero">
        <div className="hero-content">
          <div className="font-extrabold text-4xl">
            Feeling stuck, but want the
          </div>
          <span className="gradient-text font-extrabold text-4xl">
            Extroradiary
          </span>
          <div className="font-extrabold text-xl">
            That is how I have felt working on some projects, but wanted to take
            them to the <span className="hi-gradient mr-1">next level.</span>
            That is why I started this project, my home project. It is not much
            now, but with the power of React and me, it is going to bloom!
          </div>
        </div>

        <div style={{ width: 340, margin: "auto" }}>
          <Card shadow="sm" padding="lg">
            <Group
              position="apart"
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>A future writeup of the site</Text>
              <Badge color="blue" variant="light">
                Future
              </Badge>
            </Group>

            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
              Thanks to technogigies like, React, Mantine, Tailwind, and
              Firebase, a website like this is possible for anyone to make. The
              hardest part is deciding what something is going to look like.
            </Text>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;

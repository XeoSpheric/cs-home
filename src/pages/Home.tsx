import { Badge, Card, Group, Text, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import HomeCard from "../components/Card";
import "../styles/Home.scss";

const Home = () => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  return (
    <>
      <div className="home-hero">
        <div className={show ? "hero-content show" : "hero-content"}>
          <div className="font-extrabold text-4xl">
            Feeling stuck, but want the 
          <span className="gradient-text font-extrabold text-4xl ml-2">
            Extroradiary
          </span>
          </div>
          <div className="font-extrabold text-xl">
            That is how I have felt working on some projects, but wanted to take
            them to the <span className="hi-gradient mr-1">next level.</span>
            That is why I started this project, my home project. It is not much
            now, but with the power of React and me, it is going to bloom!
          </div>
        </div>
        <div className="hero-content show">
          <HomeCard
            title={"A future writeup of the site"}
            body={
              "Thanks to technogigies like, React, Mantine, Tailwind, and Firebase, a website like this is possible for anyone to make. The hardest part is deciding what something is going to look like."
            }
            show={show}
            index={1}
            moveHandler={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

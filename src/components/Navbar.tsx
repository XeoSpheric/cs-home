import { Button, Header } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../services/authContext";

const Navbar = ({}) => {
  const { isLoggedIn } = useUser();

  return (
    <Header height={55} padding="xs">
      <div className="flex flex-row">
        <div className="flex-none w-8 h-8 mx-2">
          <Link to={"/"}>
            <img src="/logo.png" alt="xeosmoot.com logo" />
          </Link>
        </div>
        <div className="px-2">
          <Link to={"/blog"}>
            <Button variant="outline" color="teal">
              Blogs
            </Button>
          </Link>
        </div>
        <div className="px-2">
          <Link to={"/about"}>
            <Button variant="outline" color="teal">
              About
            </Button>
          </Link>
        </div>
        <div className="grow flex flex-row-reverse">
          {isLoggedIn ? (
            <>
              <div className="px-2">
                <Button variant="outline" color="red">
                  Log Out
                </Button>
              </div>
              <div className="px-2">
                <Link to={"/profile"}>
                  <Button variant="outline" color="teal">
                    Profile
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <Button variant="outline" color="green">
              Log In
            </Button>
          )}
        </div>
      </div>
    </Header>
  );
};

export default Navbar;

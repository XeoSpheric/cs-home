import { Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import { useUser } from "../services/authContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  SunIcon,
  MoonIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import ProfileMenu from "./ProfileMenu";
import "../styles/Navbar.scss";

const navigation = [
  { name: "Blogs", href: "/blog", current: false },
  { name: "Yut", href: "/yut", current: false },
  { name: "About", href: "/about", current: false },
];

const Navbar = () => {
  const { isLoggedIn, isDarkMode, setViewMode } = useUser();
  const [isOpened, setOpened] = useState<boolean>(false);

  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  const closeModal = (): void => {
    setOpened(false);
  };

  return (
    <>
      <Modal
        transition="rotate-left"
        transitionDuration={600}
        opened={isOpened}
        onClose={() => setOpened(false)}
        hideCloseButton
        centered
      >
        <AuthPage close={closeModal} />
      </Modal>

      <Disclosure as="nav" className="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to={"/"}>
                      <img
                        className="block h-8 w-auto"
                        src="/favicon.svg"
                        alt="xeosmoot.com"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={"navButtonBase"}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="navRightSide">
                  <button
                    type="button"
                    className="navRoundedButton"
                    onClick={() => setViewMode(!isDarkMode)}
                  >
                    <span className="sr-only">Toggle Dark Mode</span>
                    {isDarkMode ? (
                      <SunIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MoonIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </button>
                  {isLoggedIn ? (
                    <ProfileMenu />
                  ) : (
                    <button
                      type="button"
                      className="navRoundedButton ml-3 relative"
                      onClick={() => setOpened(true)}
                    >
                      <span className="sr-only">Log In</span>
                      <UserCircleIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "navButtonBase"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;

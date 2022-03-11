import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useUser } from "../services/authContext";
import { UserCircleIcon } from "@heroicons/react/outline";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";


const ProfileMenu = () => {
  const { signOut } = useUser();
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Menu as={'div'} className="ml-3 p-0 relative z-50">
      <Menu.Button className="navRoundedButton mt-1">
        <span className="sr-only">Open user menu</span>
        <UserCircleIcon className="block h-6 w-6 text-gray-400" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/profile"
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => signOut()}
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default ProfileMenu;

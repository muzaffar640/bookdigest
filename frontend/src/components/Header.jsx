import { Dropdown, Navbar, Avatar } from "flowbite-react";
import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";
import { DarkThemeToggle } from "flowbite-react";
import { Icon } from "./common/Icon";

export const Header = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <Navbar fluid rounded>
      <div className="flex">
        <button onClick={() => onMenuToggle(!isMenuOpen)}>
          <Icon name="menu" className="text-gray-500 dark:text-gray-400" />
        </button>
        <Navbar.Brand href="" className="ml-4">
          <img alt="Book Digest Logo" className="mr-3 h-6 sm:h-9" src={Logo} />
        </Navbar.Brand>
      </div>

      <div className="flex">
        <div className="mr-3">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <DarkThemeToggle />
      </div>
    </Navbar>
  );
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func,
};

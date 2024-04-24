import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginWithGitHub = () => {
  };

  return (
    <Navbar className="bg-[#181818] h-20 flex items-center justify-between">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">&lt; progmatic / &gt;</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isLoggedIn ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="/avatar.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Ishaan Minocha</span>
              <span className="block truncate text-sm font-medium">minochaishaan2003@gmail.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>UI Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <button className="text-white text-base hover:underline" onClick={handleLoginWithGitHub}>Login with GitHub</button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-white text-base hover:underline" active={location.pathname === '/'} as={NavLink} to="/">Home</Navbar.Link>
        <Navbar.Link className="text-white text-base hover:underline" active={location.pathname === '/code'} as={NavLink} to="/code">Code</Navbar.Link>
        <Navbar.Link className="text-white text-base hover:underline" active={location.pathname === '/discussions'} as={NavLink} to="/discussions">Discussions</Navbar.Link>
        <Navbar.Link className="text-white text-base hover:underline" active={location.pathname === '/leaderboard'} as={NavLink} to="/leaderboard">Leaderboard</Navbar.Link>
        <Navbar.Link className="text-white text-base hover:underline" active={location.pathname === '/learn'} as={NavLink} to="/learn">Learn?</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

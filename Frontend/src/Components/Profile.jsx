
"use client";

import { Avatar, Dropdown } from "flowbite-react";

export function Profile() {
  return (
    <Dropdown
      label={<Avatar alt="User settings" img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">User Name</span>
        <span className="block truncate text-sm font-medium">user@gmail.com</span>
      </Dropdown.Header>
   
         
      <Dropdown.Item href="">My Profile</Dropdown.Item>
      <Dropdown.Item href="/">Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      
      <Dropdown.Divider />
      <Dropdown.Item >Sign out</Dropdown.Item>
    </Dropdown>
  );
}

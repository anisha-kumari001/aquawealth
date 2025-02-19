"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, MessageCircle, Sun, Moon, User } from "lucide-react";
import { useState } from "react";

export function Menu() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Menubar className="flex justify-between items-center px-4 py-2 shadow-md bg-white dark:bg-gray-900">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-xl font-bold">AquaWealth</a>
      </div>

      {/* Center Section: Search */}
      <div className="flex items-center space-x-4 w-1/3">
        <Input
          type="text"
          placeholder="Search investments, projects..."
          className="w-full"
        />
      </div>

      {/* Right Section: User Tools */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <Bell className="w-6 h-6 cursor-pointer" />
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">3</div>
        </div>

        {/* Messages */}
        <div className="relative">
          <MessageCircle className="w-6 h-6 cursor-pointer" />
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1 rounded-full">5</div>
        </div>

        {/* CTA Button */}
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Start Investing
        </Button>

        {/* Theme Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2">
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>

        {/* User Profile Dropdown - FIXED */}
        <MenubarMenu>
          <MenubarTrigger>
            <User className="w-6 h-6 cursor-pointer" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>My Profile</MenubarItem>
            <MenubarItem>Settings</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white">
      <div className="flex gap-12 items-center">
        <Image
          src={"/logo.svg"}
          width={150}
          height={150}
          priority={true}
          alt="logo"
        />

        <ul className="hidden md:flex gap-10">
          <Link href={"/"}>
            {" "}
            <li
              className={`'hover:text-primary font-medium text-sm cursor-pointer' ${
                path == "/" && "text-primary"
              }`}
            >
              For Sell
            </li>
          </Link>

          <Link href={"/rent"}>
            <li
              className={`'hover:text-primary font-medium text-sm cursor-pointer' ${
                path == "/rent" && "text-primary"
              }`}
            >
              For Rent
            </li>
          </Link>

           <Link href={"/aboutus"}>
            <li
              className={`'hover:text-primary font-medium text-sm cursor-pointer' ${
                path == "/aboutus" && "text-primary"
              }`}
            >
              About Us
            </li>
          </Link>


          <Link href={"/contact-us"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-2 items-center">
        <Link href={"/add-new-listing"}>
          <Button className="flex gap-2">
            <Plus className="h-5 w-5" />
            Post Your Add
          </Button>
        </Link>
        {isSignedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={user?.imageUrl}
                width={35}
                height={35}
                alt="user profile"
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/user"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SignOutButton>Log Out</SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href={"/sign-in"}>
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

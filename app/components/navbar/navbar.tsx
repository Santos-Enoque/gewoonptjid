'use client'
import { User } from "@prisma/client";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./userMenu";
import React from "react";
import { SafeUser } from "@/app/types";
interface NavbarProps {
    currentUser?: SafeUser | null;
  }

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    return <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex  flex-row justify-between items-center gap-3 md:gap-0">
                    <Logo />
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>
        </div>
    </div>;
}

export default Navbar;
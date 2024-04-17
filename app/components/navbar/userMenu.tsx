'use client'

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import { useCallback, useState } from "react";
import MenuItem from "./menuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    return <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div onClick={() => { }}
                className="
        hidden
        md:block
        text-sm
        font-semibold
        py-4
        px-3
        hover:bg-neutral-100
        rounded-full
        trasition
        cursor-pointer
        "
            >
                Register Saloon
            </div>
            <div onClick={toggleOpen}
                className="
            p-4
            md:py-2
            md:px-1
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            "
            >
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar />
                </div>
            </div>
        </div>
        {isOpen && <div className="
       absolute
       rounded-xl
       shadow-md
       w-[40vw] 
       md:w-3/4
       bg-white
       overflow-hidden
       right-0
       top-12
       text-sm
        ">
            <div className="flex flex-col curso-pointer">
                <>
                    <MenuItem onClick={loginModal.onOpen} label="login" />
                    <MenuItem onClick={registerModal.onOpen} label="sign up" />
                </>
            </div>
        </div>}
    </div>
}

export default UserMenu;
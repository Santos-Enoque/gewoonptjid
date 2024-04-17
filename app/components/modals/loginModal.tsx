
'use client'
import axios from "axios";
import { signIn } from "next-auth/react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Modal from "./modal";
import Heading from "../heading";
import Input from "../inputs/input";
import toast from "react-hot-toast";
import Button from "../button";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((response) => {
            setIsLoading(false);
            if (response?.ok) {
                toast.success("Logged in successfully");
                router.refresh();
                loginModal.onClose();
            }

            if (response?.error) {
                toast.error("An error occurred. Please try again later.");
            }
        })
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to back!"
                subtitle="Login to your an account"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => { signIn("google")}}
            />
            {/* <Button
                outline
                label="Continue with Facebook"
                icon={AiFillFacebook}
                onClick={() => { }}
            /> */}
            <div
                className="
              text-neutral-500 
              text-center 
              mt-4 
              font-light
            "
            >
                <p>Already have an account?
                    <span
                        onClick={() => { }}
                        className="
                  text-neutral-800
                  cursor-pointer 
                  hover:underline
                "
                    > Log in</span>
                </p>
            </div>
        </div>
    )
    return <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Login"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
    />
}

export default LoginModal;
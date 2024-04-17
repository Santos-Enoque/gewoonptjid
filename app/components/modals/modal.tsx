'use client'
import React, { use, useCallback, useEffect, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title: string;
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;

}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel,
}) => {
    const [showModal, setShowModal] = useState(isOpen)
    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) return;

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }
            , 300)
    }
        , [onClose, disabled])


    const handleSubmit = useCallback(() => {
        if (disabled) return;

        onSubmit();
    }
        , [onSubmit, disabled])


    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;

        secondaryAction();

    }
        , [secondaryAction, disabled])

    if (!isOpen) return null;

    return <div></div>
}

export default Modal;
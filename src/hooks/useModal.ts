import { useState } from "react";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    
    const switchOpen = (() => {
        setIsOpen(isOpen => !isOpen);
    });

    return {
        isOpen,
        switchOpen
    };
}

import { Binder } from "../../types";

export interface SidebarProps {
    binders: Binder[];
    addBinder: (name: string, icon: string) => void;
}

export interface SidebarContainerProps {
    isOpen: boolean;
}

export interface MobileMenuProps {
    isOpen: boolean;
}

export interface NavItemProps {
    isActive: boolean;
}

export interface IconOptionProps {
    isSelected: boolean;
}

export interface ButtonProps {
    primary?: boolean;
}

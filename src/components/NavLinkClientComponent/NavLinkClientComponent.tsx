'use client';
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import css from './NavLincClientComponent.module.css'
interface IProps{
    path: string,
    children: React.ReactNode
}

const NavLinkClientComponent:FC<IProps>= ({path, children}) => {
    let pathName = usePathname();
    return (
        <div>
            <Link href={path} className={pathName === path?`${css.active}`:''}>
                {children}
            </Link>
        </div>
    );
};

export default NavLinkClientComponent;
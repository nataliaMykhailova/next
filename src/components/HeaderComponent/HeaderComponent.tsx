import React from 'react';

import css from './HeaderComponent.module.css'
import NavLinkClientComponent from "@/components/NavLinkClientComponent/NavLinkClientComponent";

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <NavLinkClientComponent path={'/'}>Users</NavLinkClientComponent>
            <NavLinkClientComponent path={'/posts'}>Posts</NavLinkClientComponent>
            <NavLinkClientComponent path={'/comments'}>Comments</NavLinkClientComponent>
            <NavLinkClientComponent path={'/meals'}>Meals</NavLinkClientComponent>
        </div>
    );
};

export default HeaderComponent;
import React from 'react';
import Link from "next/link";

import css from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <Link href={'/'}>Users</Link>
            <Link href={'/posts'}>Posts</Link>
            <Link href={'/comments'}>Comments</Link>
        </div>
    );
};

export default HeaderComponent;
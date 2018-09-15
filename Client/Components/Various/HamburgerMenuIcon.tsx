import * as React from 'react'

export let HamburgerMenuIcon = (props: { active: boolean }) =>
    <span className="hamburger-menu">
        <span className={`hamburger-menu-part ${props.active ? "active" : ""}`}></span>
        <span className={`hamburger-menu-part ${props.active ? "active" : ""}`}></span>
        <span className={`hamburger-menu-part ${props.active ? "active" : ""}`}></span>
    </span>

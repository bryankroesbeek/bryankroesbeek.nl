import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import * as Types from '../api/types'

type Props = {
    links: Types.NavItem[]
}

export let Header = (
    props: Props
) => (
        <header className="header">
            <div className="content">
                <div className="header__content">
                    {/* <div className="header__logo"> */}
                    {/* <img src="images/logo.png" alt="Bryan Kroesbeek" /> */}
                    <Link className="header__name" to="/">Bryan Kroesbeek</Link>
                    {/* </div> */}
                    <div className="header__nav">
                        {props.links.map((link, int) =>
                            <Link className="nav__link-active" to={link.url} key={`nav_${int}`} >
                                <span className="nav__item">
                                    <label className="item__label">
                                        {link.title}
                                    </label>
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
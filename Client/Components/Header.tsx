import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import * as Types from '../api/types'

type Props = {
    links: Types.NavItem[]
}

type State = {
    links: Types.NavItem[]
}

export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            links: props.links
        }
    }

    render() {
        return (
            <header className="header">
                <div className="content">
                    <div className="header__content">
                        <Link className="header__name" to="/">Bryan Kroesbeek</Link>
                        <div className="header__nav">
                            {this.state.links.map((link, key) =>
                                <Link to={link.url} key={`nav_${key}`} className={"nav__link"} >
                                    <span className="nav__item">
                                        <span className="item__label">
                                            {link.title}
                                        </span>
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
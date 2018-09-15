import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import { HamburgerMenuIcon } from './Various/HamburgerMenuIcon'

import * as Types from '../api/types'

type Props = {
    links: Types.NavItem[]
    currentLink: string
}

type State = {
    opened_mobile: boolean
}

export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            opened_mobile: false
        }
    }

    renderLinks() {
        return this.props.links.map((link, key) =>
            <Link
                to={link.url} key={`nav_${key}`}
                className={`nav__link ${this.props.currentLink === link.url ? "link-active" : ""}`}
                onClick={() => this.setState({ opened_mobile: false })} >
                <span className="nav__item">
                    <span className="item__label">
                        {link.title}
                    </span>
                </span>
            </Link>
        )
    }

    render() {
        return (
            <header className="header">
                <div className="content">
                    <div className="header__content">
                        <Link className="header__name" to="/">Bryan Kroesbeek</Link>
                        <div className={`header__nav ${this.state.opened_mobile ? "mobile-visible" : ""}`}>
                            {this.renderLinks()}
                        </div>
                        <Link to="#" className={`header-icon__responsive ${this.state.opened_mobile ? "active" : ""}`} onClick={() => {
                            this.setState({ ...this.state, opened_mobile: !this.state.opened_mobile })
                        }} >
                            <span className="header-icon-icon">
                                <HamburgerMenuIcon active={this.state.opened_mobile} />
                            </span>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}
import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { Header } from './Components/Header'
import { Home } from './Components/Home/Home'

import * as Types from './api/types'

type MainState = {
    links: Types.NavItem[]
}

export class MainRouter extends React.Component<{}, MainState>{
    constructor(props: {}) {
        super(props)

        this.state = {
            links: [
                { title: "Home", url: "/" },
                { title: "Example", url: "/example" },
                { title: "SomeLink", url: "/somelink" },
                { title: "Yes", url: "/yes" }
            ]
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="page">
                    <Header links={this.state.links} />

                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/example" component={() => <div>Example</div>} />
                </div>
            </BrowserRouter>
        )
    }
}
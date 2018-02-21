import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import { Header } from './Components/Header'
import { Home } from './Components/Home/Home'

import * as Types from './api/types'
import { Footer } from './Components/Footer'

type MainState = {
    links: Types.NavItem[]
}

export class MainRouter extends React.Component<{}, MainState>{
    constructor(props: {}) {
        super(props)

        this.state = {
            links: [
                { title: "Home", url: "/" },
                { title: "Projecten", url: "/projects" },
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
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={() => <Home />} />
                            <Route path="/projects" component={() => <div>lel</div>} />
                            <Route component={() => <div>Not Found</div>} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
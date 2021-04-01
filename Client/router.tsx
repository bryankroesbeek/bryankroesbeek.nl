import * as React from 'react'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import { Home } from './Components/Home/Home'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

import { Projects } from './Components/Projects/Projects'
import { ExperienceComponent } from './Components/Experience/Experience'

import * as Types from './api/types'
import { About } from './Components/About/About';
import { NotFound } from './Components/Various/NotFound';

type MainState = {
    links: Types.NavItem[]
}

export class MainRouter extends React.Component<{}, MainState>{
    constructor(props: {}) {
        super(props)

        this.state = {
            links: [
                { title: "Home", url: "/" },
                { title: "Werkervaring", url: "/experience" },
                { title: "Projecten", url: "/projects" },
            ]
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="page">
                    <Route path={"*"} component={({ match }: any) => <Header currentLink={match.url} links={this.state.links} />} />
                    <div className="page-content">
                        <div className="content" >
                            <Switch>
                                <Route path="/" component={() => <Home />} />
                                {/* <Route path="/projects" component={() => <Projects />} />
                                <Route path="/experience" component={() => <ExperienceComponent />} /> */}

                                {/* <Route component={() => <NotFound />} /> */}
                            </Switch>
                        </div>
                    </div>
                    <Footer socialLinks={[
                        { title: "Twitter", link: "https://www.twitter.com/bryankroesbeek" },
                        { title: "LinkedIn", link: "https://www.linkedin.com/in/bryan-kroesbeek-089944121/" },
                        { title: "Github", link: "https://www.github.com/bryankroesbeek" },
                        { title: "Gitlab", link: "https://www.gitlab.com/bryankroesbeek" }]} />
                </div>
            </BrowserRouter>
        )
    }
}
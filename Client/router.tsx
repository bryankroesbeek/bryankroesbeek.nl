import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import { Home } from './Components/Home/Home'
import { Projects } from './Components/Projects/Projects'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

import { Sidebar } from './Components/Admin/Sidebar/Sidebar'
import { Login } from './Components/Admin/Login/Login'
import { Repoview } from './Components/Admin/Repoview/Repoview'

import * as Types from './api/types'
import { About } from './Components/About/About';

type MainState = {
    links: Types.NavItem[]
}

export class MainRouter extends React.Component<{}, MainState>{
    constructor(props: {}) {
        super(props)

        this.state = {
            links: [
                { title: "Home", url: "/" },
                { title: "Over Mij", url: "/about" },
                { title: "Werkervaring", url: "/experience" },
                { title: "Projecten", url: "/projects" }
            ]
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="page">
                    <Switch>
                        {/* <Route exact path="/admin/login" component={Login} />
                        <Route path="/admin">
                            <div className="admin_content">
                                <Sidebar />
                                <Switch>
                                    <Route path="/admin/repos" component={Repoview} />
                                </Switch>
                            </div>
                        </Route> */}

                        <Route><>
                            <Route path={"*"} component={({ match }: any) => <Header currentLink={match.url} links={this.state.links} />} />
                            <div className="page-content">
                                <div className="content" >
                                    <Switch>
                                        <Route exact path="/" component={() => <Home />} />
                                        <Route path="/about" component={() => <About />} />
                                        <Route path="/projects" component={() => <Projects />} />

                                        <Route component={() => <div>Not Found</div>} />
                                    </Switch>
                                </div>
                            </div>
                            <Footer socialLinks={[
                                {title: "Twitter", link: "https://www.twitter.com/bryankroesbeek"}, 
                                {title: "LinkedIn", link: "https://www.linkedin.com/in/bryan-kroesbeek-089944121/"},
                                {title: "Github", link: "https://www.github.com/bryankroesbeek"},
                                {title: "Gitlab", link: "https://www.gitlab.com/limecta"}]} />
                        </></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
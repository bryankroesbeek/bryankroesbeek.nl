import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import { Repository } from '../../api/types'
import * as Api from '../../api/api'

type ProjectsProps = {}

type ProjectsState = {
    repos: Repository[] | "loading"
}

export class Projects extends React.Component<ProjectsProps, ProjectsState>{
    constructor(props: ProjectsProps) {
        super(props)

        this.state = {
            repos: "loading"
        }
    }

    async componentDidMount() {
        if (this.state.repos !== "loading") return

        this.setState({ repos: await Api.getRepositories() })
    }

    render() {
        if (this.state.repos === "loading") return <div>Loading projects</div>
        return (<div className="projects-content">
            <div>
                <h1>Projecten</h1>
                <p>
                    Hieronder zijn de projecten te vinden die ik heb gemaakt.
                </p>
            </div>

            <div className="projects__view">
                {this.state.repos.map(r =>
                    <div key={r.id} className="project__block">
                        <div className="project__block-inner">
                            <h2 className="project__block-title">{r.name}</h2>
                            <p className="project__block-description">{r.description}</p>
                            <a href={r.link} className="project__block-link">Link to repository</a>
                        </div>
                    </div>)}
            </div>
        </div>
        )

    }
}



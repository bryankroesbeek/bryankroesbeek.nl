import * as React from 'react'
import { Project } from '../../api/types'
import * as Api from '../../api/api'
import { ProjectItem } from './ProjectItem';

type ProjectsProps = {}

type ProjectsState = {
    repos: Project[] | "loading"
}

export class Projects extends React.Component<ProjectsProps, ProjectsState>{
    constructor(props: ProjectsProps) {
        super(props)

        this.state = {
            repos: "loading"
        }
    }

    async componentDidMount() {
        document.title = "Projecten"        
        if (this.state.repos !== "loading") return

        this.setState({ repos: await Api.getProjects() })
    }

    render() {
        if (this.state.repos === "loading") return <div>Loading projects</div>
        return (<div className="projects-content">
            <div className="projects-header">
                <h1>Projecten</h1>
                <p>
                    Hieronder zijn mijn projecten te vinden.
                </p>
            </div>

            <div className="projects__view">
                {this.state.repos.map(r => <ProjectItem key={r.id} item={r} />)}
            </div>
        </div>
        )

    }
}



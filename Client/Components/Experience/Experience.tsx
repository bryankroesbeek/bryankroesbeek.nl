import * as React from 'react'
import { Project, Experience } from '../../api/types'
import * as Api from '../../api/api'

type ExperienceProps = {}

type ExperienceState = {
    experience: Experience[] | "loading"
}

export class ExperienceComponent extends React.Component<ExperienceProps, ExperienceState>{
    constructor(props: ExperienceProps) {
        super(props)

        this.state = {
            experience: "loading"
        }
    }

    async componentDidMount() {
        document.title = "Ervaring"
        if (this.state.experience !== "loading") return

        this.setState({ experience: await Api.getExperiences() })
    }

    render() {
        if (this.state.experience === "loading") return null
        return (<div className="experience-content">
            <div className="experience-view">
                {this.state.experience.map(e => <div key={`experience-${e.id}`} className="experience-item">
                    <h1 className="experience-company">{e.company}</h1>
                    <h2 className="experience-position">{e.position}</h2>
                    {
                        !!e.description ?
                            <p className="experience-description">{e.description}</p> :
                            null
                    }
                    {
                        !!e.startYear ?
                            <label className="experience-duration">{e.startYear} tot {!!e.endYear ? e.endYear : "heden"}</label>
                            : null
                    }
                </div>
                )}
            </div>
        </div>
        )

    }
}



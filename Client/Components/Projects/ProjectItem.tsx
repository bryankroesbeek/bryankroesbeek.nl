import * as React from 'react'
import { Project } from '../../api/types';

type ItemProps = {
    item: Project
}

export class ProjectItem extends React.Component<ItemProps, {}> {
    render() {
        return <div className="project__block">
            <div className="project__block-inner">
                <h2 className="project-title">{this.props.item.name}</h2>
                {this.props.item.description ?
                    this.props.item.description.split("\n").map((text, key) => <p key={key} className="project__block-description">
                        {text}
                    </p>) : null}
                {/* <p className="project__block-description">{this.props.item.description}</p> */}
                {this.props.item.link ? <a href={this.props.item.link} title="Ga naar de repo" className="project-link-block">
                    <div className={`link-icon${this.linkCssProperty(this.props.item.link)}`} />
                </a> : null}
            </div>
        </div>
    }

    linkCssProperty(link: string): string {
        if (link.includes("github")) return " github"
        if (link.includes("gitlab")) return " gitlab"
        return ""
    }
}
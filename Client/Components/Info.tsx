import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import * as api from '../api/api'

type Post = {
    id: number
    title: string
    content: string
    createdDate: Date
    updatedDate: Date
}

type State = {
    posts: Post[] | "loading"
}

export class Info extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props)

        this.state = {
            posts: "loading"
        }
    }

    componentWillMount() {
        if (this.state.posts !== "loading") return

        api.getResources<Post[]>("api/infoblock")
            .then(res => this.setState({ posts: res }));
    }
    componentDidUpdate() {
        if (this.state.posts !== "loading") return

        api.getResources<Post[]>("api/infoblock")
            .then(res => this.setState({ posts: res }));
    }

    render() {
        return <div>
            {this.renderpostform()}
            {this.renderposts()}
        </div>
    }

    content: string
    title: string

    renderpostform() {
        return (
            <form className="block__form" onSubmit={e => {
                e.preventDefault()
                api.postResources("api/infoblock", { Title: this.title, Content: this.content })
                    .then(() => this.setState({ posts: "loading" }))
            }} >
                <div className="input__fields">
                    Title:   <input className="input__text" type="text" onChange={e => this.title = e.target.value} />
                    Content: <textarea className="input__text_area" onChange={t => this.content = t.target.value} />
                </div>
                <button className="button__submit" type="submit">SUBMIT</button>
            </form>
        )
    }

    renderposts() {
        return this.state.posts === "loading" ? <div>LOADING</div> :
            <div>
                {this.state.posts.map(p =>
                    <div key={p.id} className="block">
                        <div className="block__content">
                            <div>{p.id}</div>
                            <div>{p.title}</div>
                            <div>{p.content}</div>
                        </div>
                        <button className="button__delete" onClick={() => {
                            api.deleteResources("api/infoblock", p.id).then(() => {
                                if (this.state.posts === "loading") return
                                this.setState({ posts: this.state.posts.filter(e => e.id !== p.id) })
                            })
                        }}>
                            DELETE
                        </button>
                    </div>)}
            </div>
    }

}
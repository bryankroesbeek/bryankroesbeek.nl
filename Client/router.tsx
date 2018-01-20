import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

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

export class MainRouter extends React.Component<{}, State>{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={() => <Info />} />
                    <Route path="/example" component={() => <div>Example</div>} />
                </div>
            </BrowserRouter>
        )
    }
}

class Info extends React.Component<{}, State>{
    constructor(props: {}) {
        super(props)

        this.state = {
            posts: "loading"
        }
    }

    componentWillMount() {
        this.getResources();
    }
    componentDidUpdate() {
        this.getResources();
    }

    getResources() {
        if (this.state.posts !== "loading") return

        fetch("api/infoblock")
            .then(r => r.json())
            .then(res => res as Post[])
            .then(res => this.setState({ posts: res }))
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
            <div className="poop">
                <form onSubmit={e => {
                    e.preventDefault()
                    let headers = new Headers()
                    headers.append('content-type', 'application/json')
                    fetch("api/infoblock", {
                        method: "POST", headers: headers, body: JSON.stringify({
                            Title: this.title,
                            Content: this.content
                        })
                    })
                        .then(() => {
                            this.setState({ posts: "loading" })
                        })
                }} >
                    <input type="text" onChange={e => this.title = e.target.value} />
                    <input type="text" onChange={t => this.content = t.target.value} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    renderposts() {
        return this.state.posts == "loading" ? <div>LOADING</div> :
            <div>
                {this.state.posts.map(p => <div key={p.id} className="poop">
                    <div>{p.id}</div>
                    <div>{p.title}</div>
                    <div>{p.content}</div>
                </div>)}
            </div>
    }

}
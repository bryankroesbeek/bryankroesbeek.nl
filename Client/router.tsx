import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

export class MainRouter extends React.Component<{}, {}>{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={() => <div>Homepage</div> } />
                    <Route path="/example" component={() => <div>Example</div> } />
                </div>
            </BrowserRouter>
        )
    }
}
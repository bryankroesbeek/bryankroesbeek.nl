import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

export class Home extends React.Component<{}, {}>{
    render(){
        return (
            <div className="content">
                <div>
                    Hello
                </div>
            </div>
        )
    }
}
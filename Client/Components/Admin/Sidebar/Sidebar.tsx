import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

export class Sidebar extends React.Component<{}, {}> {

    render(){
        return (
            <div className="sidebar">
                Sidebar
            </div>
        )
    }
}
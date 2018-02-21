import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

export class Home extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <div className="quote">
                    <div className="quote-background">
                        <div className="quote-image-wrapper">
                            <img className="quote-image" src="images/pattern.svg" />
                        </div>
                        <div className="quote-content">
                            <h1 className="quote-text">I used to have an open mind but my brains kept falling out</h1>
                            <h3 className="quote-author">- Bryan Kroesbeek</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
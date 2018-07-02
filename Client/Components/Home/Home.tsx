import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import * as Moment from 'moment'

import { Banner } from '../Various/Banner'

type HomeState = {

}

export class Home extends React.Component<{}, HomeState>{
    render() {
        return (<>
            <div className="home-introduction">
                <img className="introduction-image" src="/images/bryan.jpg" alt="This is me" />
                <div className="introduction-section">
                    <div className="section-text">
                        <h1>Welkom</h1>
                        <p>Op mijn website</p>
                    </div>
                </div>
            </div>
        </>)
    }
}
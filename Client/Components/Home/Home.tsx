import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import { Banner } from '../Various/Banner'

type HomeState = {

}

export class Home extends React.Component<{}, HomeState>{
    render() {
        return (<>
            <div className="home-introduction">
                <div className="introduction-section">
                    <div className="section-text">
                        <h1>Welkom!</h1>
                        <p>Mijn naam is Bryan</p>
                    </div>
                </div>
                <img className="introduction-image" src="/images/bryan.jpg" alt="This is me" />
            </div>
            <Banner content={{type: "Banner", title: "Some sample text to test out my new banner"}} />

            <div className="">

            </div>
        </>)
    }
}
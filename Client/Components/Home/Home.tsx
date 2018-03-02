import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

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
            <div className="quote">
                <div className="quote-background">
                    <div className="quote-image-wrapper">
                        <img className="quote-image" src="images/pattern.svg" />
                    </div>
                    <div className="quote-content">
                        <h1 className="quote-text">Bryan Kroesbeek</h1>
                        {/* <h3 className="quote-author">- Bryan Kroesbeek</h3> */}
                    </div>

                </div>
            </div>

            <div className="">

            </div>
        </>)
    }
}
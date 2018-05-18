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
                <div className="introduction-section">
                    <div className="section-text">
                        <h1>Welkom</h1>
                        <p>Op mijn website</p>
                    </div>
                </div>
                <img className="introduction-image" src="/images/bryan.jpg" alt="This is me" />
            </div>
            <Banner content={{ type: "Banner", title: "Wie ben ik en wat doe ik?" }} />

            <div className="content-me">
                <h2>Ik ben Bryan Kroesbeek</h2>
                <p>Ik ben een software ontikkelaar van {this.age()} jaar oud. Ik studeer Informatica aan de Hogeschool Rotterdam. </p>
            </div>
        </>)
    }

    age() {
        let ageInMs = Moment().valueOf() - Moment("1996-03-07").valueOf()
        return Moment(ageInMs).toDate().getUTCFullYear() - 1970
    }
}
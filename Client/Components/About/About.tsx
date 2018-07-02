import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import * as Moment from 'moment'

import { Banner } from '../Various/Banner'

export class About extends React.Component<{}, {}>{
    render() {
        return (<>
            {/* <Banner type="Banner" title="Wie ben ik en wat doe ik?" /> */}

            <div className="content-me">
                <h2>Ik ben Bryan Kroesbeek</h2>
                <p className="cliche-text">
                    Dit is een lekker cliché textje over wie ik ben en wat ik doe :)
                </p>
                <p>Ik ben een software ontwikkelaar van {this.age()} jaar oud. Ik studeer Informatica aan de Hogeschool Rotterdam.</p>
                <p>Ik ben op de Hogeschool Rotterdam begonnen in 2015. Hier heb ik in 1 jaar mijn propedeuse mogen behalen.</p>
                <p>
                    Nu ben ik werkzaam als Trainee Webdevelopment bij internetbureau <a href="https://hoppinger.com">Hoppinger</a>.
                <br />
                    Ik ben bij Hoppinger begonnen als stagiair, waar ik veel heb geleerd van het vak webdevelopment.
                </p>
            </div>
        </>)
    }

    age() {
        let ageInMs = Moment().valueOf() - Moment("1996-03-07").valueOf()
        return Moment(ageInMs).toDate().getUTCFullYear() - 1970
    }
}












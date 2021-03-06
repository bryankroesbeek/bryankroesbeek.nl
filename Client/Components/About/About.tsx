import * as React from 'react'
import { Link } from 'react-router-dom'

import * as Moment from 'moment'

export class About extends React.Component<{}, {}>{
    render() {
        return (<>
            <div className="content-me">
                <h2>Ik ben Bryan Kroesbeek</h2>
                <p> Ik ben een software ontwikkelaar in opleiding van {this.age()} jaar oud.
                    Ik volg de opleiding Informatica aan de Hogeschool Rotterdam.
                    Ik ben op de hogeschool begonnen in 2015.
                    In mijn eerste jaar heb ik gelijk mijn propedeuse mogen behalen, waar ik erg trots op ben.
                </p>

                <p>
                    Naast mijn opleiding ben ik ook werkzaam als Trainee Webdevelopment bij internetbureau <a href="https://hoppinger.com">Hoppinger</a>.
                    Ik ben voor het eerst in aanraking gekomen met dit bedrijf toen ik ging solliciteren voor een stageplek.
                    <br/>
                    Tijdens mijn stageperiode heb ik aan verschillende projecten gewerkt, hierdoor heb ik mijn programmeervaardigheden kunnen verbeteren.
                    Voordat ik stage ging lopen wist ik nog weinig af van webdevelopment.
                    Ik had nog nooit gewerkt met programmeertalen en frameworks zoals TypeScript en React. Deze technieken heb ik volledig tot me kunnen nemen.
                </p>

                <p>
                    Uiteraard heb ik ook nog hobby's waar ik me mee bezig houd. Eén van de grootste hobby's is het spelen van video games. 
                    Zo kan ik geheel opgaan in het spelen van games. 
                    Games die ik nu vooral speel zijn {" "}
                    <a href="https://www.projectcarsgame.com/?lang=en-us">Project CARS 2</a> en <a href="https://www.rocketleague.com/">Rocket League</a>.
                </p>

                <p>
                    Daarnaast programmeer ik uiteraard in mijn vrije tijd ook nog. 
                    Ik houd me dan bezig met projecten die mij leuk lijken, maar ook projecten waar ik nieuwe dingen van kan leren.
                </p>
                <p>
                    De projecten waar ik mij mee bezig houd of mee bezig heb gehouden zijn te vinden onder <Link to="/projects">Projecten</Link>
                </p>
            </div>
        </>)
    }

    age() {
        let ageInMs = Moment().valueOf() - Moment("1996-03-07").valueOf()
        return Moment(ageInMs).toDate().getUTCFullYear() - 1970
    }
}












import * as React from 'react'

import { About } from '../About/About'

export class Home extends React.Component<{}, {}>{

    componentDidMount() {
        document.title = "Home"
    }

    render() {
        return (<>
            <div className="home-introduction">
                {/* <img className="introduction-image" src="/images/bryan.jpg" alt="This is me" /> */}
                <div className="introduction-section">
                    <div className="section-text">
                        <h1>Onder Constructie</h1>
                    </div>
                </div>
            </div>

        </>)
    }
}
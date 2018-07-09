import * as React from 'react'

export class NotFound extends React.Component<{}, {}>{
    render() {
        return <div className="notfound-page">
            <div className="notfound-content">
                <h1 className="notfound-title">Oh nee! Deze pagina bestaat niet</h1>
                <p className="notfound-text">Klik op een link in de menu balk om normaal verder te kunnen gaan :)</p>
            </div>
        </div>
    }
}
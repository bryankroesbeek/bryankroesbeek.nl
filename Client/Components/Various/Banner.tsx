import * as React from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

export let Banner = (
    props: {
        type: "Quote"
        text: string
        author: string
    } | {
            type: "Banner"
            title: string
        }

) => {
    return <div className="banner">
        <div className="banner-background">
            <div className="banner-image-wrapper"></div>
            <div className="banner-content">
                {
                    props.type === "Quote" ? <>
                        <h1 className="banner-quote-text">{props.text}</h1>
                        <h3 className="banner-quote-author">{props.author}</h3>
                    </> : <>
                            <h1 className="banner-title">{props.title}</h1>
                        </>
                }
            </div>
        </div>
    </div>
}
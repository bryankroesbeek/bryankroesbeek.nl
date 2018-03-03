import * as React from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

export let Banner = (
    props: {
        content: {
            type: "Quote"
            text: string
            author: string
        } | {
            type: "Banner"
            title: string
        }
    }
) => {
    return <div className="banner">
        <div className="banner-background">
            <div className="banner-image-wrapper"></div>
            <div className="banner-content">
                {
                    props.content.type === "Quote" ?
                        <>
                            <h1 className="banner-quote-text">{props.content.text}</h1>
                            <h3 className="banner-quote-author">{props.content.author}</h3>
                        </> : <>
                            <h1 className="banner-title">{props.content.title}</h1>
                        </>
                }
            </div>
        </div>
    </div>
}
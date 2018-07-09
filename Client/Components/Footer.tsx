import * as React from 'react'
import * as Moment from 'moment'

export let Footer = (
    props: {
        socialLinks: {
            title: string,
            link: string
        }[]
    }
) => (
        <footer className="footer">
            <div className="content">
                <div className="footer__content">
                    <span className="footer-copyright">
                        <p>{'\u00A9'} {Moment().year()} Bryan Kroesbeek</p>
                    </span>
                    <div className="footer-links">
                        <p>Volg mij |</p>
                        {props.socialLinks.map((social, i) => <a key={`link_${i}`} className="footer-link" href={social.link}>{social.title}</a>)}
                    </div>
                </div>
            </div>
        </footer>
    )
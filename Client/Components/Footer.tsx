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
                        <p className="follow-me">Volg mij</p>
                        {props.socialLinks.map((social, i) => <a key={`link_${i}`} className="footer-link" href={social.link}>
                            <span className="footer-link-text">{social.title}</span>
                            <div className={social.title.toLowerCase()} />
                        </a>)}
                    </div>
                </div>
            </div>
        </footer>
    )
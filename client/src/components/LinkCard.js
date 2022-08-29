import React from "react"
import { useLinkClickHandler } from "react-router-dom"

export const LinkCard = ({link}) => {
    return (
        <>
            <h2>Link</h2>

            <p>Link: <a herf={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Origin link: <a herf={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Clicks: <strong>{link.clicks}</strong></p>
            <p>Created: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}
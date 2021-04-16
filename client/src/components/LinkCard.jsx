import React from 'react'

export const LinkCard = ({link}) => {
    return (
        <>
            <h3>Links</h3>
            <p>Your link to: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Your link from: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
            <p>Click count: {link.clicks}</p>
            <p>Date: {new Date(link.date).toLocaleDateString()}</p>
        </>
    )
}
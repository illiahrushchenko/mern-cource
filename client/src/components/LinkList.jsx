import React from 'react'
import {Link} from 'react-router-dom'

export const LinkList = ({ links }) => {
  if(links.length === 0){
    return (
      <p>Links not found</p>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Short</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/details/${link._id}`}> Open</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
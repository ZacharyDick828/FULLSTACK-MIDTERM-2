import React from 'react'

const ReadOnlyArtistData = ({ artist, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
        <td>{artist.name}</td>
        <td>{artist.moniker}</td>
        <td>{artist.art_type}</td>
        <td>{artist.genre}</td>
        <td>{artist.phone}</td>
        <td>{artist.email}</td>
        <td>{artist.agency}</td> 
        <td>
            <button type="button" onClick={(event)=> handleEditClick(event, artist)}>Edit</button>
            <button type="button" onClick={()=> handleDeleteClick(artist.id)}>Delete</button>
        </td>            
    </tr>
  )
}

export default ReadOnlyArtistData;
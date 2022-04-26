import React from 'react'

const EditArtistData = (editArtist, handleAddArtist, handleCancleClick) => {
  return (
    <tr>
        <td>
            <input
            type="text"
            name= "name"
            required="required"
            placeholder="artist name"
            value={editArtist.name}
            onChange={handleAddArtist}
            ></input>
        </td>
        <td>
            <input
            type="text"
            name= "moniker"
            required="required"
            placeholder="moniker"
            value={editArtist.moniker}
            onChange={handleAddArtist}
            ></input>
        </td>
        <td>
            <input
            type="text"
            name= "art_type"
            required="required"
            placeholder="art-type"
            value={editArtist.art_type}
            onChange={handleAddArtist}
            ></input>
        </td>
        <td>
            <input
            type="text"
            name= "genre"
            required="required"
            placeholder="genre"
            value={editArtist.genre}
            onChange={handleAddArtist}
            ></input>
        </td>
        <td>
            <input
            type="text"
            name= "phone"
            required="required"
            placeholder="phone"
            value={editArtist.phone}
            onChange={handleAddArtist}
            ></input>
        </td>
        <td>
            <input
          type="email"
          name= "email"
          required="required"
          placeholder="email"
          value={editArtist.email}
          onChange={handleAddArtist}
          ></input>
        </td>
        <td>
            <input
            type="text"
            name= "agency"
            required="required"
            placeholder="agency"
            value={editArtist.agency}
            onChange={handleAddArtist}
            ></input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancleClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditArtistData
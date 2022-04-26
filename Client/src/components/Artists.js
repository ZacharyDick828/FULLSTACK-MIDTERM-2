import React, { useState, Fragment } from 'react'
import data from "../mock-data.json";
import { nanoid } from 'nanoid';
import ReadOnlyArtistData from './ReadOnlyArtistData';
import EditArtistData from './EditArtistData';


const Table = () => {
  const [artists, setArtists] = useState(data);
  const [addArtists, setAddArtists] = useState({
    name: '',
    moniker: '',
    art_type: '',
    genre: '',
    phone: '',
    email: '',
    agency: ''
  })

  const [editArtist, setEditArtist] = useState({
    name: '',
    moniker: '',
    art_type: '',
    genre: '',
    phone: '',
    email: '',
    agency: ''
  })

  const [editArtistId,setEditArtistId] = useState(null);

  const handleAddArtists = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newArtistData = { ...addArtists};
    newArtistData[fieldName] = fieldValue;

    setAddArtists(newArtistData)
  };

  const handleEditArtist = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newArtistData = { ...editArtist};
    newArtistData[fieldName] = fieldValue;
    
    setEditArtist(newArtistData)
  }

  const handleNewArtistSubmit = (event) => {
    event.preventDefault();
    
    const newArtist = {
      id: nanoid(),
      name: addArtists.name,
      moniker: addArtists.moniker,
      art_type: addArtists.art_type,
      genre: addArtists.genre,
      phone: addArtists.phone,
      email: addArtists.email,
      agency: addArtists.agency,
    };

    const newArtists = [...artists, newArtist];
    setArtists(newArtists)
  };

  const handleEditArtistSubmit = (event) => {
    event.preventDefault();

    const editedArtist = {
      id: editArtistId,
      name: editArtist.name,
      moniker: editArtist.moniker,
      art_type: editArtist.art_type,
      genre: editArtist.genre,
      phone: editArtist.phone,
      email: editArtist.email,
      agency: editArtist.agency,
    }

    const newArtists = [...artists];

    const index = artists.findIndex((artist) => artist.id === editArtistId);

    newArtists[index] = editedArtist;

    setArtists(newArtists);
    setEditArtist()

  };

  const handleEditClick = (event, artist) => {
    event.preventDefault();
    setEditArtistId(artist.id);

    const formValues = {
      name: artist.name,
      moniker: artist.moniker,
      art_type: artist.art_type,
      genre: artist.genre,
      phone: artist.phone,
      email: artist.email,
      agency: artist.agency,

    }
    setEditArtist(formValues);
  };

  const handleCancleClick = () => {
    setEditArtistId(null)
  };

  const handleDeleteClick =(artistId) => {
    const newArtists = [...artists];

    const index = artists.findIndex((artist)=> artist.id === artistId);

    newArtists.splice(index, 1);

    setArtists(newArtists);
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditArtistSubmit}>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Moniker</th>
                    <th>Art-Type</th>
                    <th>Genre</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Agency</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <Fragment key={artist.id}>
                  {editArtistId === artist.id ? (
                    <EditArtistData editArtist= {editArtist} 
                    handleEditArtists= {handleEditArtist}
                    handleCancleClick={handleCancleClick}
                     /> 
                  ) : (
                  <ReadOnlyArtistData 
                    artist={artist}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    
                    />
                  )}
                </Fragment>
                ))}
            </tbody>
        </table>
      </form>
        
        <h2> Add Artist</h2>
        <form onSubmit={handleNewArtistSubmit}>
          <input
          type="text"
          name= "name"
          required="required"
          placeholder="artist name"
          onChange={handleAddArtists}
          />
          <input
          type="text"
          name= "moniker"
          required="required"
          placeholder="moniker"
          onChange={handleAddArtists}
          />
          <input
          type="text"
          name= "art_type"
          required="required"
          placeholder="art-type"
          onChange={handleAddArtists}
          />
          <input
          type="text"
          name= "genre"
          required="required"
          placeholder="genre"
          onChange={handleAddArtists}
          />
          <input
          type="text"
          name= "phone"
          required="required"
          placeholder="phone"
          onChange={handleAddArtists}
          />
          <input
          type="email"
          name= "email"
          required="required"
          placeholder="email"
          onChange={handleAddArtists}
          />
          <input
          type="text"
          name= "agency"
          required="required"
          placeholder="agency"
          onChange={handleAddArtists}
          />
          <button type="submit">Add Artist</button>
        </form>
    </div>
  )
};

export default Table;
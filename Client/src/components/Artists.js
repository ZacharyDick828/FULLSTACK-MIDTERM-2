import React, { useState, Fragment } from 'react'
import data from "../mock-data.json";
import { nanoid } from 'nanoid';
import ReadOnlyArtistData from './ReadOnlyArtistData';
import EditArtistData from './EditArtistData';




const Table = () => {
  // store data in state--initilize useState hook with the data from mock file. setArtists updates the state
  const [artists, setArtists] = useState(data);
  // store form values in state and update values as user types. store form values as an object and single state hook and use an event handler function to update the values
  const [addArtists, setAddArtists] = useState({
    name: '',
    moniker: '',
    art_type: '',
    genre: '',
    phone: '',
    email: '',
    agency: ''
  })

  // state object that holds form data while editing a given row 

  const [editArtist, setEditArtist] = useState({
    name: '',
    moniker: '',
    art_type: '',
    genre: '',
    phone: '',
    email: '',
    agency: ''
  })

  // store the id of the artist being edited in state and use the id to show edit row 
  const [editArtistId, setEditArtistId] = useState(null);

  // function that gets called when the user changes values for any input. All inputs will be linked to this event handler
  const handleAddArtists = (event) => {
    event.preventDefault();
    
// gets the name of the input that the user has changed. 'name' gets the name attribute of whichever input the user has typed into and asigns it to the fieldName variable 
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

// make a copy of existing form data so we can change it without mutating state. spread operator to copy existing form data and asign new data to newArtistData variable
    const newArtistData = { ...addArtists };
    // update the object with the new values 
    newArtistData[fieldName] = fieldValue;

    setAddArtists(newArtistData)
  };
// update the state when any form values change
  const handleEditArtist = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newArtistData = { ...editArtist };
    newArtistData[fieldName] = fieldValue;

    setEditArtist(newArtistData)
  }
  // function that gets called when form is submitted. id used to identify with artist is being deleted or edited
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
// save the edited artist data 
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
    setEditArtistId(null)

  };

  // EDIT BUTTON EVENT LISTENER
  const handleEditClick = (event, artist) => {
    event.preventDefault();
    setEditArtistId(artist.id);

    // prefill row while editing artist 

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

  // CANCLE BUTTON EVENT HANDLER
  const handleCancelClick = () => {
    setEditArtistId(null)
  };
// DELETE BUTTON EVENT HANDLER. 
// function that gets called when delete button is clicked
  const handleDeleteClick = (artistId) => {
    const newArtists = [...artists];

    const index = artists.findIndex((artist) => artist.id === artistId);

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
            {/* render table row for each object in the array. .map function loops over the array of artists array and updates the state */}
            {artists.map((artist) => (
              <Fragment key={artist.id}>
                {editArtistId === artist.id ? (
                  <EditArtistData editArtist={editArtist}
                    handleEditArtist={handleEditArtist}
                    handleCancelClick={handleCancelClick}
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


        {/* Adding data to the table form  */}
      </form>

      <h2 className="new-artist"> Add Artist</h2>
      <form onSubmit={handleNewArtistSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="artist name"
          onChange={handleAddArtists}
        />
        <input
          type="text"
          name="moniker"
          required="required"
          placeholder="moniker"
          onChange={handleAddArtists}
        />
        <input
          type="text"
          name="art_type"
          required="required"
          placeholder="art-type"
          onChange={handleAddArtists}
        />
        <input
          type="text"
          name="genre"
          required="required"
          placeholder="genre"
          onChange={handleAddArtists}
        />
        <input
          type="text"
          name="phone"
          required="required"
          placeholder="phone"
          onChange={handleAddArtists}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="email"
          onChange={handleAddArtists}
        />
        <input
          type="text"
          name="agency"
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
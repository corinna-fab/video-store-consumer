import React from 'react';
import AddToLibraryButton from './AddToLibraryButton';

const POST_URL = "http://localhost:3000/movies"

const SearchResult = (props) => {

  const addToLibrary = (props) => {
    const data = {
      title: props.title,
      overview: props.overview,
      release_date: release_date,
      image_url: props.image_url,
      external_id: props.external_id
    };

    console.log(data);
    axios.post(POST_URL, data)
      .then((response) => {
        // What should we do when we know the post request worked?
        console.log("Added to Library");
        // setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        // setErrorMessage(error.message);
      });
  }

  return (
    <tr>
      <td>
        <img src={props.image_url} className="ui mini rounded image"/>
      </td>
      <td className="two wide"> {props.title} </td>
      <td className="two wide"> {props.release_date} </td>
      <td> {props.overview} </td>
      <td><AddToLibraryButton inLibrary={props.inLibrary} addToLibraryCallback={addToLibrary}/></td>
    </tr>
  );
};

export default SearchResult;
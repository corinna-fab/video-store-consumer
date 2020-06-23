import React from 'react';
import AddToLibraryButton from './AddToLibraryButton';

const SearchResult = (props) => {

  return (
    <tr>
      <td>
        <img src={props.image_url} className="ui mini rounded image"/>
      </td>
      <td className="two wide"> {props.title} </td>
      <td className="two wide"> {props.release_date} </td>
      <td> {props.overview} </td>
      <td><AddToLibraryButton/></td>
    </tr>
  );
};

export default SearchResult;
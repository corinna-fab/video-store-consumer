import React from 'react';

const RentalBox = (props) => {

  // let movies = [];

  // if (props.library) {
  //   movies = props.library.map((movie) => {
  //     return (
  //       <div className="ui card">
  //         <div className="ui content">
  //           <img src={movie.image_url} className="ui image"/>
  //           <p className="ui header">{movie.title}</p>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div className="ui cards">
      <ul>
        {props.moviePick}
      </ul>
    </div>
  )
}

export default RentalBox;
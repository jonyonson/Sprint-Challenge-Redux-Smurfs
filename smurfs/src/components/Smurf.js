import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className="Smurf__name">{props.smurf.name}</h3>
      <p className="Smurf__height">{props.smurf.height} tall</p>
      <p className="Smurf__age">{props.smurf.age} smurf years old</p>
    </div>
  );
};

export default Smurf;

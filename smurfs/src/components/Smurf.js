import React from 'react';
import {
  FaRegTrashAlt as TrashIcon,
  FaRegEdit as EditIcon,
} from 'react-icons/fa';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className="Smurf__name">{props.smurf.name}</h3>
      <p className="Smurf__height">{props.smurf.height} tall</p>
      <p className="Smurf__age">{props.smurf.age} smurf years old</p>
      <EditIcon
        // onClick={() => props.handleUpdate(props.id)}
        className="Smurf__icon-edit"
        size="20"
      />
      <TrashIcon
        // onClick={() => props.deleteSmurf(props.id)}
        className="Smurf__icon-trash"
        size="20"
      />
    </div>
  );
};

export default Smurf;

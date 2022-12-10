import React from "react";

import "./style.css";

export const StudentRow = ({ id, firstName, lastName, age, handleDelete }) => {
  return (
    <>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>
        <button
          className="btn btn-danger delete-btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Remove
        </button>
      </td>
    </>
  );
};

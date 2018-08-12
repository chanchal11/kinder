import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
    <button>Submit</button>
    </form>
  );
}

export default UserForm;
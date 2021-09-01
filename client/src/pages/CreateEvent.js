// CreateEvent.js 
import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateEvent = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Create Event</h1>
      <br />
      <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};

export default CreateEvent;
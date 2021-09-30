import React from 'react';
import AddCardDynamic from './AddCardDynamic';
import AddCardTemplates from './AddCardTemplates';

const AddCard = () => {

  return (  
    <React.Fragment>
      <AddCardTemplates />
      <AddCardDynamic />
    </React.Fragment>
  );
}

export default AddCard;
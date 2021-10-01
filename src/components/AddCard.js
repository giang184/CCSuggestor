import React from 'react';
import AddCardDynamic from './AddCardDynamic';
import AddCardTemplates from './AddCardTemplates';

const AddCard = () => {

  return (  
    <React.Fragment>
      <AddCardDynamic />
      <AddCardTemplates />
    </React.Fragment>
  );
}

export default AddCard;
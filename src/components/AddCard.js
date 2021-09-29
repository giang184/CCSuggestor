import { useState } from 'react';
import { projectFirestore } from '../firebase/config';

const AddCard = () => {
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [category1,setCategory1] = useState()
  const [category2,setCategory2] = useState()
  // const [category3,setCategory3] = useState()
  const [percent1,setPercent1] = useState()
  const [percent2,setPercent2] = useState()
  // const [percent3,setPercent3] = useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    const collectionRef = projectFirestore.collection('cards');
    let obj = {};
    if(category1 && percent1){ 
      obj= {...obj, [category1]: percent1};
    }
    if(category2 && percent2){ 
      obj= {...obj, [category2]: percent2};
    }
    console.log(obj);
    collectionRef.add({name, type, rewards: obj})
  }

  return (  
    <div className="create">
      <h2>Add new card</h2>
      <form onSubmit={handleSubmit}>
        <label>Card Name</label>
        <input 
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Card Type</label>
        <input 
          type="text" 
          required
          onChange={(e) => setType(e.target.value)}
        />

        <div>Rewards:</div>
        <select 
          value={category1}
          onChange={(e) => setCategory1(e.target.value)}
        >
          <option value=""></option>
          <option value="Gas">Gas</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <input 
          value={percent1}
          type="text"
          onChange={(e) => setPercent1(e.target.value)}
        />
      <div />
        <select 
        value={category2}
          onChange={(e) => setCategory2(e.target.value)}
        >
          <option value=""></option>
          <option value="Gas">Gas</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <input 
          value={percent2}
          type="text"
          onChange={(e) => setPercent2(e.target.value)}
        />

        <div><button>Add Card</button></div>
        
      </form>
    </div>
  );
}

export default AddCard;
import { useState } from 'react';
import Result from './Result';

const Suggest = () => {
  const [selectedCategory, setSelectedCategory] = useState('Gas')

  const changeCategory = (event) => {
    event.preventDefault();
    setSelectedCategory(event.target.value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(selectedCategory);
  }

  return ( 
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Select Purchase Category</legend>
          <div className="form-type">
            <label>Card Image: </label>
            <select
              value={selectedCategory}
              onChange={changeCategory}
            >
              <option value=''></option>
              <option value='Gas'>Gas</option>
              <option value='Restaurant'>Restaurant</option>
              <option value='Travel'>Travel</option>
              <option value='Grocery_Stores'>Grocery_Stores</option>
              <option value='Wholesale_Clubs'>Wholesale_Clubs</option>
              <option value='Streaming_Services'>Streaming_Services</option>
              <option value='Online_Shopping'>Online_Shopping</option>
              <option value='Home_Improvement'>Home_Improvement</option>
              <option value='Department_Stores'>Department_Stores</option>
              <option value='Paypal'>Paypal</option>
              <option value='Target'>Target</option>
              <option value='Walmart'>Walmart</option>
              <option value='Amazon'>Amazon</option>
              <option value='Drug_Stores'>Drug_Stores</option>
              <option value='Internet/Phone/Cable'>Internet/Phone/Cable</option>
              <option value='Best_Buy'>Best_Buy</option>
              <option value='Transit'>Transit</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='All_Other_Purchases'>All_Other_Purchases</option>
            </select>
          </div>
        </fieldset>
        <div className="center">
          <button className="submit" type="submit">Rank Cards</button>
        </div>
      </form>
      <Result selectedCategory={selectedCategory}/>
    </>
  );
}

export default Suggest;
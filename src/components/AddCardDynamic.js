import { useState } from 'react';
import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';

const AddCardDynamic = () => {
  const history = useHistory();
  
  const categories = [
    'Gas',
    'Restaurant',
    'Travel',
    'Grocery_Stores',
    'Wholesale_Clubs',
    'Streaming_Services',
    'Online_Shopping',
    'Home_Improvement',
    'Department_Stores',
    'Paypal',
    'Target',
    'Walmart',
    'Target',
    'Amazon',
    'Drug_Stores',
    'Internet/Phone/Cable',
    'Best_Buy',
    'All_Other_Purchases'
  ]

  const [formState, setFormState] = useState({
    name: '',
    type: 'visa',
    categories: {
    }
  })

  const [selectedCategory, setSelectedCategory] = useState(0)

  const addName = (event) => {
    setFormState({
      ...formState,
      name: event.target.value,
    })
  }

  const addType = (event) => {
    setFormState({
      ...formState,
      type: event.target.value,
    })
  }

  const addCategory = (event) => {
    event.preventDefault();
    
    setFormState({
      ...formState,
      categories: {
        ...formState.categories,
        [categories[selectedCategory]]: 0,
      }
    })

    setSelectedCategory(0);
  }

  const removeCategory = (event, category) => {
    event.preventDefault();
    const newFormState = {
      ...formState,
      categories: {
        ...formState.categories,
      },
    }
    delete newFormState.categories[category];
    setFormState(newFormState);
  }

  const updateValueForCategory = (category, value) => {
    setFormState({
      ...formState,
      categories: {
        ...formState.categories,
        [category]: value,
      },
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const collectionRef = projectFirestore.collection('cards');
    collectionRef.add(formState);
    history.push('/');
  }

  return (
    <div className="add-card-dynamic">
      <h1>Add Custom Card:</h1>
    <div className="create">
      <form onSubmit={onSubmit}>
        <div className="form-name">
          <label>Credit Card Name: </label>
          <input 
            type="text"
            required
            value={formState.name}
            onChange={addName}
          />
        </div>
        <div className="form-type">
          <label>Card Type: </label>
          <select
            value={formState.type}
            onChange={addType}
          >
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="discover">Discover</option>
            <option value="amex">American Express</option>
          </select>
        </div>

        <fieldset>
          <legend>Choose Cash Back Categories</legend>
          <select 
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(parseInt(event.target.value))}
          >
            {categories.map((category, i) => (
              <option key={category} value={i}>{category}</option>
            ))}
          </select>
          <button onClick={addCategory}>Add</button>
        </fieldset>
        {Object.keys(formState.categories).length >0 &&
          <fieldset>
            <legend>Set Category's Cash Back Percentage</legend>
            {Object.keys(formState.categories).map((category, index) => (
              <div key={category}>
              <fieldset>
                <legend>category #{index+1}</legend>
                <label>{category}</label>
                <input 
                  type="number"
                  value={formState.categories[category]} 
                  onChange={(event) => updateValueForCategory(category, event.target.value)}
                />

                <button onClick={(event) => removeCategory(event, category)}>Remove Category</button>
              </fieldset>
              </div>
            ))}
          </fieldset>
        }
        <button className="submit" type="submit">Create Card</button>
      </form>
    </div>
    </div>
  )
}

export default AddCardDynamic;
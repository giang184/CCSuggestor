import { useState } from 'react';
import { projectFirestore } from '../firebase/config';


const AddCardDynamic = () => {
  
  const categories = [
    'Gas',
    'Dining',
    'Clothes',
  ]

  const [formState, setFormState] = useState({
    name: '',
    type: '',
    categories: {
    }
  })

  const [selectedCategory, setSelectedCategory] = useState(0)

  const updateName = (event) => {
    setFormState({
      ...formState,
      name: event.target.value,
    })
  }

  const updateType = (event) => {
    setFormState({
      ...formState,
      type: event.target.value,
    })
  }

  const addCategory = (event) => {
    event.preventDefault()
    
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
    event.preventDefault()

    const newFormState = {
      ...formState,
      categories: {
        ...formState.categories,
      },
    }

    delete newFormState.categories[category]

    setFormState(newFormState)
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
    event.preventDefault()
    console.log(formState)
  }

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <label>Credit Card Name</label>
        <input 
          type="text"
          value={formState.name}
          onChange={updateName}
        />

        <label>Card Type: </label>
        <select
          value={formState.type}
          onChange={updateType}
        >
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
        </select>

        <fieldset>
          <legend>Add Cash Back Categories</legend>

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

        <fieldset>
          <legend>Set Category's Cash Back</legend>

          {Object.keys(formState.categories).map(category => (
            <div key={category}>
              <label>{category}</label>
              <input 
                value={formState.categories[category]} 
                onChange={(event) => updateValueForCategory(category, event.target.value)}
              />

              <button onClick={(event) => removeCategory(event, category)}>Remove Rewards Category</button>
            </div>
          ))}
        </fieldset>

        <button type="submit">Submit Me Darnit</button>
      </form>
    </div>
  )
}

export default AddCardDynamic;
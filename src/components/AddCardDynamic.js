import { useState } from 'react';
import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';
import { Grid, Row, Col } from "react-flexbox-grid";
import visa from './../img/visa.png'
import mastercard from './../img/mastercard.png'
import amex from './../img/amex.png'
import discover from './../img/discover.png'
import unlimited from './../img/chase-freedom-unlimited.png'
import flex from './../img/chase-freedom-flex.png'
import sapphire from './../img/chase-sapphire-reserve.png'
import amexPreferred from './../img/amex-blue-preferred.jpg'
import amexEveryday from './../img/amex-blue-everyday.jfif'
import discoverit from './../img/discover-it.jfif'
import savor from './../img/capital-one-savor.png'
import wellsFargo from './../img/wells-fargo-active.png'
import citi from './../img/citi-double-cash.jpg'

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
    'Transit',
    'Entertainment',
    'All_Other_Purchases'
  ]

  const [formState, setFormState] = useState({
    name: '',
    type: 'visa',
    img: visa,
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

  const addImage = (event) => {
    const image = getImage(event.target.value);
    setFormState({
      ...formState,
      img: image,
    })
  }

  const getImage = (value) => {
    switch(value) {
      case "mastercard-generic":
        return mastercard;
      case "discover-generic":
        return discover;
      case "amex-generic":
        return amex;
      default:
        return visa;
    }
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
      <h1>Custom Add A Card:</h1>
      <div className="create">
        <form onSubmit={onSubmit}>
          <Grid>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <fieldset>
                  <legend>Required Fields</legend>
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
                  <div className="form-type">
                    <label>Card Image: </label>
                    <select
                      value={formState.image}
                      onChange={addImage}
                    >
                      <option value="visa-generic">Visa - Generic</option>
                      <option value="mastercard-generic">Mastercard - Generic</option>
                      <option value="discover-generic">Discover - Generic</option>
                      <option value="amex-generic">American Express - Generic</option>
                    </select>
                  </div>
                </fieldset>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <fieldset>
                  <legend>Add Cash Back Category</legend>
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
              </Col>
              <Col sm={12} md={6} lg={4}>
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
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6} lg={4}></Col>
              <Col sm={12} md={6} lg={4}>
                <div className="center">
                  <button className="submit" type="submit">Create Card</button>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}></Col>
            </Row>
          </Grid>
        </form>
      </div>
    </div>
  )
}

export default AddCardDynamic;
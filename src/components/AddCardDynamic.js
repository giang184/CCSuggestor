import { useState } from 'react';
import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import { Grid, Row, Col } from "react-flexbox-grid";
import {Card} from 'react-bootstrap'
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
import citiCustom from './../img/citi-custom-cash.png'
import boa from './../img/boa.png'

const AddCardDynamic = () => {
  const history = useHistory();
  const { currentUser } = useAuth()
  
  const categories = [
    'Gas',
    'Dining',
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
    'Amazon',
    'Drug_Stores',
    'Internet/Phone/Cable',
    'Best_Buy',
    'Transit',
    'Entertainment',
    'All_Other_Purchases'
  ]

  const [formState, setFormState] = useState({
    user: '',
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
      user: currentUser.email
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
      case "unlimited":
        return unlimited;
      case "flex":
        return flex;
      case "sapphire":
        return sapphire;
      case "amexPreferred":
        return amexPreferred;
      case "amexEveryday":
        return amexEveryday;
      case "discoverit":
        return discoverit;
      case "savor":
        return savor;
      case "wellsFargo":
        return wellsFargo;
      case "citi":
        return citi;
      case "citi-custom":
        return citiCustom;
      case "boa":
        return boa;
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
        [category]: parseInt(value),
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
                <Card>
                  <Card.Header style={{textAlign: "center", fontSize:"22px", fontWeight:"500"}}>Required Fields</Card.Header>
                  <Card.Body>
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
                        <option value="unlimited">Chase Freedom Unlimited</option>
                        <option value="flex">Chase Freedom Flex</option>
                        <option value="sapphire">Chase Freedom Sapphire</option>
                        <option value="discoverit">Discover it</option>
                        <option value="savor">Capital One Savor</option>
                        <option value="wellsFargo">Wells Fargo Active Cash</option>
                        <option value="citi">Citi Double Cash</option>
                        <option value="citi-custom">Citi Custom Cash</option>
                        <option value="boa">Bank of America Cash Rewards</option>
                        <option value="amexPreferred">American Express Blue Preferred</option>
                        <option value="amexEveryday">American Express Blue Blue Everyday</option>
                      </select>
                    </div>
                    </Card.Body>
                  </Card>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <Card>
                  <Card.Header style={{textAlign: "center", fontSize:"22px", fontWeight:"500"}}>Add Rewards Category</Card.Header>
                  <Card.Body>
                    <select 
                      value={selectedCategory}
                      onChange={(event) => setSelectedCategory(parseInt(event.target.value))}
                    >
                      {categories.map((category, i) => (
                        <option key={category} value={i}>{category}</option>
                      ))}
                    </select>
                    <button onClick={addCategory}>Add</button>
                    </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4}>
                {Object.keys(formState.categories).length >0 &&
                  <Card>
                    <Card.Header style={{textAlign: "center", fontSize:"22px", fontWeight:"500"}}>Set Rewards Percentage</Card.Header>
                    <Card.Body>
                      {Object.keys(formState.categories).map((category, index) => (
                        <div key={category}>
                        <fieldset>
                          <legend style={{fontSize: "18px"}}>{category}</legend>
                          <input 
                            type="number"
                            value={formState.categories[category]} 
                            onChange={(event) => updateValueForCategory(category, event.target.value)}
                          />
                          <button onClick={(event) => removeCategory(event, category)}>Remove Category</button>
                        </fieldset>
                        <br/><br/>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
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
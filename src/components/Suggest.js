import { useState } from 'react';
import Result from './Result';
import {Card} from 'react-bootstrap';
import { Grid, Row, Col } from "react-flexbox-grid";

const Suggest = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const changeCategory = (event) => {
    event.preventDefault();
    setSelectedCategory(event.target.value);
  }

  return ( 
    <>
    <div className="test">
    <h1>Rank By Category:</h1>
    <Grid>
      <Row>
      <Col sm={4} md={2} lg={1}>
      </Col>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: '14rem'}}>
            <Card.Header style={{textAlign: "center", fontSize:"20px", fontWeight:"500"}}>Select Category</Card.Header>
            <Card.Body>
              <form>
                <div className="form-type">
                  <select
                    value={selectedCategory}
                    onChange={changeCategory}
                  >
                    <option value=''></option>
                    <option value='Gas'>Gas</option>
                    <option value='Dining'>Dining</option>
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
                    <option value='Ebay'>Ebay</option>
                    <option value='Fitness_Clubs'>Fitness_Clubs</option>
                    <option value='All_Other_Purchases'>All_Other_Purchases</option>
                  </select>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Grid>
    <br/>
    <Result selectedCategory={selectedCategory}/>
    </div>
    </>
  );
}

export default Suggest;
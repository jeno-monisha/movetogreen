import React from 'react'
import './Home.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import first from "./images/3.jpg"
import four from "./images/4.jpg"
import seven from "./images/7.jpg"
import eight from "./images/8.jpg"
import nine from "./images/12.jpg"
import nin from "./images/9.png"
import ten from "./images/10.jpg"
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import './Login.css';

function Home(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return(
        
        <div className='home'>
          <div className='home_container'>
            <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="first Slide"
        />
        <Carousel.Caption>
          <h3>1.18 Crore seedlings have been raised in forest department nurseries</h3>
           <div className="text-center mt-3">
           <button variant="primary"><Link to="/Donate">Donate Now</Link></button>   
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={four}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 >Soil and Moisture Conservation</h3>
          <p>Soil and Moisture Conservation works of various types for sediment retention and erosion control</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://www.greentnmission.com/webAssets/images/banner/banner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Disaster management</h3>
          <p>
          Forest Fire Protection and Disaster Management for reducing emissions from the Deforestation and Land degradation.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
       </div>
       <div className='news'>
             <div className='IN'>
             <CardGroup>
      <Card>
        <Card.Img variant="top" className = "modify-size" src={seven} />
        <Card.Body>
          <Card.Title><stong>Working with communities</stong></Card.Title>
          <Card.Text>
          Community groups and NGOS are the early adopters of tree planting in the state. They have come together with the mission for encouraging everyone to plant trees. The communities will be encouraged to work out their carbon foot prints so that they can decide upon the number of trees to be planted.
          </Card.Text>
        </Card.Body>
        <Card.Footer className = "change-colour">
          <small className="text-muted"> By @Monisha</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className = "modify-size" src={eight} />
        <Card.Body>
          <Card.Title>Tree aware future</Card.Title>
          <Card.Text>
          A generation of children with tree awareness is targeted under the mission. Every child will be encouraged to plant trees and care for it. The GTM nurseries will be open for schools and public so that they will be able to have a hands-on experience in raising seedlings. Every child needs to grow up with their tree and will pledge for its protection.
          </Card.Text>
        </Card.Body>
        <Card.Footer className = "change-colour">
          <small className="text-muted">By @Josifha</small>
        </Card.Footer>
      </Card>
      <Card >
        <Card.Img variant="top" className = "modify-size" src={nine} />
        <Card.Body>
          <Card.Title>A mission going paperless</Card.Title>
          <Card.Text>
          The stakeholders and staff with great amount of passion and dedication have been able to make the mission paperless. Since the mission being a massive one, reducing paper helps in saving large number of existing green cover in the country 
          </Card.Text>
        </Card.Body>
        <Card.Footer className = "change-colour">
          <small className="text-muted">By @Bunny</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" className = "modify-size" src={ten} />
        <Card.Body>
          <Card.Title>GREEN QR PAYMENT</Card.Title>
          <Card.Text>
          <p>Green Donation QR code payments an easy option to offer, they can be safe, fast, and attractive to everyone</p>
          <strong>Shopping Malls</strong> <br /> 
                         <strong>Theatre</strong> <br /> 
                         <strong>Nursery</strong> <br /> 
                         <strong>schools & colleges</strong> <br />  
                         <strong>Airport</strong><br />      
                         
         </Card.Text>
        </Card.Body>
        <Card.Footer className = "change-colour">
          <small className="text-muted">By @aj</small>
        </Card.Footer>
      </Card>
    </CardGroup>
              </div>
              </div>
      <br/>
      <Table striped bordered hover  className = "change" variant="Dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Plants</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>12000</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>11000</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry</td>
          <td>1000</td>
          <td>3</td>
        </tr>
      </tbody>
    </Table>   
</div>
</div>         


      
    );
}
export default Home;
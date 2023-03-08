import $ from 'jquery';
import React from 'react';
import { useState } from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Table, Row, Col, InputGroup} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CryptoJS from 'crypto-js'

import './Payment.css';

export default function Payment() {

  const location = useLocation();
  const navigate = useNavigate();

  const name = location.state.name.name;
  const email = location.state.email.email;
  const phoneNo = location.state.phoneNo.phoneNo;
  const treesPackage = location.state.treesPackage.treesPackage;
  const amount = location.state.amount.amount;
  const occasions = location.state.occasions.occasions;
  const otherOccasion = location.state.otherOccasion.otherOccasion;
  
  const [paymentType, setPaymentType] = useState("card")
  const [cardType, setCardType] = useState("credit");
  const [cardPaymentType, setCardPaymentType] = useState("");
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const salt = CryptoJS.lib.WordArray.random(22);                          
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString(); 
  const idempotency = new Date().getTime().toString();
  const access_key = "ED75686CB74332EC9211";                                                       
  const secret_key = "305d7132e4b262ece3c95868fc15de1f1214bd3534ca0947d73c33334d4d6acf7f0e2fa30c500e79";                                                       
  const url_path = "/v1/payments";                                       
                                                                                  
  const http_method = "post";                                                   
  const card_payment_data = {
    'amount': amount,
    'currency' : 'INR',
    'payment_method': {
      'type': cardPaymentType,
      'fields': {
        'number': cardNumber,
        'expiration_month': cardMonth,
        'expiration_year': cardYear,
        'name': cardOwnerName,
        'cvv': cardCVV
      },
      'complete_payment _url': 'www.google.com',
      'error_payment_url':'www.google.com',
      'metadata': {
        'merchant_defined': true
      }
    },
    'capture': true
  }
  
  const getCardPaymentSignature = () => {
    const to_sign = http_method + url_path + salt + timestamp + access_key + secret_key + JSON.stringify(card_payment_data);
    const signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(to_sign, secret_key));
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));
  };

  const card_payment_headers = {
    'Content-Type': 'application/json',
    salt: salt,
    timestamp: timestamp,
    signature: getCardPaymentSignature(),
    access_key: access_key,
    idempotency: idempotency
  };

  async function handleCardPayment() {
    await fetch('https://cors-anywhere.herokuapp.com/https://sandboxapi.rapyd.net' + url_path, 
                { 'Content-Type': 'application/json',
                  method: http_method,
                  headers: card_payment_headers,
                  'mode':"cors",
                  'body': JSON.stringify(card_payment_data)
                })
        .then(response => response.json())
        .then(response => {
            if(response.data != null) {
              console.log(response);
              alert("Payment Successful!");
              navigate('/'); 
            }
        })
        .catch(err => console.error(err));
  };

    const handleCardSubmit = async (e) => {
      e.preventDefault();
      handleCardPayment();
      setPaymentType('card');
    };
    
    const handleCardTypeChange =  eventKey => {
      
      setCardType(eventKey.target.value);
      
      $('#debitCard_PaymentType').hide();
      
      if(eventKey.target.value == 'credit') {
        $('#creditCard_PaymentType').show();
        $('#debitCard_PaymentType').hide();
      } else if(eventKey.target.value == 'debit') {
        $('#debitCard_PaymentType').show();
        $('#creditCard_PaymentType').hide();
      } 
    };

    
  return(
    <div class="payment-page">
        <div class="payment-form">
            <h4>Move to Green</h4>    
            <h6>Select Payment Method</h6>
            <div class="empty-div"></div>  
            <div>
              <Tabs defaultActiveKey="card" id="payment_type" className="mb-3" fill>
                <Tab eventKey="card" title={<span><i class='far fa-credit-card' />&nbsp;&nbsp;Card </span>}>
                  <div>
                    <Form onSubmit={handleCardSubmit}>
                      <div>
                        <Table borderless>
                          <tbody>
                            <tr>
                              <td>Name</td>
                              <td style={{color:'#4CAF50'}}>{name}</td> 
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td style={{color:'#4CAF50'}}>{email}</td>
                            </tr>
                            <tr>
                              <td>Phone Number</td>
                              <td style={{color:'#4CAF50'}}>{phoneNo}</td>
                            </tr>
                            <tr>
                              <td>Total Amount</td>
                              <td style={{color:'#4CAF50'}}>Rs. {amount}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      
                      <h6>Card Information</h6>
                      <Form.Group as={Row} className="mb-3" controlId="cardType">
                        <Form.Label column sm={4}>Select Card</Form.Label>
                          <Col sm={5}>
                            <Form.Select aria-label="Card Type" value={cardType} onChange={handleCardTypeChange} required>
                                <option value="credit" >Credit</option>
                                <option value="debit">Debit</option>
                            </Form.Select>
                          </Col>
                      </Form.Group>
                      <div id="creditCard_PaymentType">
                        <Form.Group as={Row} className="mb-3" controlId="cardPaymentType">
                          <Form.Label column sm={4}>Card Type</Form.Label>
                            <Col sm={5}>
                              <Form.Select aria-label="Card Payment Type" value={cardPaymentType} onChange={(e) => setCardPaymentType(e.target.value)}>
                                <option value="">Select Card Type</option>
                                <option value="in_credit_mastercard_card">Master</option>
                                <option value="in_credit_visa_card">Visa</option>
                                <option value="in_credit_rupay_card">Rupay</option>
                                <option value="in_amex_credit_card">Amex</option>
                              </Form.Select>
                            </Col>
                        </Form.Group>
                      </div>
                      <div id="debitCard_PaymentType" class="debitCard_PaymentType">
                        <Form.Group as={Row} className="mb-3" controlId="cardPaymentType">
                          <Form.Label column sm={4}>Card Type</Form.Label>
                            <Col sm={5}>
                              <Form.Select aria-label="Card Payment Type" value={cardPaymentType} onChange={(e) => setCardPaymentType(e.target.value)}>
                                <option value="">Select Card Type</option>
                                <option value="in_debit_mastercard_card">Master</option>
                                <option value="in_debit_visa_card">Visa</option>
                                <option value="in_maestro_debit_card">Mastero</option>
                                <option value="in_debit_rupay_card">Rupay</option>
                              </Form.Select>
                            </Col>
                        </Form.Group>
                      </div>
                      <Form.Group as={Row} className="mb-3" controlId="cardOwnerName">
                        <Form.Label column sm={4}>Card Owner</Form.Label>
                          <Col sm={5}>
                            <Form.Control type="text" placeholder="Card Owner Name" value={cardOwnerName} onChange={(e) => setCardOwnerName(e.target.value)} required/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="cardNumber">
                          <Form.Label column sm={4}>Card Number</Form.Label>
                          <Col sm={8}>
                            <Form.Control type="text" placeholder="Valid Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="cardExpirationDate">
                          <Form.Label column sm={4}>Expiration Date</Form.Label>
                          <Col sm={5}>
                            <InputGroup>
                              <Form.Control type="text" placeholder="MM" value={cardMonth} onChange={(e) => setCardMonth(e.target.value)} required/>
                              <Form.Control type="text" placeholder="YY" value={cardYear} onChange={(e) => setCardYear(e.target.value)} required/>
                            </InputGroup>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="cardCVV">
                          <Form.Label column sm={4}>CVV</Form.Label>
                          <Col sm={5}>
                            <Form.Control type="text" value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} required/>
                          </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                      </Form>
                    </div>
                  </Tab>
                  <Tab eventKey="upi" title="UPI">
                  </Tab>
                </Tabs>
              </div>  
        </div>
    </div>
 )
}
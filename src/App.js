import React, { Component } from 'react';
import RaffleForm from './RaffleForm';
import RaffleTicket from './RaffleTicket';

import './App.css';

function generateTicketNumbers (numTickets, numNumbersPerTicket) {
  // Create an empty array to store the lists of numbers for each ticket
  const ticketNumbers = [];

  // Generate numbers for each ticket
  for (let i = 0; i < numTickets; i++) {
    // Create an empty list to store the numbers for the current ticket
    const ticketNumbersList = [];

    // Generate the specified number of numbers for the current ticket
    for (let j = 0; j < numNumbersPerTicket; j++) {
      // Generate a random number within the desired range (adjust as needed)
      let ruffleNumber = i*numNumbersPerTicket + j;
      console.log(`Number: ${ruffleNumber}`);

      ticketNumbersList.push(ruffleNumber);
    }

    // Add the list of numbers for the current ticket to the main array
    ticketNumbers.push(ticketNumbersList);
  }

  return ticketNumbers;
}

class App extends Component {

  state = {
    title: 'Viaje de fin de curso',
    description: '',
    price: 1,
    numberOfTickets: 1,
    numbersByTicket: 1
  }

  onRaffleFormChange = (values = {}) => {
    const { title, description, numberOfTickets, price, numbersByTicket } = values;
    this.setState({ title, description, numberOfTickets, price, numbersByTicket });
  }

  render() {
    const { title, description, price, numberOfTickets, numbersByTicket } = this.state;
    const tickets = generateTicketNumbers(numberOfTickets, numbersByTicket);

    return (
      <div className="app">
        <div className="form-region">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Generador de rifas</h1>
                <RaffleForm defaultValues={this.state} onChange={this.onRaffleFormChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="result-region">
          <div className="container-fluid">
            <div className="row">
              {tickets.map((tNumbers) => (
                <div className="col-6" key={`ticket-${tNumbers.join("-")}`}>
                  <RaffleTicket title={title} description={description} price={price} numbers={tNumbers} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

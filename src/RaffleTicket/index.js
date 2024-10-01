import React, { PureComponent } from 'react';

import './style.css';

function formatNumber(num, size = 3) {
  return `${num}`.padStart(size, '0');
}

class RaffleTicket extends PureComponent {
  static defaultProps = {
    title: 'Viaje de fin de curso',
    description: 'Lorem ipsum',
    price: 1,
    numbers: [0]
  }

  render() {
    const { title, description, price, numbers } = this.props;

    const RuffleNumber = (props) => (
      <span className="number text-primary ml-3">{formatNumber(props.num)}</span>      
    );

    return (
      <div className="raffle-ticket">
        <div className="row">
          <div className="col-3">
            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" className="form-control -user-fill" />
              </div>
              <div className="form-group">
                <label>Telf.:</label>
                <input type="text" className="form-control -user-fill" />
              </div>
              {numbers.map((num) => (
                <RuffleNumber num={num} />
              ))}  
            </form>
          </div>
          <div className="col-1">
            <div className="separator" />
          </div>
          <div className="col-8">
            <div className="content">
              <h1>Sorteo</h1>
              <h2>{title}</h2>
              <p className="description">{description}</p>
            </div>
            <footer className="row">
              <div className="col">
                <span className="price">{price}€</span>
              </div>
              <div className="col text-right">
                {numbers.map((num) => (
                  <RuffleNumber num={num} />
                ))}  
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default RaffleTicket;

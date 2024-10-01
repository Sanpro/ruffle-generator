import React, { PureComponent } from 'react';
import { Form, Text, TextArea } from 'informed';

import './style.css';

class RaffleForm extends PureComponent {
  static defaultProps = {
    defaultValues: {},
    onChange: () => null
  }

  handleSubmit = (values) => {
    const { onChange } = this.props;
    onChange(values);
  }

  render() {
    const { defaultValues } = this.props;

    return (
      <Form
        className="raffle-form"
        initialValues={defaultValues}
        onSubmit={this.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="title">
            Título
          </label>
          <Text
            type="text"
            id="title"
            field="title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Descripción
          </label>
          <TextArea field="description" id="description" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="price">
            Precio de participación (€)
          </label>
          <Text type="number" field="price" id="price" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfTickets">
            Número de boletos
          </label>
          <Text
            type="number"
            field="numberOfTickets"
            id="numberOfTickets"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="numbersByTicket">
            Números por boleto
          </label>
          <Text
            type="number"
            field="numbersByTicket"
            id="numbersByTicket"
            className="form-control"
            max="2"
          />
        </div>
        <div className="-actions">
          <button type="submit" className="btn btn-primary">Generar</button>
          <button type="button" className="btn btn-secondary" onClick={() => window.print()}>Imprimir</button>
        </div>
        <div>
          <p className="small">This tool has been made with love for Andrés Inga.</p>
          <p className="small">Sanpro added support to include multiple numbers per ticket.</p>
        </div>
      </Form>
    );
  }
}

export default RaffleForm;

import React from 'react';
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { Form, Header } from "semantic-ui-react";
import Assets from './tables/Assets';
import Liabilities from './tables/Liabilities';
import './styles.css';

class InputForm extends React.Component {     
  componentDidMount() {
    this.props.initialize(this.props.initialValues);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit}> 
          <Assets/>
          <Header as='h4' className='Custom-Header-Color' dividing>
            Liabilities
          </Header>
          <Liabilities/>
        </Form>
      </div>
    )
  }
}

InputForm = reduxForm({
  form: "inputForm"
})(InputForm);

InputForm = connect(
  state => ({
    initialValues: {
      cashAndInvestments:[
        {title:"Chequing", rate:0, amount:0},
        {title:"Savings for Taxes", rate:0, amount:0},
        {title:"Rainy Day Fund", rate:0, amount:0},
        {title:"Savings for Fun", rate:0, amount:0},
        {title:"Savings for Travel", rate:0, amount:0},
        {title:"Savings for Personal Development", rate:0, amount:0},
        {title:"Investment 1", rate:0, amount:0},
        {title:"Investment 2", rate:0, amount:0},
        {title:"Investment 3", rate:0, amount:0},
        {title:"Investment 4", rate:0, amount:0},
        {title:"Investment 5", rate:0, amount:0}
      ],
      longTermAssets:[
        {title:"Primary Home", rate:0, amount:0},
        {title:"Second Home", rate:0, amount:0},
        {title:"Other", rate:0, amount:0}
      ],
      shortTermLiabilties:[
        {title:"Credit Card 1", payment:0, rate:0, amount:0},
        {title:"Credit Card 2", payment:0, rate:0, amount:0},
        {title:"(others…)", payment:0, rate:0, amount:0}
      ],
      longTermDebt:[
        {title:"Mortgage 1", payment:0, rate:0, amount:0},
        {title:"Mortgage 2", payment:0, rate:0, amount:0},
        {title:"Line of Credit", payment:0, rate:0, amount:0},
        {title:"Investment Loan", payment:0, rate:0, amount:0},
        {title:"Student Loan", payment:0, rate:0, amount:0},
        {title:"Car Loan", payment:0, rate:0, amount:0}
      ],
    } 
  }),
  null
)(InputForm);

export default InputForm;

import React from 'react';
import { Field } from 'redux-form';
import { Table } from "semantic-ui-react";
import { currencyMask, percentageMask } from './InputMask';
import { getFormValues } from "redux-form";
import { connect } from "react-redux";

const RenderLiabilities = ({ fields }) => (
  fields.map((liability, index, fields) => (
	  <Table.Row key={index}>
	    <Table.Cell>
	      {fields.get(index).title} 
	    </Table.Cell>
	    <Table.Cell>
	      <Field 
	        name={`${liability}.payment`}
	        type="tel" 
	        component="input" 
	        {...currencyMask}
	      />
	    </Table.Cell>
	    <Table.Cell>
	      <Field 
	        name={`${liability}.rate`}
	        type="tel" 
	        component="input" 
	        {...percentageMask}
	      />
	    </Table.Cell>
	    <Table.Cell>
	      <Field 
	        name={`${liability}.amount`} 
	        type="tel" 
	        component="input" 
	        {...currencyMask}
	      />
	    </Table.Cell>
	  </Table.Row>
	))	
);  

export default connect(state => ({
  values: getFormValues("inputForm")(state)
}))(RenderLiabilities);
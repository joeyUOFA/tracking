import React from 'react';
import { Field } from 'redux-form';
import { Table } from "semantic-ui-react";
import { currencyMask, percentageMask } from './InputMask';

const RenderAssets = ({ fields }) => (
  fields.map((asset, index, fields) => (
	  <Table.Row key={index}>
	    <Table.Cell>
	      {fields.get(index).title} 
	    </Table.Cell>
	    <Table.Cell>
	      <Field 
	        name={`${asset}.rate`}
	        type="tel" 
	        component="input" 
	        {...percentageMask}
	      />
	    </Table.Cell>
	    <Table.Cell>
	      <Field 
	        name={`${asset}.amount`} 
	        type="tel" 
	        component="input" 
	        {...currencyMask}
	      />
	    </Table.Cell>
	  </Table.Row>
	))	
);  

export default RenderAssets;
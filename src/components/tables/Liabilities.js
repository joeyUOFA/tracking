import React from 'react';
import { FieldArray } from 'redux-form';
import { Table } from "semantic-ui-react";
import RenderLiabilities from "./elements/RenderLiabilities";
import '../styles.css';

class Liabilities extends React.Component {

  render() {
    return (
      <div>
        <Table color='red'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={4}>Short Term Liabilties</Table.HeaderCell>
              <Table.HeaderCell width={4}>Monthly Payment</Table.HeaderCell>
              <Table.HeaderCell width={4}>Interest Rate</Table.HeaderCell>
              <Table.HeaderCell width={4}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <FieldArray name="shortTermLiabilties" component={RenderLiabilities} />
            <Table.Row> 
              <Table.Cell><h5>Long Term Debt</h5></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <FieldArray name="longTermDebt" component={RenderLiabilities} />
            <Table.Row> 
              <Table.Cell><h5 className='Custom-Header-Color'>Total Liabilties</h5></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>       
      </div>
    );
  }
}


export default Liabilities;

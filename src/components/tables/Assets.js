import React from 'react';
import { FieldArray } from 'redux-form';
import { Table } from "semantic-ui-react";
import RenderAssets from "./elements/RenderAssets";
import '../styles.css';

class Assets extends React.Component {

  render() {
    return (
      <div>
        <Table color='blue'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={8}>Cash and Investments</Table.HeaderCell>
              <Table.HeaderCell width={4}>Interest Rate</Table.HeaderCell>
              <Table.HeaderCell width={4}></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <FieldArray name="cashAndInvestments" component={RenderAssets} />
            <Table.Row> 
              <Table.Cell><h5>Long Term Assets</h5></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <FieldArray name="longTermAssets" component={RenderAssets} />
            <Table.Row> 
              <Table.Cell><h5 className='Custom-Header-Color'>Total Assets</h5></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>       
      </div>
    );
  }
}


export default Assets;

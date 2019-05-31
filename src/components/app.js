import React from 'react';
import { Container, Header, Grid } from "semantic-ui-react";
import './styles.css';
import InputForm from './InputForm';
import ButtonGroup from './ButtonGroup';

const App = () => {  
  return ( 
    <div>
    <Container style={{ marginTop: '3em' }}>
      <Header as='h1'>
        Tracking your Networth
      </Header>
      <Grid divided='vertically'>
        <Grid.Row className='Custom-Grid-Row'>
          <Grid.Column width={4} floated='right' className='Custom-Grid-Column'>
            <h4>Select Currency</h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='Custom-Grid-Row'>
          <Grid.Column width={12} className='Custom-Grid-Column'>
            <h4 className='Custom-Header-Color'>Net Worth</h4>
          </Grid.Column>
          <Grid.Column width={4} className='Custom-Grid-Column'>             
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='Custom-Grid-Row'>
          <Grid.Column width={16} className='Custom-Grid-Column'>
            <h4 className='Custom-Header-Color'>Assets</h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <InputForm/>
          </Grid.Column>
        </Grid.Row>
      </Grid>     
    </Container>
    <ButtonGroup/>
    </div>
  );
};

export default App;

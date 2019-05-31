import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const docsButtonStyle = {
      position: 'fixed',
      marginBottom: '0.5em',
      marginLeft: '0.1em',
      bottom: 0,
      left: 0,
      animation: 'back-to-docs 1.5s ease-in-out infinite',
      zIndex: 6,
    }

const ButtonGroup = ({ dispatch }) => {
  return (  
    <div style={docsButtonStyle}>
      <Button.Group vertical>
        <Button animated='fade' color='red'>
          <Button.Content hidden>Refresh</Button.Content>
          <Button.Content visible>
            <Icon name='refresh' size="large"/>
          </Button.Content>
        </Button>
        <Button 
          animated='fade'
          color='teal'>
          <Button.Content hidden>Generate</Button.Content>
          <Button.Content visible>
            <Icon name='chart bar' size="large"/>
          </Button.Content>
        </Button>
      </Button.Group>   
    </div>
  );
};

export default connect()(ButtonGroup);

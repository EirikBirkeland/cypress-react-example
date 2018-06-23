import React from 'react';
import { ButtonToolbar, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bsStyle: null, string: null };
    }
 
    onClick = (type) => {
        this.setState({ string: `You clicked the ${type} button`, bsStyle: type });
    }
 
    render() {
        return (
            <div style={{ margin: "3%" }}>
                <ButtonToolbar>
                    <Button onClick={() => this.onClick('primary')} bsStyle="primary" bsSize="lg">Primary</Button>
                    <Button onClick={() => this.onClick('success')} bsStyle="success" bsSize="lg">Success</Button>
                    <Button onClick={() => this.onClick('info')} bsStyle="info" bsSize="lg">Info</Button>
                    <Button onClick={() => this.onClick('warning')} bsStyle="warning" bsSize="lg">Warning</Button>
                    <Button onClick={() => this.onClick('danger')} bsStyle="danger" bsSize="lg">Danger</Button>
                </ButtonToolbar>
                <Alert style={{'font-size': '100px'}} bsStyle={this.state.bsStyle}>
                    {this.state.string}
                </Alert>
            </div>
        )
    }
} 

import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeast extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            favorites: 0
        };
    }

addFavorite = () => {
  console.log('hello');
    this.setState ({favorites: this.state.favorites + 1 });
}
 

render () {
    return (

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={this.addFavorite} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button variant="primary" onClick={this.addFavorite}> ❤ {this.state.favorites}</Button>
      </Card.Body>
    </Card>
  );
}

}

export default HornedBeast;
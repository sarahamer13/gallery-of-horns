import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

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
 
handleModalClick = () => {
  const beast = {
    title: this.props.title,
    image_url: this.props.imageUrl,
    description: this.props.description,
    keyword: this.props.keyword,
    horns: this.props.horns,
    _id: this.props.key
  };
  this.props.setBeastToState(beast);
}

render () {
    return (
      <Col className="beasts">  
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} onClick={this.handleModalClick} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        <Button variant="primary" onClick={this.addFavorite}> ❤ {this.state.favorites}</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

}

export default HornedBeast;
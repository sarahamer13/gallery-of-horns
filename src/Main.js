import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// eslint-disable-next-line no-unused-vars
import BeastForm from './BeastForm';


class Main extends React.Component{
  render(){
    return( 
      <>
      <div className="beasts">
        <Row xs={1} s={2} md={5}>
            {this.props.beastsData.map((beast) => {
              return (
                <HornedBeast
                  title={beast.title}
                  imageUrl={beast.image_url}
                  description={beast.description}
                  keyword={beast.keyword}
                  setBeastToState={this.props.setBeastToState}
                  selectedBeast={this.props.selectedBeast}
                  horns={beast.horns}
                  key={beast._id}
                />
              );
            })}
            </Row>
          </div>
        
      </>
    );
  }
}

export default Main;







import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';



class Main extends React.Component{
    render(){
        return( 
            <Row>
            <div className="beasts">
              {this.props.beastsData.map((beast, idx) =>
                <HornedBeast
                  title={beast.title}
                  imageUrl={beast.image_url}
                  description={beast.description}
                  setBeastToState={this.props.setBeastToState}
                  selectedBeast={this.props.selectedBeast}
                  beast={beast}
                  key={idx}
                />
              )}
            </div>
          </Row>
        );
      }
    }
    
    export default Main;
    
    
    
    
    
    
    
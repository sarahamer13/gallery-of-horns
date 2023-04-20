import React from "react";
import HornedBeast from "./HornedBeast";
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from "./data.json";
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
    render(){
        return(
          <Row>
            {jsonData.map(beast => (
                <HornedBeast 
                title ={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                />
            ))}
        </Row>
        );
    }
}

export default Main;

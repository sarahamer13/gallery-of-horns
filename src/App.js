import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import SelectedBeast from "./SelectedBeast";
import './App.css';
// eslint-disable-next-line no-unused-vars
import jsonData from './data.json';
// eslint-disable-next-line no-unused-vars
import BeastForm from './BeastForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        selectedBeast: {},
        filteredBeast: jsonData, 
    }
}

setShowModalFalse = () => {
    this.setState({ showModal: false })
}

setShowModalTrue = () => 
{ this.setState({showModal: true })
}

setBeastToState = (beast) => {
    this.setState({ selectedBeast: beast })
    this.setShowModalTrue();
    // console.log(this.state.selectedBeast);
}

handleChange = (event) => {
  event.preventDefault();
  console.log (event.target.value);
  const selectedOption = parseInt(event.target.value);
  let filteredBeast;
  if (selectedOption) {
    filteredBeast = jsonData.filter (beast => beast.horns === selectedOption);
  } else {
    filteredBeast = jsonData;
  }
  console.log (filteredBeast);

  this.setState ({filteredBeast : filteredBeast})
  }

render() {
  return (
    <>
      <Header />
      <BeastForm handleChange={this.handleChange} />
      <Main beastsData={this.state.filteredBeast} setBeastToState={this.setBeastToState} />
      {this.state.selectedBeast && (
        <SelectedBeast
          showModal={this.state.showModal}
          setShowModalFalse={this.setShowModalFalse}
          selectedBeast={this.state.selectedBeast}
        />
      )}
      <Footer />
    </>
  );
}
}

export default App;







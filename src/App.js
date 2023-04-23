import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import SelectedBeast from "./SelectedBeast";
// eslint-disable-next-line no-unused-vars
import jsonData from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        selectedBeast: {},
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
    console.log(this.state.selectedBeast);
}
render() {
  return (
    <>
      <Header />
      <Main
          beastsData={jsonData}
          setBeastToState={this.setBeastToState}
        />
        {this.state.selectedBeast &&
          <SelectedBeast
            showModal={this.state.showModal}
            setShowModalFalse={this.setShowModalFalse}
            selectedBeast={this.state.selectedBeast}
          />
        }
        <Footer />
      </>
    )
  }
}

export default App;







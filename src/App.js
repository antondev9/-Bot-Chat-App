import React from "react";
import "./styles.css";
import Chat from "./components/chat/Chat";
import Loading from "./components/loading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      open: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="App">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Chat />
        </div>
      );
    }
  }
}

export default App;

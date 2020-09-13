import React from "react";
import loadData from "./helpers/loadData";
import Programs from "./programs";

class Home extends React.Component {
  constructor(props) {
    super(props);

    if (props.staticContext && props.staticContext.data) {
      this.state = {
        data: props.staticContext.data,
      };
    } else {
      this.state = {
        data: [],
      };
    }
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        this.setState({
          data: window.__ROUTE_DATA__,
        });
        delete window.__ROUTE_DATA__;
      } else {
        loadData("todos").then((data) => {
          this.setState({
            data,
          });
        });
      }
    }, 0);
  }

  render() {
    const { data } = this.state;
    console.log("vishnu");
    return <Programs data={data} />;
  }
}

export default Home;

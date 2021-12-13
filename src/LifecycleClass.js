import React from "react";

// object oriented progaming

class LifeCycleClass extends React.Component {
  state = { count: 0 };

  constructor(props) {
    super(props);
    console.log("contructor called");
  }
  // this component runs when component  mounts to dom
  componentDidMount() {
    console.log("LifeCycleClass: componentDidMount method called");
  }

  // when state changes
  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleClass: componentDidUpdate method called");
    console.log("curentState: ", this.state);
    console.log("prevState: ", prevState);

    if (prevState.count === 10) {
      // why do we need to be carefull set state in componentDidUpdate
      this.setState({
        count: 0,
      });
    }
    console.log("prevProps: ", prevProps);
  }

  // this called when components unmounts from dom
  componentWillUnmount() {
    console.log("LifeCycleClass: componentWillUnmount method called");
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("LifeCycleClass: render method called");
    console.log("-------");
    return (
      <div>
        <h1>Life cycle methods</h1>
        <h3>Rendering propFromApp: {this.props.propFromApp}</h3>
        <button onClick={this.add}>add</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default LifeCycleClass;

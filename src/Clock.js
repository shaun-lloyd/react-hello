import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      50
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
	var date = new Date()
    this.setState({
      hr: date.getHours(),
		min: date.getMinutes(),
		sec: date.getSeconds(),
		ms: date.getMilliseconds()
    });
  }
  render() {
    return (
      <p className="App-clock">
        {this.state.hr}:{this.state.min}:{this.state.sec}.{this.state.ms}
      </p>
    );
  }
}

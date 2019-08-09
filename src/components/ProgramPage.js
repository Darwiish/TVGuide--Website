import React, { Component } from "react";
import axios from "axios";

class ProgramPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProgram: {}
    };
  }
  componentDidMount() {
    const URL_PROGRAMS = process.env.REACT_APP_API_PROGRAMS;
    axios.get(URL_PROGRAMS).then(response => {
      this.setState({
        currentProgram: response.data.find(
          elm => elm._id === this.props.match.params.id
        )
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-8" style={{ backgroundColor: "#fff" }}>
          <h3>{this.state.currentProgram.program_name}</h3>
          <p>{this.state.currentProgram.program_name}</p>
        </div>
        <div className="col-lg-1" />
        <div className="col-lg-3" style={{ backgroundColor: "#fff" }}>
          <h4>FirstDate</h4>
          <p className="First_Date">
            {this.state.currentProgram.firstDate}
          </p>
          <h4>Next Episode</h4>
          <p className="Next_Date">
            {this.state.currentProgram.nextDate}
          </p>
        </div>
      </div>
    );
  }
}
export default ProgramPage;

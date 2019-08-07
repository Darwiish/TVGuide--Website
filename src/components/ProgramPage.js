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
      <duv className="row">
        <div className="col-lg-8" style={{ backgroundColor: "#fff" }}>
          <h3>{this.state.currentProgram.program_name}</h3>
          <p>{this.state.currentProgram.firsDate}</p>
        </div>
        <div className="col-lg-1" />
        <div className="col-lg-3" style={{ backgroundColor: "#fff" }}>
          {/* <h4>FirstDate</h4>
          <p className="job-detail__company-description">
            {this.state.currentProgram.job_area}
          </p>
          <h4>Next Episode</h4>
          <p className="job-detail__company-description">
            {this.state.currentProgram.job_category}
          </p> */}
        </div>
      </duv>
    );
  }
}
export default ProgramPage;

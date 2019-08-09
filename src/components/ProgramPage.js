import React, { Component } from "react";
import axios from "axios";

class ProgramPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrograms: []
    };
  }
  componentDidMount() {
    const URL_PROGRAMS = process.env.REACT_APP_API_PROGRAMS;
    axios.get(URL_PROGRAMS).then(response => {
      console.log(response)
      console.log(response.data.filter(x => x.program_channel == this.props.match.params.chan.toUpperCase()))
      
      this.setState({
        currentPrograms: response.data.filter(x => x.program_channel == this.props.match.params.chan.toUpperCase())
      });
    });

    if (this.props.match.params.chan === "allprograms") {
      axios.get(URL_PROGRAMS).then(response => {
        
        this.setState({
          currentPrograms: response.data
        });
      });
    }
  }

  render() {
    if (this.state.currentPrograms.length) {
      return (
        this.state.currentPrograms.map(x => {
          return (
            <div className="row push-bottom" key={x._id}>
            <div className="col-lg-8" style={{ backgroundColor: "#fff" }}>
              <h3>{x.program_name}</h3>
              <p>{x.program_name}</p>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-3" style={{ backgroundColor: "#fff" }}>
              <h4>FirstDate</h4>
              <p className="First_Date">
                {x.firstDate}
              </p>
              <h4>Next Episode</h4>
              <p className="Next_Date">
                {x.nextDate}
              </p>
            </div>
          </div>
          )
        })
      );
    } else {
      return <div>no program</div>
    }
  }
}
export default ProgramPage;

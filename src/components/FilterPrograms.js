import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Programs = props => (
  <tr>
    <td>{props.Programs.program_name}</td>
    <td>{props.Programs.firstDate}</td>
    <td>{props.Programs.nextDate}</td>
    <td>
      <Link
        to={"/show-program/" + props.Programs._id}
        className="btn btn-primary"
      >
        Details
      </Link>
    </td>
  </tr>
);

class FilterPrograms extends Component {
  constructor(props) {
    super(props);
    this.state = { Programs: [], Noprograms: false };
  }

  componentDidMount() {
    let channel = this.props.match.params.chan;
    switch (channel) {
      case "dr1":
        channel = "DR1";
        break;
      case "dr2":
        channel = "DR2";
        break;
      case "dr3":
        channel = "DR3";
        break;
      case "ramasjang":
        channel = "RAMASJANG";
        break;
      case "Tv3":
        channel = "TV3";
        break;
      case "tv2":
        channel = "TV2";
        break;
      case "kanal5":
        channel = "KANAL5";
        break;
      default:
        channel = "CNN";
    }
    const URL_FILTEREDPROGRAMS = process.env.REACT_APP_API_FILTEREDPROGRAMS;
    axios
      .get(URL_FILTEREDPROGRAMS, {
        params: {
          chan: channel
        }
      })
      .then(response => {
        if (response.data && response.data.length > 0) {
          this.setState({ Programs: response.data });
        } else {
          this.setState({ Nojobs: "Sorry, no programs found" });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  ProgramsList() {
    return this.state.Programs.map(function(currentProgram, i) {
      return <Programs Programs={currentProgram} key={i} />;
    });
  }
  ShowTable() {
    const noprograms = this.state.Noprograms;
    if (!noprograms) {
      return (
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>FirstDate</th>
              <th>NextDate</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.ProgramsList()}</tbody>
        </table>
      );
    }
    return <h1>{this.state.Noprograms}</h1>;
  }

  render() {
    return (
      <div>
        <h3>Program list</h3>
        {this.ShowTable()}
      </div>
    );
  }
}
export default FilterPrograms;

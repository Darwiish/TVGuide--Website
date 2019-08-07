import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Programs = props => (
    <tr>
        <td>{props.programs.program_name}</td>
        <td>{props.programs.firstDate}</td>
        <td>{props.programs.nextDate}</td>
        <td>
            <Link to={"/show-program/" + props.programs._id} className="btn btn-primary">Details</Link>
        </td>
    </tr>
);

class ListOFPrograms extends Component {
    constructor(props) {
        super(props);
        this.state = { programs: [] };
    }

    componentDidMount() {
        const URL_ALLPROGRAMS = process.env.REACT_APP_API_PROGRAMS;
        console.log(URL_ALLPROGRAMS);
        axios
            .get(URL_ALLPROGRAMS)
            .then(response => {
                this.setState({ programs: response.data });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    ProgramsList() {
        return this.state.programs.map(function(currentprogram, i) {
            return <Programs programs={currentprogram} key={i} />;
        });
    }

    render() {
        return (
            <div>


                <h3>Program list</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>FirstDate</th>
                        <th>NextDate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{this.ProgramsList()}</tbody>
                </table>
            </div>
        );
    }
}
export default ListOFPrograms;


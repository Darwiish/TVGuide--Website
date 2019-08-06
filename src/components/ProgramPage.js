import React, { Component } from "react";
import {Link} from "react-router-dom";


class ProgramPage extends Component {
    constructor(props) {
        super(props);
            this.state = {
                currentchan : props.match.params.chan,
                programs: [
                {
                    url: "/northdenmark",
                    name: "DRAMA"
                },
                {
                    url: "/zealand",
                    name: "Zealand"
                },
                {
                    url: "/centraldenmark",
                    name: "Central Denmark"
                },
                {
                    url: "/capitalregion",
                    name: "Capital Region"
                },
                {
                    url: "/southerndenmark",
                    name: "Southern Denmark"
                }
            ] };
        };

    ProgramList() {
        let mk = this.state.currentchan;
        return this.state.programs.map(function(program, i) {
            return <Link to={"/channel/" + mk + program.url}
                         key={i} className="list-group-item list-group-item-action">{program.name}</Link>
        });
    }

    render() {

        return (
            <div>
                <h3>Program list</h3>
                <div className="list-group">
                    {this.ProgramList()}
                </div>
            </div>
        );
    }
}
export default ProgramPage;
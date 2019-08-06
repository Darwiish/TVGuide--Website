import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PostProgram extends Component {
  constructor() {
    super();
    this.state = {
      message: "Loading...",
      auth: false,
      program_name: "",
      firstDate: new Date(),
      nextDate: new Date()
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const URL_REGJOB = process.env.REACT_APP_API_REGISTERJOB;
    const a = this.state;
    axios({
      method: "post",
      url: URL_REGJOB,
      data: JSON.stringify({
        program_name: a.program_name,
        firstDate: new Date(),
        nextDate: new Date()
      }),
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            message: "program stored"
          });
        } else {
          throw new Error(res.error);
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error");
      });
  };
  calculateDaysLeft(firstDate, nextDate) {
    if (!moment.isMoment(firstDate)) firstDate = moment(firstDate);
    if (!moment.isMoment(nextDate)) nextDate = moment(nextDate);

    return nextDate.diff(firstDate, "days");
  }

  ShowProgramPosting() {
    const { firstDate, nextDate } = this.state;
    const daysLeft = this.calculateDaysLeft(firstDate, nextDate);

    if (this.state.auth === true) {
      return (
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Program Name</label>
            <input
              type="text"
              className="form-control"
              name="program_name"
              placeholder="Enter program name"
              value={this.state.program_name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label> Select category </label>
            <select
              value={this.state.job_category}
              className="form-control"
              name="job_category"
              onChange={this.handleInputChange}
            >
              <option value="DR1">DR1</option>
              <option value="DR2">DR2</option>
              <option value="DR3">DR3</option>
              <option value="RAMASJANG">RAMASJANG</option>
              <option value="TV3">TV3</option>
              <option value="TV2">TV2</option>
              <option value="KANAL5">KANAL5</option>
            </select>
          </div>
          <b>First Date</b>:
          <DatePicker
            selected={this.state.firstDate}
            onChange={this.handleChangeFirst}
          />
          &nbsp;&nbsp;&nbsp;
          <b>Next Date</b>:
          <DatePicker
            selected={this.state.nextDate}
            onChange={this.handleChangeNext}
          />
          <div className="amount">{daysLeft}</div>
          <div className="form-group">
            <input
              type="submit"
              value="Create program"
              className="btn btn-primary"
            />
          </div>
          <input
            className="btn btn-primary mb-2"
            type="submit"
            value="Submit"
          />
        </form>
      );
    }
  }

  componentDidMount() {
    const URL_LOGINPAGE = process.env.REACT_APP_API_LOGINPAGE;
    axios
      .get(URL_LOGINPAGE, {
        headers: { "x-access-token": localStorage.getItem("token") }
      })
      .then(response => {
        this.setState({
          message: response.data
        });
        if (response.data === "Success, please post your AD!") {
          this.setState({
            auth: true
          });
        }
      });
  }

  render() {
    return (
      <div>
        <h1>Create new AD</h1>
        <p>{this.state.message}</p>
        <div>{this.ShowProgramPosting()}</div>
      </div>
    );
  }
}

export default PostProgram;

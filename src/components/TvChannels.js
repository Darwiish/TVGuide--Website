import React, { Component } from "react";
import { Link } from "react-router-dom";

class TvChannels extends Component {
    constructor(props) {
        super(props);
        this.state = { channels: [
                {
                    url: "/allprograms",
                    name: "AllPrograms"
                },
                {
                    url: "/dr1",
                    name: "DR1"
                },
                {
                    url: "/dr2",
                    name: "DR2"
                },
                {
                    url: "/dr3",
                    name: "DR3"
                },
                {
                    url: "/ramasjang",
                    name: "RAMASJANG"
                },
                {
                    url: "/tv3",
                    name: "TV3"
                },
                {
                    url: "/tv2",
                    name: "TV2"
                },
                {
                    url: "/kanal5",
                    name: "KANAL5"
                },
               
            ] };
    }
    ChannelList() {
        return this.state.channels.map(function(channel, i) {
            return <Link to={"/channel" + channel.url} key={i} className="list-group-item list-group-item-action">{channel.name}</Link>
        });
    }

    render() {
        return (
            <div>


                <h3>Tv-Channels</h3>
                <div className="list-group">
                    {this.ChannelList()}
                </div>
            </div>
        );
    }
}
export default TvChannels;


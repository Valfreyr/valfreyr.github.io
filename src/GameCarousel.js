import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class MyGames extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      top: "-50px"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "70vh",
      width: "70vh",
      paddingTop: "30px",
      textAlign: "center",
      background: "#0e503f",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div>
        <h1>My Projects</h1>
        <div style={MyGames.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={1000000}>
            {this.getGames()}
          </ReactCardCarousel>
        </div>
      </div>
    );
  }

  getGames = () => {
    if (this.props.games) {
      return this.props.games.map(x => <div style={MyGames.CARD_STYLE}>{x}</div>);
    }
  }
}

export default MyGames
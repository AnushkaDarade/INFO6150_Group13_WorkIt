import React from "react";
class Card extends React.Component {
  render() {
    var name = this.props.id;

    return (
      <div className="card custom-card">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{"This is the " + name + " page"}</p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Card;
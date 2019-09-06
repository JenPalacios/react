import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleclick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    // Because writing every time this.proprs.details.<anything> is quite annoying, the props can be deconstructed like such:
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={this.props.details.name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleclick}>
          {isAvailable ? "Add To Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;

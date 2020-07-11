import React, { Component } from "react";
import "./Dropdown.scss";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true });
  };

  turnOffMenu = (event) => {
    if (this.dropdownMenu && !this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.turnOffMenu);
      });
    }
  };

  render() {
    return (
      <div className="dropdownMenu inventoryCard__removeIcon">
        <button
          className="dropdownMenu__button"
          onClick={this.handleClick}
        ></button>
        {this.state.showMenu ? (
          <section
            className="dropdownMenu__container"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <button
              className="dropdownMenu__remove-button"
              onClick={() => {
                this.props.handleRemove(this.props.inventoryId);
              }}
            >
              Remove
            </button>
          </section>
        ) : null}
      </div>
    );
  }
}

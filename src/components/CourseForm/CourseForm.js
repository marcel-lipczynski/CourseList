import React, { Component } from "react";
import "./CourseForm.css";

class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      description: "",
      rating: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="modal card">
        <div className="modal_content">
          <label htmlFor="name">Course name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </div>
        <div className="modal_actions">
          <button id="cancelButton" onClick={this.props.showModal}>
            Cancel
          </button>
          <button
            id="addButton"
            onClick={() =>
              this.props.addCourse(
                this.state.name,
                this.state.imageUrl,
                this.state.rating,
                this.state.description
              )
            }
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default CourseForm;

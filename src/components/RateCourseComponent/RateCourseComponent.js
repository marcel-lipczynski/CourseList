import React, { Component } from "react";
import "../CourseForm/CourseForm.css";

class RateCourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="modal card">
        <div className="modal_content">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.changeHandler}
          />
        </div>
        <div className="modal_actions">
          <button id="cancelButton" onClick={this.props.showRatingModal}>
            Cancel
          </button>
          <button
            id="addButton"
            onClick={() =>
              this.props.editRating(this.props.currentId, this.state.rating)
            }
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default RateCourseComponent;

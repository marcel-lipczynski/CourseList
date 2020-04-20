import React, { Component } from "react";
import "./CourseItem.css";
import "../../App.css";

class CourseItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="course_element">
        <div className="course_element_image">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="course_element_section">
          <div className="course_element_info">
            <h2>{this.props.name}</h2>
            <p className="description">{this.props.description}</p>
            <p>{this.props.rating}/5 stars</p>
          </div>
          <div className="course_element_action">
            <button
              id="rateButton"
              onClick={() => this.props.rateCourse(this.props.id)}
            >
              Rate
            </button>
            <button
              id="deleteButton"
              onClick={() => this.props.deleteCourse(this.props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default CourseItem;

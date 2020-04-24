import React, { Component } from "react";

class Note extends Component {
  updateTitle = event => {
    let id = this.props.note.id;
    let updatedValue = event.target.value;
    this.props.onType(id, "title", updatedValue);
  };

  updateDescription = event => {
    let id = this.props.note.id;
    let updatedValue = event.target.value;
    this.props.onType(id, "description", updatedValue);
  };

  deleteNote = () => {
    let id = this.props.note.id;
    this.props.onDelete(id);
  };

  render() {
    return (
      <li className="note">
        <input
          onChange={this.updateTitle}
          className="note__title"
          type="text"
          placeholder="Title"
          value={this.props.note.title}
        />
        <textarea
          onChange={this.updateDescription}
          className="note__description"
          placeholder="Description..."
          value={this.props.note.description}
        />
        <span className="note__delete" onClick={this.deleteNote}>
          X
        </span>
      </li>
    );
  }
}

export default Note;

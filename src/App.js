import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };
  componentDidMount() {
    let notesString = localStorage.getItem("notesString");
    if (notesString) {
      let savedNotes = JSON.parse(notesString);
      this.setState({ notes: savedNotes });
    }
  }
  componentDidUpdate() {
    let notesString = JSON.stringify(this.state.notes);
    localStorage.setItem("notesString", notesString);
  }

  newNote = () => {
    let blankNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    let updatedList = [blankNote, ...this.state.notes];
    this.setState({ notes: updatedList });
  };

  onDelete = id => {
    let updatedList = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes: updatedList });
  };

  onType = (id, updatedKey, updatedValue) => {
    let notes = this.state.notes.filter(note => note.id !== id);
    let updated = this.state.notes.filter(note => note.id === id);
    updated[0][updatedKey] = updatedValue;
    let updatedList = [...updated, ...notes];
    this.setState({ notes: updatedList });
  };

  onSearch = e => {
    let searchWord = e.target.value.toLowerCase();

    let searchCallback = note => {
      if (!searchWord) {
        return {
          ...note,
          doesMatchSearch: true
        };
      } else if (
        note.title.toLowerCase().includes(searchWord) ||
        note.description.toLowerCase().includes(searchWord)
      ) {
        return {
          ...note,
          doesMatchSearch: true
        };
      } else {
        return {
          ...note,
          doesMatchSearch: false
        };
      }
    };
    let searchResults = this.state.notes.map(searchCallback);
    this.setState({
      notes: searchResults,
      searchText: searchWord
    });
  };

  render() {
    return (
      <div>
        <Header
          searchText={this.state.searchText}
          newNote={this.newNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}
export default App;

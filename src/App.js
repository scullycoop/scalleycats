import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-field/search-field.component";

import "./App.scss";

import {coolCats} from "./coolCats";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      semester: "",
      members: [],
      searchInput: "",
      sortBy: ""
    };
  }

  componentDidMount() {
    this.setState({
      semester: coolCats[0].semester,
      members: coolCats[0].members,
      searchInput: "",
      sortBy: "alphabetical"
    });
  }

  onSearchChange = (event) => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const filteredCats = this.state.members.filter((member) => (
      member.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
      String(member.name.length).includes(this.state.searchInput.toLowerCase())
    ));

    let filteredAndSortedCats;
    switch(this.state.sortBy) {
      case "alphabetical":
        filteredAndSortedCats = filteredCats.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameLength":
        filteredAndSortedCats = filteredCats.sort((a, b) => a.name.length - b.name.length);
        break;
      default:
        filteredAndSortedCats = filteredCats.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1>ScAlley Cats ({this.state.semester})</h1>
          
          <SearchField onSearchChange={this.onSearchChange} />

          <br />

          {/* Semester Buttons */}
          <ButtonGroup 
            className="button-group"
            size="small"
            color="primary" 
            variant="contained"
            aria-label="outlined primary button group" 
            disableElevation
          >
            <Button 
              onClick={() => 
                this.setState({semester: coolCats[0].semester, members: coolCats[0].members})
              }
            >
              Fall 2018
            </Button>
            <Button 
              onClick={() => 
                this.setState({semester: coolCats[1].semester, members: coolCats[1].members})
              }
            >
              Spring 2019
            </Button>
          </ButtonGroup>

          <br />

          {/* Sort Buttons */}
          <ButtonGroup 
            className="button-group"
            size="small"
            // color="secondary" 
            variant="contained"
            aria-label="outlined primary button group" 
            disableElevation
          >
            <Button onClick={() => this.setState({sortBy: "alphabetical"})}>
              Sort by Name
            </Button>
            <Button onClick={() => this.setState({sortBy: "nameLength"})}>
              Sort by Name Length
            </Button>
          </ButtonGroup>
        </div>

        <CardList members={filteredAndSortedCats} />

      </div>
    );
  }
}

export default App;

import React from "react";
// import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-field/search-field.component";

// import {setSearchField} from "./redux/actions";

import "./App.scss";

import {coolCats} from "./coolCats";

export interface ICat { 
  name: string; 
} 

interface IAppProps {  
} 

interface IAppState {
  semester: string;
  members: Array<ICat>; 
  searchInput: string;
  sortBy: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      semester: "",
      members: [],
      searchInput: "",
      sortBy: ""
    };
  }

  componentDidMount(): void {
    this.setState({
      semester: coolCats[0].semester,
      members: coolCats[0].members,
      searchInput: "",
      sortBy: "alphabetical"
    });
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({searchInput: event.target.value})
  }

  render(): JSX.Element {
    const filteredCats: Array<ICat> = this.state.members.filter((member) => (
      member.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) ||
      String(member.name.length).includes(this.state.searchInput.toLowerCase())
    ));

    let filteredAndSortedCats: Array<ICat>;
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

// const mapStateToProps = (state: any) => ({
//   searchInput: state.searchInput
// })

// const mapDispatchToProps = (dispatch: any) => ({
//   onSearchChange: (event: any) => dispatch(setSearchField(event.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;

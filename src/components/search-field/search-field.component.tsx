import React from "react";

import TextField from "@material-ui/core/TextField";

import "./search-field.styles.scss";

interface ISearchFieldProps {
  setSearchField(event: React.ChangeEvent<HTMLInputElement>): void
}

const SearchField = ({setSearchField}: ISearchFieldProps) => (
  <div className="search-field">
    <TextField 
      id="outlined-basic" 
      label="Search Cats"
      variant="outlined"
      onChange={setSearchField}
    />
  </div>
)

export default SearchField;

import React from "react";

import TextField from "@material-ui/core/TextField";

import "./search-field.styles.scss";

interface ISearchFieldProps {
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void
}

const SearchField = ({onSearchChange}: ISearchFieldProps) => (
  <div className="search-field">
    <TextField 
      id="outlined-basic" 
      label="Search Cats"
      variant="outlined"
      onChange={onSearchChange}
    />
  </div>
)

export default SearchField;

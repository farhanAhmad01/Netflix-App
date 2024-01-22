import React, { useState } from "react";
import { useHistory } from "react-router";

import { FormStyled, InputSearch, SearchBtn } from "./styles/Main.styled";

let movieName;

const SearchBox = () => {
  const [movie, setMovie] = useState("");
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    if (movie.trim() !== "") {
      movieName = movie;
      history.push("/searchmovie");
    }

    setMovie("");
  };

  return (
    <>
      <FormStyled onSubmit={submitHandler}>
        <InputSearch
          type="text"
          autoComplete="off"
          name="search"
          placeholder="Search Movies ..."
          onChange={(e) => setMovie(e.target.value)}
          value={movie}
        />
        <SearchBtn>Search</SearchBtn>
      </FormStyled>
    </>
  );
};

export default SearchBox;
export { movieName };

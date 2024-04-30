import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Container } from "@mui/material";
import Header from "../../components/Header";
import TableList from "../../components/TableList";

import { getGenres, getShowGenres } from "../../utils/api_genres";
import { getShows } from "../../utils/api_shows";

export default function TvShows() {
  const [genre, setGenre] = useState("all"); // store the selected genre by users
  const [sort, setSort] = useState(""); //store the selected sort option by user
  //   useEffect(() => {
  //     // retrieve data from API
  //     getShows(genre, sort).then((data) => {
  //       // when data is received from the API
  //       setRows(data);
  //     });
  //   }, [genre, sort]);

  //   useEffect(() => {
  //     getGenres(type).then((data) => {
  //       setGenres(data);
  //     });
  //   }, []);
  //* retrieve the show list using the getMovies function, which get the data from backend api
  const { data: rows } = useQuery({
    queryKey: ["shows", genre, sort],
    queryFn: () => getShows(genre, sort),
  });

  //* retrieve the genres list using the getGenres function, which get the data from backend api
  const { data: genres } = useQuery({
    queryKey: ["showGenres"],
    queryFn: getShowGenres,
  });
  return (
    <>
      <Header />
      <Container>
        <TableList
          type="shows"
          rows={rows}
          // the list of genres
          genres={genres}
          // the item user selected
          genre={genre}
          setGenre={setGenre}
          sort={sort}
          setSort={setSort}
        />
      </Container>
    </>
  );
}

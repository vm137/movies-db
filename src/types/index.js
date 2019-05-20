// @flow

export type Movie = {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: Array<string>,
  runtime: number,
  limit: number,
  offset: number,
  total: number,
  searchBy: boolean,
  sortBy: boolean
};

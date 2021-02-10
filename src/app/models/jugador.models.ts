// To parse this data:
//
//   import { Convert, JugadorResponse } from "./file";
//
//   const jugadorResponse = Convert.toJugadorResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface JugadorResponse {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id:            number;
  first_name:    string;
  height_feet:   number | null;
  height_inches: number | null;
  last_name:     string;
  position:      string;
  team:          Team;
  weight_pounds: number | null;
}

export interface Team {
  id:           number;
  abbreviation: string;
  city:         string;
  conference:   Conference;
  division:     string;
  full_name:    string;
  name:         string;
}

export enum Conference {
  East = "East",
  West = "West",
}

export interface Meta {
  total_pages:  number;
  current_page: number;
  next_page:    number;
  per_page:     number;
  total_count:  number;
}

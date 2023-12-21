import { fetchJSON } from "../include/fetchJSON.js";

export interface GeoCoord {
  lat: number;
  lon: number;
}

export function fetchGeoCoord(query: string): Promise<GeoCoord> {
  // TODO
  return new Promise(res => res({ lat: NaN, lon: NaN }));
}
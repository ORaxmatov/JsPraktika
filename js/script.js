"use strict"
const numberOfSeries = +prompt("Nechta serial Ko'rdingiz?", "");

const seriesDB = {
  count : numberOfSeries,
  series : {},
  actors : {},
  genres : [],
  privat : false,

}

const a = prompt("Oxirgi ko'rgan serailnigiz?");
const b = prompt("Nechi baho berasiz?");
const c = prompt("Oxirgi ko'rgan serailnigiz?");
const d = prompt("Nechi baho berasiz?");
 seriesDB.series[a] = b;
 seriesDB.series[c] = d;
 
 console.log(seriesDB);


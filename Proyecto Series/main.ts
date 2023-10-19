import { Serie } from "./Serie";

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avrgTemps: HTMLElement = document.getElementById("promedio-temporadas")!;

renderSeriesInTable(series);

avrgTemps.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

  const average = getAverageSeasons(series);

  let promedio = document.createElement("tr");
  promedio.innerHTML = `<td colspan="3">Promedio Temporadas: ${average}</td>`;
  seriesTbody.appendChild(promedio);
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
    let numberSeries: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    series.forEach((serie) => numberSeries = numberSeries + 1);
    return totalSeasons;
}


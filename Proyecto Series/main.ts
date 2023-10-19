import { Serie } from "./Serie";

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(serie => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

  function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let numberSeries: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    series.forEach((serie) => numberSeries = numberSeries + 1);
    return totalSeasons;
  }
}
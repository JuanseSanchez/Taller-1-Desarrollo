import { series } from './data.js';
let seriesTbody = document.getElementById('series');
const avrgTemps = document.getElementById("average-seasons");
renderSeriesInTable(series);
avrgTemps.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td class="show-card">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
    const average = getAverageSeasons(series);
    let promedio = document.createElement("tr");
    promedio.innerHTML = `<td colspan="3">Average Seasons: ${average}</td>`;
    seriesTbody.appendChild(promedio);
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    let numberSeries = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
        numberSeries = numberSeries + 1;
    });
    if (numberSeries === 0) {
        return 0; // Avoid division by zero if there are no series
    }
    let average = totalSeasons / numberSeries;
    return average;
}

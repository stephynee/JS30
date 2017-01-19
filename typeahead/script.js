(function() {

  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  const cities = [];

  var searchInput = document.querySelector('.search'),
      suggestions = document.querySelector('.suggestions');

  fetch(endpoint)
  .then(data => data.json())
  .then(data => cities.push(...data));

  function match(word, cities) {
    if(word !== '') {
      return cities.filter(place => {
        var regex = new RegExp(word, 'gi');
        return place.city.match(regex) || place.state.match(regex);
      });
    }
  }

  function display() {
    const matches = match(this.value, cities);
    const html = matches.map(place => {
      var regex = new RegExp(this.value, 'gi');
      var city = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      var state = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

      return `
        <li>
          <span class="name">${city}, ${state}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  searchInput.addEventListener('keyup', display);

}());

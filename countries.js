const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join();
    console.log(countryHTML)
    }
    const getCountryHTML = country =>{
        return `
        <div class="country">
        <h2>${country.name}</h2>
        <h4>Capial:${country.capital}</h4>
        <img src="${country.flag}">
        </div>
        `
}

loadCountries();
const search = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
let dataSearch;
searchBtn.addEventListener('click', async() => {
    dataSearch = await getResults()
    displayResults()
})

clearBtn.addEventListener('click', function(){
    search.value = ''
})

const getResults = async() =>{
    const response = await fetch("travel_recommendation_api.json")
    const json = await response.json()
    return json
}

function displayResults() {
    let displayInfo = [];
  
    if (search.value.toLowerCase() === 'countries') {
      for (let country of dataSearch['countries']) {
        displayInfo = displayInfo.concat(country.cities.map(city => {
          const { description, imageUrl, name } = city;
          return `
            <div class="glass-container">
                <div class="info-card">
                <img src="${imageUrl}" alt="image of ${name}"/>
                <h3>${name}</h3>
                <p>${description}</p>
                </div>
            </div>
          `;
        }));
      }
      document.getElementById("search-results").style.display = "flex"
      document.getElementById("search-results").innerHTML = displayInfo.join('');
    }

    else if(search.value.toLowerCase() == "temples"){
        displayInfo = dataSearch["temples"].map(temple =>{
            const { description, imageUrl, name } = temple;
          return `
          <div class="glass-container">
                <div class="info-card">
                <img src="${imageUrl}" alt="image of ${name}"/>
                <h3>${name}</h3>
                <p>${description}</p>
                </div>
            </div>
          `
        })
        document.getElementById("search-results").style.display = "flex"
      document.getElementById("search-results").innerHTML = displayInfo.join('');
    }

    else if(search.value.toLowerCase() == "beaches"){
        displayInfo = dataSearch["beaches"].map(beach =>{
            const { description, imageUrl, name } = beach;
          return `
          <div class="glass-container">
                <div class="info-card">
                <img src="${imageUrl}" alt="image of ${name}"/>
                <h3>${name}</h3>
                <p>${description}</p>
                </div>
            </div>
          `
        })
        document.getElementById("search-results").style.display = "flex"
      document.getElementById("search-results").innerHTML = displayInfo.join('');
    }

    else{
        displayInfo = `<h4>Error, please search for "countries", "temples", or "beaches"`
        document.getElementById("search-results").style.display = "flex"
        document.getElementById("search-results").innerHTML = displayInfo;
    }
  }
const getInfoButton = document.getElementById("getInfoButton");
const charactersContainer = document.getElementById("charactersContainer");
const getPlanetsButton = document.getElementById("getPlanetsButton");
const planetsContainer = document.getElementById("planetsContainer");

let currentPlanetsPage = 1;

getInfoButton.addEventListener("click", () => {
    const filmNumber = 2;
    const apiUrl = `https://swapi.dev/api/films/${filmNumber}/`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const characters = data.characters;
            charactersContainer.innerHTML = "";

            characters.forEach((characterUrl) => {
                fetch(characterUrl)
                    .then((response) => response.json())
                    .then((characterData) => {
                        const name = characterData.name;
                        const birthYear = characterData.birth_year;
                        const gender = characterData.gender;
                        const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${extractCharacterId(characterUrl)}.jpg`;

                        const characterInfo = document.createElement("div");
                        characterInfo.innerHTML = `
                            <h2>${name}</h2>
                            <p><strong>Birth Year:</strong> ${birthYear}</p>
                            <p><strong>Gender:</strong> ${gender}</p>
                            <img src="${imageUrl}" alt="${name}">
                        `;

                        charactersContainer.appendChild(characterInfo);
                    });
            });
        })
        .catch((error) => {
            charactersContainer.innerHTML = "Error fetching data.";
        });
        const planetsContainer = document.getElementById("planetsContainer");
        planetsContainer.innerHTML = "";
        filmsContainer.innerHTML = "";
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("resetButton").style.display = "block";
});

getPlanetsButton.addEventListener("click", () => {
    const apiUrl = `https://swapi.dev/api/planets/?page=${currentPlanetsPage}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const planets = data.results;
            planetsContainer.innerHTML = "";

            planets.forEach((planetData) => {
                const name = planetData.name;
                const population = planetData.population;
                const climate = planetData.climate;
                const terrain = planetData.terrain;

                const planetInfo = document.createElement("div");
                planetInfo.innerHTML = `
                    <h2>${name}</h2>
                    <p><strong>Population:</strong> ${population}</p>
                    <p><strong>Climate:</strong> ${climate}</p>
                    <p><strong>Terrain:</strong> ${terrain}</p>
                `;

                planetsContainer.appendChild(planetInfo);
            });
            document.getElementById("nextButton").style.display = "block";
            document.getElementById("resetButton").style.display = "block";
        })
        .catch((error) => {
            planetsContainer.innerHTML = "Error fetching data.";
    });
    const charactersContainer = document.getElementById("charactersContainer");
    charactersContainer.innerHTML = "";
    filmsContainer.innerHTML = "";
});

function getNextPlanets() {
    document.getElementById("getPlanetsButton").click();
    currentPlanetsPage++;
    document.getElementById("resetButton").style.display = "block";
}

function extractCharacterId(url) {
    const idRegExp = /\/(\d+)\/$/;
    return url.match(idRegExp)[1];
}

function getFilmInformation() {
    const filmNumber = document.getElementById("filmNumber").value;
    const apiUrl = `https://swapi.dev/api/films/${filmNumber}/`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const filmInfo = data;
        const filmsContainer = document.getElementById("filmsContainer");
        filmsContainer.innerHTML = `
          <h2>${filmInfo.title}</h2>
          <p>Episode: ${filmInfo.episode_id}</p>
          <p>Director: ${filmInfo.director}</p>
          <p>Release Date: ${filmInfo.release_date}</p>
          <p>Opening Crawl:</p>
          <p>${filmInfo.opening_crawl}</p>
        `;

        document.getElementById("nextButton").style.display = "none";
        document.getElementById("resetButton").style.display = "block";
      })
      .catch(error => {
        const filmsContainer = document.getElementById("filmsContainer");
        filmsContainer.innerHTML = "Error fetching film information.";
      });

    const charactersContainer = document.getElementById("charactersContainer");
    charactersContainer.innerHTML = "";
    const planetsContainer = document.getElementById("planetsContainer");
    planetsContainer.innerHTML = "";
}

function resetData() {
    const charactersContainer = document.getElementById("charactersContainer");
    charactersContainer.innerHTML = "";

    const planetsContainer = document.getElementById("planetsContainer");
    planetsContainer.innerHTML = "";

    const filmsContainer = document.getElementById("filmsContainer");
    filmsContainer.innerHTML = "";

    document.getElementById("nextButton").style.display = "none";
    document.getElementById("resetButton").style.display = "none";
}
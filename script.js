'use strict';

/* ----- Deklarerar klasser och ID från HTML -----*/
const nextCountry = document.querySelector('#next-btn');
const prevCountry = document.querySelector('#previous-btn')
const uList = document.querySelector('#cycleCountry');
const addNewCountry = document.querySelector('#addCountry-btn');
const pickCountry = document.querySelector('#countryPickList');
let liElement = document.createElement('li')



/*-----Objekt med arrayer som består av information om ett land -----*/
const countryInfo = [
    {
        Country: 'Sweden',
        Capital: 'Stockholm',
        Population: 10500000,
        Continent: 'Europe',
        Democracy: 'Yes',
    },
    {
        Country: 'Norway',
        Capital: 'Oslo',
        Population: 5400000,
        Continent: 'Europe',
        Democracy: 'Yes',
    },
    {
        Country: 'China',
        Capital: 'Beijing',
        Population: 1402000000,
        Continent: 'Asia',
        Democracy: 'No',
    },
]

// TODO: Låt inte användaren submitta ett tomt formulär

const addCountryFunc = function (e) {
    e.preventDefault();
    let newCountryInfo = {
        Country: document.querySelector('#countryName').value,
        Capital: document.querySelector('#countryCapital').value,
        Population: document.querySelector('#countryPopulation').value,
        Continent: document.querySelector('#continent').value,
        Democracy: document.querySelector('#democracy').value,
    }
    countryInfo.push(newCountryInfo);
    document.forms[0].reset(); // Nollställer formuläret efter man har submittat
};

/*----- Skickar in userinput som ett objekt in i arrayen genom addCountryFunc -----*/
addNewCountry.addEventListener('click', addCountryFunc);


/*----- Skickar in userinput som ett objekt in i arrayen genom addCountryFunc -----*/
// TODO: Måste klicka två gånger när jag vill byta håll. Reverse array kanske?
let i = 0;
nextCountry.addEventListener('click', function () {
    if (i > countryInfo.length - 1) {
        return false; //Denna ser till att man startar om när man når slutet på arrayen.
    }
    uList.textContent = ''; // Nollställer listan, annars läggs nästa land i en lista under
    document.querySelector('#welcome-msg').textContent = '';
    for (const [key, value] of Object.entries(countryInfo[i])) {
        let liElement = document.createElement('li');
        uList.append(liElement);
        liElement.textContent = [`${key}: ${value}`];
    }
    i++
});


prevCountry.addEventListener('click', function () {
    if (i === 0) {
        return false;
    }
    i--
    uList.textContent = '';
    for (const [key, value] of Object.entries(countryInfo[i])) {
        let liElement = document.createElement('li');
        uList.append(liElement);
        liElement.textContent = [`${key}: ${value}`];
    }
});


onload = (event) => {
    countryInfo.map(function (mapCountry) {
        let liElement = document.createElement('li');
        let btnInfo = document.createElement('button');
        pickCountry.append(liElement);
        pickCountry.append(btnInfo);
        liElement.textContent = mapCountry.Country;
        btnInfo.textContent = 'Go to';
    })
};
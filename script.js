const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchtxt');
let hpCharacters = [];
const searchbtn=document.getElementById('searchbtn');
searchBar.addEventListener('keyup',(e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
}) ;

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        console.log(hpCharacters);
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error("undefined");
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
           
            <li class="character">
                <div class="container-1">
                <h2>${character.name}</h2>
                    <div class="row-1">
                        <div class="col-sm-4 col-md-4 col-lg-4">
                            <img src="${character.image}"></img>
                        </div>
                        <div class="col-sm-8 col-md-8 col-lg-8">
                            <div id="content"><b>House:</b> ${character.house}</div>
                            <div id="content"><b>Date of Birth:</b> ${character.dateOfBirth}</div>
                            <div id="content"><b>Gender:</b> ${character.gender}</div>
                            <div id="content"><b>Hair Colour:</b> ${character.hairColour}</div>
                            <div id="content"><b>Eye Colour:</b> ${character.eyeColour}</div>
                            <div id="content"><b>Hogwarts staff:</b> ${character.hogwartsStaff}</div>
                            <div id="content"><b>Hogwarts Student:</b> ${character.hogwartsStudent}</div>
                            <div id="content"><b>Wizard:</b> ${character.wizard}</div>
                            <div id="content"><b>Wand:</b> ${character.wand}</div>
                            <div id="content"><b>Species:</b> ${character.species}</div>
                            <div id="content"><b>Ancestry:</b> ${character.ancestry}</div>
                            <div id="content"><b>Wizard:</b> ${character.patronous}</div>
                            <div id="content"><b>Year of Birth:</b> ${character.yearOfBirth}</div>
                            <div id="content"><b>Alive:</b> ${character.alive}</div>
                            <div id="content"><b>Actor Name:</b> ${character.actor}</div>
                        </div>
                    </div>
                </div>            
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

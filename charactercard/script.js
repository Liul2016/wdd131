/*
Note: I wanted to make this dynamic using skills that we learned
previously in this course. It would be very easy to define another
character object and then call the createCharacterCard function to
create a new card for that character. It would also not be difficult
to use object oriented programming to create a Character class and 
then create multiple character objects from that class, each inheriting
the same methods and settable properties. Then I could put the character
objects into an array and loop through the array to create a card for
each character. For this project though, I followed the instructions to
create a single character card for a single character object, while
setting it up in a way that would make the stated improvements easy to
implement in the future. I just wanted to explain why I have things like:

newChar.querySelector('.attacked').addEventListener('click', () => {
    character.attacked();
    updateStats(character);
});

This will add the event listener to any character card that could be
dynamically created, so that the buttons will work for any character
rather than working for just the single character that is currently there.
I haven't looked ahead to see if we will be implementing this in a future
assignment, but I still wanted to set this up how I normally would if I
were creating a full version of this project, just for good practice.
*/

const main = document.querySelector('main');

const snort = {
    name: "Snortleblat",
    id: "snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/snortleblat.webp",

    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                alert("Character Died!");
            }
        } else {
            alert("Cannot attack a dead character!");
        }
    },

    addLevel: function() {
        if (this.health > 0) {
            this.level++;
        } else {
            alert("Cannot level up a dead character!");
        }
    }
};

function createCharacterCard(character) {
    const newChar = document.createElement('div');
    main.appendChild(newChar);
    newChar.classList.add('card');
    newChar.id = character.id;
    
    newChar.innerHTML = `
    <img class="image" src="${character.image}" alt="${character.name}">
    <h1 class="name">${character.name}</h1>
    <div class="stats">
        <p class="class">${character.class}</p>
        <p class="level"></p>
        <p class="health"></p>
    </div>
    <div class="buttons">
        <button class="attacked">Attacked</button>
        <button class="levelUp">Level Up</button>
    </div>
    `;

    newChar.querySelector('.attacked').addEventListener('click', () => {
        character.attacked();
        updateStats(character);
    });

    newChar.querySelector('.levelUp').addEventListener('click', () => {
        character.addLevel();
        updateStats(character);
    });
}

function updateStats(character) {
    const card = document.getElementById(character.id);

    card.querySelector(".level").textContent = `Level: ${character.level}`;
    card.querySelector(".health").textContent = `Health: ${character.health}`;
}

createCharacterCard(snort);
updateStats(snort);
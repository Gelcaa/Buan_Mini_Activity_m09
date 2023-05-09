//initialize/add the following trainer object properties
const pokemonTrainers = {
  name: "Misty",
  age: 10,
  pokemon: ["Gyarados", "Corsola", "Staryu"],
  friends: { Ash: ["Pokemon", "Charizard"],
            Tracey: ["Marill", "Scyther"]
    },
  // Initialize/add the trainer object method named talk that prints out the message Pikachu! I choose you!
    talk: function () {
        console.log("Pikachu! I choose you!");
    }
};
//Access the trainer object properties using square bracket notation 
console.log(`The Pokemon Trainer is ${pokemonTrainers['name']}`); 
console.log(`With an age of ${pokemonTrainers['age']} yrs old`); 
console.log(`Pokemons are ${pokemonTrainers['pokemon']}`);
//Access the trainer object properties using dot notation
console.log(`Ash's Pokemon: ${pokemonTrainers.friends.Ash}`);
console.log(`Tracey's Pokemon: ${pokemonTrainers.friends.Tracey}`);
//Invoke/call the trainer talk object method.
pokemonTrainers.talk()

//  Create a constructor for creating a pokemon
function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = 2 * level;
    this.attack = level; 

    this.tackle = function (target) {
        health = target.health - this.attack; 
        console.log(`${this.name} attacks ${target.name}`);
        console.log(`attack damage is ${this.attack}`);
           console.log(`${target.name}'s health is now ${health}`);
        if (health <= 0) {
            target.faint();
        }
    }
    this.faint = function() {
    console.log(this.name + " has fainted.");
  };
}

// Create/instantiate several pokemon object from the constructor with varying name and level properties.
const staryu = new Pokemon("Staryu", 7);
const pikachu = new Pokemon("Pikachu", 10);




document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("myButton");
  myButton.addEventListener("click", () => {
    pikachu.tackle(staryu);
  });
});




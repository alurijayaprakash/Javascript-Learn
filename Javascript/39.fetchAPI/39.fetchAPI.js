

// const fs = require('fs').promises;

// async function readFromFile() {
//   try {
//     const data = await fs.readFile('./39.fetchAPI/sample.txt', 'utf-8');
//     console.log('File contents:', data);
//   } catch (error) {
//     console.error('Error reading the file:', error);
//   }
// }

// readFromFile();
// ------------------------------------------------------------



// Reference : https://youtu.be/670f71LTWpM

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

const fetchPokemon = async (id) => {
    // id is the input to arrow func
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err)
    }

}

fetchPokemon(2);
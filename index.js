// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//         .then(response => 
//                 {
//                         if (!response.ok){
//                                 throw new Error("Could not fetch response");
//                         }
//                         return response.json();
//                 })
//         .then(data => console.log(data))
//         .catch(error => console.error(error))
// ;

async function fetchData() {
        try {
            const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
    
            if (!pokemonName) {
                alert("Please enter a Pokémon name!");
                return;
            }
    
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
    
            const data = await response.json();
            console.log(data); 
    
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
    
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } catch (error) {
            console.error(error);
            alert("Pokémon not found! Please check the name and try again.");
        }
    }
    

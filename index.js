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
            const pokemonCard = document.getElementById("pokemonCard");
            const loadingIndicator = document.getElementById("loading");
    
            if (!pokemonName) {
                alert("Please enter a Pokémon name!");
                return;
            }
    
            // Show loading indicator & hide previous result
            loadingIndicator.classList.remove("hidden");
            pokemonCard.classList.add("hidden");
    
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
            if (!response.ok) {
                throw new Error("Could not fetch resource");
            }
    
            const data = await response.json();
            console.log(data);
    
            const pokemonSprite = data.sprites.front_default;
            const pokemonType = data.types.map(type => type.type.name).join(", ");
    
            // Update the UI
            document.getElementById("pokemonSprite").src = pokemonSprite;
            document.getElementById("pokemonTitle").textContent = data.name.toUpperCase();
            document.getElementById("pokemonType").textContent = `Type: ${pokemonType}`;
    
            // Hide loading & show card
            loadingIndicator.classList.add("hidden");
            pokemonCard.classList.remove("hidden");
    
        } catch (error) {
            console.error(error);
            alert("Pokémon not found! Please check the name and try again.");
        }
    }
    
    

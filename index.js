async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();
        const pokemonCard = document.getElementById("pokemonCard");
        const loadingIndicator = document.getElementById("loading");

        if (!pokemonName) {
            alert("Please enter a Pokémon name!");
            return;
        }

        // Show loading, hide card
        loadingIndicator.classList.remove("hidden");
        pokemonCard.classList.add("hidden");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Pokémon not found!");

        const data = await response.json();

        // Set values
        document.getElementById("pokemonSprite").src = data.sprites.front_default;
        document.getElementById("pokemonTitle").textContent = data.name;
        document.getElementById("pokemonId").textContent = `#${data.id.toString().padStart(3, '0')}`;

        const typeContainer = document.getElementById("typeContainer");
        typeContainer.innerHTML = ''; // clear previous
        data.types.forEach(t => {
            const badge = document.createElement("span");
            badge.textContent = t.type.name;
            typeContainer.appendChild(badge);
        });

        loadingIndicator.classList.add("hidden");
        pokemonCard.classList.remove("hidden");
    } catch (error) {
        console.error(error);
        alert("Pokémon not found! Please check the name and try again.");
        document.getElementById("loading").classList.add("hidden");
    }
}

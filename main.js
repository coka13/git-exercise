let imgSrc = "";
const div = document.createElement("div")
const makeRequest = document.querySelector(".request");

const getPokemon = async (url) => {
    try {
        div.innerHTML=""
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        imgSrc = data.sprites.front_default;
        const img = document.createElement("img");
        img.src = imgSrc;
        div.appendChild(img);
        makeRequest.disabled=false
    } catch (error) {
        console.error("Error fetching Pokemon data:", error);
    }

};


makeRequest.addEventListener("click", (e) => {
    makeRequest.disabled=true
    const pokemon_id = Math.floor(Math.random() * 898);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`;
    getPokemon(url);
});
document.body.appendChild(div)

const changeStyle=document.querySelector(".style");
changeStyle.addEventListener("click",(e)=>{
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16)
    console.log("#"+Math.floor(Math.random()*16777215).toString(16))
})
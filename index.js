import {city} from "./city.js";


let localitiesContainerEl=document.querySelector(".localities_container")


let htmllocalitiesList=city.map((el)=>{
    return `
    <div class="localities_list">
    <div class="localities_card">
    <h3>${el.name}</h3>
    <p>${el.place}places</p>
    </div>
    <i class="fa-solid fa-angle-right"></i>
    </div>
    `

}).join("")


localitiesContainerEl.innerHTML=htmllocalitiesList
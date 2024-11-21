import toqueImg from "./img/toque_icon.png"
import ingredientImg from "./img/ingredients_icon.png"
import experienceImg from "./img/experience_icon.png"

export function renderHome() {
    const mainContent = document.querySelector("#content")
    mainContent.innerHTML = `<div class="description">
            <h1>Sanji's all blue restaurant</h1>
            <p class="description-txt">
                This is the restaurant created by Sanji's after descovering All blue when touring the worl with the greatest pirate of all times : <span>Monkey D. Luffy.</span>
                It is composed of the most incredible ingredients to bring the most awesome dishes you will ever dream about.
            </p>
            <button>Discover our menu</button>
        </div>
        <div class="experience">
            <h2>A culinary adventure </h2>
            <h4>Discover the wonders of all blue</h3>
            <div class="experience-d">
                <div class="experience-c chef">
                    <h5>Master Chief Sanji</h5>
                    <p>Trained in the well known Barati restaurant, bringing you the finest culinary creations</p>
                </div>
                <div class="experience-c ingredient">
                    <img src="./img/ingredients_icon.png" alt="">
                    <h5>Rare ingredients</h5>
                    <p>Featuring the most exotic ingredients which weren't even used on Big mom's reverie</p>
                </div>
                <div class="experience-c unique">
                    <img src="./img/experience_icon.png" alt="">
                    <h5>A unique experience</h5>
                    <p>Every dishes tells a story like Usopp could never</p>
                </div>
            </div>
        </div>` 

    const chefContentImg = document.querySelector(".chef");
    const imgChef = document.createElement("img")
    imgChef.src = toqueImg
    chefContentImg.prepend(imgChef)

    const ingredientContentImg = document.querySelector(".ingredient");
    const imgIngredient = document.createElement("img")
    imgIngredient.src = ingredientImg
    ingredientContentImg.prepend(imgIngredient)

    const experienceContentImg = document.querySelector(".unique");
    const imgExperience = document.createElement("img")
    imgExperience.src = experienceImg
    experienceContentImg.prepend(imgExperience)
}

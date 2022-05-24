const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");
const catImage = document.getElementById("cat");

const gatCats = async () => {
    const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e));

    return data.webpurl;
}

const loadImage = async () =>{
    catImage.src = await gatCats();
}

catBtn.addEventListener('click', loadImage);

loadImage();




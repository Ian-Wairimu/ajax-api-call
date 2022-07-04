const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo() {
   fetch(BREEDS_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const img = document.createElement('img')
        img.src = data.message
        img.alt = "cute doggo";
    
        document.querySelector(".doggos")
        .appendChild(img    )
    })
}
document.querySelector(".add-doggo").addEventListener('click', addDoggo)


const main_image=document.querySelector(".main_column"),
    selectImage=main_image.querySelector("img");

const changeImage=document.querySelector(".footer_column"),
    changeImage1=changeImage.querySelector("img");



function chImg(){
    selectImage.src="image/1.jpg";
    console.log(changeImage1);
}

function init(){
    changeImage1.addEventListener('click',chImg);
}


init();
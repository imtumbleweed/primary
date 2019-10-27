const firstPopup = document.getElementById("firstPopup");
const secondPopup = document.getElementById("secondPopup");

//buttons
const openPopup = document.getElementById("openPopup");
const tweet = document.getElementById('tweet');
const closeSpan = document.getElementsByClassName("close")[0];
const yesButton = document.getElementsByClassName('yes')[0];
const noButton = document.getElementsByClassName('no')[0];

openPopup.addEventListener('click', ()=>{
    firstPopup.style.display = "block";
})

tweet.addEventListener('click', ()=>{
    firstPopup.style.display = 'none';
});

closeSpan.addEventListener('click', ()=>{
    secondPopup.style.display = "block";
})

yesButton.addEventListener('click', ()=>{
    secondPopup.style.display ='none';
    firstPopup.style.display = 'none';
})

noButton.addEventListener('click', ()=>{
    secondPopup.style.display ="none";
})

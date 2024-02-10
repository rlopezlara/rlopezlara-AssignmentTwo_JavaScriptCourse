// constants for query selector
var pageBg = document.querySelector("html");
var studentId = document.querySelector("#myStudentId");
var customColorB = document.querySelector('.custColor');
var randomColorB = document.querySelector('.randColor');
var indexNumber = document.querySelector('#customNumber');
var reStartButton = document.querySelector('.reStart'); // addition button for refresh the page.
 
 
// function to change bg color from user input and add student id
function changeCustomColor() {
    var getIndex = indexNumber.value;  
      
    if(getIndex >= 0 && getIndex <= 20){
        pageBg.style.backgroundColor = "green";
    }else if(getIndex >= 21 && getIndex <= 40){
        pageBg.style.backgroundColor = "blue";
    }else if(getIndex >= 41 && getIndex <= 60){
        pageBg.style.backgroundColor = "orange";
    }else if(getIndex >= 61 && getIndex <= 80){
        pageBg.style.backgroundColor = "purple";
    }else if(getIndex >= 81 && getIndex <= 100){
        pageBg.style.backgroundColor = "yellow";
    }else {
        pageBg.style.backgroundColor = "red";
    }   
    // adding studing information in P
    studentId.textContent ="My student Number is: 200549271";
}

// function to change bg color from random no.
function changeRandomColor() {
    // random function 
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    
    indexNumber.value = randomNumber;
    // using subfuntion changeCustumColor, giving the argument numberRandom
    changeCustomColor(randomNumber);
}

// setting up image element from html
var selectImg = document.querySelector('#imageSelect');

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    var imgArraySrc = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg", "./img/img4.jpg", "./img/img5.jpg"];
// adding the condition that list length do be more than the options
    if(selectImg.length !== 6){
        i=1;// seting the count for save the name on the list
        for(let img in imgArraySrc){
            var addOption = document.createElement('option');
            addOption.textContent = `Image N ${i}`;
            addOption.value = imgArraySrc[img]; //adding the path
            selectImg.appendChild(addOption); 
            i++;
        }
    }  
}

// function to change image

var showImg = document.querySelector('#images');

function changeImage() {
// src "./img/img1.jpg"
// adding path at the attribute scr
showImg.setAttribute('src',selectImg.value);
//catching the image name to add at ALT
var title = selectImg.value.slice(6,10).toUpperCase(); 
// console.log(title);
// adding path at the attribute alt
showImg.setAttribute('alt',title);
 
}
// additional function to restart the page
function refreshPage(){
    location. reload();
}

// event listeners for on click event of buttons and select
customColorB.addEventListener("click",changeCustomColor);
randomColorB.addEventListener("click",changeRandomColor);
selectImg.addEventListener("click",addList);
// event listeners for on change event of select
selectImg.addEventListener("change", changeImage);

// event listeners for start button
reStartButton.addEventListener("click",refreshPage);
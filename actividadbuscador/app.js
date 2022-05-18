//Variables

const formSR = document.querySelector('#form-Search');
const inputName = document.querySelector('#inputName');
const inputLocation = document.querySelector('#inputLocation');
const inputGenre = document.querySelector('#inputGenre');

const boxRadio =  document.querySelector('#box-radio');

const searchData = {
    name: '',
    location: '',
    genre: '',
}

document.addEventListener('DOMContentLoaded',() => {
    showHTML(radioS);

})


formSR.addEventListener('submit',(e)=> {
    e.preventDefault();

    searchData.name = inputName.value.toLowerCase();
    searchData.location = inputLocation.value;
    searchData.genre = inputGenre.value;

    console.log(searchData)

    fRadioS();

    formSR.reset();
});
/*
function showHTML(radio){
    radio.forEach(radio => {
        console.log(radio.name)
    }); } 

    function showHTML(radio){
    radio.forEach(radio => {
       const{name, location, genre, img} = radio;
    console.log(name);
    console.log(location);
    console.log(genre);
     });
}
*/
function showHTML(radioS){
    radioS.forEach(radio => {
       const{name, location, genre, image, web} = radio;
        
       const cardRadio = document.createElement('div');
       cardRadio.classList.add('col','mb-3','d-flex');
    cardRadio.innerHTML = `
    <div class="card rounded-3 py-0 px-0 mx-5 my-2 bg-secondary w-50">
            <img src="${image}" alt="" class="img d-flex w-70 rounded-3 m-1">
            <div class="card-body text-white">
                <p class="card-text mb-0 py -2 text-capitalize">${name}</p>
                <p class="card-text mb-0 py -0 text-capitalize">${location}</p>
                <p class="card-text mb-0 py -0 text-capitalize">${genre}</p>
                <p class="card-text mb-0 py -0 text-capitalize">URL:</p>
                <a class="card-text mb-0 py -0 link-dark text-capitalize"  href="${web}" target="_blank">Go To ${name}</a>
            </div>
        </div>
        `

     boxRadio.appendChild(cardRadio);

     });
 
}

function fRadioS(){

    cleanHTML();

    const result = radioS.filter( fName ).filter( fLocation ).filter( fGenre );
    
    if(result.length){
        showHTML(result)
    }else{
        noResult('No match');
    }

    const content = Object.values(searchData).filter( (e) => e );
    
    if(content.length){
        showHTML(result)
    }else{
        noResult('Modify Search');
    }
}

function noResult(message){
    cleanHTML();
    const noResult = document.createElement('div');
    noResult.classList.add('bg-danger','text-white','border-danger','p-4','text-center')
    noResult.textContent = message;

    boxRadio.parentElement.appendChild(noResult);
}

function cleanHTML(){
    while(boxRadio.firstChild){
        boxRadio.firstChild.remove();
    }
}


function fName (radio){
    const {name} = searchData;
    if(name){
        return radio.name == name;
    }
    return radio;
}

function fLocation(radio){
    const {location} = searchData;
    if(location){
        return radio.location == location;
    }
    return radio;
}
function fGenre(radio){
    const {genre} = searchData;
    if(genre){
        return radio.genre == genre;
    }
    return radio;
}
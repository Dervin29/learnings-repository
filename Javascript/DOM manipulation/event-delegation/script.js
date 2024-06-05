

// document.querySelector("#football").addEventListener('click', function(e){
//     console.log("football was clicked");

//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

// document.querySelector("#cricket").addEventListener('click', function(e){
//     console.log("cricket was clicked");

//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

// document.querySelector("#boxing").addEventListener('click', function(e){
//     console.log("boxing was clicked");

//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// })

//event delegation:

document.querySelector("#sports").addEventListener('click',function(e){
    console.log(e.target.getAttribute('id')+ ' is clicked');
    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

//adding a new element
//selecting the id of parent node
const sport = document.querySelector("#sports");
//creating a element using createElement()
const newSport = document.createElement('li');
//modifying the text using innerText
newSport.innerText = "basketball";
//setting id for the new element
newSport.setAttribute('id', "basketball");
//appending it to the parent node
sport.appendChild(newSport);

let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container");


//event listeners for open and close
openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});


// Assuming modalContainer is defined and references the modal container element
window.addEventListener('click', function(e){

    // If the clicked element is outside of the modal container, close the modal
    if(e.target === modalContainer){
        modalContainer.style.display = 'none';
        console.log('clicked');
    }
});

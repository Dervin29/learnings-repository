 
 //selecting element using querySelector()
 const revealBtn = document.querySelector('.reveal-btn');
 const hiddenContent = document.querySelector('.hidden-content');

 //function for revealing  the hidden content
 function revealContent () {
    //checking whether the hidden content contains class reveal btn
    if(hiddenContent.classList.contains('reveal-btn')){
        //if yes remove the reveal btn to hide cnt
        hiddenContent.classList.remove('reveal-btn');
        console.log('remove');    }
    else{
        //else adds the reveal btn to show content
        hiddenContent.classList.add('reveal-btn');
        console.log('show');
    }
 }

 revealBtn.addEventListener("click",revealContent);
 
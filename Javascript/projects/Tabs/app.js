//variables
const btn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', function(e){
    const id = (e.target.dataset.id);
    //if id exists then remove the active class
    //and add the active class to the clicked button
    if(id){
        btn.forEach(function(btns){
            btns.classList.remove('active');
            e.target.classList.add('active');
        });

        articles.forEach(function(article){
            article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
        
    }   
})


// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');

    //to dynamically change height
    // Element.getBoundingClientRect() method returns the
    //size of an element and its position relative to the viewport.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
// scrollY is a read - only window property that 
//returns the number of pixels the document has been scrolled vertically.

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){ 
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        // prevent default
        e.preventDefault();
        
        

        // slice extracts a section of a string without modifying original string
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navbarHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        
        
        //offsetTop - A Number, representing the top position of the element, in pixels
        // position gives you the distance of an element from the top of the page
        let position =  element.offsetTop - navbarHeight;

        if(!fixedNav){
            position = position - navbarHeight;
        }

        if(navbarHeight > 82){
            position = position + containerHeight;
        }

        // navigate to specific spot

        window.scrollTo({
            left: 0,
            top: position,
        });
        
        linksContainer.style.height = 0;
    })
})

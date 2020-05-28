const header = document.querySelector('nav');
const sectionOne = document.querySelector('main');

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add("nav-scrolled");
            console.log('yup0');
        }
        else{
            header.classList.remove("nav-scrolled");
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
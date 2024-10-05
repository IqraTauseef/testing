const addEventOnElement =function(elements, eveType , callback){
    for (let i=0, len = elements.length; i<len; i++){
        elements[i].addEventListener(eveType, callback)
    }
}
// Navbar Toggle for mobile
const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const overlay = document.querySelector('[data-overlay]');
const toggleNavbar = function (){
    navbar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
}
addEventOnElement([navToggleBtn, overlay], 'click', toggleNavbar);


//------ Parallax Effect-------------- 
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('mousemove', event => {
    for (let i = 0, len = parallaxElements.length; i < len; i++) {
        const parallaxSpeed = Number(parallaxElements[i].dataset.parallaxSpeed);
        
        // Calculate the movement based on mouse position
        const movementX = (event.clientX / window.innerWidth) * parallaxSpeed;
        const movementY = (event.clientY / window.innerHeight) * parallaxSpeed;

        // Apply the parallax effect
        parallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, { duration: 500, fill: 'forwards' });
    }
});


//  Google form
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            if (!name || !email || !message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill in all fields.',
                });
                return;
            }
    
            // Simulate form submission
            Swal.fire({
                icon: 'success',
                title: 'Thank You!',
                text: `Your message has been sent successfully, ${name}.`,
            });
    
            // Reset form
            this.reset();
        });
    
import gsap from "gsap/all";



/*
    function [ landingAnimation ]

    initiated via onload
    brings lanscape into view
    brings foreground into view
    brings planet into view
    brings welcome into view

*/
const landingAnimation = ()=> {

    // [ landscape photoshop images ]
    const background = document.querySelector('#background');
    const foreground = document.querySelector('#foreground');
    const midground = document.querySelector('#midground');
    // [ planet earth image ]
    const planet = document.querySelector('#planet');

    // get photoshop image from webhost & assign background image url
    
    // background props [ space ]
    background.style.backgroundImage = `url('https://i.ibb.co/Kh2jGxN/space.png')`;
    // planet props [ earth ]
    planet.style.backgroundImage = `url('https://i.ibb.co/Rgf8frk/planet.png')`;
    // midground props [ landscape ]
    midground.style.backgroundImage = 'url(https://i.ibb.co/qJ1nXTZ/landscape.png)';
    // foreground props [ rocks ]
    foreground.style.backgroundImage = `url('https://i.ibb.co/64bRxQm/rocks.png')`;

    // header component
    const header = document.querySelector('#header');
    // onload default style props
    header.style.overflow = 'hidden';
    
    // content component
    let content = document.querySelector('#content');
    // onload default style props
    content.style.display = 'none';
    
    // header [ foreground - rocks ] animation props
    gsap.from("#foreground", {
        opacity: 0,
        x: 100,
        ease: "power2.in",
        
        duration: 1,
        stagger: 1,
        delay: 1,

    }),

    // header [ midground - landscape ] animation props
    gsap.from("#midground", {
        opacity: 0,
        x: -50,
        ease: "power2.in",

        duration: 1,
        stagger: 1,
        delay: 1,

    }),

    // header [ planet - earth ] animation props
    gsap.from("#planet", {
        opacity: 0,
        y: 250,
        ease: "power2.in",

        duration: 1,
        stagger: 1,
        delay: 2,
    }),

    // header [ title - page title ] animation props
    gsap.from("#title", {
        opacity: 0,
        y: -100,
        ease: "power2.in",

        duration: 1,
        stagger: 1,
        delay: 2,
    }),

    // header [ about - page ] animation props
    gsap.from("#about", {
        opacity: 0,
        x: -150,
        ease: "power2.in",

        duration: 1,
        stagger: 1,
        delay: 3,


    })

    // set animation complete as 4000 [ 4 seconds ]
    let animationComplete = 5000;
    
    // run setTimeout
    setTimeout(() => {
    
        // assign position sticky to header component 
        header.style.position = 'sticky';
        header.style.height = '100vh';
    
        // test
        console.log('section : content  =  active');

    }, animationComplete);

};

// init [ landingAnimation ] function onload
landingAnimation();

/*
    function [ enterAnimation ]

        initiated via [ enterBtn ] onclick
        removes planet element out of view
        removes welcome element out of view
        brings slider content into view

*/
const enterAnimation = () => {

    // reselect content selector
    let content = document.querySelector('#content');
    content.style.display = 'grid';       

    /*
        gsap transition animations
        ani : planet
        ani : welcome
        ani : slider

    */

    // move out the planet element
    gsap.to("#planet", {
        opacity: 1,
        y: -950,
        ease: "power2.out",
        duration: 0.85,

    }),

    // move out the welcome elemnent
    gsap.to("#title", {
        opacity: 1,
        x: -950,
        ease: "power2.out",
        duration: 0.85,

    }),

    // move out the about element
    gsap.to('#about', {
        opacity: 1,
        x: -450,
        ease: "power2.in",
        duration: 0.85,
        delay: 0.85,

    }),

    
    // move in the content component
    gsap.from("#content", {
        opacity: 1,
        y: -1000,
        ease: "power2.in",
        duration: 0.9,
        stagger: 1,
        delay: 0.85,
        
    })

    // let animationComplete = 3449;

    // setTimeout(() => {
        
    //     // load after animation is complete
             // reselect content selector
    // let content = document.querySelector('#content');
    // content.style.display = 'grid';   

    // }, animationComplete);

}


// enter button selector
let enterBtn = document.querySelector('#enterBtn');
// event [ enter btn ] : init enter animation function
enterBtn.addEventListener('click', enterAnimation);

// home button selector
let homeBtn = document.querySelector('#homeBtn');
// event [ home btn ] : init landing animation function
homeBtn.addEventListener('click', landingAnimation);


/*
    state change animation

    const statechangeAnimation = () => {}

    1. background [ keep ]
    2. assets [ rock, land, planet ]
    3. container [ black background ]
    5. content [ white ]
     

*/
const statechangeAnimation = () => {

    // header [ foreground - rocks ] animation props
    gsap.from("#foreground", {
        opacity: 0,
        x: 100,
        ease: "power2.in",
        
        duration: 1,
        stagger: 1,
        delay: 1,

    }),

    // header [ midground - landscape ] animation props
    gsap.from("#midground", {
        opacity: 0,
        x: -50,
        ease: "power2.in",

        duration: 1,
        stagger: 1,
        delay: 1,

    })

}

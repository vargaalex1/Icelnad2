
 const tl1 = gsap.timeline({defaults: {duration: 0.55}})
 
 const tl2 = gsap.timeline({defaults: {duration: 0.65}})

// BACKGROUNDS + NAV + HEADING + BIG NUMBER//

 tl1.fromTo 
    ('.left-side',
        {opacity:0, y: -200},
        {opacity: 1, y: 0}
    );

tl1.fromTo 
    ('.right-side',
        {opacity:0, y: 200},
        {opacity: 1, y: 0,}, '<'
    );

tl1.fromTo
    ('.image-text ',
        {opacity:0, x: -30},
        {opacity: 1, x: 0}, 
    );   

tl1.fromTo
    ('.menu-bar ',
        {opacity:0, x: -30},
        {opacity: 1, x: 0}, '<' 
    );

// THIS ONE IS CONTAINER SECTION ANIMATION //
tl1.fromTo
    ('.contact-container',
        {opacity:0, scale:0},
        {opacity: 1, scale: 1}, 
    );

tl1.fromTo 
    ('.heading',
        {opacity:0, x: -100},
        {opacity: 1, x: 0}, '<'
    );

tl1.fromTo
    ('.big-number',
        {opacity:0, x: -50},
        {opacity:1, x: 0}, '<'
    );

//  ABOUT WRAPPER, ALL ASIDE TEXTS & NUMBERS//

tl1.fromTo 
    ('.about-wrapper', 
        {opacity:0, y: 30}, 
        {opacity: 1, y: 0}
    );

tl1.fromTo
    ('.horizontal-rule', 
        {opacity:0, y: 20}, 
        {opacity: 1, y: 0}, '<'
    );    

 tl1.fromTo
    ('.about-wrapper h1', 
        {opacity:0, y: 20}, 
        {opacity: 1, y: 0}
    );

tl1.fromTo
    ('.about-wrapper article',
        {opacity:0, y: 20}, 
        {opacity: 1, y: 0}, '<'
    );

 tl1.fromTo
    ('.number-of-page',
        {opacity:0, y: 20},
        {opacity: 1, y: 0}
    );

 tl1.fromTo
    ('.buttons-container',
        {opacity:0, y: 20},
        {opacity: 1, y: 0}, '<'
    );

 



 

 

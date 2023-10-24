# robotbeaver
It's a metaphor, also a SPA framework. If you already know how to program but are frustrated with the esoteric knowledge required to work with modern front end SPA frameworks, then this is the SPA framework for you. No build step, just vanilla js, html, and css.  By combining alpinejs (reactive html components), alpinejs-component (reusable alpinejs components), and the router in this here repo (to put the SPA in SPA frontend), you have everything you could ever need to build a fast, reliable, maintainable, application without ever having to care about what the virtual dom is. 


## Getting Started
* add router.js to your index.html
* add [alpinejs] (https://alpinejs.dev/)
* add [alpinejs-component] (https://github.com/markmead/alpinejs-component)
* Instantiate a ROUTES object with global scope that looks something like this:

        /**
        * To add a route, add a route property to routes below
        * by mapping a URL path to the view you want to display.
        * Note: Route params should start with ":"
        */
        const ROUTES = {
            "/": "/static/pages/home.html",
            "/about": "/static/pages/about.html",
            "/settings": "/static/pages/settings.html",
            "/test": "static/pages/test.html",
            "/test/:id": "static/pages/specific-test.html",
            404 : "static/pages/404.html"//link to your 404 page
        };

DONE! 

Checkout the sample TO DO app to see how you actually write code with this thing. 
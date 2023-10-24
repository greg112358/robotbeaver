# robotbeaver
It's a metaphor, also a SPA framework. If you already know how to program but are frustrated with the esoteric knowledge required to work with modern front end frameworks, then this is the framework for you. No build step, just vanilla js, html, and css.  By combining alpinejs, alpinejs-component, and the router in this here repo, you have everything you could ever need to build a fast, reliable, maintainable, SPA frontend


## Getting Started
* add router.js to your index.html
* add [alpinejs] (https://alpinejs.dev/)
add [alpinejs-component] (https://github.com/markmead/alpinejs-component)

Instantiate a ROUTES object with global scope:

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
        404 : "static/pages/404.html"//if you don't have a "your404page" this will 404 lol
    };


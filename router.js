
const route = (event) => {
    event = event || window.event;
    //prevents refresh
    event.preventDefault();
    //makes back and forward button work
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    let view = getRoute().view
    let html = await fetch(view).then((data) => data.text());
    setInnerHtml(document.getElementById("main-page"), html )

    function setInnerHtml(elm, html) {
        elm.innerHTML = html;
        Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
          const newScript = document.createElement("script");
          Array.from(oldScript.attributes)
            .forEach(attr => newScript.setAttribute(attr.name, attr.value));
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      }
};

//handle back button
window.onpopstate = handleLocation;
window.route = route;

handleLocation();


function getRoute(){
    let routeObject = {view:ROUTES[404], routeParams : {}, urlParams : {}}
    let pathComponents = getPathComponents(window.location.pathname);
    for (let route in ROUTES){
        let routeComponents = getPathComponents(route);
        if(componentsMatch(pathComponents,routeComponents)){
            routeObject.view = ROUTES[route];
            for(var i = 0;i<pathComponents.length;i++){
                if(routeComponents[i].indexOf(":")==0){
                    let name = routeComponents[i].split(":")[1];
                    routeObject.routeParams[name] = pathComponents[i];
                }
            }
        }
    }
    return routeObject;
    
    function componentsMatch(path1,path2){
        if(path1.length != path2.length) return false;
        for(var i = 0;i<path1.length;i++){
            if(path1[i]!==path2[i] && path1[i].indexOf(":")!==0 && path2[i].indexOf(":")!==0){
                return false;
            }
        }
        return true;
    }

    function getPathComponents(path){
        components = [];
        for(component of path.split("/")){
            if(component.length!=0)components.push(component)
        }
        return components;
    }
}

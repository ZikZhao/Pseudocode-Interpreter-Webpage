document.body.onload = function(){
    const target = $("div#navigation");
    const source = document.createElement("div");
    source.innerHTML = "\
    <div id=\"icon\">\
        <img id=\"icon-image\" src=\"\">\
        <p class=\"yahei-light\">\
            <span>Pseudocode</span></br>\
            <span>Interpreter</span>\
        <\p>\
    </div>\
    "
    target.append(source);
    
};
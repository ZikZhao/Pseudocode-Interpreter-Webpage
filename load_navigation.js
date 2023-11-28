document.body.onload = function(){
    const target = $("div#navigation");
    let source = document.createElement("div");
    source.id = "navigation-icon"
    source.innerHTML = "\
    <div id=\"icon\">\
        <img id=\"icon-image\" src=\"\">\
        <p class=\"yahei-light\">\
            <span>Pseudocode</span></br>\
            <span>Interpreter</span>\
        <\p>\
    </div>\
    ";
    target.append(source);
    source = document.createElement("div");
    source.id = "navigation-buttons";
    source.innerHTML = "\
    <div>\
        <div class=\"navigation-button\">Introduction</div>\
    </div>\
    ";
    target.append(source);
};
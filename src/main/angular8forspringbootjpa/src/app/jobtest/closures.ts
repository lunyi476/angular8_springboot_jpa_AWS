
document.body.innerHTML = '<div>' +
'In my life, I used the following web search engines:<br/>'+
'<a href="#">Yahoo!</a><br/>'+
'<a href="#">AltaVista</a><br/>'+
'<a href="#">Google</a><br/>'+
'</div>';



function registerHandlers() {
    var as = document.getElementsByTagName('a');
    // let VS var, if use var i was hoist
    for (let i = 0; i < as.length; i++) {
        as[i].onclick = function() {
            alert(i);
            return false;
        }
    }
   
}

registerHandlers();


/* HTML code for testing purposes (do not submit uncommented):*/

window.onload = function() {
    var text = document.getElementById(text);
    var searchbutton = document.getElementById("searchbutton");
    searchbutton.onclick = function() {
        console.log('Search button Clicked');
        var httpRequest = new XMLHttpRequest();
        var r  = document.getElementById("textBox");
        var url = "request.php?q="+ r.value;
        httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
                document.getElementById("Result").innerHTML=response;
           
            } else {
            alert('There was a problem with the request.');
            }
        } 
        };
            
        httpRequest.open('GET', url);
        httpRequest.send();
    };
    
    console.log(searchbutton);
    
    var defbutton = document.getElementById("defbutton");
    defbutton.onclick = function() {
        console.log('Get definition button clicked');
        var httpRequest = new XMLHttpRequest();
        var url = "request.php?q=&all=true";
        httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
            var response = httpRequest.responseXML;
                document.getElementById("Result").innerHTML=response;
           
            } else {
            alert('There was a problem with the request.');
            }
        } 
        };
            
        httpRequest.open('GET', url);
        httpRequest.send();
    };
    
};

       
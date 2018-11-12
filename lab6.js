window.onload = function() {
    var text = document.getElementById(text);
    var searchbutton = document.getElementById("searchbutton");
    searchbutton.onclick = function() {
        console.log('Button Clicked')
        
    var httpRequest = new XMLHttpRequest();
    var url = "request.php?q=definition";
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
            } else {
            alert('There was a problem with the request.');
            }
        } 
    };
            
    httpRequest.open('GET', url);
    httpRequest.send();
    
    };
    console.log(searchbutton)
    
    
};

       
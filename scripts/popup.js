document.addEventListener("DOMContentLoaded", function(){
    search.addEventListener('click',function(){
        var statement = document.getElementById("statement").value;
        document.getElementById("Replacement").innerHTML = statement;
    })
})





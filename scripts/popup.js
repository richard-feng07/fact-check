document.addEventListener("DOMContentLoaded", function(){
    search.addEventListener('click',function(){
        var statement = document.getElementById("statement").value;
        document.getElementById("Replacement").innerHTML = statement;
    })
    sendvar.addEventListener('click',function(){
        SendStatement();
    })
})

function SendStatement(){
    const statement = document.getElementById("statement").value;
    const s = JSON.stringify(statement);
    alert(s);
    $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)
    });

}
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
    var s = document.getElementById("statement").value;
    // const s = JSON.stringify(statement);
    $.ajax({
        type: "POST",
        data: JSON.stringify(s),
        url:"http://127.0.0.1:5500/",
        dataType:"json",
        contentType: "application/json; charset=utf-8",
        // success:function (data) {
        //     var reply = data.reply;
        //     if(reply=="success")
        //     {
        //         return;
        //     }
        //     else
        //         {
        //         alert("some error ocured in session agent")
        //         }
        // }
    });

}
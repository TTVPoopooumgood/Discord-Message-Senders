function Send() {
    var message = document.getElementById("content").value;
    var username = document.getElementById("username").value;
    console.log("username = " + username);
    console.log("content = " + content);

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1063447212484464740/rd28CxjVUJNopR2SEqhF-2fvCYe_Al2KTWToVvLkjAL_q55Z5qliydxKHV4xXhvbilp9");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: username,
        avatar_url: "https://i.pinimg.com/564x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg",
        content: "MESSAGE : " + message
    }

    request.send(JSON.stringify(params));
    alert("Message envoyé");
    if (username.value == "" || message.value == "") alert("Champ vide");//fonctionne pas
    alert("Message envoyé");
}

function reload(){
    window.location.reload()
}
function backsite() {
    location.href = "../index.html" 
}
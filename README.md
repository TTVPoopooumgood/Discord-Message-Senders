<h1 align="center"> :computer: Discord Webhook Messenger </h1>

*"Webhooks are a low-effort way to post messages to channels in Discord. They do not require a bot user or authentication to use."* - Discord

<p align="center"> 
 <a href="https://discord.com/developers/docs/resources/webhook" alt="Discord's Webhook Documentation" target="_blank"> > See the official Discord's documentation <</a>

</p>
<br><br>
If you want to set it up for your project, start by creating a personal webhook on a server where you have the permissions, copy the URL, and paste it instead of {[URLtoken]} in the function below.
<br><br>

```
|| <input id="username">
|| <textarea id="content>
|| <button onClick="Send()">


function Send() {
     var message = document.getElementById("content").value;
     var username = document.getElementById("username").value;
     
     //console.log("username = " + username);
     //console.log("content = " + message);
     
     const request = new XMLHttpRequest();
     request.open("POST", " {[URLtoken]} ");
     request.setRequestHeader('Content-type', 'application/json');

     const params = {
        username: username,
        avatar_url: "https://i.pinimg.com/564x/47/77/ae/4777ae0906dd0113ad0bb00d61125d1b.jpg", //Change the link here for change the icon of the message. You can also link it with an input for let the user defines it.
        content: "MESSAGE : " + message
     }

     request.send(JSON.stringify(params));
	    alert("Content SEND");
}
```
<br><br>
If this little project helps you, feel free to star or share it :)

*- Kaaz*




 <!--
Here's a little project I made in 2-3 hours for fun.

If you'd like to set this up for yourself, it's pretty self-explanatory; create a Discord webhook and copy the URL, paste it as the value for an environment variable titled WEBHOOK_URL. Customize the frontend, do whatever you'd like, it's very simple.

If you like this project or want to see more of what I make, feel free to star the repo ⭐ or drop a follow 🙋‍♂️, it's much appreciated :)-->

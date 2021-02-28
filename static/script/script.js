function getId(id) {
	return document.getElementById(id)
}

const cli = new Client();

cli.onopen = id =>{
  log("/server: SRNET Connection " + new Date().toUTCString() + "\n" +
          "     Language: " + navigator.language + "\n" +
          "     Platform: " + navigator.platform + "\n" +
          "     Browser: " + navigator.userAgent.split(" ").last());
  //cli.send("0000000",id);
};

cli.onmessage = d =>{
  //log("#" + d.statusCode + " " + d.statusText + " -> " + d.message);
}

const usr = localStorage.getItem('username') || "Player";

const username = getId('username-input');
username.value = usr;

username.addEventListener('change', e => {
	localStorage.setItem('username', username.value)
});

getId('solo').addEventListener('click', e => {
	location.href = '/solo';
});

getId('multiplayer').addEventListener('click', e => {
	location.href = '/multiplayer';
});
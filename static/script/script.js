var cli = new Client();
cli.onopen = id=>{
  //cli.send("0000000",id);
};
cli.onmessage = d=>{
  //log("#" + d.statusCode + " " + d.statusText + " -> " + d.message);
}
const usr = localStorage.getItem('username') || "Player";

const username = document.getElementById('username-input');

username.value = usr;

username.addEventListener('change', e => {
	const userName = document.getElementById('username-input');
	localStorage.setItem('username', username.value)
});
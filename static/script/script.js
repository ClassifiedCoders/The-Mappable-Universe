var cli = new Client();
cli.onopen = id=>{
  
}
const usr = localStorage.getItem('username') || "Player";

const username = document.getElementById('username-input');

username.value = usr;

username.addEventListener('change', e => {
	const userName = document.getElementById('username-input');
	localStorage.setItem('username', username.value)
});
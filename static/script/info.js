(function(){
var xhr = new XMLHttpRequest();
xhr.open("GET","/info.json");
xhr.onloadend = ()=>{
  window.info = JSON.parse(xhr.responseText);
};
xhr.send();
})();
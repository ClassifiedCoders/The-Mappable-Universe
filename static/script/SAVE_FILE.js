function parseSaveFile () {
  
}

document.getElementById("load_file_solo").addEventListener("change", function () {
  const local_file_solo = new FileReader();

  local_file_solo.onload = function () {
    if (local_file_solo.result.includes("//MAP_SaVe%6$3wDFILE+=-4jd1@!!!%4#?>><<4%ff@eds$")) {
      document.getElementById("possible-solo-error").innerText = "";
      document.getElementById("solo-file-div").style.display = "none";
    }

    else {
      document.getElementById("possible-solo-error").innerText = "Load an actual save file!";
    }
  }
  local_file_solo.readAsText(this.files[0]); 
});
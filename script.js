var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");
var button = document.getElementById("button");

css.textContent = body.style.background + ";"

function changecolor(){
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
		css.textContent = body.style.background + ";"
}

color1.addEventListener("input", changecolor)

color2.addEventListener("input", changecolor)

button.addEventListener("click", function(){
		var rand1 = [];
		var rand2 = [];
		for (var i=0; i < 3; i++){
			rand1[i] = Math.round(Math.random()*255);
			rand2[i] = Math.round(Math.random()*255);
		}
		body.style.background = "linear-gradient(to right, " + "rgb(" + rand1[0] + "," + rand1[1] + "," + rand1[2] + ")"
		 + ", " + "rgb(" + rand2[0] + "," + rand2[1] + "," + rand2[2] + ")" + ")";
		css.textContent = body.style.background + ";";
		var rgbToHex1 = rand1.map(v => v.toString(16).padStart(2,'0')).join('');
		var rgbToHex2 = rand2.map(v => v.toString(16).padStart(2,'0')).join('');
		color1.value = "#" + rgbToHex1
		color2.value = "#" + rgbToHex2

})

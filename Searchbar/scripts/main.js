var input, filter, ul, li, a, i, name, pic, info, temp;
input = document.getElementById("myInput");
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
a = document.getElementsByTagName("a");
animalName = document.querySelector("#animalName");
animalPic = document.querySelector("#animalPic");
animalinfo = document.querySelector("#animalInfo");

input.addEventListener("keyup", myFunction);
input.addEventListener("focus", showList);
input.addEventListener("blur", hideListD);

for ( i = 0; i < a.length; i++) { //Adding event listener for each link in list.
	a[i].addEventListener("click", disp, false);
	a[i].addEventListener("click", hideList, false);
}

var animals = animalsInfo;

function disp(){ //Displays everything about the animal clicked.
	animalPic["src"] = "";
	var current = (this.innerHTML).toLowerCase();
	animalName.innerHTML = animals[current].name;
	animalinfo.innerHTML = animals[current].info;
	animalPic["src"] = animals[current].picLink;
}

function home(){ // Function to display nothing.
	animalName.innerHTML = "";
	animalinfo.innerHTML = "";
	animalPic["src"] = "";	
}

function myFunction () { //Filter function. Filters the search.
	filter = input.value.toUpperCase();
	for( i = 0; i < li.length; i++) {
			temp = li[i].getElementsByTagName("a")[0];
		if (temp.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "block";
		} else {
			li[i].style.display = "none";
		}
	}
}

function showList () { //Clearly, to show the list.
	ul.style.animationDirection = 'normal';
	ul.style.animationFillMode = 'forwards';
	ul.style.animationName = "show";
	ul.style.animationDuration = '1s';	
	ul.style.display ="block";
}

function hideListD () { //Hidelist with delay (Jugaad)
	setTimeout(function(){
		ul.style.display = "none";
	}, 150);
	
}

function hideList () { //Clearly, to hide the list.
	 ul.style.display = "none";
}
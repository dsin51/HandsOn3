/**
 * 
 */

function myFunction(){
	
	var ele = document.getElementById("name").value;
	
	var name1 = prompt("Please Confirm your name:\n",ele);
	document.getElementById("name").value = name1;
}

function onSubmit(){
	
	var values = document.getElementById("name").value;
	
	var loc = document.getElementById("location");
	var index = loc.selectedIndex;
	var location = loc.options[index].text;
	values = values + "\n" + location;
	
	var payMode;
	if (document.getElementById("net").checked) {
		payMode = document.getElementById("net").value;
		} 
	if (document.getElementById("visa").checked) {
		payMode = document.getElementById("visa").value;
		}
	if (document.getElementById("card").checked) {
		payMode = document.getElementById("card").value;
		}
	values = values + "\n" + payMode;
	
	
	var checkedValue = "";
	var inputElements = document.getElementsByClassName('messageCheckbox');
	for(var i=0; inputElements[i]; i++){
	      if(inputElements[i].checked){
	           checkedValue = checkedValue + " " + inputElements[i].value;
	      }
	}
	
	values = values + "\n" + checkedValue;
	
	alert(values);
}
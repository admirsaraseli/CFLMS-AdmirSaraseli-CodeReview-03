let data = document.getElementById('result'); // get paragraph for result
let calc = document.getElementById('calculation'); //get button to add event
calc.addEventListener('click', calculateInsurance, false);

function calculateInsurance(event) {
	event.preventDefault();
	data.style.color = "green";
	let fname = document.forms["data"]["fullName"].value;
	let country = document.forms["data"]["country"].value;
	let age = document.forms["data"]["age"].value;
	let hpower = document.forms["data"]["horsepower"].value;

	if (fname === "" || age === "" || hpower === "") {
		data.style.color = "red";
		data.innerHTML = "Please insert all data for the insurance!";
	} else {
		let x = 0;
	  	if (country === "Austria") {
	    	x = Number(hpower) * 100 / Number(age) + 50;
	    } else if (country === "Hungary")	{
	    	x = Number(hpower) * 120 / Number(age) + 100;
	    }  else {
	    	x = Number(hpower) * 150 / (Number(age) + 3) + 50;
	    } 
	    data.innerHTML = fname +", your insurance costs " +Math.round(x)+ " €";
	}
};
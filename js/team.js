let teamMembers = [
	{name:"Fran", email:"fran@index.com", image:"img/person1.png", position: "CEO"},
	{name:"Bill", email:"bill@index.com", image:"img/person2.png", position: "Manager"},
	{name:"Fritz", email:"fritz@index.com", image:"img/person3.png", position: "HR"}
];

for (let i = 0; i < teamMembers.length; i++) {

	let img = document.getElementById("img"+i);
	img.src = teamMembers[i].image

	let cap = document.getElementById("cap"+i);
	cap.innerHTML = "Name: "+ teamMembers[i].name +", Email: "+ teamMembers[i].email +"<br>" 
	+"<button value="+i+" id='show"+i+"'>Show more </button> ";
	
	let btn = document.getElementById('show'+i);
	btn.addEventListener('click', showdata, false);
}

function showdata(event) {
	event.preventDefault();
	let index = this.value; // get the button value
	this.style.display = "none" // remove button
	
	let position = document.getElementById("info"+index); // get paragraph for result
	position.innerHTML = "Position: "+ teamMembers[index].position;
}
var MenuItem = ["RECIPES", "DRINKS", "DECORATIONS", "ABOUT THE GRILLED PRAWN"];
var Nationality = [{
		id: "1",
		type: "Italian",
		quantity: "34",
	},
	{
		id: "2",
		type: "French",
		quantity: "30",
	},
	{
		id: "3",
		type: "Spanish",
		quantity: "22",
	},
	{
		id: "4",
		type: "Peruvian",
		quantity: "3",
	},
	{
		id: "5",
		type: "Chinese",
		quantity: "18",
	},
	{
		id: "6",
		type: "Indian",
		quantity: "13",
	},
	{
		id: "7",
		type: "Thai",
		quantity: "10",
	},
	{
		id: "8",
		type: "Norwegian",
		quantity: "4",
	},
	{
		id: "9",
		type: "Polish",
		quantity: "2",
	},
	{
		id: "10",
		type: "Danish",
		quantity: "3",
	},
	{
		id: "11",
		type: "Belgian",
		quantity: "7",
	},
	{
		id: "12",
		type: "Persian",
		quantity: "13",
	},
];

var FoodType = [{
		id: "1",
		type: "Appetisers",
	},
	{
		id: "2",
		type: "Mains",
	},
	{
		id: "3",
		type: "Desserts",
	},
	{
		id: "4",
		type: "Special Occasions",
	},
];
var Items = [{
		date: "5TH MARCH 2016",
		type: "THAI",
		description: "Thai Yellow Curry Noodles with Shiitake Mushrooms",
		Img: "recipe1.png",
	},
	{
		date: "17TH MARCH 2016",
		type: "ITALIAN",
		description: "Cappellini with Cherry Tomatoes and Fresh Basil",
		Img: "recipe2.png",
	},
	{
		date: "4TH APRIL 2016",
		type: "ITALIAN",
		description: "Baked Turkey Sausage and Mascarpone Stuffed Shells",
		Img: "recipe3.png",
	},
	{
		date: "24TH MAY 2016",
		type: "ITALIAN",
		description: "Caramelised Apple and Herb Fiocchi ",
		Img: "recipe4.png",
	},
	{
		date: "25TH MAY 2016",
		type: "SPANISH",
		description: "Pumpkin Beer Cheese Soup",
		Img: "recipe5.png",
	},
	{
		date: "22TH SEPTEMBER  2016",
		type: "THAI",
		description: "Yum Woon Sen with Shrimp (Glass noodle salad with Shrimp)",
		Img: "recipe6.png",
	},
	{
		date: "14TH OCTOBAR 2016",
		type: "THAI",
		description: "Beef Satay",
		Img: "recipe7.png",
	},
	{
		date: "29TH OCTOBAR 2016",
		type: "FRENCH",
		description: "Creamy French Onion Soup Dip in a Bread Bowl",
		Img: "recipe8.png",
	},
	{
		date: "11TH NOVEMBER 2016",
		type: "SPANISH",
		description: "Bocadillo Bites",
		Img: "recipe9.png",
	},
	{
		date: "12TH NOVEMBER 2016",
		type: "SPANISH",
		description: "Paella",
		Img: "recipe10.png",
	},
	{
		date: "24TH DECEMBER 2016",
		type: "THAI",
		description: "Spicy black Bean Burger",
		Img: "recipe11.png",
	},
	{
		date: "9 JANUARY 2017",
		type: "ITALIAN",
		description: "Fresh Fig and Pistachio Salad",
		Img: "recipe12.png",
	},
];

var NationalItem = "";

for (let i = 0; i < Nationality.length; i++) {
	NationalItem +=
		'<label class="menuType">' +
		Nationality[i].type +
		"(" +
		Nationality[i].quantity +
		')<input type="checkbox" id="foodType" name="foodType" value="' +
		Nationality[i].type +
		'"><span class="checkmark"></span></label>';
}
NationalItem += "";
document.getElementById("showNationalItme").innerHTML = NationalItem;

var food = "";

for (let i = 0; i < FoodType.length; i++) {
	food +=
		' <label class="menuType">' +
		FoodType[i].type +
		' <input type="checkbox" id="foodType"  name="foodType" value="' +
		FoodType[i].type +
		'"> <span class="checkmark"></span></label>';
}
food += "";
document.getElementById("showFoodType").innerHTML = food;

var menuType = "";

for (let i = 0; i < MenuItem.length; i++) {
	menuType += ' <a href="#" target="_blank">' + MenuItem[i] + "</a>";
}
menuType += "";
document.getElementById("showMenu").innerHTML = menuType;

var str = '<div class="row" id="showFlex">';

for (let i = 0; i < Items.length; i++) {
	str +=
		'  <div class="column"><div class="gallery"><div><span class="dateType">' +
		Items[i].date +
		'</span><span  class="type">' +
		Items[i].type +
		'</span></div><div class="desc">' +
		Items[i].description +
		'</div><a target="_blank" href="#"> <img src="./images/' +
		Items[i].Img +
		'" alt="Cinque Terre" width="600" height="400"></a></div></div>';
}
str += "</div>";
document.getElementById("showRec").innerHTML = str;

function deleteRow(r) {
	if (confirm("Do you want to remove this record?")) {
		var i = r.parentNode.parentNode.rowIndex;
		document.getElementById("myTable").deleteRow(i);
	}
}

function insRow() {
	var x = document
		.getElementById("myTable")
		.insertRow(document.getElementById("myTable").rows.length);

	var y = x.insertCell(0);
	var z = x.insertCell(1);
	var g = x.insertCell(2);
	var p = x.insertCell(3);
	y.innerHTML = document.getElementById("cell1").value;
	z.innerHTML = document.getElementById("cell2").value;
	g.innerHTML = document.getElementById("cell3").value;
	p.innerHTML =
		'<button  class="c-btn_red_rm" value="Remove" onclick="deleteRow(this)"> <img style="vertical-align:middle" src="./icons/trash.gif" width="20px" height="15px"> Remove</button';
	document.getElementById("cell1").value = "";
	document.getElementById("cell2").value = "";
	document.getElementById("cell3").value = "";
}

function myFunction() {
	var x = document.getElementById("showRecip");
	if (x.style.display === "none") {
		x.style.display = "block";
		x.parentElement.classList.remove("mins-icon");
		x.parentElement.classList.add("plus-icon");
	} else {
		x.style.display = "none";
		x.parentElement.classList.add("mins-icon");
		x.parentElement.classList.remove("plus-icon");
	}
}
myFunction();

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
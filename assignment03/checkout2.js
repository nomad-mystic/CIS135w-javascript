/*
DO NOT DELETE ANYTHING IN THIS FILE, INCLUDING MY COMMENTS.
ADD THE CODE YOU NEED TO ADD IN THE EXACT PLACE WHERE YOU ARE INSTRUCTED BELOW.
*/
/*jsl:option explicit*/
/*jsl:declare $*//*jsl:declare addEventListener*//*jsl:declare alert*//*jsl:declare blur*//*jsl:declare clearInterval*//*jsl:declare clearTimeout*//*jsl:declare close*//*jsl:declare closed*//*jsl:declare confirm*//*jsl:declare console*//*jsl:declare Debug*//*jsl:declare defaultStatus*//*jsl:declare document*//*jsl:declare event*//*jsl:declare focus*//*jsl:declare frames*//*jsl:declare getComputedStyle*//*jsl:declare history*//*jsl:declare Image*//*jsl:declare length*//*jsl:declare location*//*jsl:declare moveBy*//*jsl:declare moveTo*//*jsl:declare navigator*//*jsl:declare open*//*jsl:declare opener*//*jsl:declare opera*//*jsl:declare Option*//*jsl:declare parent*//*jsl:declare Number*//*jsl:declare parseInt*//*jsl:declare print*//*jsl:declare prompt*//*jsl:declare resizeBy*//*jsl:declare resizeTo*//*jsl:declare screen*//*jsl:declare scroll*//*jsl:declare scrollBy*//*jsl:declare scrollTo*//*jsl:declare setInterval*//*jsl:declare setTimeout*//*jsl:declare status*//*jsl:declare top*//*jsl:declare window*//*jsl:declare XMLHttpRequest*/

//  DO IT: declare all variables here

// declare variables to hold the objects
var txtName;
var txtQuantity;
var txtPrice;
var txtSubtotal;
var txtTotal;
var divOutput;

// declare other variables you will need
var iQuantity;
var fPrice;
var fSubtotal;
var fTotal = 0;


// DO NOT DELETE
window.onload = Init;

function Init() {

	txtTotal = document.getElementById("txtTotal");
	divOutput = document.getElementById("divOutput");
	document.forms[0].elements[0].focus(); // places the focus on the first textbox.

}


function EnterItem() {

	// Your JS code goes here.  Everything gets indented one tabstop (because everything inside a set of curly braces gets indented one tabstop)

	// DO IT: Use getElementById to grab hold of the text fields and assign them to variables.
	txtName = document.getElementById("txtName");
	txtQuantity = document.getElementById("txtQuantity");
	txtPrice = document.getElementById("txtPrice");
	txtSubtotal = document.getElementById("txtSubtotal");

	// DO IT: Number any variable that will be used for math.
	
	iQuantity = Number(txtQuantity.value);
	fPrice = Number(txtPrice.value);

	// DO IT: Calculate the subtotal and display it to the subtotal textbox.
	fSubtotal = 0;
	fSubtotal = iQuantity * fPrice;
	fTotal += fSubtotal;
	txtSubtotal.value = "$" + fSubtotal.toFixed(2);

	// DO IT: Add the subtotal to the existing total.  Then, write the total to the total textbox.
	fTotal += fSubtotal;
	txtTotal.value = "$" + fTotal.toFixed(2);
	
	// DO IT: Update divOutput
	divOutput.innerHTML += txtName.value + ": " + iQuantity + " @ $" + fPrice + " = $" + fSubtotal.toFixed(2) + "<br>";
	console.log(fTotal);


	return false; // DO NOT DELETE.  MUST BE LAST LINE OF CODE IN THIS FUNCTION
}


function Checkout() {

	/* DO IT:
	This is where you put your code to display the "Your total..."  message, and the "Thank you" message.
	Just keep concatenating to the innerHTML property of the divOutput object.
	Enclose the first line in a <p> element, and the second line in an <h3>.
	Remember that the innerHTML property takes any VALID html, as well as text.
	*/
	divOutput.innerHTML += "<p>Your total is " + txtTotal.value + "</p>";
	divOutput.innerHTML += "<h3>Thank You for Shopping at Nomad Mustic\'s";
}


// DO NOT DELETE.  DO NOT CHANGE.
function ClearInput() {

	document.getElementById("txtName").value = "";
	document.getElementById("txtQuantity").value = "";
	document.getElementById("txtPrice").value = "";
	document.getElementById("txtSubtotal").value = "";
}


function NewCustomer() {

	fTotal = 0;
	divOutput.innerHTML = "";
	document.forms[0].elements[0].focus();
	return true;
}

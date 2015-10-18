/*
DO NOT DELETE ANYTHING IN THIS FILE, INCLUDING MY COMMENTS.
ADD THE CODE YOU NEED TO ADD IN THE EXACT PLACE WHERE YOU ARE INSTRUCTED BELOW.
*/
/*jsl:option explicit*/
/*jsl:declare $*//*jsl:declare addEventListener*//*jsl:declare alert*//*jsl:declare blur*//*jsl:declare clearInterval*//*jsl:declare clearTimeout*//*jsl:declare close*//*jsl:declare closed*//*jsl:declare confirm*//*jsl:declare console*//*jsl:declare Debug*//*jsl:declare defaultStatus*//*jsl:declare document*//*jsl:declare event*//*jsl:declare focus*//*jsl:declare frames*//*jsl:declare getComputedStyle*//*jsl:declare history*//*jsl:declare Image*//*jsl:declare length*//*jsl:declare location*//*jsl:declare moveBy*//*jsl:declare moveTo*//*jsl:declare navigator*//*jsl:declare open*//*jsl:declare opener*//*jsl:declare opera*//*jsl:declare Option*//*jsl:declare parent*//*jsl:declare Number*//*jsl:declare parseInt*//*jsl:declare print*//*jsl:declare prompt*//*jsl:declare resizeBy*//*jsl:declare resizeTo*//*jsl:declare screen*//*jsl:declare scroll*//*jsl:declare scrollBy*//*jsl:declare scrollTo*//*jsl:declare setInterval*//*jsl:declare setTimeout*//*jsl:declare status*//*jsl:declare top*//*jsl:declare window*//*jsl:declare XMLHttpRequest*/


// DO IT: DECLARE GLOBAL VARIABLES HERE (variables that are used in more than one function)
var g_fGrandTotal = 0;
var divOutput;


// DO NOT DELETE
window.onload = Init; // run this function as soon as the page is done loading

function Init() {
	// this function runs as soon as the page is done loading

	document.forms[0].elements[0].focus(); // places the focus on the first textbox.

	divOutput = document.getElementById("divOutput");

	divOutput.innerHTML = ""; // initializes divOutput.innerHTML to an empty string since we'll be concatenating to it (don't want to concatenate to garbage)

} // end function Init


function CheckPhone() {
	// this function checks if the phone number entered matches our special customer - we have only one :(

	// DO IT: display a special msg for Betty if the number matches with "5035559999".  Everyone else just gets the generic welcome.
	// TIP: when you're comparing the phone number, remember to put it in quotes.  It's coming from a textbox, so it has to be a string, not a number
	var divWelcome;
	var txtPhone;
	
	txtPhone = document.getElementById("txtPhone");
	divWelcome = document.getElementById("divWelcome");
	
	if (txtPhone.value === "5035559999") {
		
		divWelcome.innerHTML = "<h3>Welcome Betty, Enjoy Your Shopping Experiance</h3>";
	} else {
		
		divWelcome.innerHTML = "<h3>Welcome to Nomad Mystic\'s Checkout</h3>";
	}


	// DO NOT CHANGE OR ADD ANYTHING TO THIS FUNCTION AFTER THIS LINE
	document.getElementById("txtItem").focus();

	return false;

} // end function CheckPhone


function RingUpItem () {

	/* DO IT:
	DECLARE LOCAL VARIABLES - these variables can only be accessed from inside this function.
		Always make your variables local if you can!
		Declare a variable for each object you need to work with.
		Declare any number or string variables you need.
		Not sure what variables you need?  Start working thru the code and it will become clear to you.
	*/
	// Here's one to get you started.  The variable below should be used to store the div id'd as "divSimpleItems".  Use it to display your very basic item output
	var divSimpleItems,
		sTxtItem,
	    sTxtPrice,
		sTxtQty,
		fSubtotal,
		fTxtQty,
		fTxtPrice,
		sTblAllItems,
		fTotal,
		tblAllItems;
		
	sTxtQty = document.getElementById("txtQty");
	sTxtPrice = document.getElementById("txtPrice");
	sTxtItem = document.getElementById("txtItem");
	divSimpleItems = document.getElementById("divSimpleItems");
	divOutput = document.getElementById("divOutput");

	fTxtQty = Number(sTxtQty.value);
	fTxtPrice = Number(sTxtPrice.value);
	// console.log(fTxtPrice);
	/* DO IT: Calculate the subtotal for the current item.  To do so, you must:
	    get your objects,
	    assign your variables,
	    use Number() as necessary
	*/
	fSubtotal = 0;
	fSubtotal = fTxtQty * fTxtPrice;
	fSubtotal.value = fSubtotal.toFixed(2);
	
	divSimpleItems.innerHTML +=  "<h3>" + sTxtItem.value + ": " + fTxtQty + " @ " + fTxtPrice.toFixed(2) + " = " + fSubtotal.toFixed(2) + "</h3>";

	
	
	// DO IT: if statement needed to check for more than 10 pigs
	if (sTxtItem.value === "Pig" || sTxtItem.value === "pig") {
		if (fTxtQty > 10) {
			console.log("Awesome");
			divOutput.innerHTML += "<h3>Discount on Pigs!!</h3>";
		}
	}

	console.log(g_fGrandTotal);
	// DO IT: Update the Grand Total by adding the subtotal to it
	g_fGrandTotal += fSubtotal;
	

	/* DO IT:
		Concatenate a new "item line" to the divSimpleItems div.
		Make sure each item line appears on a separate line.
		Remember folks, JS allows you to insert HTML as well as text.
		You'll be concatenating strings and variables.
		NOTE: You must do this part even if you do the Extra Challenge below
	*/



	/* EXTRA CHALLENGE (optional)
	DO IT:
		Concatenate a new row to the Items table.
		Remember folks, JS allows you to insert HTML as well as text.
		You'll be concatenating strings and variables.
		Break it up over several lines to make your code more readable.
	*/
	tblAllItems = document.getElementById("tblAllItems");

	tblAllItems.innerHTML += "<tr>";
	tblAllItems.innerHTML += "<td>" + sTxtItem.value + "</td>" + "<td>" + fTxtQty + "</td>" + "<td>" + "$" + fTxtPrice.toFixed(2) + "</td>" + "<td>" + "$" + fSubtotal.toFixed(2) + "</td>"; 
	tblAllItems.innerHTML += "</tr>";

	// DO NOT DELETE THE REST OF THE CODE IN THIS FUNCTION.  DO NOT INSERT ANYTHING AFTER IT
	document.getElementById("txtItem").value = "";
	document.getElementById("txtPrice").value = "";
	document.getElementById("txtQty").value = "";

	document.getElementById("txtItem").focus();


	return false; // DO NOT DELETE.  MUST BE LAST LINE OF CODE IN THIS FUNCTION

} // function RingUpItem


function GrandTotal() {

	/* DO IT:
	This function displays the grand total and also checks if the user gets a coupon.
	Everything is written to divOutput.
	Using an <h2>, tell them their total just like the working version.

	DO THE COUPON CHECK:
	Use a multiple-choice if statement to display the appropriate coupon msg, if any.
	
	Using an <h4>, display the Thank you msg.
	*/
	if(g_fGrandTotal < 50) {
		
		divOutput.innerHTML += "<h2>Your total is $" + g_fGrandTotal.toFixed(2) + "</h2>";
		divOutput.innerHTML += "<h4>Thank you for shopping at Nomad Mystic's!</h4>";
	} else if (g_fGrandTotal >= 50 && g_fGrandTotal < 100) {
		
		divOutput.innerHTML += "<h2>Your total is $ " + g_fGrandTotal.toFixed(2) + "</h2>";
		divOutput.innerHTML += "<p>You get a $10 coupon good for your next purchase!</p>";
		divOutput.innerHTML += "<h4>Thank you for shopping at Nomad Mystic's!</h4>";
	} else if (g_fGrandTotal >= 100 && g_fGrandTotal < 150) {
		
		divOutput.innerHTML += "<h2>Your total is $ " + g_fGrandTotal.toFixed(2) + "</h2>";
		divOutput.innerHTML += "<p>You get a $20 coupon good for your next purchase!</p>";
		divOutput.innerHTML += "<h4>Thank you for shopping at Nomad Mystic's</h4>";
	} else if (g_fGrandTotal > 150) {
		
		divOutput.innerHTML += "<h2>Your total is $ " + g_fGrandTotal.toFixed(2) + "</h2>";
		divOutput.innerHTML += "<p>You get a $30 coupon good for your next purchase!</p>";
		divOutput.innerHTML += "<h4>Thank you for shopping at Nomad Mystic's!</h4>";
	}



} // function GrandTotal


// DO NOT DELETE.  DO NOT CHANGE.
function NewCustomer() {

	var tblAllItems;
	var iStartPos;

	g_fGrandTotal = 0;

	tblAllItems = document.getElementById("tblAllItems");
	iStartPos = tblAllItems.innerHTML.indexOf("</tr>");
	tblAllItems.innerHTML = tblAllItems.innerHTML.substr(0, iStartPos);

	document.getElementById("divWelcome").innerHTML = "";
	divOutput.innerHTML = "";
	document.getElementById("divSimpleItems").innerHTML = "";

	document.forms[0].reset(); // need to reset the first form too
	document.forms[0].elements[0].focus();
}
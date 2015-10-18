/*jsl:option explicit*/
/*jsl:declare $*//*jsl:declare addEventListener*//*jsl:declare isDigits*//*jsl:declare alert*//*jsl:declare blur*//*jsl:declare clearInterval*//*jsl:declare clearTimeout*//*jsl:declare close*//*jsl:declare closed*//*jsl:declare confirm*//*jsl:declare console*//*jsl:declare Debug*//*jsl:declare defaultStatus*//*jsl:declare document*//*jsl:declare event*//*jsl:declare focus*//*jsl:declare frames*//*jsl:declare getComputedStyle*//*jsl:declare history*//*jsl:declare Image*//*jsl:declare length*//*jsl:declare location*//*jsl:declare moveBy*//*jsl:declare moveTo*//*jsl:declare navigator*//*jsl:declare open*//*jsl:declare opener*//*jsl:declare opera*//*jsl:declare Option*//*jsl:declare parent*//*jsl:declare Number*//*jsl:declare parseInt*//*jsl:declare print*//*jsl:declare prompt*//*jsl:declare resizeBy*//*jsl:declare resizeTo*//*jsl:declare screen*//*jsl:declare scroll*//*jsl:declare scrollBy*//*jsl:declare scrollTo*//*jsl:declare setInterval*//*jsl:declare setTimeout*//*jsl:declare status*//*jsl:declare top*//*jsl:declare window*//*jsl:declare XMLHttpRequest*/


// Global vars
// These variables will hold the pre-loaded images
var imgPrizeQuestion = new Image();
var imgPrizeRoulette = new Image();
var imgPrizeHappy = new Image();
var imgPrizeSad = new Image();


// DO IT: Hook up an event handler for window.onload to the Init function.
window.onload = Init;



function Init() {

	// DO IT: You're going to be working with the imgPrize object a few times, so it's good practice to grab the object and assign it to a variable, and then work with the variable.
	var imgPrize = document.getElementById("imgPrize");
	var txtName = document.getElementById("txtName");
	
	// DO IT: Pre-load all 4 images
	imgPrizeQuestion.src = "question_mark.png";
	imgPrizeRoulette.src = 'animated-roulette-wheel.gif';
	imgPrizeHappy.src = "happy_clown.jpg";
	imgPrizeSad.src = "sad_clown.jpg";

	// DO IT: set the src attribute for the image to the "question mark" image's src
	imgPrize.src = imgPrizeQuestion.src;
	
	// DO IT: set focus to the txtName textbox
	txtName.focus();

	/* DO IT: Attach event handlers for imgPrize
		Attach event handlers for the mouseover and mouseout events using anonymous functions.
		Attach an event handler for the imgPrize click event to the CheckForPrize function;
		TIP: Remember that when you attach event handlers to functions, do NOT put parens after the function name (because that will cause the function to run IMMEDIATELY).
	*/
	imgPrize.onmouseover = 
		function() {
			this.src = imgPrizeRoulette.src;
		};
	imgPrize.onmouseout = 
		function() {
			this.src = imgPrizeQuestion.src;
		};
	imgPrize.onclick = 
		function() {
			CheckForPrize();
		};

} // function Init


function CheckForPrize() {

	// DO IT: grab any objects on the page you will need to work with and assign them to vars
	// These variables may not be clear at first.  That's ok.  As you work out the solution, you will realize that you need to declare them.  This is where to do that.
	// Remember to give each variable the same name as the id of the object that you are assigning to it.
	var divErrors = document.getElementById("divErrors"); 
	var h2Msg = document.getElementById("h2Msg");
	var txtName = document.getElementById("txtName");
	var txtNumber = document.getElementById("txtNumber");
	var imgPrize = document.getElementById("imgPrize");
	var sNumber;
	// DO IT: clear out the html within divErrors and h2Msg
	divErrors.innerHTML = "";
	h2Msg.innerHTML = "";

	/* DO IT:
		Now validate the name.  If the field is blank:
			- set the error msg appropriately.
			- set focus to the name field
			- get out of the function immediately by returning false
	*/
	if (txtName.value === "") {
		divErrors.innerHTML = "Enter your first name!";
		txtName.focus();
		return false;
	}

	/* DO IT:
		Validate the number in a similar fashion (a "multiple-choice" if would be helpful here).
		You're checking for three different errors:
			- the field must not be blank
			- the length must be exactly 5 characters
			- the field must contain only digits (use isDigits())
	*/
	if (txtNumber.value === "") {
		divErrors.innerHTML = "Enter a number";
		txtNumber.focus();
		return false;
	} else {
		sNumber = txtNumber.value;

		if (sNumber.length !== 5) {
			divErrors.innerHTML = "You must enter exactly 5 digits";
			txtNumber.focus();
			return false;
		} else if (!isDigits(sNumber)) {
			divErrors.innerHTML = sNumber + " is not a number";
			txtNumber.focus();
			return false;
		}
	}

	
	if (document.getElementById("chkExtraChallenge").checked === false) {
		/* DO IT: Now let's see if they get a prize:
			Here's how it works:  If the number they entered is equal to "59834", the get a happy clown, otherwise they see a sad clown.
			
			TIPS:
				- if they win, assign the src of imgPrizeHappy to the src of imgPrize.  Also set the Congratulations message
				- if they lose, well, same thing, but different.
		*/
		if(txtNumber.value === "59834") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		} else {
			imgPrize.src = imgPrizeSad.src;
			h2Msg.innerHTML = "Try Again " + txtName.value + "!";
		}
		// DO NOT DELETE
		return true;
	}
	else {
		/* EXTRA CHALLENGE - as always, the extra challenge is optional.  But you'll learn a hell of a lot by doing it.  And it makes it a way cooler web app.

		  Doing it this way, in order for the user to get the happy clown, the middle digit of the magic number must equal the index of the ice 
		  cream flavor they selected.  So for example, if they enter "12345" for the magic number, the middle digit is 3.  To win, 
		  they must select the ice cream flavor that has an index of 3.  Since indexes always start with 0, 3 would be the 4th ice cream 
		  flavor in the list (Rocky Road).  Are you with me on this?  Take some time to think about it.
			
			So here's one way to do this:
			Declare a var (iMagicNumber) to hold the magic number.
		
			Use the substr() function to get the middle digit of and assign it to a variable.

			Tip:  Remember that the value property of any object is *a string*.  The substr() function is always available to use on any string.
			Once you get that digit, you have to compare it to the index of the ice cream flavor they selected.  But the index is a number, and substr() returns a string.  So in order to do that comparison, you need a conversion here.  Are you with me?
			Tip:  Recall that the selectedIndex property of the select object gives you the index of the item that is currently selected.

			I suggest you do this in tiny steps, once piece at a time, using alerts like hell to see what you've got.  If you try to do it all at once, you'll end up with a mess of errors that will clean out your Prozac stash.
		*/
		// DO IT!
		var selIceCream = document.getElementById("selIceCream");
		var iMagicNumber;

		iMagicNumber = txtNumber.value;
		
		if (selIceCream.selectedIndex === 0 && iMagicNumber.substr(2, 1) === "0") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 1 && iMagicNumber.substr(2, 1) === "1") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 2 && iMagicNumber.substr(2, 1) === "2") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 3 && iMagicNumber.substr(2, 1) === "3") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 4 && iMagicNumber.substr(2, 1) === "4") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 5 && iMagicNumber.substr(2, 1) === "5") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 6 && iMagicNumber.substr(2, 1) === "6") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 7 && iMagicNumber.substr(2, 1) === "7") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 8 && iMagicNumber.substr(2, 1) === "8") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else if (selIceCream.selectedIndex === 9 && iMagicNumber.substr(2, 1) === "9") {
			imgPrize.src = imgPrizeHappy.src;
			h2Msg.innerHTML = "Congratulations, " + txtName.value + "!";
		
		} else {
			imgPrize.src = imgPrizeSad.src;
			h2Msg.innerHTML = "Try Again " + txtName.value + "!";
		}

		// DO NOT DELETE
		return true;
	} // endif

} // function CheckForPrize
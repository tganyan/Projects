// Still some kinks to iron out. Getting undefined from number 
// input field for the leib series. Need to add reset button to each. 
// Clicking the other two methods before leib changes the value of leib, unless
// leib is handled by a separate click function.


var formula = 'placeholder';
var leibLimit = 1500;
var leibArray = [];
var arrayPosition = 0;


$('.calcBTN').on('click', function() {
	var section = $(this).data('calctype');

	if (section === 'simple') {
		formula = 22/7;
	}
	else if (section === 'super-simple') {
		formula = Math.PI;
	}

	function calculator() {
		$('.calctype-' + section).append(formula);
	}
	calculator();
});

$('.calcBTN2').on('click', function () {

	for(i = 1; i <= leibLimit; i += 2) {		
		leibArray.push(4/i);
	}

	formula = leibArray.reduce(function(pre, cur, currentIndex){
				  return pre+cur*(currentIndex%2 ? -1 : 1);
				 }, 0);

	$('.calctype-' +  $(this).data('calctype')).append(formula);
});
	


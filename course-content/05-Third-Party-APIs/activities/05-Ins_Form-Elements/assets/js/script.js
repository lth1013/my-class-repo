var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  //We use the jQuery .val() method on form elements to retrieve the input values:
  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked');
  console.log(checkedEl);
  var selected = [];

  // https://api.jquery.com/jquery.each/
  // A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
 
  
  // Loop through checked options to store in array
  //Because there can be more than one checked item, we need to select the checked elements and store them in an array using the jQuery $.each() method:
  console.log("*********This*********")
  $.each(checkedEl, function () {
    console.log("this");
    console.log(this.value);
    console.log($(this));
    selected.push($(this).val());
  });
  console.log("*********i, elm*********")
   $.each(checkedEl, function (i, elm) {
    console.log("elm");
    console.log(elm);
    console.log(elm.value);
    console.log($(elm));
    selected.push($(elm).val());
  });
  console.log('Toppings: ', selected.join(', '));
  console.log("*********for loop*********")
  for(var i = 0; i < checkedEl.length; i++){
    console.log("*********")
    console.log(checkedEl[i]);
    console.log(checkedEl[i].value);
    console.log($(checkedEl[i]).val());
    // console.log(checkedEl[i].val());
  }

  // Clear input fields
  //We can clear form elements by using CSS selectors and setting an empty string value to them, but the checkbox requires a different type of reset:
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  // $('input').val('');
  // https://api.jquery.com/prop/
  // Display the checked property and attribute of a checkbox as it changes.
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
//We can use .on('submit', ...) as the click event for the <form> element and pass handleFormSubmit() as the callback function:
formEl.on('submit', handleFormSubmit);

// validation by using javascript

// function validate (){
//  var name = document.getElementById("name").value;
// var company = document.getElementById("company").value;
// var website = document.getElementById("website").value;
// var textarea = document.getElementById("textarea").value;
// var email = document.getElementById("email").value;
// var cNumber = document.getElementById("cNumber").value;
// var country = document.getElementById("country").value;
// var city = document.getElementById("city").value;




// var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// var errors = []


// document.getElementById('nameError').textContent = '';
// document.getElementById('companyError').textContent = '';
// document.getElementById('websiteError').textContent = '';
// document.getElementById('textareaError').textContent = '';
// document.getElementById('emailError').textContent = '';
// document.getElementById('cNumberError').textContent = '';
// document.getElementById('countryError').textContent = '';
// document.getElementById('cityError').textContent = '';



// if (name === '') {
//     errors=['required name'];
//     document.getElementById('nameError').textContent = 'Please enter your name' ;
//     ; 
// }

// if (company === '') {
//     errors=['required company'];
//     document.getElementById('companyError').textContent = 'Please enter your company name';
  
// }

// if (website === '') {
//     errors=['required website'];
//     document.getElementById('websiteError').textContent = 'Please enter your website name';
   
// }

// if (textarea === '') {
//     errors=['required textarea'];
//     document.getElementById('textareaError').textContent = 'required';
    
// }
// if (email === '') {
//     errors=['required email'];
//     document.getElementById('emailError').textContent = 'Please enter your email';

// }

// if (!emailRegex.test(email)) {
//     errors=['required email'];
//     document.getElementById('emailError').textContent = 'Please enter a valid email address';

// }

// if (cNumber === '') {
//     errors=['required cNumber'];
//     document.getElementById('cNumberError').textContent = 'Please enter your contect number';
  
// }

// if (isNaN(cNumber)) {
//     errors=['required cNumber'];
//     document.getElementById('cNumberError').textContent = 'Please enter your contect number';
   
// }

// if (cNumber.length<10) {
//     errors=['required cNumber'];
//     document.getElementById('cNumberError').textContent = 'Please enter your contect number';
   
// }

// if (cNumber.length>11) {
//     errors=['required cNumber'];
//     document.getElementById('cNumberError').textContent = 'Please enter your contect number';
    
// }

// if (country === '') {
//     errors=['required country'];
//     document.getElementById('countryError').textContent = 'Please enter your Country';
   
// }

// if (city === '') {
//     errors=['required city'];
//     document.getElementById('cityError').textContent = 'Please enter your City';
   
// }

// if (errors.length == 0) {   
//     // document.getElementById('submissionMessage');
//     alert("Form is submitted")
// }

// }





// Form validation by using jquary

 function validate (){

// var name = $("#name").val();
// $("#nameError").html('');

var name = $("#name").val();
var company = $("#company").val();
var website = $("#website").val();
var textarea =$("#textarea").val();
var email = $("#email").val();
var cNumber = $("#cNumber").val();
var country = $("#country").val();
var city = $("#city").val();

$("#nameError").html('');
$("#companyError").html('');
$("#websiteError").html('');
$("#textareaError").html('');
$("#emailError").html('');
$("#cNumberError").html('');
$("#countryError").html('');
$("#cityError").html('');


var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var errors = []


if (name === '') {
    errors=['required name'];
    document.getElementById('nameError').textContent = 'Please enter your name' ; 
}

if (company === '') {
    errors=['required company'];
    document.getElementById('companyError').textContent = 'Please enter your company name';
  
}

if (website === '') {
    errors=['required website'];
    document.getElementById('websiteError').textContent = 'Please enter your website name';
   
}

if (textarea === '') {
    errors=['required textarea'];
    document.getElementById('textareaError').textContent = 'required';
    
}
if (email === '') {
    errors=['required email'];
    document.getElementById('emailError').textContent = 'Please enter your email';

}

if (!emailRegex.test(email)) {
    errors=['required email'];
    document.getElementById('emailError').textContent = 'Please enter a valid email address';

}

if (cNumber === '') {
    errors=['required cNumber'];
    document.getElementById('cNumberError').textContent = 'Please enter your contect number';
  
}

if (isNaN(cNumber)) {
    errors=['required cNumber'];
    document.getElementById('cNumberError').textContent = 'Please enter your contact number';
   
}

if (cNumber.length<10) {
    errors=['required cNumber'];
    document.getElementById('cNumberError').textContent = 'Please enter your valid contect number';
   
}

if (cNumber.length>11) {
    errors=['required cNumber'];
    document.getElementById('cNumberError').textContent = 'Please enter your valid contect number';
    
}

if (country === '') {
    errors=['required country'];
    document.getElementById('countryError').textContent = 'Please enter your Country';
   
}

if (city === '') {
    errors=['required city'];
    document.getElementById('cityError').textContent = 'Please enter your City';
   
}

if (errors.length == 0) {   
    // document.getElementById('submissionMessage');
    alert("Form is submitted")
}

}

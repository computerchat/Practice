

$(document).ready(function() {
    // Initialize form validation
    var $registerForm = $("#signupForm");

    $registerForm.validate({
        rules:{
            name:{
                required:true
            },
            company:{
                required:true
            },
            website:{
                required:true
            },
            textarea:{
                required:true
            },
            email:{
                required:true
            },
            cNumber:{
                required:true,  
            },
            country:{
                required:true
            },
            city:{
                required:true
            }

        },
        messages:{
            name: {
                required: "Name is required"
            },
            company: {
                required: " company Name is required"
            },
            website: {
                required: "website is required"
            },
            textarea: {
                required: " required"
            },
            cNumber: {
                required: "Contact Number is required",
            },
            
            country: {
                required: "Country is required"
            },
            city: {
                required: "City is required"
            },
            submitHandler: function() {
                alert("Form submitted successfully!");
                return false;
            }
        }
    });
});




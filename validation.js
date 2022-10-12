jQuery.validator.addMethod("noSpace", function(value, element) {
    return value == '' || value.trim().length != 0;
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) {
    return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
}, "Please enter valid email address!");
$.validator.addMethod(
    "indonesianDate",
    function(value, element) {
        // put your own logic here, this is just a (crappy) example
        return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
    },
    "Please enter a date in the format DD/MM/YYYY"
);
var $registrationForm = $('#registration');
if($registrationForm.length){
    $registrationForm.validate({
        rules:{
            //username is the name of the textbox
            nama: {
                required: true,
            },
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true
            },
            confirm: {
                required: true,
                equalTo: '#password'
            },
            alamat: {
                required: true
            },
            nim : {
                digits: true,
                minlength:10,
                maxlength:10
            },
            tgl: {
                indonesianDate:true
            },
            umur: {
                digits: true,
                range: [0, 100]
            },
            situs: {
                url: true
            },
        },
        messages:{
            nim: {
                required: "Kolom nim harus diisi",
                minlength: "Kolom nim harus terdiri dari 10 digit",
                maxlength: "Kolom nim harus terdiri dari 10 digit"
            },
            email: {
                required: "Alamat email harus diisi",
                email: "Format email tidak valid"
            },
            password: {
                required: 'Please enter password!'
            },
            confirm: {
                required: 'Please enter confirm password!',
                equalTo: 'Please enter same password!'
            },
        },
        errorPlacement: function(error, element)
        {
                error.insertAfter( element );
        }
    });
}
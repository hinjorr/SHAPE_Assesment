$("#signupFrm").validate({
    rules: {
        firstName: {
            required: true,
            maxlength: 12
        },
        lastName: {
            required: true,
            maxlength: 16
        },
        email: {
            required: true
        },
        password: {
            required: true,
            strong_password: true
        },
        confirmPassword: {
            required: true,
            equalTo: "#password"
        },
    },
    messages: {
        confirmPassword: "Password not matched"
    },
    submitHandler: function () {
        registerUser()
    }
})

function registerUser() {
    var dto = {
        FirstName: $("input[name=firstName]").val(),
        LastName: $("input[name=lastName]").val(),
        Email: $("input[name=email]").val(),
        Password: $("input[name=password]").val()
    }
    $.ajax({
        url: "/RegisterUser",
        type: "Post",
        data: dto,
        success: function (resp) {
            alert(resp)
            $("#signupFrm").trigger("reset")
        }
    })
}


$.validator.addMethod("strong_password", function (value, element) {
    let password = value;
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@@#$%&])(.{8,}$)/.test(password))) {
        return false;
    }
    return true;
}, function (value, element) {
    let password = $(element).val();
    if (!(/^(.{8,20}$)/.test(password))) {
        return 'Password must contain atleast 8 characters.';
    }
    else if (!(/^(?=.*[A-Z])/.test(password))) {
        return 'Password must contain at least one uppercase.';
    }
    else if (!(/^(?=.*[a-z])/.test(password))) {
        return 'Password must contain at least one lowercase.';
    }
    else if (!(/^(?=.*[0-9])/.test(password))) {
        return 'Password must contain at least one digit.';
    }
    else if (!(/^(?=.*[@@#$%&])/.test(password))) {
        return "Password must contain special characters";
    }
    return false;
});
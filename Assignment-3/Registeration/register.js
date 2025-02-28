function registerValidate(){
    var name = document.getElementById('name')
    var roll = document.getElementById('roll')
    var dept = document.getElementById('dept')
    var email = document.getElementById('email')
    var address = document.getElementById('address')
    var phone = document.getElementById('phone')

    if(name.value == "" || roll.value == "" || dept.value == "" || email.value == "" || address.value == "" || phone.value == ""){
        alert("Fill All the fields !!");
        name.focus();
        return false;
    }

    var regex_name = /^[a-zA-Z\s]+$/
    if(!regex_name.test(name.value)){
        alert("Enter Alphabets Only !!")
        name.focus();
        return false;
    }

    var regex_roll = /^\d+$/; 
    if (!regex_roll.test(roll.value)) {
        alert("Enter Numbers only !!");
        roll.focus();
        return false;
    }

    if(dept.value == ""){
        alert("Select Department !!")
        return false;
    }

    var regex_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex_email.test(email.value)){
        alert("Enter a valid email address !! ")
        email.focus();
        return false;
    }

    var regex_address = /^[a-zA-Z0-9\s]+$/
    if(!regex_address.test(address.value)){
        alert("Enter valid address!!")
        address.focus();
        return false;
    }
    
    var regex_phone = /^[6-9]\d{9}$/;
    if(!regex_phone.test(phone.value)){
        alert("Enter valid phone number!!")
        phone.focus();
        return false;
    }
    

    alert("Successfully Submitted !!")
    return true;
}
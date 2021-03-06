const form = document.getElementById("form");
const name = document.getElementById("name");
const numeber = document.getElementById("number");
const email = document.getElementById("email");
const enquiry = document.getElementById("enquiry");

form.addEventListener("submit",(e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() 
{

    const nameValue = name.value;
    const numberValue = number.value;
    const emailValue = email.value;
    const enquiryValue = enquiry.value;

    if(nameValue === ""){

        setErrorFor(name, "Name cannot be blank");
    }  else if(!isName(nameValue)){
        setErrorFor(name, "Name is not valid");
        alert("Invalid Name");
    }
    else {
            setSuccessFor(name);
    }
    if (enquiryValue === "") {
        setErrorFor(enquiry,"Field cannot be blank");  
    } else {
        setSuccessFor(enquiry);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
        } 
        else if(!isEmail(emailValue)){
            setErrorFor(email, "Email is not valid");
            alert("Invalid Email");
        
        } else 
        {
            setSuccessFor(email);
        }
    
        if (numberValue === "") {
            setErrorFor(numeber, "Number cannot be blank");
            } 
            else if(!isNumber(numberValue)){
                setErrorFor(numeber, "Number is not valid");
                alert("Invalid Number");
            
            } else 
            {
                setSuccessFor(numeber);
            }

  
}

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    
    small.innerText = message;

    formControl.className = "form-control error";
   
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    
}
function isEmail(email)
{
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}
function isNumber(number)
{
    return /^[0-9]+$/.test(number);
}
function isName(name)
{
    return /^[A-Za-z ]*$/.test(name);
}

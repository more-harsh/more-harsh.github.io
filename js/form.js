//mcyybijnhrbagapm

const submitBtn = document.getElementById('submitBtn');

// Form validation

if(submitBtn)
{
    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();

        let inputname = document.getElementById('inputname');
        let inputemail = document.getElementById('inputemail');
        let inputmessage = document.getElementById('inputmessage');

        if(!inputname.value)
        {
            document.getElementById('namecheck').innerHTML = "**Name field cannot be empty!"
            return false;
        }
        else if(!inputemail.value)
        {
            document.getElementById('emailcheck').innerHTML = "**Email field cannot be empty!"
            return false;
        }
        else if(!inputmessage.value)
        {
            document.getElementById('messagecheck').innerHTML = "**Message field cannot be empty!"
            return false;
        }
        else if(inputname.value && inputemail.value && inputmessage.value)
        {
            document.getElementById('namecheck').innerHTML = "";
            document.getElementById('emailcheck').innerHTML = "";
            document.getElementById('messagecheck').innerHTML = "";


            let emailvalue = inputemail.value;
            if(emailvalue.indexOf('@') <= 0)
            {
                document.getElementById('emailcheck').innerHTML = "**Invalid @ position";
                return false;
            }
            if(emailvalue.charAt(emailvalue.length - 4) != '.' && emailvalue.charAt(emailvalue.length - 3) != '.')
            {
                document.getElementById('emailcheck').innerHTML = "**Invalid . position";
                return false;
            }

            console.log('submit cliked' + inputname.value + " " + inputemail.value + " " + inputmessage.value);
            sendEmail(inputname.value, inputemail.value, inputmessage.value);
        }
        else
        {
            alert('Something went wrong <br> Please try again!');
            return false;
        }
        
        inputname.value = '';
        inputemail.value = '';
        inputmessage.value = '';
        document.getElementById('namecheck').innerHTML = "";
        document.getElementById('emailcheck').innerHTML = "";
        document.getElementById('messagecheck').innerHTML = "";

    })
}


// Function to send email

function sendEmail(inputname, inputemail, inputmessage) {
    var params = {
        name: inputname,
        email: inputemail,
        message: inputmessage,
    };

    const serviceID = 'service_5er5ov6';
    const templateID = 'template_e7i4hak';

    emailjs.send(serviceID, templateID, params)
    .then((message) => {
        alert("Thank you! Your message has been sent.")
    })
    .catch((err) => 
        alert("Something went wrong! \nThank You!")
    );
}
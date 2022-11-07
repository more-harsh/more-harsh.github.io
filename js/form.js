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
    Email.send({
      Host: "smtp.gmail.com",
      Username: "2001harshm@gmail.com",
      Password: "mcyybijnhrbagapm",
      To: '2001harshm@gmail.com',
      From: "2001harshm@gmail.com",
      Subject: `${inputname} sent you a message from website`,
      Body: `Name: ${inputname} <br/> Email: ${inputemail} <br/><br/> Message: ${inputmessage}`,
    })
    .then((message) => {
        alert("Something went wrong! \nThank You!")
    });
}

/*
Email.send({
    SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: '2001harshm@gmail.com',
    From: "2001harshm@gmail.com",
    Subject: `${inputname} sent you a message from website`,
    Body: `Name: ${inputname} <br/> Email: ${inputemail} <br/><br/> Message: ${inputmessage}`,
    })
    .then((message) => {
        alert("Your message sent successfully! \nThank You!")
    });
*/

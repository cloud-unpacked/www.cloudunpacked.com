---
title: "Contact Us"
menu:
  main:
    name: "Contact"
    weight: 25
---

<form id="contact-form" action="https://formspree.io/f/xyyqlpde" method="POST">
	<label for="name">Name:</label>
	<input type="text" name="name" />
	<label for="_replyto">Email:</label>
	<input type="email" name="_replyto" />
	<label for="message">Message:</label>
	<textarea name="message"></textarea>
	<input type="submit" value="Send" />
    <p id="contact-form-status"></p>
</form>

<script type="text/JavaScript">
    var form = document.getElementById( "contact-form" );

    async function handleSubmit( event ){

    	event.preventDefault();
    	var status = document.getElementById( "contact-form-status" );
        var data = new FormData( event.target );
        fetch( event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit)
</script>

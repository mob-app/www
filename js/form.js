function check(mythis)
  	{

  		var name=$('#name').val();
  		var email=$('#email').val();
  		var contact=$('#contact').val();
  		var message=$('#message').val();
  		var form= $(mythis).data('form');
		
		
		if(name == '' || email == '' || contact == '' || message == ''){
			myApp.alert('Details Missing!','Please fill all fields');
			return false;
		}
		
      if(form == 'rabbi')
      var subject="Mobile App: Ask The Rabbi Contact Query";
    else
      var subject = "Mobile App: Suggestion Box";
      		//console.log(contact);
  		$.ajax({
  			url: "http://gicebmedia.com/sahana/thewjc/form.php?query=mail",
  			type:'POST',
  			data:{name: name, email:email, contact:contact, message:message,subject:subject},
  			success: function(result){
  				if(result == 1)
  				myApp.alert('Your mail has been sent successfully!');
  				else
  				myApp.alert('Mail sending failed');
  				
  			},
        error: function(){
          myApp.alert('Unable to send email at this moment!');
        }
  		})
  	}
     	
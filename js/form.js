function check(mythis)
  	{
  		var name=$('#name').val();
  		var email=$('#email').val();
  		var contact=$('#contact').val();
  		var message=$('#message').val();
  		var table= $(mythis).data('table');
      if(table == 'user')
      var subject="Mobile App: Ask The Rabbi Contact Query";
    else
      var subject = "Mobile App: Suggestion Box";
      		//console.log(contact);
  		$.ajax({
  			url: "http://gicebmedia.com/sahana/thewjc/form.php?query=mail",
  			type:'POST',
  			data:{name: name, email:email, contact:contact, message:message,table:table,subject:subject},
  			success: function(result){
  				if(result == 1)
  				alert('Your mail has been sent successfully!');
  				else
  				alert('Mail sending failed');
  				
  			}
  		}) 
  	}
     	

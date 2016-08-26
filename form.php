	<?php
	$request = $_GET['query']; //echo $request;

	if($request == 'mail')
	{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$contact= $_POST['contact'];
		$message = $_POST['message'];
		$table = $_POST['table'];
		$subject = $_POST['subject'];
		$con = mysqli_connect('http://gicebmedia.com/sahana/thewjc/','root','','mobapp');

			$ins = "INSERT INTO `mobapp` . `$table` (`name`,`email`,`contact`,`message`) values('".$name."','".$email."','".$contact."','".$message."') ";
			
			$sql = mysqli_query($con,$ins);
			
			if($sql)
			{
				
				$to = "rabbineiltow@yahoo.com";
				
				$result  = send_mail($email,$to,$subject, $message);
				if($result)
					echo '1';
				else
					echo '0';
			}
			else
			{
				echo 'failed';
			}

	}
	else
	{
		echo 'failed';
	}

	function send_mail($emailfrom,$emailto,$subject, $message)
	{
		
		$header = "From:".$emailfrom."" . "\r\n";
		ini_set('sendmail_from', $emailfrom);

		if(mail($emailto,$subject,$message,$header))
			return true;
		else
			return false;
	}
	?>

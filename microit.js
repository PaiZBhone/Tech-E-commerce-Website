function loginValidate()
		{
		var uname =document.loginform.myname.value;
		var upassword = document.loginform.mypassword.value;
		if (uname== null || uname=="")
		{
			alert("Username is required");
			return false;
		}	
		else if (upassword==null || upassword=="" )
		{
			alert("Enter your password!!");
			return false;
		}
		else if (upassword.length<6)
		{
			alert("Password lenght must be greater than 6");
			return false;
		}
		else if ((uname !="Paing Zaw Bhone") || (upassword !="Inoe12345"))
		{
			alert("Username or password did not match!!");
			return false;
		}
		}

        function myFunction(element, color) {
  element.style.color = color;
  alert("Thanks for following us and be the first one to get latest updates<3");
}

function loginValidate()
		{
		var uname =document.loginform1.myname.value;
		var upassword = document.loginform1.mypsw.value;
		var upasswordc = document.loginform1.mypswconfirm.value;
		var x= document.loginform1.email.value;
			var atposition=x.indexOf("@");
			var dotposition=x.lastIndexOf(".");
			if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
			{
				
				alert ("Enter your email.");
				return false;
			}
		if (uname== null || uname=="")
		{
			alert("Username is required");
			return false;
		}	
		else if (upassword==null || upassword=="" )
		{
			alert("Create new password");
			return false;
		}
		else if (upassword.length<6)
		{
			alert("Password lenght must be greater than 6");
			return false;
		}
		// else if ((uname !="Paing Zaw Bhone") || (upassword !="Inoe12345"))
		// {
		// 	alert("Username or password did not match!!");
		// 	return false;
		// }
		else if ((upassword != upasswordc))
		{
			alert("Password and Confirm password must be same.");
			return false;
		}
		else if ((upasswordc == null))
		{
			alert("Enter your confirm Password.");
			return false;
		}
		
			
		}
		



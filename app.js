const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

function VerifySignup()
	{
		var u = document.getElementById("user1").value;
		var em = document.getElementById("email1").value;
		var pwd = document.getElementById("pwd").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
		if(u =='')
		{
			document.getElementById("u").innerHTML="**Username.";
		}
	
		if(em =='')
		{
			document.getElementById("e").innerHTML="**Email";
		}
		if(pwd=='')
		{
        	document.getElementById("pa").innerHTML="**Password";
		}
		if(!filter.test(em))
		{
			document.getElementById("e").innerHTML="**Invalid";
		}
		if(pwd.length < 6)
		{
			document.getElementById("pa").innerHTML="**Invalid";
		}
}

function VerifySignin(){
	var u = document.getElementById("user").value;
	
	if(u =='')
		{
			document.getElementById("username").innerHTML="**Username.";
		}
	
	var p = document.getElementById("pwd1").value;

	if(p == '')
	{
		document.getElementById("pass").innerHTML="**Password.";
	}

	else
	{
		window.location.href('Home.html');
    }
}
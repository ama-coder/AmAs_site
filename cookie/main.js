function setcookie(name,value,exday){
	var d = new date();
	d.setTime(d.getTime() + (exday*24*60*60*1000));
	var expires = d.toGMTString();
	document.cookie= name+"="+value+";"+expires+";path=/cookie";
};
function getcookie(name){
	var name=name+"=";
	var decodecookie = decodeURLComponent(document.cookie);
	var cook = decodecookie.split(';');
	for(var i=0;i<cook.length;i++)
	{
		var c =cook[i];
		while(c.charAt(0) == ' ')
		{
			c=c.substring(1);
		}
			if(c.indexOf(name) == 0)
			{
					return c.substring(name.length,c.length)
			}
			return "";
	}
};
function checkcookie(){
	var user= getcookie("username");
	if(user != "")
	{
		alert("welcome again"+username);
	}
	else{
		user=prompt("please enter your nikname","");
	
		if(user !="" && user!=null)
		{
			setcookie(user+'s name',3);
		}
	
	}
};

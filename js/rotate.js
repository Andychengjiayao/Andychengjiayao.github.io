
window.onload=function()
{
	function rotate(box,img,dot)
	{
		var that;
		var start=0;
		var index=0;
		var timer=null;
	
		var box=document.getElementById(box);
		var imgs=document.getElementById(img).getElementsByTagName("li");
		var dots=document.getElementById(dot).getElementsByTagName("li");
		
		function roll(that)
		{
			if(that>=0)
			{
				index=that;
			}
			else
			{
				if(start==0)
				{
					index++;
				}
				else
				{
					index--;
					start=0;
				}
			}
			
			if(index>=dots.length) index=0;
			
			if(index<0) index=dots.length-1;
			
			for(var j=0;j<dots.length;j++)
			{
				imgs[j].className="";
				dots[j].className="";
			}
			
			imgs[index].className="now";
			dots[index].className="on";
		}
		
		imgs[index].className="now";
		dots[index].className="on";
		
		for(var i=0;i<dots.length;i++)
		{
			dots[i].index=i;
			
			dots[i].onclick=function()
			{
				that=this.index;
				roll(that);
			}
		}
		
		timer=setInterval(roll,4000);	
		
		box.onmouseover=function()
		{
			clearInterval(timer);
		}
		
		box.onmouseout=function()
		{
			timer=setInterval(roll,4000);
		}
	}
	
	rotate("focus","focus_image","focus_button");
}

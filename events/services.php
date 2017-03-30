<style>
.ev-container {
width:20%;height:200px;padding:1%;
}
.ev-cap-div {
background:rgba(62,13,47,0.6);rgba(144,144,144,0.8);height:20%;position:relative;width:100%;padding:2%;z-index:3;box-shadow:0px -1px 0.6em #fff;
}

.ev-pad {
height:80%;position:relative;width:100%;z-index:2;
}
.ev-img {
position:relative;width:100%;height:100%;z-index:2;
}
.ev1 {
height:100%;overflow:hidden;border:1px solid #fff;box-shadow:0px 0px 0.5em #fff;
}
.ev1:hover {
box-shadow:0px 0px 1em #fff;
}
.ev2{
position:relative;width:100%;height:100%;
}
.ev3 {
position:absolute;width:100%;height:100%;
}
.ev-cap {
margin:0px;text-align:center;font-size:3vh;
}
</style>

<script>
$(function(){
var i,j,k,l;
var t1='<div style="display:flex;margin:1%; 0%;">';
var rows,block,max,count,temp,cont="";
var t2='</div>';
var wid='20%';
var size=$("body").outerWidth();

if(size<1000){if(size<750){if(size<600){size<350?max=1:max=2;}else max=3;}else max=4;}else max=5;
if(size<1000){if(size<750){if(size<600){size<350?wid='100%':wid='50%';}else wid='33%';}else wid='25%';}else wid='20%';


$.get("events/event_list.php",function(data,status){
			if( response != 0)
			{
				var response = JSON.parse(data);
				count = response.length;
				counter = count;
				rows=Math.ceil(count/max);
				for(i = 0; i < rows ; i++)
				{	
				    temp = t1;
					for(j=0;(j<max) && (counter>0);j++)
					{	
						var index = count - counter;
						block='<!--BLOCK--><div class="ev-container"><div class="ev1"><div class="ev2"><div class="ev3"><div class="ev-pad"></div><div class="ev-cap-div"><h3 class="ev-cap">' + response[index].caption + '</h3></div></div><a href="' + "#" + response[index].id + '"><img src="events/images/' + response[index].href + '" alt="Loading Failed" class="ev-img"/></a></div></div></div>';
						temp += block;
						counter--;
					}
					temp+=t2 + "<br/>";
					cont+=temp;
				}
				$("#divs").html(cont);
				$(".ev-container").css("width",wid);			
			}
	
});
	 

	 $(".footer").css("visibility","visible");
	 
});
</script>

<div style="padding:1%;background:#3e0d2f;color:#fff;">
<h2 style="text-align:center;">Our Services</h2>
<hr/>
<div id="divs"></div>
</div>

function random(a,b) {
  return a+Math.floor(Math.random()*b)}

//set start credits
var stats = {bal:300,winbal:0}
const para = document.getElementsByTagName("p"), img = document.getElementsByTagName("img")
var list = [], numb, gs = stats.game;
gs = {"ts":0,"tw":0,"tr":0,"tl":0}
//main wheel code
document.getElementById("spin").onclick = () => {
  //check if you have credits
  if(stats.bal > 4){
  	//takes credits
	  stats.bal -= 5;
	  ugs("ts", 5)
	  //slot images loop
	  img.forEach((v,i) => {
	    numb = (random(1,4)+random(0,4));
	    img[i].src = "./images/"+numb+".jpg"
	    list[i] = numb
	  });
	  //winner check
	  if(list[0] == list[1] && list[1] == list[2]){
	  	//if all 3
	  	para[1].innerHTML = "You got a big match, and earned <b<"+(list[0]*2+5)+"</b> credits!"
	  	ugs("tw", list[0]*2)
	  	stats.winbal += list[0]*2+5
	  } else if (list[0] == list[1]){
	  	//if first 2
	  	para[1].innerHTML = "You got a match, and earned <b>"+(list[0]+5)+"</b> credits!"
	  	ugs("tw", list[0]+5)
	  	stats.winbal += list[0]+5
	  } else {
	  	//if lose
	  	para[1].innerHTML = "Sorry, no winners this time!"
	  	ugs("tl", 5)
	  }
	  //upate credits display
	  para[0].innerHTML = "<b>"+stats.bal+"</b> Credits | <b>"+stats.winbal+"</b> Credits Won!"
	  } else {
	  	//alert if no funds
	  	para[1].innerHTML = "Not enough funds!"
	  }
}
//press enter button to run code
document.addEventListener('keydown', (e) => {
	if(e.code == "Space"){spin()}
});
//take from winnings
function redeem() {
 //add winnings to balance
  stats.bal += stats.winbal;
  ugs("tr", stats.winbal)
  //messages
  para[1].innerHTML = "<b>"+stats.winbal+"</b> Credits has been add to balance!";
  stats.winbal = 0;
  para[0].innerHTML = "<b>"+stats.bal+"</b> Credits | <b>"+stats.winbal+"</b> Credits Won!";
}
//page switcher
function pages(pg) {
	var page = document.querySelectorAll('.page');
 if (page[pg].style.display != 'block') {
     page.forEach((v) => {v.style.display = 'none';})
  page[pg].style.display = 'block';
 }
}
//update game stats
function ugs(a,b){
	var sd = document.querySelector("#stats");
	gs[a] += b;
	
	sd.innerHTML = "<li>Total Spend: "+gs.ts+"</li> <li>Total Won: "+gs.tw+"</li> <li>Total Losed: "+gs.tl+"</li> <li>Total Redeemed: "+gs.tr+"</li>"
}
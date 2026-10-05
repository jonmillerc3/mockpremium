function money(n){return '$'+Math.round(n).toLocaleString()}
function num(n){return Math.round(n).toLocaleString()}
function calcProfile(){
 const annual=+document.getElementById('annual')?.value||6200000;
 const res=+document.getElementById('res')?.value||62;
 const weather=+document.getElementById('weather')?.value||8;
 const margin=+document.getElementById('margin')?.value||0.78;
 const storage=+document.getElementById('storage')?.value||420000;
 const incr=annual*(res/100)*(weather/100)*0.72;
 const gp=incr*margin;
 const peak=Math.min(storage, incr*0.26);
 const coverage=Math.max(0,Math.min(100,88-weather*1.7));
 setText('incGallons', num(incr)); setText('incMargin', money(gp)); setText('peakNeed', num(peak)); setText('coverage', coverage.toFixed(0)+'%');
 setText('weatherOut', weather+'%');
}
function calcRoute(){
 const miles=+document.getElementById('miles')?.value||235;
 const days=+document.getElementById('days')?.value||220;
 const mpg=+document.getElementById('mpg')?.value||6.5;
 const diesel=+document.getElementById('diesel')?.value||3.65;
 const labor=+document.getElementById('labor')?.value||36;
 const savePct=+document.getElementById('savePct')?.value||17;
 const savedMiles=miles*(savePct/100);
 const fuel=savedMiles*days/mpg*diesel;
 const hours=savedMiles/32*days;
 const lab=hours*labor;
 const total=fuel+lab;
 setText('savedMiles',num(savedMiles*days));setText('fuelSave',money(fuel));setText('laborSave',money(lab));setText('routeSave',money(total));setText('savePctOut',savePct+'%');
}
function calcProfit(){
 const customers=+document.getElementById('cust')?.value||5400;
 const rev=+document.getElementById('gm')?.value||1.03;
 const gallons=+document.getElementById('galcust')?.value||815;
 const cost=+document.getElementById('costserve')?.value||620;
 const low=+document.getElementById('lowpct')?.value||14;
 const contribution=gallons*rev-cost;
 const lowCount=customers*low/100;
 const opportunity=lowCount*210;
 setText('avgContrib',money(contribution));setText('lowCount',num(lowCount));setText('marginOpp',money(opportunity));setText('lowOut',low+'%');
}
function setText(id,v){const el=document.getElementById(id);if(el)el.textContent=v}
document.addEventListener('input',()=>{calcProfile();calcRoute();calcProfit()});
document.addEventListener('DOMContentLoaded',()=>{calcProfile();calcRoute();calcProfit()});

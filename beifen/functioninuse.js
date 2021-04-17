function findTime() {
  var target_date = new Date();
  target_date.setMonth(target_date.getMonth() - 6);  
  document.getElementById("time_button").innerHTML = "Showing records in the past six month";
  return target_date
}

function calCounts(Access, target_date) {
  return Access.map(calTimes, target_date)
}
  
function calTimes(access, target_date) {
  var date = Date.parse(access.accessDate);
  console.log("target_date: " + target_date)
  target_date = Date.parse(target_date);
  console.log("target_date: " + target_date)
  if (date < target_date){
    return 0
  } else {
    return access.cnt
  }
}
  
function getColorFromTimesofAccess(times,max){
  if(times<Math.round(max*0.2)){
    return "yellow"
  } else if (times<Math.round(max*0.5)) {
    return "orange"
  } else if (times < Math.round(max*0.8)) {
    return "red"
  } else {
    return "blue"
  }
}

function dataToReport(data){
  var id_access=[];
  var temp={};
  for(let i = 0; i < data.length; i++){
    temp={
      'occid':data.occid,
      'count':data.sum_count,
    }
    id_access.push(temp);
  }
  return id_access;
}
//<a href="report.html" target="view_window"><div id="report"></div></a>     弹出新窗口
/*
function createTable(data){
	var tableNode=document.createElement("table");
	tableNode.setAttribute("id","table")
	var row=data.lenghth();
	if(row<=0 || isNaN(row) ){
		alert("Data Error!");
    return;
	}
	for(var i=0;i<row;i++){
		var trNode=tableNode.insertRow();
		for(var j=0;j<2;j++){
      var tdNode=trNode.insertCell();
      if(j===0){
        tdNode.innerHTML=data[i].occid;
      }else{
        tdNode.innerHTML=data[i].count;
      }
		}
	}
	document.getElementById("report").appendChild(tableNode);
}
*/
export {findTime, calCounts, calTimes, getColorFromTimesofAccess,dataToReport};
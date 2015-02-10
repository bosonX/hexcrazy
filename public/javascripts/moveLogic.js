//y-x
function neighbours(point,middle_point){
	var a = point.split('-');
	var y = parseInt(a[0],10);
	var x = parseInt(a[1],10);
	var middle_point = parseInt(middle_point,10);
	var all_neighbours = [];
	if(y<middle_point){//upper part
		all_neighbours.push((y-1) + "-" + (x-1));
		all_neighbours.push((y-1) + "-" + (x));
		all_neighbours.push((y) + "-" + (x-1));
		all_neighbours.push((y) + "-" + (x+1));
		all_neighbours.push((y+1) + "-" + (x));
		all_neighbours.push((y+1) + "-" + (x+1));
	}
	else if(y>middle_point){//lower part
		all_neighbours.push((y-1) + "-" + (x));
		all_neighbours.push((y-1) + "-" + (x+1));
		all_neighbours.push((y) + "-" + (x-1));
		all_neighbours.push((y) + "-" + (x+1));
		all_neighbours.push((y+1) + "-" + (x-1));
		all_neighbours.push((y+1) + "-" + (x));
	}
	else{//middle row
		all_neighbours.push((y-1) + "-" + (x-1));
		all_neighbours.push((y-1) + "-" + (x));
		all_neighbours.push((y) + "-" + (x-1));
		all_neighbours.push((y) + "-" + (x+1));
		all_neighbours.push((y+1) + "-" + (x-1));
		all_neighbours.push((y+1) + "-" + (x));
	}
	return all_neighbours;
}

function check_status(point,middle_point){
	var all_neighbours = neighbours(point,middle_point);
	//{"y-x":status,"y'-x'":status'}
	var result = [];
	for(var i =0; i < all_neighbours.length; i++){
		var current = all_neighbours[i];
		if($('#'+current)[0] && $('#'+current)[0].dataset.status==="0"){
			result.push(current)
		}
	}
	return result;
}



function mono_strict_walk(starting_point,middle_point){
	$('#'+starting_point).attr("fill","#88292F");
	$('#'+starting_point).attr("data-status","1");
	var rand = Math.floor(Math.random() * check_status(starting_point,middle_point).length);
	//console.log(rand,check_status(starting_point));
	console.log(check_status(starting_point,middle_point)[rand]);
	current = check_status(starting_point,middle_point)[rand];
}

var current = "30-30";
var middle_point = 30;
$('#'+current).attr('fill','#88292F');


$('#step').click(function(){
	mono_strict_walk(current,middle_point);
})

function walk_of_ten(reset){
	var i = 0;
	while (i < 10){
		while(check_status(current,middle_point).length>0){
			mono_strict_walk(current,middle_point);
		}
		current = middle_point + '-' + middle_point;
		console.log(i);
		i ++;
	}
	setTimeout(reset,500);
}

function reset(){
	$('circle').attr("fill","#3F7CAC");
	$('circle').attr("data-status","0");
	var current = "30-30";
	var middle_point = 30;
	$('#'+current).attr('fill','#88292F');
}

setInterval(function(){
	walk_of_ten(reset)},500)
//walk_of_ten(reset);
// var start_time = Date.now();
// while(true){
// 	while(Date.now()-start_time > 1000){

// 	}
// }

// if(check_status(current).length>0){
// 	window.clearInterval(run);
// }
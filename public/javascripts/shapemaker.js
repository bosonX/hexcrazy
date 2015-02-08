function hexmaker(radius,hex_length){
	var middle_length = hex_length * 2 - 1;
	var row_lengths = [];
	var root_3 = Math.pow(3,0.5);
	for(var i=hex_length; i<=middle_length; i++){
		row_lengths.push(i);
	}
	for(var i = middle_length - 1; i >= hex_length; i--){
		row_lengths.push(i);
	}
	var circles = [];
	for(var y= 0; y < middle_length; y++){
		for(var x=0; x<row_lengths[y]; x++){
			var current = {};
			current.cx = radius * x * 2 + radius + Math.abs(y + 1 - hex_length) * radius;
			current.cy = radius * y * root_3 + radius;
			current.id = (y+1)+"-"+(x+1);
			circles.push(current);
		}
	}

	var svg_height = radius * 2 * (hex_length * 2 + 1);
	var svg_width = svg_height;

	var total_units = 1;
	for(var i = 0 ; i < hex_length; i++){
		total_units += 6 * i;
	}
	
	
	return {total_units:total_units , svg_width : svg_width, svg_height : svg_height, radius : radius, circles : circles};
}

module.exports.hexmaker = hexmaker;
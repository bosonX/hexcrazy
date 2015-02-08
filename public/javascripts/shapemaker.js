//class of Hex
function HexContainer(radius,hex_length){
	var root_3 = Math.pow(3,0.5);
	this.radius = radius;
	this.hex_length = hex_length;
	this.svg_width = this.radius * 2 * (this.hex_length * 2 - 1);
	this.svg_height = (this.svg_width - 2 * this.radius) * root_3 / 2 + 2 * this.radius;
	this.total_units = this.calculateTotalUnits(this.hex_length);
	this.row_lengths = this.calculateRowLengths(this.hex_length);
	this.circles = this.calculateAllCircles(this.radius, this.hex_length);
}

HexContainer.prototype.calculateTotalUnits = function(hex_length){
	return 6 * (hex_length) * (hex_length - 1) / 2 + 1;
}

HexContainer.prototype.calculateRowLengths = function(hex_length){
	var middle_length = hex_length * 2 - 1;
	var row_lengths = [];
	for(var i=hex_length; i<=middle_length; i++){
		row_lengths.push(i);
	}
	for(var i = middle_length - 1; i >= hex_length; i--){
		row_lengths.push(i);
	}
	return row_lengths;
}

HexContainer.prototype.calculateAllCircles = function(radius,hex_length){
	var root_3 = Math.pow(3,0.5);
	var middle_length = hex_length * 2 - 1;
	var circles = [];
	for(var y= 0; y < middle_length; y++){
		for(var x=0; x<this.row_lengths[y]; x++){
			var current = {};
			current.cx = radius * x * 2 + radius + Math.abs(y + 1 - hex_length) * radius;
			current.cy = radius * y * root_3 + radius;
			current.id = (y+1)+"-"+(x+1);
			circles.push(current);
		}
	}
	return circles;
}

module.exports.HexContainer = HexContainer;
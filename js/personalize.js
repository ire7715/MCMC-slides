$(document).ready(drawArc);

function drawArc(){
	var vis = d3.select("svg#MC-demo");
	var pi = Math.PI;
	    
	var arc = d3.svg.arc()
		.innerRadius(vis.attr("width") - 4)
		.outerRadius(vis.attr("width"))
		.startAngle(0) //converting from degs to radians
		.endAngle(pi / 2); //just radians
	    
	vis.append("path")
		.attr("d", arc)
		.attr("fill", "black")
		.attr("transform", "translate(-1, " + (vis.attr("height") * 1 + 1) + ")");
}

function genMCDemo(){
	var vis = d3.select("svg#MC-demo");
	vis.html("");
	drawArc();

	var num = $('form.mc-demo input[type=number]').val();
	var A = 0;
	for(var i = 0; i < num; i++){
		var x = Math.random() * vis.attr('width');
		var y = Math.random() * vis.attr('height');
		vis.append("circle")
			.attr("cx", x)
			.attr("cy", y)
			.attr('r', '3')
			.style('fill', 'red');
		y = vis.attr('height') - y;
		if(Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(vis.attr("width"), 2))
			A++;
	}
	$('#mcdemoA').html(A);
	$('#mcdemoB').html(num);
	$('#mcdemoC').html(4 * A / num);
}
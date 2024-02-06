
	//define an array of objects for cities and populations
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{	
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	
	    //create the table element
		var table = document.createElement("table");

		//create a header row
		var headerRow = document.createElement("tr");
	
		//add the "City" and "Population" columns to the header row
		headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
		//add the row to the table
		table.appendChild(headerRow);
	
		//loop to add a new row for each city
		for(var i = 0; i < cityPop.length; i++){
			//assign longer html strings to a variable
			var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
			//add the row's html string to the table
			table.insertAdjacentHTML('beforeend',rowHtml);
		};
		//use method chaining to add the table to the mydiv element
		document.querySelector("#mydiv").appendChild(table);
	
	//function to add City Size column and populate based on
	//population data conditions
	function addColumns(){
		//select all table rows and for each row follow if/else
		document.querySelectorAll("tr").forEach(function(row, i){
			//for the header row, insert column name
			if (i == 0){
				
				row.insertAdjacentHTML("beforeend", "<th>City Size</th>");
			} else {
			//for every other row, insert value based on population 	
				var citySize; 
	
				if (cityPop[i-1].population < 100000){
					citySize = 'Small';
					
				} else if (cityPop[i-1].population < 500000){
					citySize = 'Medium';
	
				} else {
					citySize = 'Large';
				};
	
				row.insertAdjacentHTML("beforeend",'<td>' + citySize + '</td>');
			};
		});
		
	};
	//execute addColumns
	document.addEventListener('DOMContentLoaded',addColumns)	
	//function to change color when mouse hovers over a new table row
	function addEvents(){
		//add event listener when mouse hovers over header row
		document.querySelector("tr").addEventListener("mouseover", addEvents);
			//color variable will change rgb values randomly
			var color = "rgb(";
	
			for (var i=0; i<3; i++){
	
				var random = Math.round(Math.random() * 255);
	
				color += random;
	
				if (i<2){
					color += ",";
				
				} else {
					color += ")";
			};
			//change the color of the text using .style.color 
			//set it equal to the color variable 
			document.querySelector("#mydiv").style.color = color;
		};
	};
	//  execute addEvents
	document.addEventListener('DOMContentLoaded',addEvents)
	//function to create alert 
	function clickme(){

		alert('Hey, you clicked me!');
	};
	//add the event listener to execute clickme function when table is clicked
	document.querySelector("table").addEventListener("click", clickme)





	
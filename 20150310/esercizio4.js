
// eserczio 4

function select (data, key, val) {
	var selected = [];
	for (i = 0; i<data.length; i++) {
		for (j = 0; j<val.length; j++) {
			if (data[i][key] === val[j])
				selected.push(data[i]);	
		}
		
	}
	return selected;
}
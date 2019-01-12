var lines = []
let code;
var line = 0;
var addingLines = 1;
if(addingLines == 1) {
	var code = prompt("Enter code to use. (Enter nothing to stop)");
	line++;
}
if(code == "") {
	addingLines = 0;
	
} else {
	document.write("LINE " + line + ":" + code)
	lines.push(code)
}

exports.lines = lines;
exports.line = line;
exports.addingLines = addingLines;
exports.code = code;



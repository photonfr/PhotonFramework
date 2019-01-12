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

const _lines = lines;
export { _lines as lines };
const _line = line;
export { _line as line };
const _addingLines = addingLines;
export { _addingLines as addingLines };
const _code = code;
export { _code as code };



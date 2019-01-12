
function runCode() {
    var _item = 0;
    var _line = 0;
    while(i < lines.length()) {
        var command = "";
        while(i < str.length()) {
            var char = lines[_item].charAt(_line)
            command = command + char + ""
            _item++;
        }
        _line++;
    }
    console.log(command)
}

export default runCode();
function translation() {

var lResult = {};
var nResult = {};

var lValues = [{key:"a", value:".-"},{key:"b", value:"-..."}, {key: "c", value: "-.-."}, {key: "d", value: "-.."}, {key: "e", value: "."}, {key: "f", value: "..-."},
{key:"g", value: "--.-"}, {key: "h", value: "...."}, {key: "i", value: ".."}, {key: "j", value: ".---"}, {key:"k", value: "-.-"}, {key:"l", value: ".-.."},
{key: "m", value: "--"}, {key:"n", value: "-."}, {key: "o", value: "---"}, {key: "p", value: ".--."}, {key: "q", value: "--.-"}, {key: "r", value: ".-."},
{key: "s", value: "..."}, {key: "t", value: "-"}, {key: "u", value: "..-"}, {key: "v", value: "...-"}, {key: "w", value: ".--"}, {key: "x", value: "-..-"},
{key: "y", value: "-.--"}, {key: "z", value: "--.."}];

var nValues = [{key: "1", value: ".----"}, {key: "2", value: "..---"}, {key: "3", value: "...--"}, {key: "4", value: "....-"}, {key: "5", value: "....."},
{key: "6", value: "-...."}, {key: "7", value: "--..."}, {key: "8", value: "---.."}, {key: "9", value: "----."}, {key: "0", value: "-----"}];

var lLength = lValues.length;
var nLength = nValues.length;


for(var i = 0; i < lValues.length; i++)
{
    lResult[lValues[i].key] = lValues[i].value;
}

for(var j = 0; j < nValues.length; i++)
{
	nResult[nValues[j].key] = nValues[j].value;
}

console.log(lResult);
console.log(nResult);


}
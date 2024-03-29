var string = prompt("Enter string : ");


// time complexity  = n

function frequency(word){
    count={}; // dictionary
    for(var i = 0 ; i <word.length ; i++){
        var char  = word.charAt(i);
        if(count[char]){
            count[char]++;
        }
        else{
            count[char] = 1;
        }
    }
   return count;
}
var result = frequency(string);
var output = ""
for (var key in result){
    output += key+":"+result[key]+" , ";
}
document.write("frequency list : ","<br>",output);

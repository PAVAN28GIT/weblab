var string = prompt("Enter sentence : ");

document.write("you entered : ",string,"\n");

function longest(string){
    var words = string.split(" ");
    var len = words[0].length ;
    for (var i = 1;i<words.length ;i++){
        if (len<words[i].length){
            len = words[i].length;
        }
    }
    return len;
}

document.write("length of longest word is : ", longest(string));




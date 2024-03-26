var num = prompt("enter number : ");
var string = prompt("enter sentence: ");

function long_words(string,num){
    var words = string.split(" ");
    for (var i = 0;i<words.length ;i++){
        if (words[i].length > num){
            document.write(words[i],"\n");
        }
    }

}

long_words(string,num);

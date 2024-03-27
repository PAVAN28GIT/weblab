var string = prompt("enter sentence : ");

document.write("input : ",string,"<br>");

var op = string.split("");

var reverse = string.split(" ").reverse().join(" ");


document.write("reverse : ",reverse,"<br>");

var words = reverse.split(" ");

document.write("<br> final: ");

for (var i = 0 ;i<words.length;i++){
    document.write(words[i].split("").reverse().join("")," ");
}



var char = prompt("Enter character : ");
char = char.toLowerCase();
var vowel = ['a','e','i','o','u'];


if (vowel.includes(char)){
    document.write("True");
}
else{
    document.write("false");
}

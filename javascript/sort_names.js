
var list = []

while(true){
    var names = prompt("enter your name : ");
    if(names == null || names =="")break;
    list.push(names);
}

//sorts alphabetically
list.sort()

// list.forEach( function(item){ 
//     document.write(item+"<br>");
// });
document.write(list);

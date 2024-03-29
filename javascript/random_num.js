var num = prompt("enter how many random numbers u want : ");

var min = 0;
var max = 100;
var arr=0;
for(var i = 0 ; i <num ; i++){
    var rand = Math.floor(Math.random()*(max-min+1));
    arr+=rand;
    document.write(rand,"<br>");
}
//math.random() generate bw 0 and 1 ..so to scale it up bw 0 and 100...we do max-min... to include 100 we do +1

//math.floor round it up
var result = arr/num;
document.write("average is ",result)

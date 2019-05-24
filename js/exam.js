
function change1(){
    document.getElementById("dingz").style.display="none";
    document.getElementById("made").style.backgroundColor="white";
    document.getElementById("gaoj").style.display="inline";
    document.getElementById("high").style.backgroundColor="pink";

    var content_in = document.getElementById("content_in");
    var itemli1 = content_in.getElementsByTagName("li");

    for(var i = 0; i < itemli1.length; i++) {

        itemli1[i].index = i;
        itemli1[i].onclick = function(i) {
            alert("高级版"+"\r\n"+"高级版");
        }
    }
}
function change2(){
    document.getElementById("gaoj").style.display="none";
    document.getElementById("high").style.backgroundColor="white";
    document.getElementById("dingz").style.display="inline";
    document.getElementById("made").style.backgroundColor="pink";

    var content_inner = document.getElementById("content_inner");
    var itemli2 = content_inner.getElementsByTagName("li");

    for(var i = 0; i < itemli2.length; i++) {

        itemli2[i].index = i;
        itemli2[i].onclick = function(i) {
            alert("定制版"+"\r\n"+"定制版");
        }
    }
}




var NOS = [];

function submit() {
    for (var i = 1; i <= 6; i++) {
        console.log("name_of_the_student_" + i);
        var Ss = document.getElementById("name_of_the_student_" + i).value;
        console.log(Ss);
        NOS.push(Ss);

    }
    var LOS = NOS.length;
    var DN = [];
    for (var j = 0; j < LOS; j++) {
DN.push("<h4>Name : "+NOS[j]+"</h4>")


    }
    console.log(DN);
    document.getElementById("display_name_with_commas").innerHTML=DN;
    var DNWC=DN.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=DNWC;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block"; 
}

function sorting() {
    NOS.sort();
    var LOS = NOS.length;
    var DN = [];
    for (var j = 0; j < LOS; j++) {
DN.push("<h4>Name : "+NOS[j]+"</h4>")


    }
    console.log(DN);
    document.getElementById("display_name_with_commas").innerHTML=DN;
    var DNWC=DN.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=DNWC;

}

function new_update() {}
var option;
var i = 0;
var txt = "trying to initializing connection to ip address...                                                                              Connection Established Successfully                                                                              /usr/share/texlive/textmf-dist/scripts/splitindex/perl/splitindex.pl /*get every user's data from the pc's file*/ /usr/share/texlive/textmf-dist/scripts/sty2dtx/sty2dtx.pl /*Accessing the main folder 'Kartik'*/ /usr/share/texlive/textmf-dist/scripts/svn-multi/svn-multi.pl /*Opening user 'Kartik' from folder 'Users'*/";
var speed = 50; /* The speed/duration of the effect in milliseconds */

function ok(){
    open("open.html","","height=200,width=400,scrollbars=no");
}

function building(){
    document.getElementById("dp").style.display = "none";
    option = "Laptop/PC";
    document.getElementById("option").innerHTML = option;
    document.getElementById("option").style.fontWeight = 900;
    document.getElementById("option").style.color = "white";
    document.getElementById("option").style.display = "block";
}

function load(){
    document.getElementById("option").style.display = "none";
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hacking_area").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
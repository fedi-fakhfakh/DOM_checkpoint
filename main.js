//one
var no=0;
var sumo=no*60;
document.getElementById("totalo").innerHTML;
var pt=document.getElementById("totalo");
document.getElementById("b").innerHTML;
var po=document.getElementById("b");
po.innerHTML=no;
var btnop = document.querySelector('#addo');
btnop.addEventListener('click', ado);
function ado(){
  no=no+1;
po.innerHTML=no;
sumo=no*60;
pt.innerHTML='$'.concat(sumo);
pd.innerHTML='$'.concat(sumo+sumt+sumf);
}
var btnos = document.querySelector('#subbo');
btnos.addEventListener('click', subo);
function subo(){
    if(no<=0){
        no+=1;
    }
  no=no-1;
po.innerHTML=no;
sumo=no*60;
pt.innerHTML='$'.concat(sumo);
pd.innerHTML='$'.concat(sumo+sumt+sumf);
}
//two
var nt=0;
var sumt=nt*60;
document.getElementById("totalt").innerHTML;
var pT=document.getElementById("totalt");
document.getElementById("c").innerHTML;
var pf=document.getElementById("c");
pf.innerHTML=nt;
var btntp = document.querySelector('#addt');
btntp.addEventListener('click', adt);
function adt(){
  nt=nt+1;
pf.innerHTML=nt;
sumt=nt*60;
pT.innerHTML='$'.concat(sumt);
pd.innerHTML='$'.concat(sumo+sumt+sumf);
}
var btnts = document.querySelector('#subbt');
btnts.addEventListener('click', subt);
function subt(){
    if(nt<=0){
        nt+=1;
    }
  nt=nt-1;
pf.innerHTML=nt;
sumt=nt*60;
pT.innerHTML='$'.concat(sumt);
pd.innerHTML='$'.concat(sumo+sumt+sumf);
}
//three
var nf=0;
var sumf=nf*60;
document.getElementById("totalf").innerHTML;
var ps=document.getElementById("totalf");
document.getElementById("d").innerHTML;
var pe=document.getElementById("d");
pe.innerHTML=nf;
var btnfp = document.querySelector('#addf');
btnfp.addEventListener('click', adf);
function adf(){
    nf=nf+1;
  pe.innerHTML=nf;
  sumf=nf*60;
  ps.innerHTML='$'.concat(sumf);
  pd.innerHTML='$'.concat(sumo+sumt+sumf);
  }var btnfs = document.querySelector('#subbf');
  btnfs.addEventListener('click', subf);
  function subf(){
      if(nf<=0){
          nf+=1;
      }
    nf=nf-1;
  pe.innerHTML=nf;
  sumf=nf*60;
  ps.innerHTML='$'.concat(sumf);
  pd.innerHTML='$'.concat(sumo+sumt+sumf);
  }
  document.getElementById("sum").innerHTML;
  var pd=document.getElementById("sum");
pd.innerHTML='$'.concat(sumo+sumt+sumf);
document.querySelector('#purchase').addEventListener('click', final);
function final(){
    var sumall=sumo+sumt+sumf;
    alert(sumall)
    no=nt=nf=0;
    ps.innerHTML='$'.concat(0);
  pd.innerHTML='$'.concat(0);
  pe.innerHTML=0;
  pT.innerHTML='$'.concat(0);
  pf.innerHTML=0;
  po.innerHTML=0;
  pt.innerHTML='$'.concat(0);
}
document.getElementById("three").addEventListener('click', eraseo);
document.getElementById("two").addEventListener('click', eraset);
document.getElementById("one").addEventListener('click', erasef);
function eraseo(){
    document.getElementById("FIRSTDIV").remove();
}
function eraset(){
  document.getElementById("SECONDDIV").remove();
}
function erasef(){
  document.getElementById("THIRDDIV").remove();
}
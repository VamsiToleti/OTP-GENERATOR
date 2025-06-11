alert("hi user");
let ip=document.querySelectorAll('input');
for(let i=0;i<ip.length;i++){
    ip[i].style.width="24px";
}
let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let otp=Math.ceil(Math.random()*9999);
    otp=String(otp);
    for(let i=0;i<otp.length;i++){
        ip[i].value=otp[i];
    }
})
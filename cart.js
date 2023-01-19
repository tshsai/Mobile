let cart_count=0;
let pro1_count=0;
let pro2_count=0;
let pro1_add=document.getElementById("add_pro1");
let pro2_add=document.getElementById("add_pro2");
let pro1_delete=document.getElementById("delete_pro1");
let pro2_delete=document.getElementById("delete_pro2");
pro1_add.addEventListener('click',(e)=>{
    e.preventDefault();
    cart_count=parseInt(cart_count)+1;
    pro1_count=parseInt(pro1_count)+1;
    document.getElementById("cart").innerHTML=cart_count;
    document.getElementById("pro1").innerHTML=pro1_count;

})
pro2_add.addEventListener('click',(e)=>{
    e.preventDefault();
    cart_count=parseInt(cart_count)+1;
    pro2_count=parseInt(pro2_count)+1;
    document.getElementById("cart").innerHTML=cart_count;
    document.getElementById("pro2").innerHTML=pro2_count;

})
pro1_delete.addEventListener('click',(e)=>{
e.preventDefault();
if((parseInt(pro1_count)-1)>=0){
    cart_count=parseInt(cart_count)-1;
    pro1_count=parseInt(pro1_count)-1;
}
document.getElementById("cart").innerHTML=cart_count;
document.getElementById("pro1").innerHTML=pro1_count;
})

pro2_delete.addEventListener('click',(e)=>{
    e.preventDefault();
    if((parseInt(pro2_count)-1)>=0){
        cart_count=parseInt(cart_count)-1;
        pro2_count=parseInt(pro2_count)-1;
    }
    document.getElementById("cart").innerHTML=cart_count;
    document.getElementById("pro2").innerHTML=pro2_count;
    })
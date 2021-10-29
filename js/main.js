 var imgs=[
        "img/p1.jpg.webp",
        "img/p2.jpg.webp",
        "img/p3.jpg.webp",
        "img/p4.jpg.webp",
        "img/p5.webp",
        "img/p6.jpg.webp",
        "img/p7.webp",
        "img/p8.jpg.webp",
        "img/p9.jpg.webp",
 ]
function displayproduct(){
    var temp="";
    for(var i=0;i<imgs.length;i++){
    temp+=`<div class="product" id="product_div">
    <div class="product_img" id="img">
        <img src="`+imgs[i]+`" alt="">
    </div>
    <div class="product_content">
        <h4><a href="#">minimal design</a></h4>
        <p>Animated, portfolio</p>
    </div>
</div>`
    }
    document.getElementById("product_row").innerHTML=temp;
}
displayproduct();
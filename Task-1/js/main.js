

let cartList=document.querySelector(".cart-list");
let cart =document.querySelector(".cart");
let notaficitions =document.querySelector(".notaficitions");
let massage =document.querySelector(".massage");
let show =document.querySelector(".show");
let product =document.querySelector(".product");
let count =document.querySelector(".count");
let result =document.querySelector(".result");
let pro_del=document.querySelector(".pro-del");









// menu cart of products
cart.onclick=function(){
    cartList.classList.toggle("block");
    cartList.classList.toggle("none");
}





let int = 0 ; // for notaficitions and counter 
let sureBtn=document.querySelector(".sure");
notaficitions.classList.add("none")

notaficitions.innerHTML=int
    sureBtn.onclick=function(){
        notaficitions.classList.add("block");
        notaficitions.classList.remove("none");
        // pro_del.onclick=function(){

        //     console.log("aaa")
            
        // }
        
}
if(int==0){
    massage.classList.remove("none");
    show.classList.add("none");

}





//##########
// list menu of pages in mobile mode 
let bars = document.querySelector(".bar");
let list = document.querySelector(".list");
let container = document.querySelector(".container");
let xClose =document.querySelector(".x-close");

bars.onclick= function(){
    list.style.cssText=" transform: translateX(0);"
    list.classList.toggle("shadow");
    cartList.classList.add("none");
}

xClose.onclick=function(){
    list.style.cssText=" transform: translateX(-1-0);"
    list.classList.toggle("shadow");
}

//###############
// counter 

let minis = document.querySelector(".minis");
let counter = document.querySelector(".counter");
let plus =document.querySelector(".plus");
let btnPlus=document.querySelector(".btn-plus")
counter.innerHTML=`${int} `;

plus.onclick=function(){
    int+=1;
    counter.innerHTML=`${int} `;
    sureBtn.onclick=function(){
    notaficitions.innerHTML=`${int}`;
    notaficitions.classList.add("block");
        notaficitions.classList.remove("none");
        if(int==0){
            massage.classList.remove("none");
            show.classList.add("none");
        }else{
            massage.classList.add("none");
            show.classList.remove("none");
            count.innerHTML= `$125.00 x ${int} `;
            let total= 125 * int;
            result.innerHTML= `$ ${total} `;
            pro_del.onclick=function(){

                show.classList.add("none");
                massage.classList.add("block")
                massage.classList.remove("none")
                
            }
            
        }
        //##################
//products in the list

    
    }
    
}
minis.onclick=function(){
    if(int>0){
    int-=1;
    }
    counter.innerHTML=`${int} `;
    sureBtn.onclick=function(){
    notaficitions.innerHTML=`${int}`;
    notaficitions.classList.add("block");
        notaficitions.classList.remove("none");
        if(int==0){
            massage.classList.remove("none");
            show.classList.add("none");
        
        }else{
            massage.classList.add("none");
            show.classList.remove("none");
            count.innerHTML= `$125.00 x ${int} `;
            result.innerHTML= 125 * int;
            let total= 125 * int;
            result.innerHTML= `$ ${total} `;
        }
        //##################
//products in the list


    

    }
}






//###############
// changin' pictures by arrow in mobile mode 

let arrowRight = document.querySelector(".arrow-right");
let arrowLeft = document.querySelector(".arrow-left");
let pictureViewer =document.querySelector(".picture");


// an array contants a extanstions of photos
let photos =["ecommerce-product-page-main/images/image-product-1.jpg","ecommerce-product-page-main/images/image-product-2.jpg"
            ,"ecommerce-product-page-main/images/image-product-3.jpg","ecommerce-product-page-main/images/image-product-4.jpg"]
            // crating a tag img ele
let image = document.createElement("img");

// put img as child to picture div
pictureViewer.prepend(image);

image.setAttribute('src',photos[0]); // adding src to the tag
let i = 0 ;
// processing.......
arrowRight.onclick=function(){
    if(i<photos.length){
        
        i++;
    image.setAttribute('src',photos[i]);
    }
 if(i >= photos.length){
     i=0;
     image.setAttribute('src',photos[i]);
 }

}
arrowLeft.onclick=function(){
    if(i<=0){
        i=photos.length+1;
        i--;
        
    }

    if(i>0){
        i--;
        image.setAttribute('src',photos[i]);
        
    }
}
// available to changing





 //#########
  // moving active class for photos in desktop mode

let imgs = document.querySelectorAll(".wrap li img ");
let arr_of_index=[]
for(let j=0;j<imgs.length;j++){
    arr_of_index.push(imgs[j]);
}

imgs.forEach((ele) => {
    ele.onclick=function(ele){

        // remove active class from all li 
        imgs.forEach((ele) => {
            ele.classList.remove("active");
        });
        //add active class to current li
        ele.currentTarget.classList.add("active");
         index=arr_of_index.indexOf(this);

        image.setAttribute('src',photos[index]); // adding src to the tage
        
    };
});



//#################

// light box shadow


let page = document.querySelector(".page"); // body 
let wrap_shadow=document.createElement("div") // box of light

wrap_shadow.classList.add("floting"); 

//html code stracture
wrap_shadow.innerHTML=` 
<div class="  flex wrap-arrow">
<div class="arrow-left light-left-arrow "><img src="ecommerce-product-page-main/images/icon-previous.svg" alt="icon-previous"></div> 
 <div class=" arrow-right light-right-arrow "><img src="ecommerce-product-page-main/images/icon-next.svg" alt="icon-next"></div> 
</div>

<div class="close-btn" >
<img src="ecommerce-product-page-main/images/icon-close.svg" alt="img-pro"> 
</div>

<div class="picture flex light-picture" >

</div>


<ul class="wrap flex">
<li class="box"><img class="active" src="ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="img"></li>
<li class="box"><img src="ecommerce-product-page-main/images/image-product-2-thumbnail.jpg" alt="img"></li>
<li class="box"><img src="ecommerce-product-page-main/images/image-product-3-thumbnail.jpg" alt="img"></li>
<li class="box"><img src="ecommerce-product-page-main/images/image-product-4-thumbnail.jpg" alt="img"></li>
</ul>
`



let image2 = document.createElement("img"); // ctrating an ele 

image2.setAttribute('src',photos[0]); // adding src to the tag



// beginning when clicking on main photo
pictureViewer.onclick = function(){
    // adding shadow and light box
    page.classList.add("curtain");
    page.append(wrap_shadow);
// main photo in light bix
    let light_picture=document.querySelector(".light-picture");
    light_picture.append(image2);      // put image as child


    // set a close btn
let close_btn=document.querySelector(".close-btn");

close_btn.onclick=function(){
    // remove shadow and light box
    page.classList.remove("curtain"); 
    page.removeChild(wrap_shadow);
}
//sommun arrows in light box
let light_left=document.querySelector(".light-left-arrow");
let light_right=document.querySelector(".light-right-arrow");

//sam condations

//left click
light_left.onclick=function(){
    if(i<=0){
        i=photos.length+1;
        i--;
        
    }

    if(i>0){
        i--;
        image2.setAttribute('src',photos[i]);
        
    }
}
// right click
light_right.onclick=function(){
    if(i<photos.length){
        
        i++;
    image2.setAttribute('src',photos[i]);
    }
 if(i >= photos.length){
     i=0;
     image2.setAttribute('src',photos[i]);
 }

}
}

const imgage =[
         "./img.friend/Snapchat-390493635.jpg",
         "./img.friend/Snapchat-1142095719.jpg",
         "./img.friend/Snapchat-1270906007.jpg",
         "./img.friend/Snapchat-1693904713.jpg",
         "./img.friend/Snapchat-1699848215.jpg",
         "./img.friend/Snapchat-1744240343.jpg",
         "./img.friend/Snapchat-1756197030.jpg",
         "./img.friend/Snapchat-1847255612.jpg",
]








let indexin =0;
 setInterval ( () => {
    const cl =document.getElementById("slider")
    if(indexin === imgage.length){
        indexin=0;
    }
    const imgurl =imgage[indexin];
    cl.setAttribute("src",imgurl);
    indexin++;
}, 3000)

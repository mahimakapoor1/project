$(document).ready(function () {
 
    $(".open").click(function () {
     $(".popup").fadeIn(500);
   });
   
   $(".close").click(function () {
     $(".popup").fadeOut(500);
     
   });
   });
   $(document).ready(function(){
               $("form").submit(function(){
                   alert("your response is recorded");
               });
           });

       $(document).ready(function(){
     $(".h").hide();
     $(".view").click(function(){
       $(".h").show();
       $(this).hide();
     })
   });
   const fillt=document.querySelectorAll(".fill");
   const books=document.querySelectorAll(".book");
   
   for(i=0;i<fillt.length;i++){
       fillt[i].addEventListener("click", (e) =>{
           e.preventDefault();
           
           const filter=e.target.dataset.filter;
           books.forEach((product)=>{
               if(filter=="all"){
                   product.style.display="inline-table";
                   $(".h").hide();
                   $(".view").show();
               }else{
                   $(".view").hide();
                   if(product.classList.contains(filter)){
                       product.style.display="inline-table";
   
                   }else{
                       product.style.display="none";
                   }
               }
           })
       })
   }
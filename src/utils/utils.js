
(".admin-sidebar > ul > li").addEventListener.click(function(e)
{
   (this).siblings().removeClass("active");   
   (this).toggleClass("active")
   (this).find("ul").slideToggle();
   (this).siblings().find("ul").slideUp();
   (this).siblings().find("li").removeClass("active")

});
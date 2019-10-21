time=0
setInterval(auto,4000)
function auto(){
	time++
	if(time>2){
		time=0
	}
	$(".show img").fadeOut(400,function(){
		$(".show img").attr("src","img/slide/"+time+".jpg")
		$(".show img").fadeIn()
	})
}


$(".category-item").hover(function(){
	$(".category-item").removeClass("current")
	$(this).addClass("current")
})



$("#item1").click(function(){
	$("#shop1").fadeIn(500)
	$("#shop2").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop4").fadeOut(1)
})

$("#item2").click(function(){
	$("#shop2").fadeIn(500)
	$("#shop1").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop4").fadeOut(1)
})

$("#item3").click(function(){
	$("#shop3").fadeIn(500)
	$("#shop1").fadeOut(1)
	$("#shop2").fadeOut(1)
	$("#shop4").fadeOut(1)
})

$("#item4").click(function(){
	$("#shop4").fadeIn(500)
	$("#shop1").fadeOut(1)
	$("#shop2").fadeOut(1)
	$("#shop3").fadeOut(1)
})

 t=0
  $(".btn-shop").click(function(){
    t++
  });

 $(".btn-shop").click(function(){
    $("#cart a").text("購物車("+t+")")
  });
  
  $("#cart").click(function(){
  	$(".login").fadeIn()
  })
   $(".login img").click(function(){
  	$(".login").fadeOut()
  })
  
   $(".btn-login").click(function(){
   	alert("沒有網路無法登入")
  	$(".login").fadeOut()
	
  })
  
   $(".btn").click(function(){
	alert("資料已送出")
  })
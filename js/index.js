time=0
setInterval(auto,4000)

function auto(){
	time++
	if(time>2){
		time=0
	}
	
	$(".show img").fadeOut(400, function(){
		$(".show img").attr("src","img/slide/"+time+".jpg")
		$(".show img").fadeIn()
	})
}


$(".category-item").hover(function(){
	$(".category-item").removeClass("current")
	$(this).addClass("current")
})


$("#item1").click(function(){
	$("#shop1").fadeIn(1000)
	$("#shop2").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop4").fadeOut(1)
})


$("#item2").click(function(){
	$("#shop2").fadeIn(1000)
	$("#shop1").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop4").fadeOut(1)
})


$("#item3").click(function(){
	$("#shop3").fadeIn(1000)
	$("#shop2").fadeOut(1)
	$("#shop1").fadeOut(1)
	$("#shop4").fadeOut(1)
})


$("#item4").click(function(){
	$("#shop4").fadeIn(1000)
	$("#shop2").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop1").fadeOut(1)
})

shop=0

$(".btn-shop").click(function(){
	shop++
	$("#cart").text("購物車("+shop+")")
})













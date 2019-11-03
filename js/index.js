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
	$(".addcart").removeClass("slidedown")
})


$("#item2").click(function(){
	$("#shop2").fadeIn(1000)
	$("#shop1").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop4").fadeOut(1)
	$(".addcart").removeClass("slidedown")
})


$("#item3").click(function(){
	$("#shop3").fadeIn(1000)
	$("#shop2").fadeOut(1)
	$("#shop1").fadeOut(1)
	$("#shop4").fadeOut(1)
	$(".addcart").removeClass("slidedown")
})


$("#item4").click(function(){
	$("#shop4").fadeIn(1000)
	$("#shop2").fadeOut(1)
	$("#shop3").fadeOut(1)
	$("#shop1").fadeOut(1)
	$(".addcart").removeClass("slidedown")
})

shop=0

$(".btn-shop").click(function(){
	shop++
	$("#cart .nav-b").text("購物車("+shop+")")
})

$("#cart").click(function(){
	$(".login").fadeIn()
})

$(".login img").click(function(){
	$(".login").fadeOut()
})

$(".btn-login").click(function(){
	alert("目前沒有網路無法登入")
})

$(".btn-f").click(function(){
	alert("感謝您的訂閱")
})

$(".img a").click(function(){
	$(this).toggleClass("heart")
})


$(".btn-shop").click(function(){
  var divClass = $(this).attr("data-for");
  $("." + divClass).toggleClass("slidedown");
});

$(".infor-icon").click(function(){
	var divClass = $(this).attr("data-for");
	$(".infor").removeClass("infor-ani")
  $("." + divClass).toggleClass("infor-ani");
});

$(".infor img").click(function(){
	$(".infor").removeClass("infor-ani")
})


$(".btn-e").click(function(){
	$(".sign-e").fadeIn()
})

$(".sign-e img").click(function(){
	$(".sign-e").fadeOut()
})

$(".btn-sign").click(function(){
	
    if(!$("#name").val()){
        return alert("你尚未填寫姓名");    
    }

    if(!$("#phone").val()){
        return alert("你尚未填寫手機號碼");  
    }

    if(!$("#address").val()){
        return alert("你尚未填寫地址");     
    }

    if(!$("#mail").val()){
        return alert("你尚未填寫電子郵件");     
    }

    alert("資料已送出")
    $(".sign-e").fadeOut()
});


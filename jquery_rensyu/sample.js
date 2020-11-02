//マウスオーバー時の処理
function mouseOn(){
  var obj = document.getElementById("img1");
  obj.src = "24.jpg";
}
 
//マウスアウト時の処理
function mouseOff(){
  var obj = document.getElementById("img1");
  obj.src = "kanpai.jpg";
}

$(function(){
$(".title").toggle(function(){
$(this).css("color","green")
},function(){
$(this).css("color","yellow")
},function(){
$(this).css("color","red")
},function(){
$(this).css("color","orange")
},function(){
$(this).css("color","blue")
});
});





function sites(){

 window.location.href="http://www.edc-lms.jp/login/index.php";
}

function tenki(){

 window.location.href="https://tenkinoko.com/";
}

$(function(){
$(".hoge1").css("color","blue")
});

$(function(){
$(".hoge2B").toggle(function(){
$(this).css("background-color","green")
},function(){
$(this).css("background-color","yellow")
},function(){
$(this).css("background-color","red")
},function(){
$(this).css("background-color","orange")
},function(){
$(this).css("background-color","blue")
});
});

$(function(){
$(".hoge3").click(function(){
$(this).fadeOut(2000)
});
});




$(function(){
$(".www").hide();
$(".qqq").click(function(){
$(".www").slideToggle("slow");
});
});


$(function(){
$(".sss").hide();
$(".aaa").toggle(function(){
$(".sss").slideDown()
},function(){
$(".sss").slideUp()
});
});


$(function(){
$('#box').click(function(){
  $(this).animate({
    'margin-left':'767px','padding-top':'0px'
  },4000);
});
});




$(function() {
$('#box1').click(function(){
  $(this).animate({
    'margin-left':'767px','padding-top':'0px'
  },3000);
});
});


$(function() {
$('#box2').click(function(){
  $(this).animate({
    'margin-left':'767px','padding-top':'0px'
  },2000);
});
});



$(function() {
$('#box3').click(function(){
  $(this).animate({
    'margin-left':'767px','padding-top':'0px'
  },2500);
});
});



$(function() {
$('#box4').click(function(){
  $(this).animate({
    'margin-left':'767px','padding-top':'0px'
  },7000);
});
});



$(function() {
$('#box5').click(function(){
  $(this).animate({
    'margin-left':'767px','padding-top':'0px'
  },10000);
});
});

$(document).on('ready', function() {
  $(".regular_2").slick({
    dots: true, // ドットインジケーターの表示
    infinite: true, // スライドのループを有効にするか
    slidesToShow: 2, // 表示するスライド数を設定
    slidesToScroll: 1 // スクロールするスライド数を設定 
  });
});

$(function($){
  var nextphoto = 0;  //次に表示する写真のインデックス
  var photolist$ = $('#photolist li img');  //画像要素のラップ集合
  var photocount = photolist$.length;  //画像要素の数
  var timer;
  function showphoto() {  //スライドショーの関数
    var src = photolist$.eq(nextphoto).attr('src');
    var alt = photolist$.eq(nextphoto).attr('alt');
    var nextimg = '<img src="' + src + '" width="600" height="300" alt="' + alt + '">';
    $('#mainphoto img').before(nextimg);
    $('#title').text(alt).hide().fadeIn(1000);
    $('#mainphoto img:last').fadeOut(1000, function(){
      $(this).remove();
    });
    nextphoto = ( ++ nextphoto) % photocount;
    timer = window.setTimeout(showphoto,3000);
  }
  showphoto();
  
  $(window).unload(function(){
    window.clearTimeout(timer);
  }); 
 
});


//ページ内遷移
$(function(){
$(".pagetop").click(function() {
$("html,body").animate({scrollTop:0},"0");
});
});

$(function(){
$(".cli1").click(function(){
$("html,body").animate({scrollTop:$('#q').offset().top},"0");
});
});

$(function(){
$(".cli2").click(function(){
$("html,body").animate({scrollTop:$('#w').offset().top},"0");
});
});

$(function(){
$(".cli3").click(function(){
$("html,body").animate({scrollTop:$('#e').offset().top},"0");
});
});


$(function () {
    setTimeout('rect()'); //アニメーションを実行
});

function rect() {
    $("#rect").animate({
        left: "350px" //要素を動かす位置
    }, 3000).animate({
        left: "-50px"　//要素を戻す位置
    }, 0)
    setTimeout("rect()", 3000);//アニメーションを繰り返す間隔
}


$(function(){
$("#pageend").click(function() {
$("html,body").animate({scrollTop:6000},"0");
});
});


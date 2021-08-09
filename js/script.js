$(function() {

  // ハンバーガーメニュー
  $('.humburger').click(function() {
    $('.hover-menu').stop().slideToggle(500);
    return false;
  });


  // ページトップ
  $('#page-top').click(function() {
    $('body, html').animate({scrollTop:0}, 400);  
  });


  // フォームのバリデーション
  $(".alert").css("color", "red"); //カラーを赤にする
  $(".alert").hide(); // .alertクラスついているものを非表示
  $("#submitBtn").click(function(){
    var sendFlag = true;
    // var alert1 = children("dd").children(".alert").show();

    // 氏名
    if(!$(".name").children("dd").children("input").val()) {
      $(".name").children("dd").children(".alert").show(); //アラート表示
      //$(".name").alert1; //アラート表示
      sendFlag = false; //falseにさせる。
    } else {
      $(".name").children("dd").children(".alert").hide(); //アラート非表示
    }

    // フリガナ
    if(!$(".furigana").children("dd").children("input").val()) {
      $(".furigana").children("dd").children(".alert").show(); //アラート表示
      sendFlag = false; //falseにさせる。
    } else {
      $(".furigana").children("dd").children(".alert").hide(); //アラート非表示
    }

    // メールうアドレス
    if(!$(".mail").children("dd").children("input").val()) {
      $(".mail").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".mail").children("dd").children(".alert").hide();
    }

    // 電話番号
    if(!$(".tel").children("dd").children("input").val()) {
      $(".tel").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".tel").children("dd").children(".alert").hide();
    }

    // 郵便番号
    if(!$(".zip").children("dd").children("input").val()) {
      $(".zip").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".zip").children("dd").children(".alert").hide();
    }


    // 都道府県
    if($("select").val() == "none") {
      $(".pref").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".pref").children("dd").children(".alert").hide();
    }


    //住所
    if(!$(".address").children("dd").children("input").val()) {
      $(".address").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".address").children("dd").children(".alert").hide();
    }

    //お問い合わせ内容
    if(!$("#textarea").val()) {
      $(".multi-text").children("dd").children(".alert").show();
      sendFlag = false;
    } else {
      $(".multi-text").children("dd").children(".alert").hide();
    }
  
    // 変数sendFlagの値をチェック
    if(sendFlag == false) {
      return false; // falseなら送信しない
    }
  });


});


$(document).ready(function () {
  var gnbdiv = $(".gnb > li > div");
  var bg = $(".bg_gnb");
  var li = $(".gnb > li");

  // 하위 메뉴 보이기
  li.on("mouseover focusin", function () {
    //1. 각 메뉴에서 가장 높은 높이 구하기
    hig = 0;
    gnbdiv.each(function () {
      temp = parseInt($(this).outerHeight());
      if (hig < temp) {
        hig = temp;
      }
    });
    gnbdiv.show().css("height", hig);
    bg.show().css("height", hig);
  });
  //   하위 메뉴 감추기
  li.on("mouseleave", function () {
    hide_el();
  });
  //   하위 메뉴 감추기
  $(".lang, h1").on("focusin", function () {
    hide_el();
  });

  // 하위 메뉴를 감추기 위한 함수 정의
  function hide_el() {
    gnbdiv.hide().removeAttr("style");
    bg.hide().removeAttr("style");
  }
});

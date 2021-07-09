//서브메뉴 나타내기
$(document).ready(function (){
    $('#lnb_wrap').hover(function(){
        $('.lnb_2depth_wrap').css('height','160px');
    }, function() {
        $('.lnb_2depth_wrap').css('height','0px');
    });
});




//이미지 src뒤에 _on
$('.lef_lnb a').each(function() {

    var nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
    var srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
    var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
    //.png , .jpg 와같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳 까지 컷! 
  
   //호버이벤트
    $(this).hover(function() { 
      $(this).find('img').attr('src', newSrc+ '_on.' + /[^.]+$/.exec(srcName)); //hover시 _on붙이기
    }, function() {
      $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); //hover시 _on 때기
    });

    
  });


//img src toggle & height 변화
function chngimg() {
  var img = document.getElementById('btnToggle').src;
  if (img.indexOf('more01.gif')!=-1) {
      document.getElementById('btnToggle').src  = 'bar_more02.gif';  
      document.getElementById('row').style.height = '350px';
  }
   else {
     document.getElementById('btnToggle').src = 'bar_more01.gif';
     document.getElementById('row').style.height = '150px';
 }
}

//

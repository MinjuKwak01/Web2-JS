function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //     alist[i].style.color = 'powderblue';
    //     i = i + 1;
    //}
    $('a').css('color','red'); //night 모드일때 링크들이 모두 빨간색
      
    } else {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
      var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //     alist[i].style.color = 'blue';
    //     i = i + 1;
    //   }
    $('a').css('color','orange');
    }
  }
  //document.querySelector('body').style.color='red';
  //=$('body').css('color','red');

  //document.querySelector('body').style.backgroundColor='red';
  //=$('body').css('backgroundColor','red');

  //어떤 라이브러리가 있는지 많이 알수록 할 수 있는게 늘어남

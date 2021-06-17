/* function Circcle(el){
    $(el).circleProgress({fill: {color: '#ffffff'}})
    .on('circle-animation-progress', function(event, progres,stepValue){
      $(this).find('strong').text((String(stepValue.toFixed(2))).substring(2, 4) + '%')
    })
  } */

$(function () {
    $(".input").change(function () {
      var $input = $(this),
        $flag = $input.next();

      if (!$input.val()) {
        $flag.remove();
        document.getElementById("val").style.display = "block";
        document.getElementById("pct1").style.display = 'none'
        document.getElementById("ch").style.display = 'none'
      }

      if ($flag.length == 0 || !$flag.is(".valid")) {
        $input.after(
          '<div id="checkmark" class="valid"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#03e9f4" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><polyline class="path check" fill="none" stroke="#03e9f4" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/></svg></div>'
        );
        document.getElementById("val").style.display = "none";
        document.getElementById("pct1").style.display = 'block'
        $('.round1').attr('data-value', '0.25')
        $('.round1').circleProgress({fill: {color: '#ffffff'}})
    .on('circle-animation-progress', function(event, progres,stepValue){
      $(this).find('strong').text((String(stepValue.toFixed(2))).substring(2, 4) + '%')
    })
       
      }
    });
  });
  $(function () {
    $(".input2").change(function () {
      var $input = $(this),
        $flag = $input.next();

      if (!$input.val()) {
        $flag.remove();
        document.getElementById("val2").style.display = "block";
        document.getElementById("pct1").style.display = 'block'
        document.getElementById("pct2").style.display = 'none'
        document.getElementById("pct3").style.display = 'none'
        document.getElementById("ch").style.display = 'none'
      }

      if ($flag.length == 0 || !$flag.is(".valid2")) {
        $input.after(
          '<div id="checkmark" class="valid2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#03e9f4" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><polyline class="path check" fill="none" stroke="#03e9f4" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/></svg></div>'
        );
        document.getElementById("val2").style.display = "none";
        document.getElementById("pct1").style.display = 'none'
        document.getElementById("pct2").style.display = 'block'
        $('.round2').attr('data-value', '0.50')
        $('.round2').circleProgress({fill: {color: '#ffffff'}})
    .on('circle-animation-progress', function(event, progres,stepValue){
      $(this).find('strong').text((String(stepValue.toFixed(2))).substring(2, 4) + '%')
    })
      }
    });
  });

  $(function () {
    $(".input3").change(function () {
      var $input = $(this),
        $flag = $input.next();

      if (!$input.val()) {
        $flag.remove();
        document.getElementById("val3").style.display = "block";
        document.getElementById("pct1").style.display = 'none'
        document.getElementById("pct2").style.display = 'block'
        document.getElementById("pct3").style.display = 'none'
        document.getElementById("ch").style.display = 'none'
      }

      if ($flag.length == 0 || !$flag.is(".valid3")) {
        $input.after(
          '<div id="checkmark" class="valid3"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#03e9f4" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><polyline class="path check" fill="none" stroke="#03e9f4" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/></svg></div>'
        );
        document.getElementById("val3").style.display = "none";
        document.getElementById("pct1").style.display = 'none'
        document.getElementById("pct2").style.display = 'none'
        document.getElementById("pct3").style.display = 'block'
        $('.round3').attr('data-value', '0.75')
        $('.round3').circleProgress({fill: {color: '#ffffff'}})
    .on('circle-animation-progress', function(event, progres,stepValue){
      $(this).find('strong').text((String(stepValue.toFixed(2))).substring(2, 4) + '%')
    })
      }
    });
  });

  $(function () {

    let i1 = document.getElementsByClassName(".input1")
    let i2 = document.getElementsByClassName(".input2")
    let i3 = document.getElementsByClassName(".input3")

    $(".input4").change(function () {
      var $input = $(this),
        $flag = $input.next();

      if (!$input.val()) {
        $flag.remove();
        document.getElementById("val4").style.display = "block";
        
      }

      if ($flag.length == 0 || !$flag.is(".valid3")) {
        $input.after(
          '<div id="checkmark" class="valid3"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#03e9f4" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><polyline class="path check" fill="none" stroke="#03e9f4" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/></svg></div>'
        );
        document.getElementById("val4").style.display = "none";
        if(i1 === null && i2 === null && i3 === null){
            document.getElementById("ch").style.display = 'block'
            document.getElementById("pct1").style.display = 'none'
        document.getElementById("pct2").style.display = 'none'
        document.getElementById("pct3").style.display = 'none'
        }else{
            document.getElementById("ch").style.display = 'block'
            document.getElementById("pct1").style.display = 'none'
        document.getElementById("pct2").style.display = 'none'
        document.getElementById("pct3").style.display = 'none'
        }
      }
    });
  });



  
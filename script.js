
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



$(function() {


    let intro = $('#header');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight() + 50;
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            nav_listJS.classList.add('fixed');
        } else {
            
        };
        if(scrollPos < introH) {
            nav_listJS.classList.remove('fixed');
        } else {

        };
    
    });

});
/*
$(function() {


    let intro = $('#header');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight() + 50;
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            side_button_wr.classList.add('fixed_btn_SidePanel');
            document.getElementById('side_button_wr').style.width = '20%';
            document.getElementById('side-b').style.width = '100%';
        } else {
            
        };
        if(scrollPos < introH) {
            side_button_wr.classList.remove('fixed_btn_SidePanel');
            document.getElementById('side_button_wr').style.width = '10%';
            document.getElementById('side-b').style.width = '100%';
        } else {

        };
    
    });

});
*/

/*
    SaytBlue.onclick = function() {
        
        document.getElementById('body').style.backgroundColor = 'rgb(200, 203, 240)';
        document.getElementById('header').style.backgroundImage = 'url(./img/background6.jpg)';
        document.getElementById('galary').style.backgroundColor = 'rgb(184, 184, 228)';
        document.getElementById('news_line1').style.backgroundColor = 'rgb(134, 139, 212)';
        document.getElementById('news_line2').style.backgroundColor = 'rgb(134, 139, 212)';
        document.getElementById('news_line3').style.backgroundColor = 'rgb(134, 139, 212)';
        document.getElementById('galary').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('news').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('preJS').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('CT').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('OT').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('extra').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('timestudy').style.borderColor = 'rgb(125, 125, 255)';
        document.getElementById('wkend').style.borderColor = 'rgb(125, 125, 255)';

    };
    SaytGray.onclick = function() {
        document.getElementById('body').style.backgroundColor = 'rgb(190, 198, 207)';
        document.getElementById('header').style.backgroundImage = 'url(./img/background9.jpg)';
        document.getElementById('galary').style.backgroundColor = 'rgb(165, 165, 165)';
        document.getElementById('news_line1').style.backgroundColor = 'gray';
        document.getElementById('news_line2').style.backgroundColor = 'gray';
        document.getElementById('news_line3').style.backgroundColor = 'gray';
        document.getElementById('galary').style.borderColor = 'gray';
        document.getElementById('news').style.borderColor = 'gray';
        document.getElementById('preJS').style.borderColor = 'gray';
        document.getElementById('CT').style.borderColor = 'gray';
        document.getElementById('OT').style.borderColor = 'gray';
        document.getElementById('extra').style.borderColor = 'gray';
        document.getElementById('timestudy').style.borderColor = 'gray';
        document.getElementById('wkend').style.borderColor = 'gray';
        document.getElementById('side-panel').style.borderColor = '#4e4e53';
    };
    SaytBlack.onclick = function() {
        document.getElementById('body').style.backgroundColor = 'rgb(44, 44, 44)';
        document.getElementById('header').style.backgroundImage = 'url(./img/background4.svg)';
        document.getElementById('galary').style.backgroundColor = 'rgb(65, 65, 65)';
        document.getElementById('news_line1').style.backgroundColor = 'rgb(75, 74, 74)';
        document.getElementById('news_line2').style.backgroundColor = 'rgb(75, 74, 74)';
        document.getElementById('news_line3').style.backgroundColor = 'rgb(75, 74, 74)';
    };
    SaytWhite.onclick = function() {
        document.getElementById('body').style.backgroundColor = 'rgb(235, 235, 235)'
        document.getElementById('header').style.backgroundImage = 'url(./img/1587311089_4-p-cherno-serie-foni-11.jpg)';
        document.getElementById('galary').style.backgroundColor = 'rgb(216, 214, 214)';
        document.getElementById('news_line1').style.backgroundColor = 'rgb(194, 193, 193)';
        document.getElementById('news_line2').style.backgroundColor = 'rgb(194, 193, 193)';
        document.getElementById('news_line3').style.backgroundColor = 'rgb(194, 193, 193)';
    };

*/
    //alert('Всем привет, надеюсь, сайт Вам понравится. Если что не так, сообщайте, исправлю, поменяю и т.п. Также сообщайте пожалуйста об ошибках, их я тоже исправлю, особенно могут возникнуть проблемы с мобильной версией сайта. Спасибо за посещение сайта!');


$('[data-scroll]').on('click', function(event) {
       event.preventDefault();

       var blockId = $(this).data('scroll'),
           blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
});



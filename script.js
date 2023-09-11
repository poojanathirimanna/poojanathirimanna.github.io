const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});


  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          370: {
            items: 2
          },
          560: {
            items: 2
          },
          768: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })
  });
//   var menulist = document.getElementById('menulist');
//   menulist.style.maxHeight = "0px";
  
//   function menutoggle() {
//     if (menulist.style.maxHeight == "0px") {
//       menulist.style.maxHeight = "100vh";
//     } else {
//       menulist.style.maxHeight = "0px";
//     }
//   }

  function Aclick1(){

    var div1 = document.getElementById("div1");
    var div2 =  document.getElementById("div2");
    var div3 =  document.getElementById("div3");
    var div4 =  document.getElementById("div4");
    div1.classList = "div1";
    div2.classList = "div2 hide1";
    div3.classList = "div3 hide1";
    div4.classList = "div4 hide1";
  }
  
  function Bclick2(){
  
    var div1 = document.getElementById("div1");
    var div2 =  document.getElementById("div2");
    var div3 =  document.getElementById("div3");
    var div4 =  document.getElementById("div4");
    div2.classList = "div2";
    div1.classList = "div1 hide1";
    div3.classList = "div3 hide1";
    div4.classList = "div4 hide1";
  
  }
  
  function Cclick3(){
  
    var div1 = document.getElementById("div1");
    var div2 =  document.getElementById("div2");
    var div3 =  document.getElementById("div3");
    var div4 =  document.getElementById("div4");
    div1.classList = "div1 hide1";
    div2.classList = "div2 hide1";
    div3.classList = "div3";
    div4.classList = "div4 hide1";
  
  }

  function Dclick4(){
  
    var div1 = document.getElementById("div1");
    var div2 =  document.getElementById("div2");
    var div3 =  document.getElementById("div3");
    var div4 =  document.getElementById("div4");
    div1.classList = "div1 hide1";
    div2.classList = "div2 hide1";
    div3.classList = "div3 hide1";
    div4.classList = "div4";
  
  }
  function book(){
    window.location = "booking.html";
  }

  function event1(){
    window.location = "event1.html";
  }

  function event2(){
    window.location = "event2.html";
  }
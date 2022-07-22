//////////////////성진//////////////////
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginIcon')
let loginModal = document.querySelector('.loginModal')
let body = document.querySelector('body')
let lgModal = document.querySelector('.lgModal')
let xmark = document.querySelector('.fa-xmark')
let signUp = document.querySelector('#signUp')
let modalCheckBox = document.querySelector('.modalCheckBox')
let inputText = document.querySelector('.userName')
let inputPasswd = document.querySelector('.passwd')
let modalBtn = document.querySelector('.modalBtn')
let loadingBook = document.querySelector('.loadingBook')
let loginForm = document.querySelector('.loginForm')
let loginFormContent = document.querySelector('.loginFormContent')

window.onload = () => {
    loadingPage();
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
}
function loadingPage(){
    setTimeout(loadingFadeout,5) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none'){
        loginModal.style.display = 'flex'
    }
})

xmark.addEventListener('click',function(){
    loginModal.style.display = 'none'
})

loginModal.addEventListener('click', function(){
    if(event.target.className == 'loginModal'){
        loginModal.style.display = 'none'
        lgModal.classList.remove('active')
        modalBtn.classList.remove('active')
        signUp.classList.remove('signUpActive')
        loginForm.classList.remove('active')
    }
})


footerScroll.addEventListener('click',function(e){
    if(e.target.innerText=='HOME'){
        header.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '신간도서'){
        newBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '장르별 도서'){
        genreBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '리뷰'){
        reviewBook.scrollIntoView({
            behavior: "smooth"}) 
    }
})


signUp.addEventListener('click', function(){
    loginForm.style.backgroundColor = 'white'
    lgModal.classList.add('active')
    modalBtn.classList.add('active')
    signUp.classList.add('signUpActive')
    setTimeout(registLoading,500)
    setTimeout(registLoadingEnd,2400)
    setTimeout(registActive,2600)
})

function registLoading(){
    loadingBook.style.opacity = '1'
}
function registLoadingEnd(){
    loadingBook.style.opacity = '0'
}

function registActive(){
    loginForm.classList.add('active')
    loginFormContent.style.opacity = '1'
}

////////////////////////////상호////////////////////////////
// 베스트셀러 책 캐러셀
// let bookitem = document.querySelectorAll(".bookItem");
// let bookslider = document.querySelector(".bestSeller-book-move")

// let bookfirstChild = bookslider.firstElementChild.cloneNode(true);
// let booklastChild = bookslider.lastChild.cloneNode(true);
// bookslider.append(bookfirstChild)

// let width = 0;
// let i = 0

// setInterval(function(){    
//     if(bookitem.length >= i){
//         bookslider.style.transform = "translate3d(-"+163*(i+1)+"px, 0px, 0px)"
//         bookslider.style.transition = "0.2s"
       
//         i++
//     }
//     if(i === 3){
//         setTimeout(function(){

//             bookslider.style.transition = "0s";
//             bookslider.style.transform = "translate3d(0px,0px,0px)";
//         },200)
//         i = 0
//     }
        
// },5000)
let fontEle_1 = document.querySelector("#font1");
let fontEle_2 = document.querySelector("#font2");
let fontEle_3 = document.querySelector("#font3");
let fontEle_4 = document.querySelector("#font4");
let fontcount = 0
 setInterval(function(){
    fontcount++
     if(fontcount === 1){
        setTimeout(function(){
            fontEle_1.style.transition = "1s"
            fontEle_1.style.opacity = "1"
            fontEle_1.style.transform = "translateY(-100px)"
        },400)
        setTimeout(function(){
            fontEle_2.style.transition = "1s"
            fontEle_2.style.opacity = "1";
            fontEle_2.style.transform = "translateY(-100px)"
        },600)
     }
     fontEle_1.style.opacity = "0"
     fontEle_2.style.opacity = "0"
     if(fontcount === 2){
        setTimeout(function(){
            fontEle_3.style.transition = "1s"
            fontEle_3.style.opacity = "1"
            fontEle_3.style.transform = "translateY(-100px)"
        },400)
        setTimeout(function(){
            fontEle_4.style.transition = "1s"
            fontEle_4.style.opacity = "1"
            fontEle_4.style.transform = "translateY(-100px)"
        },600)
        
     }
        fontEle_3.style.opacity = "0"
        fontEle_4.style.opacity = "0"


        if(fontcount === 3){
            setTimeout(function(){
                fontcount = 0
            })
        } 
    },5000)








//베스트 셀러 큰 이미지
let sellItem = document.querySelectorAll(".slideItem");
let sellEle = document.querySelectorAll(".sellEle");
let sellwarp = document.querySelector(".bestSeller-sell-warp")
let child = sellwarp.firstElementChild.cloneNode(true);
sellwarp.appendChild(child);

let sellCount = 0
 setInterval(function(){

     if(sellItem.length > sellCount){
         sellItem[sellCount].style.opacity = "0";

     }
     if(sellCount === 0){
        sellItem[1].style.opacity = "1"
     }   
     if(sellCount ===1){
        sellItem[2].style.opacity = "1"
     } 
     if(sellCount ===2){
        sellItem[0].style.opacity = "1"
     }
    setTimeout(function(){
        if(sellCount === 3){
                sellCount = 0
         }
        },101)
     
 
    console.log(sellCount)
     sellCount++

    },5000)

//네비바 픽스드 이벤트
let scrollNav_bar = document.querySelector(".nav-bar"); 

window.addEventListener("scroll",function(){
    if(window.pageYOffset > 80){
        scrollNav_bar.className = "nav-bar-fixed"
    }
    else if(window.pageYOffset < 30){
        scrollNav_bar.className = "nav-bar"
    }

    
})

// 네비바 스크롤 이동 이벤트
let scrollele = document.querySelectorAll(".scroll-ele");
let scrollpotint = document.querySelectorAll(".pointer");
let first = scrollpotint[0].offsetTop
let second = scrollpotint[1].offsetTop
let third = scrollpotint[2].offsetTop
let fourth = scrollpotint[3].offsetTop

scrollele[0].addEventListener("click",function(){
    window.scrollTo({top:first,behavior:"smooth"});
})
scrollele[1].addEventListener("click",function(){
    window.scrollTo({top:second,behavior:"smooth"});
})
scrollele[2].addEventListener("click",function(){
    window.scrollTo({top:third,behavior:"smooth"});
})
scrollele[3].addEventListener("click",function(){
    window.scrollTo({top:fourth,behavior:"smooth"});
})


//////////////////상호//////////////////


//////////////////수근//////////////////
let SGslides = document.querySelector('.newBook_slides'); //ul
let SGslide = document.querySelectorAll('.newBook_slides li'); //li를 다 넣기 위해 All를 씀
let SGcurrentIdx = 0; //클릭할때마다 이 값을 차감해서 슬라이드를 움직이기 위함
let SGslideCount = SGslide.length; //li의 길이  
let SGslideWidth = 260; //
let SGslideMargin = 56;
// let SGprevBtn = document.querySelector('.prev');
// let SGnextBtn = document.querySelector('.next');
// let SGimg = document.querySelectorAll('.newBook_slides li img')



SGmakeClone();

function SGmakeClone(){
    for(let i =0; i<SGslideCount; i++) { 
        var SGcloneSlide = SGslide[i].cloneNode(true); //li의 길이 만큼 클론을 만들어줌 
        SGcloneSlide.classList.add('clone') //clone 클래스명으로 클론을 추가
        SGslides.appendChild(SGcloneSlide); // ul의 뒤에 클론을 붙혀줌
    }
}
let slides = document.querySelector('.newBook_slides');
let slide = document.querySelectorAll('.newBook_slides li');
let currentIdx = 0; //클릭할때마다 이 값을 차감해서 슬라이드를 움직이기 위함
let slideCount = slide.length;
let slideWidth = 270;
let slideMargin = 30;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
    for(let i =0; i<slideCount; i++) {
        // a.cloneNode(), a.cloneNode(true) a의 자식 요소까지
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone')
        // a.appendChild(b)
        slides.appendChild(cloneSlide);
    }
    for(let i = SGslideCount-1; i>=0; i--) { 
        var SGcloneSlide = SGslide[i].cloneNode(true);
        SGcloneSlide.classList.add('clone')
        SGslides.prepend(SGcloneSlide); //ul 앞에 클론을 붙혀줌
    } 
    SGupdateWidth();
    SGsetInitialPos();

    setTimeout(function(){
        SGslides.classList.add('animated');
    },1100);
}

function SGupdateWidth(){
    let SGcurrentSlide = document.querySelectorAll('.newBook_slides li')
    var SGnewSlideCount = SGcurrentSlide.length;
    var SGnewWidth = (SGslideWidth + SGslideMargin) * SGnewSlideCount -SGslideMargin + 'px';
    SGslides.style.width = SGnewWidth;
};

function SGsetInitialPos() {
    let SGinitialTranslateValue = -(SGslideWidth + SGslideMargin) * SGslideCount
    SGslides.style.transform = 'translateX(' +SGinitialTranslateValue+ 'px)'
};

// SGnextBtn.addEventListener('click', function(){
//     SGmoveSlide(SGcurrentIdx +1);
// })
// SGprevBtn.addEventListener('click', function(){
//     SGmoveSlide(SGcurrentIdx -1);
// })


function SGmoveSlide(num){
    SGslides.style.left = -num * (SGslideWidth + SGslideMargin) + 'px';
    SGcurrentIdx = num;
    // console.log(currentIdx, slideCount)
    if(SGcurrentIdx == SGslideCount || SGcurrentIdx == -SGslideCount) {
        setTimeout(function(){
            SGslides.classList.remove('animated')
            SGslides.style.left = '0px';
            SGcurrentIdx = 0;
        },1000);
        setTimeout(function(){
            SGslides.classList.add('animated')
        },1100); 
    } 
}

let timer = undefined;
function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            SGmoveSlide(SGcurrentIdx +1);
        },3000);
    }
}
autoSlide();
function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}
SGslides.addEventListener('mouseenter',function(){
    stopSlide();
})
SGslides.addEventListener('mouseleave',function(){
    autoSlide();
})


///////////////////////////////////////
//////////////////진주//////////////////

// $(document).ready(function(){

//     var navHeight = $(".genre_mid_slide").height(); 
//     //navHeight 의 높이를 구하기

//     $(".genre_mid_slide_box").hide();
//     //스크롤시 나타날 객체 미리 숨기기

//     $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
//         var rollIt = $(this).scrollTop() >= navHeight; 
// 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

/*
scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
*/

//     if(rollIt){ 
// 		//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
//             $(".genre_mid_slide_box").show().css({"position":"fixed"});
//         }
//         else{
//             $(".genre_mid_slide_box").hide();
//         }
//     });
    
// });


//////////////////진주끝/////////////////////

////////////////////////양희시작///////////////////////////////


let boxs = document.querySelectorAll('.topimg');
let modalY = document.querySelector('.modalbg');
let modalview = document.querySelector('.modalview');
let close = document.querySelector('.close-area');
let modalimg = document.querySelector('.modalimg');
let heart = document.querySelectorAll('.uil-heart');

for(let i = 0; i< boxs.length; i++){
    boxs[i].addEventListener('click', function(e){
        modalY.style.display = 'flex';
        modalimg.src = e.target.src;
        // console.log(e.target);
    })
}

close.addEventListener('click', function(){
    modalY.style.display = 'none';
})

modalY.addEventListener('click', function(e){
    // modalY.style.display = 'none';
    // console.log(event.target.className);

    //조건문을 사용!
    if(e.target.className == 'modalbg')
    {
        modalY.style.display = 'none';
    }
})


//좋아요 수up, 하트 색칠해지는

let cnt1 = document.querySelector('#cnt1');

// cnt1.innerHTML = localStorage.cnt[0];

for(let i = 0; i <heart.length; i++)
{
    heart[i].addEventListener('click', function(e1){
        // localStorage.cnt[0] = 43;
        // Number(localStorage.cnt[0]) + 1
        // console.log(localStorage.cnt[0]);


        //애니메이션으로 scale 조절 & opacity



        // if(typeof(Storage) !== "undefined")
        // {
        //     if(localStorage.cnt)
        //     {
        //         localStorage.cnt = Number(localStorage.cnt) + 1;
        //     }
        //     else
        //     {
        //         localStorage.cnt = 0;
        //     }

        //     cnt1.innerHTML = localStorage.cnt;

        // } else {
        //     alert("응 돌아가");
        // }
        cnt1.innerHTML = heartCount(0);
        cnt2.innerHTML = heartCount(1);

    })
}

// function heartCount(i){
//     if(typeof(Storage) !== "undefined")
//         {
//             if(localStorage.cnt[i])
//             {
//                 localStorage.cnt[i] = Number(localStorage.cnt[i]) + 1;
//             }
//             else
//             {
//                 localStorage.cnt[i] = 0;
//             }

        
//         } else {
//             alert("응 돌아가");
//         }

//         return localStorage.cnt[i];
// }






//////////////////////양희끝////////////////////////
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

let hoverEle = document.querySelector(".hoverEle");
let dropdown = document.querySelector(".nav-bar-dropdown");
let dropdown_mo = document.querySelector(".nav-bar-modal");

hoverEle.addEventListener("mouseover",function(){
    dropdown.style.display = "flex"
    dropdown_mo.style.display = "block"

})
dropdown.addEventListener("mouseleave",function(){
    dropdown.style.display = "none"
    dropdown_mo.style.display = "none"
})



let fontEle_1 = document.querySelector("#font1");
let fontEle_2 = document.querySelector("#font2");
let fontEle_3 = document.querySelector("#font3");
let fontEle_4 = document.querySelector("#font4");
let fontEle_5 = document.querySelector("#font5");
let fontEle_6 = document.querySelector("#font6");
let fontcount = 0

if(fontcount === 0){
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

 setInterval(function(){

    if(fontcount === 0){
        fontEle_1.style.opacity = "0"
        fontEle_2.style.opacity = "0"
        fontEle_5.style.transform = "translateY(0px)";
        fontEle_6.style.transform = "translateY(0px)";
  
    setTimeout(function(){
        fontEle_3.style.transition = "1s"
        fontEle_3.style.opacity = "1"
        fontEle_3.style.transform = "translateY(-100px)"
    },400)
    setTimeout(function(){
        fontEle_4.style.transition = "1s"
        fontEle_4.style.opacity = "1";
        fontEle_4.style.transform = "translateY(-100px)"
    },600)
    }
     if(fontcount === 1){
        fontEle_3.style.opacity = "0"
        fontEle_4.style.opacity = "0"
        fontEle_1.style.transform = "translateY(0px)";
        fontEle_2.style.transform = "translateY(0px)";
        setTimeout(function(){
            fontEle_5.style.transition = "1s"
            fontEle_5.style.opacity = "1"
            fontEle_5.style.transform = "translateY(-100px)"
        },400)
        setTimeout(function(){
            fontEle_6.style.transition = "1s"
            fontEle_6.style.opacity = "1";
            fontEle_6.style.transform = "translateY(-100px)"
        },600)

     }
     
     if(fontcount === 2){
        fontEle_5.style.opacity = "0"
        fontEle_6.style.opacity = "0"
        fontEle_3.style.transform = "translateY(0px)";
        fontEle_4.style.transform = "translateY(0px)";

        setTimeout(function(){
            fontEle_1.style.transition = "1s"
            fontEle_1.style.opacity = "1"
            fontEle_1.style.transform = "translateY(-100px)"
        },400)
        setTimeout(function(){
            fontEle_2.style.transition = "1s"
            fontEle_2.style.opacity = "1"
            fontEle_2.style.transform = "translateY(-100px)"
        },600)
       
        
     }
    

        if(fontcount === 2){
            setTimeout(function(){
                fontcount = 0
            },200)
        }
        fontcount++

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

// 양쪽 화살표 클릭하면 넘어가기(4개씩) > 캐러셀
// 클릭하면 모달창뜨게하기
// 좋아요 누르면 하트 색꽉차게

var slidesY = document.querySelector('.reviewboxs'), //리뷰박스틀
    slideY = document.querySelectorAll('.reviewbox'), //리뷰박스하나하나
    slideCountY = slideY.length, //슬라이드개수
    slideWidthY = 250, 
    slideMarginY = 30,  
    currentIdxY = 0, 
    preBtnY = document.querySelector('.uil-angle-left-b'),
    nextBtnY = document.querySelector('.uil-angle-right-b');


    makeCloneY();

    //양쪽으로 5개씩 복제 총 15개
    function makeCloneY(){

        for(let i = 0; i < slideCountY; i++)
        {
            var cloneSlideY = slideY[i].cloneNode(true);
            cloneSlideY.classList.add('cloneY');
            slidesY.appendChild(cloneSlideY); 
        }
        for(let j = slideCountY-1; j >= 0; j--)
        {
            var cloneSlideY = slideY[j].cloneNode(true);
            cloneSlideY.classList.add('cloneYH');
            slidesY.prepend(cloneSlideY);
        }

        updateWidthY();
        setInitialPosY();

        //새로고침했을 때 이동하는게 보이는 것을 방지
        setTimeout(function(){
            slidesY.classList.add('animatedY');
        }, 100);
    }

    //너비를 늘어난 개수만큼 조절
    function updateWidthY(){
        var currentSlideY = document.querySelectorAll('.reviewbox');
        // console.log(currentSlideY);
        var newSlideCountY = currentSlideY.length;
        var newWidthY = ((slideWidthY + slideMarginY) * newSlideCountY - slideMarginY) + "px";
        slidesY.style.width = newWidthY;
    }


    //복제한 것부터가 아니라 가운데부터 위치해 있기 위해
    function setInitialPosY(){
        var initialTranslateValueY = -(slideWidthY + slideMarginY) * slideCountY;
        slidesY.style.transform = "translateX(" + initialTranslateValueY+ "px)";
    }

    //버튼을 눌렀을 때 이동 > 이벤트 구현 시작
    nextBtnY.addEventListener('click', function(){
        // moveSlideY라는 함수 생성하기
        moveSlideY(currentIdxY + 1);
    });

    preBtnY.addEventListener('click', function(){
        //moveSlideY라는 함수 생성하기
        moveSlideY(currentIdxY - 1);
    })

    //moveSlideY함수 기능
    function moveSlideY(numY){
        slidesY.style.left =  -numY * (slideWidthY + slideMarginY) + "px";
        currentIdxY = numY;
        if(currentIdxY == slideCountY || currentIdxY == -slideCountY) {
            //0으로 되돌아가기
            setTimeout(function(){
                slidesY.classList.remove('animatedY');
                slidesY.style.left = '0px';
                currentIdxY = 0;
            },500);
            //다시 animatedY효과추가
            setTimeout(function(){
                slidesY.classList.add('animatedY');
            },500); 
        } 
    }
    

//고쳐야 할 것
//무한으로 돌아가는 것처럼 보이는 것
//첫번째 클릭 때 transition이 적용없이 이동하는 것

// let heart = document.querySelector('.uil-heart');
// let arrow = document.querySelector('.uil-location-arrow-alt');


// heart.addEventListener('click', function(){

// });



//////////////////////양희끝////////////////////////
//////////////////성진//////////////////
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginBtn')
let loginModal = document.querySelector('.loginModal')
let body = document.querySelector('body')
let lgModal = document.querySelector('.lgModal')
let xmark = document.querySelector('.fa-xmark')
let signUp = document.querySelector('#signUp')
let modalTitle = document.querySelector('.modalTitle')
let modalCheckBox = document.querySelector('.modalCheckBox')
let inputText = document.querySelector('.userName')
let inputPasswd = document.querySelector('.passwd')
let modalBtn = document.querySelector('.modalBtn')
let loadingBook = document.querySelector('.loadingBook')
let loginForm = document.querySelector('.loginForm')
let loginFormContent = document.querySelector('.loginFormContent')
let signUpXmark = document.querySelector('#signUpXmark')
let legAddress = document.querySelector('.legAddress')
let legDetailAddress = document.querySelector('.legDetailAddress')
let addressBtn = document.querySelector('.addressBtn')
let loadingContainer = document.querySelector('.container')

window.onload = () => {
    loadingContainer.classList.add('loadingContainer')
    loadingPage();
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
    loadingContainer.classList.remove('loadingContainer')
}
function loadingPage(){
    setTimeout(loadingFadeout,4500) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none'){
        loginModal.style.display = 'flex'
    }
})

let timeOutClear1;
let timeOutClear2;
let timeOutClear3;
let timeOutClear4;
let timeOutClear5;

xmark.addEventListener('click',function(){
    clearTimeout(timeOutClear1);
    clearTimeout(timeOutClear2);
    clearTimeout(timeOutClear3);
    clearTimeout(timeOutClear4);
    clearTimeout(timeOutClear5);
    modalClose();
})

signUpXmark.addEventListener('click', function(){
    clearTimeout(timeOutClear1);
    clearTimeout(timeOutClear2);
    clearTimeout(timeOutClear3);
    clearTimeout(timeOutClear4);
    clearTimeout(timeOutClear5);
    modalClose();
})

loginModal.addEventListener('click', function(){
    if(event.target.className == 'loginModal'){
        clearTimeout(timeOutClear1);
        clearTimeout(timeOutClear2);
        clearTimeout(timeOutClear3);
        clearTimeout(timeOutClear4);
        clearTimeout(timeOutClear5);
        modalClose();
    }
})


signUp.addEventListener('click', function(){
    loadingBook.style.zIndex = '1';
    modalTitle.style.opacity = '0';
    inputText.style.opacity = '0';
    inputPasswd.style.opacity = '0';
    loginForm.style.backgroundColor = 'white'
    lgModal.classList.add('active')
    modalBtn.classList.add('active')
    signUp.classList.add('signUpActive')
    timeOutClear1 = setTimeout(registLoading,500)
    timeOutClear2 = setTimeout(registLoadingEnd,2400)
    timeOutClear3 = setTimeout(lgmodalMin,2500)
    timeOutClear4 = setTimeout(registActive,2700)
    timeOutClear5 = setTimeout(function(){
        loginFormContent.style.opacity = '1'
    },4000)
})

function registLoading(){
    loadingBook.style.opacity = '1'
}
function registLoadingEnd(){
    loadingBook.style.opacity = '0'
}

function lgmodalMin(){
    lgModal.style.width = '1px'
    lgModal.style.height = '1px'
}

function registActive(){
    loginForm.classList.add('active')
}

function modalClose(){
    modalTitle.style.opacity = '1';
    inputText.style.opacity = '1';
    inputPasswd.style.opacity = '1';
    loginModal.style.display = 'none'
    lgModal.classList.remove('active')
    modalBtn.classList.remove('active')
    signUp.classList.remove('signUpActive')
    loginForm.classList.remove('active')
    loginForm.style.backgroundColor = 'rgb(64, 135, 201)'
    lgModal.style.width = '400px'
    lgModal.style.height = '550px'
    loginFormContent.style.opacity = '0'
    loadingBook.style.opacity = '0'
    loadingBook.style.zIndex = '-1';
}


////////////-------Sign up 유효성 검사 시작----//////////////

/////////////////////////정규표현식///////////////////////////////////////////
const ID_CHECK = /^[a-zA-Z0-9]*$/;
//숫자와 영문(대/소문자)만
const PW_CHECK = /(?=.*\d)+(?=.*[~`!@#$%\^&*()-+=])+(?=.*[a-z])(?=.*[A-Z])+.{0,}$/
//영문(대/소문자), 숫자, 특수문자를 한 개 이상 사용
const NAME_CHECK = /^[가-힣]*$/;
//한글만 사용
const IDENTITY_CHECK = /\d{6}\-[1-4]\d{6}/;
//하이픈 뒤에 첫자리엔 1~4 사이 숫자만
const PHONENUMBER_CHECK = /^\d{2,3}-\d{3,4}-\d{4}$/;
//앞자리는 2~3자리의 숫자 / 중간자리는 3~4자리의 숫자
const NUM_CHECK = /^[0-9]*$/;
//숫자만 체크
///////////////////////////////////////////////////////////////////

let legId = document.querySelector('.legId');
let legPw = document.querySelector('.legPasswd');
let legPwCk = document.querySelector('.legPasswdCheck');
let nameCheck = document.querySelector('.legName');
let year = document.querySelector('.legYear');
let yearText = document.querySelector('#yearText')
let dayText = document.querySelector('#dayText')
let day = document.querySelector('.legDay')
let identity = document.querySelector('.legIdentity')
let legPhone = document.querySelector('.legPhone')
let male = document.querySelector('.fa-mars')
let female = document.querySelector('.fa-venus')

if(typeof(Storage)!== 'undefined'){
    sessionStorage.legId = legId.value;
    if (legId.value === 'undefined') {
        //세션스토리지에 undefined가 들어 있다면
        //undefined가 뜨지않게 하기 위해서 공백을 넣음
        legId.value = '';
    } else {
        legId.value = sessionStorage.legId;
    }
    legId.addEventListener('keyup', function(){
        sessionStorage.legId = legId.value;
        if(legId.value.length == 0){
            legId.nextElementSibling.innerHTML = '영문과 숫자만으로 작성해 주세요.(6~20자)'
            legId.nextElementSibling.style.color = '#D2691E'
        } else if (ID_CHECK.test(legId.value) != true){
            legId.nextElementSibling.innerHTML = "영문 혹은 숫자가 아닙니다."
            legId.nextElementSibling.style.color = "crimson"
        } else if (legId.value.length > 20 || legId.value.length < 6) {
            legId.nextElementSibling.innerHTML = "6~20자 사이로 입력해 주세요."
            legId.nextElementSibling.style.color = "orangered"
        } else {
            legId.nextElementSibling.innerHTML = "사용 가능"
            legId.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
    })
    legPw.addEventListener('keyup', function () {
        if (legPw.value.length == 0) {
            legPw.nextElementSibling.innerHTML = '대/소문자, 숫자, 특수문자의 조합으로 작성해 주세요.(8~16자)'
            legPw.nextElementSibling.style.color = '#D2691E'
        } else if (PW_CHECK.test(legPw.value) != true) {
            legPw.nextElementSibling.innerHTML = "대문자,특수문자,숫자를 반드시 하나 이상 포함해 주세요."
            legPw.nextElementSibling.style.color = "crimson"
        } else if (legPw.value.length > 16 || legPw.value.length < 8) {
            legPw.nextElementSibling.innerHTML = "8~16자 사이로 입력해 주세요."
            legPw.nextElementSibling.style.color = "orangered"
        } else {
            legPw.nextElementSibling.innerHTML = "사용 가능"
            legPw.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
        if (legPwCk.value.length == 0) {
            legPwCk.nextElementSibling.innerHTML = '비밀번호를 다시 한번 입력해 주세요.'
            legPwCk.nextElementSibling.style.color = '#D2691E'
        } else if (legPw.value != legPwCk.value) {
            legPwCk.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치하지 않습니다."
            legPwCk.nextElementSibling.style.color = "crimson"
        } else {
            legPwCk.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치합니다."
            legPwCk.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
    })

    legPwCk.addEventListener('keyup', function () {
        if (legPwCk.value.length == 0) {
            legPwCk.nextElementSibling.innerHTML = '비밀번호를 다시 한번 입력해 주세요.'
            legPwCk.nextElementSibling.style.color = '#D2691E'
        } else if (legPw.value != legPwCk.value) {
            legPwCk.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치하지 않습니다."
            legPwCk.nextElementSibling.style.color = "crimson"
        } else {
            legPwCk.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치합니다."
            legPwCk.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
    })

    
    nameCheck.value = sessionStorage.nameCheck;
    if (nameCheck.value === 'undefined') {
        nameCheck.value = '';
    } else {
        nameCheck.value = sessionStorage.nameCheck;
    }

    nameCheck.addEventListener('keyup', function () {
        sessionStorage.nameCheck = nameCheck.value;
        if (nameCheck.value.length == 0) {
            nameCheck.nextElementSibling.innerHTML = '이름은 한글로 입력해 주세요.'
            nameCheck.nextElementSibling.style.color = '#D2691E'
        } else if (NAME_CHECK.test(nameCheck.value) != true) {
            nameCheck.nextElementSibling.innerHTML = "이름은 영문 혹은 한글로만 입력해 주세요."
            nameCheck.nextElementSibling.style.color = "crimson"
        } else if (nameCheck.value.length < 2) {
            nameCheck.nextElementSibling.innerHTML = "2글자 이상 입력해 주세요."
            nameCheck.nextElementSibling.style.color = "orangered"
        } else {
            nameCheck.nextElementSibling.innerHTML = "사용 가능"
            nameCheck.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
    })
    
    let now = new Date();
    let nowYear = now.getFullYear();
    // 연도를 받아서 변수에 저장

    year.value = sessionStorage.year;
    if (year.value === 'undefined') {
        year.value = '';
    } else {
        year.value = sessionStorage.year;
    }

    year.addEventListener('keyup', function () {
        sessionStorage.year = year.value
        if (NUM_CHECK.test(year.value) != true) {
            yearText.innerHTML = '연도는 숫자로 입력해 주세요.'
            yearText.style.color = "crimson"
        } else if (year.value > nowYear) {
            yearText.innerHTML = '연도가 ' + nowYear + '년을 넘었습니다.'
            yearText.style.color = "orangered"
        } else if (year.value.length == 4) {
            yearText.innerHTML = '완료'
            yearText.style.color = "rgb(19, 168, 99)"
        } else {
            yearText.innerHTML = '연도의 범위가 잘못 됐습니다.'
            yearText.style.color = 'rgb(24, 65, 199)'
        }
    })
    day.value = sessionStorage.day;
    if (day.value === 'undefined') {
        day.value = '';
    } else {
        day.value = sessionStorage.day;
    }

    day.addEventListener('keyup', function () {
        sessionStorage.day = day.value
        // console.log(day.value)
        if (NUM_CHECK.test(day.value) != true) {
            dayText.innerHTML = '일자는 숫자로 입력해 주세요.'
            dayText.style.color = "crimson"
        } else if (day.value.length == 0) {
            dayText.innerHTML = '&nbsp;'
            dayText.style.color = 'rgb(24, 65, 199)'
        } else if (day.value > 31 || day.value < 1) {
            dayText.innerHTML = '일자의 범위가 잘못 됐습니다.'
            dayText.style.color = "orangered"
        } else {
            dayText.innerHTML = '사용 가능'
            dayText.style.color = "rgb(19, 168, 99)"
        }
    })

    identity.addEventListener('keyup', function () {
        // console.log(IDENTITY_CHECK.test(identity.value))
        if (identity.value.length == 0) {
            identity.nextElementSibling.innerHTML = '하이픈(-)을 포함해서 입력해 주세요.'
            identity.nextElementSibling.style.color = '#D2691E';
        } else if (IDENTITY_CHECK.test(identity.value) != true) {
            identity.nextElementSibling.innerHTML = "주민등록 번호를 제대로 입력해 주세요."
            identity.nextElementSibling.style.color = "crimson";
        } else if (identity.value.split("")[7] == 1 || identity.value.split("")[7] == 3) {
            //하이픈 뒤 첫 숫자가 1,3일 때 남자 표시를 띄움
            male.style.visibility = 'visible'
            female.style.visibility = 'hidden'
            identity.nextElementSibling.innerHTML = "사용 가능"
            identity.nextElementSibling.style.color = "rgb(19, 168, 99)"
        } else if (identity.value.split("")[7] == 2 || identity.value.split("")[7] == 4) {
            //하이픈 뒤 첫 숫자가 2,4일 때 여자 표시를 띄움
            female.style.visibility = 'visible'
            male.style.visibility = 'hidden'
            identity.nextElementSibling.innerHTML = "사용 가능"
            identity.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
    })

    addressBtn.addEventListener('click',function(){
        new daum.Postcode({
            oncomplete: function(data) { //선택시 입력값 세팅
                legAddress.value = data.address; // 주소 넣기
                legDetailAddress.focus(); //상세입력 포커싱
            }
        }).open();
    });
    

    
    legPhone.value = sessionStorage.legPhone;
    if (legPhone.value === 'undefined') {
        legPhone.value = '';
    } else {
        legPhone.value = sessionStorage.legPhone;
    }

    legPhone.addEventListener('keyup', function () {
        sessionStorage.legPhone = legPhone.value
        if (legPhone.value.length == 0) {
            legPhone.nextElementSibling.innerHTML = '하이픈(-)을 포함해서 입력해 주세요.'
            legPhone.nextElementSibling.style.color = '#D2691E';
        } else if (PHONENUMBER_CHECK.test(legPhone.value) != true) {
            legPhone.nextElementSibling.innerHTML = '번호를 정확히 입력해 주세요'
            legPhone.nextElementSibling.style.color = 'crimson'
        } else {
            legPhone.nextElementSibling.innerHTML = '사용 가능'
            legPhone.nextElementSibling.style.color = "rgb(19, 168, 99)"
        }
    })
}


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

////////////-------Sign up 유효성 검사 끝--------///////////

////////////////////////////상호////////////////////////////



// 베스트셀러 책 캐러셀
let bookitem = document.querySelectorAll(".bookItem");
let bookslider = document.querySelector(".bestSeller-book-move");
let bookwarp = document.querySelector(".bestSeller-book-warp");
let bookfirstChild = bookslider.firstElementChild.cloneNode(true);
let booklastChild = bookslider.lastChild.cloneNode(true);


let width = 0;
let i = 0;

setInterval(function(){    
    if(bookitem.length >= i){
        bookslider.style.transform = "translate3d(-"+130*(i+1)+"px, 0px, 0px)";
        bookslider.style.transition = "0.2s";
        i++
    }
    if(i === 3){
        setTimeout(function(){
            bookslider.style.transition = "0s";
            bookslider.style.transform = "translate3d(0px,0px,0px)";
        },100)
        i = 0;
    }       
},5000)



//광고 이벤트
window.addEventListener("scroll",function(){
    this.setTimeout(function(){
        if(window.pageYOffset > 80){
            bookslider.style.opacity = "1";
            bookwarp.style.transition = "1.5s";
            bookwarp.style.transform = "translate(160px , 0px)"; 
            bookwarp.style.boxShadow = "0px 2px 5px 2px rgba(0, 0, 0, 0.1)";
         
        }
        else if(window.pageYOffset < 70){
            bookslider.style.opacity = "0";
            bookwarp.style.transition = "0s";
            bookwarp.style.transform = "translate(0px , 0px)";
     

           
        }
    },500)
    

});

//  window.addEventListener("scroll",function(){
  

//         if(window.pageYOffset > 80){
//             bookwarp.style.transform = "translate(160px , 0px)";
        
//         }
//         if(window.pageYOffset < 70){
//             bookBtn.style.opacity = "1";
//             bookBtn.style.transition = "0.5s";
//         }
        
    
// },2500)
 



//광고 삭제 버튼
let bookBtn = document.querySelector("#bestSeller-book-btn");

    bookBtn.addEventListener("click",function(){
        bookwarp.style.opacity = "0";
        bookwarp.style.transition = "0s";
        bookBtn.style.display = "none"
        bookBtn.style.transition = "0s";
    })


//메뉴바 호버
let hoverEle = document.querySelector(".hoverEle");
let dropdown = document.querySelector(".nav-bar-dropdown");
let dropdown_mo = document.querySelector(".nav-bar-modal");


hoverEle.addEventListener("mouseover",function(){
    dropdown.style.opacity = "1";
    dropdown_mo.style.display = "block";
    dropdown.style.transition = "0.3s";

})
dropdown.addEventListener("mouseleave",function(){
    dropdown.style.opacity = "0";
    dropdown_mo.style.display = "none";
    dropdown.style.transition = "0.3s";
})


//헤더 폰트,이미지 이벤트
let fontEle_1 = document.querySelector("#font1");
let fontEle_2 = document.querySelector("#font2");
let fontEle_3 = document.querySelector("#font3");
let fontEle_4 = document.querySelector("#font4");
let fontEle_5 = document.querySelector("#font5");
let fontEle_6 = document.querySelector("#font6");
let headerimg_1 = document.querySelector(".ele-1");
let headerimg_2 = document.querySelector(".ele-2");
let headerimg_3 = document.querySelector(".ele-3");
let text = document.querySelectorAll(".textani");
let text1 = document.querySelectorAll(".ani-1");
let text2 = document.querySelectorAll(".ani-2");
let text3 = document.querySelectorAll(".ani-3");
let imgEle = document.querySelector("#bestSeller-sell-img");

console.log(text1)
let fontcount = 0

if(fontcount === 0){
    setTimeout(function(){
        headerimg_1.style.transition = "1s";
        headerimg_1.style.opacity = "1";
        imgEle.style.opacity = "1";
        imgEle.style.transition = "1s";
        imgEle.style.boxShadow = "0px 10px 20px 5px rgba(0, 0, 0, 0.5)";

    },1000)
    setTimeout(function(){
        fontEle_1.style.transition = "1s";
        fontEle_1.style.opacity = "1";
        fontEle_1.style.transform = "translateY(-100px)";
    },1300)
    setTimeout(function(){
        fontEle_2.style.transition = "1s";
        fontEle_2.style.opacity = "1";
        fontEle_2.style.transform = "translateY(-100px)";
    },1600)
    setTimeout(function(){
        text1[0].className = "textani"
        text2[0].className = "textani1"
        text3[0].className = "textani2"
    },2000)
    
}

 setInterval(function(){
    if(fontcount === 0){
        headerimg_1.style.opacity = "0";
        imgEle.style.opacity = "0";
        imgEle.style.transition = "1s"     
        fontEle_1.style.opacity = "0";
        fontEle_2.style.opacity = "0";
        fontEle_5.style.transform = "translateY(0px)";
        fontEle_6.style.transform = "translateY(0px)";
        text1[0].className = "ani-1"
        text2[0].className = "ani-2"
        text3[0].className = "ani-3"
    setTimeout(function(){
        headerimg_2.style.transition = "1s";
        headerimg_2.style.opacity = "1";
        imgEle.style.opacity = "1";
        imgEle.style.transition = "1s"
        imgEle.style.boxShadow = "0px 10px 20px 5px rgba(0, 0, 0, 0.5)";

    },1200)
    setTimeout(function(){
        fontEle_3.style.transition = "1s";
        fontEle_3.style.opacity = "1";
        fontEle_3.style.transform = "translateY(-100px)";
    },1500)
    setTimeout(function(){
        fontEle_4.style.transition = "1s";
        fontEle_4.style.opacity = "1";
        fontEle_4.style.transform = "translateY(-100px)";
    },1800)
    setTimeout(function(){
        text1[1].className = "textani"
        text2[1].className = "textani1"
        text3[1].className = "textani2"
    },2000)

    }

    
    if(fontcount === 1){
        headerimg_2.style.opacity = "0";
        imgEle.style.transition = "1s"
        fontEle_3.style.opacity = "0";
        fontEle_4.style.opacity = "0";
        imgEle.style.opacity = "0";
        fontEle_1.style.transform = "translateY(0px)";
        fontEle_2.style.transform = "translateY(0px)";
        text1[1].className = "ani-1"
        text2[1].className = "ani-2"
        text3[1].className = "ani-3"
    setTimeout(function(){
        headerimg_3.style.transition = "1s";
        headerimg_3.style.opacity = "1";
        imgEle.style.opacity = "1";
        imgEle.style.transition = "1s"
        imgEle.style.boxShadow = "0px 10px 20px 5px rgba(0, 0, 0, 0.5)";

    },1200)
    setTimeout(function(){
        fontEle_5.style.transition = "1s";
        fontEle_5.style.opacity = "1";
        fontEle_5.style.transform = "translateY(-100px)";
    },1500)
    setTimeout(function(){
        fontEle_6.style.transition = "1s";
        fontEle_6.style.opacity = "1";
        fontEle_6.style.transform = "translateY(-100px)";
    },1800)
    setTimeout(function(){
        text1[2].className = "textani"
        text2[2].className = "textani1"
        text3[2].className = "textani2"
    },2000)

    }
     
    if(fontcount === 2){
        headerimg_3.style.opacity = "0";
        imgEle.style.opacity = "0";
        imgEle.style.transition = "1s"
        fontEle_5.style.opacity = "0";
        fontEle_6.style.opacity = "0";
        fontEle_3.style.transform = "translateY(0px)";
        fontEle_4.style.transform = "translateY(0px)";
        text1[2].className = "ani-1"
        text2[2].className = "ani-2"
        text3[2].className = "ani-3"
        setTimeout(function(){
            headerimg_1.style.transition = "1s";
            headerimg_1.style.opacity = "1";
            imgEle.style.opacity = "1";
            imgEle.style.transition = "1s"
            imgEle.style.boxShadow = "0px 10px 20px 5px rgba(0, 0, 0, 0.5)";

        },1200)
        setTimeout(function(){
            fontEle_1.style.transition = "1s";
            fontEle_1.style.opacity = "1";
            fontEle_1.style.transform = "translateY(-100px)";
        },1500)
        setTimeout(function(){
            fontEle_2.style.transition = "1s";
            fontEle_2.style.opacity = "1";
            fontEle_2.style.transform = "translateY(-100px)";
        },1800)
        setTimeout(function(){
            text1[0].className = "textani"
            text2[0].className = "textani1"
            text3[0].className = "textani2"
        },2000)
 
     }

    if(fontcount === 2){
        setTimeout(function(){
            fontcount = 0;
        },200)
    }
    fontcount++
    },5000)


//베스트 셀러 큰 이미지
let sellItem = document.querySelectorAll(".slideItem");
let sellEle = document.querySelectorAll(".sellEle");
let sellwarp = document.querySelector(".bestSeller-sell-warp");
let child = sellwarp.firstElementChild.cloneNode(true);

sellwarp.appendChild(child);

let sellCount = 0
 
    setInterval(function(){
     if(sellItem.length > sellCount){
         sellItem[sellCount].style.opacity = "0";
     }
     if(sellCount === 0){
        sellItem[1].style.opacity = "1";
     }   
     if(sellCount ===1){
        sellItem[2].style.opacity = "1";
     } 
     if(sellCount ===2){
        sellItem[0].style.opacity = "1";
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
        scrollNav_bar.className = "nav-bar-fixed";
    }
    else if(window.pageYOffset < 30){
        scrollNav_bar.className = "nav-bar";
    } 
})


// 네비바 스크롤 이동 이벤트
let scrollele = document.querySelectorAll(".scroll-ele");
let scrollpotint = document.querySelectorAll(".pointer");
let first = scrollpotint[0].offsetTop;
let second = scrollpotint[1].offsetTop;
let third = scrollpotint[2].offsetTop;
let fourth = scrollpotint[3].offsetTop;

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
let SGslideWidth = 300; //
let SGslideMargin = 30;
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



////// 수근///////////////

// var slides = document.querySelector('.slides'),
//     slide = document.querySelectorAll('.slides li'),
//     currentIdx =0;
//     slideWidth = 1300,
//     slideMargin = 10,
//     slideCount = slide.length,
//     prevBtn = document.querySelector('.prev'),
//     nextBtn = document.querySelector('.next');

//     makeClone();

//     function makeClone() {
//         for(var i=0; i < slideCount; i++) {
//             var cloneSlide = slide[i].cloneNode(true);
//             cloneSlide.classList.add('clone');
//             slides.appendChild(cloneSlide);
//         }
//         for(var i= slideCount-1; i >= 0; i--) {
//             var cloneSlide = slide[i].cloneNode(true);
//             cloneSlide.classList.add('clone');
//             slides.prepend(cloneSlide);
//         }
//         updateWidth();
//         setInitialPos();
//     }
//     function updateWidth() {
//         var currentSlides = document.querySelectorAll('.slides li');
//         var newSlideCount = currentSlides.length;
        
//         var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//         slides.style.width = newWidth; 
//     }
//     function setInitialPos() {
//         var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//         slides.style.transform = 'translateX(' +initialTranslateValue+ 'px)'
//     }

//     nextBtn.addEventListener('click', function(){
//         moveSlide(currentIdx +1);
//     })

//     prevBtn.addEventListener('click', function(){
//         moveSlide(currentIdx -1);
//     })

//     function moveSlide(num) {
//         slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//         currentIdx = num;
//         if(currentIdx == slideCount || currentIdx == -slideCount) {
//                 slides.style.left = '0px';
//                 currentIdx = 0;
//         }

//     }
// let timer1 = undefined;
// function autoSlide(){
//     if(timer1 == undefined){
//         timer1 = setInterval(function(){
//             moveSlide(currentIdx +1);
//         },3000);
//     }
// }
// autoSlide();
// function stopSlide(){
//     clearInterval(timer1);
//     timer1 = undefined;
// }
// slides.addEventListener('mouseenter',function(){
//     stopSlide();
// })
// slides.addEventListener('mouseleave',function(){
//     autoSlide();
// })


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
let close = document.querySelector('.close-area');
let modalimg = document.querySelector('.modalimg');
let heart = document.querySelectorAll('.fa-regular');


//모달창
for(let i = 0; i< boxs.length; i++){
    boxs[i].addEventListener('click', function(e){
        modalY.style.display = 'flex';
        modalimg.src = e.target.src;
    })
}

close.addEventListener('click', function(){
    modalY.style.display = 'none';
})

modalY.addEventListener('click', function(e){

    //조건문을 사용!
    if(e.target.className == 'modalbg')
    {
        modalY.style.display = 'none';
    }
})


//하트 색칠해지는

for(let i = 0; i <heart.length; i++)
{
    heart[i].addEventListener('click', function(e){
        
        //애니메이션으로 scale 조절 & opacity
        //queryselectorAll은 배열, 인덱스로 요소 하나하나를 접근
        //같다 > == or ===
        if(heart[i].className == 'fa-regular fa-heart')
        {
            heart[i].className = 'fa-solid fa-heart';
            heart[i].classList.add('animation');
        }
        else if(heart[i].className == 'fa-solid fa-heart animation')
        {
            heart[i].className = 'fa-regular fa-heart';
        }
    })
}

//좋아요 수 up

//페이징









//////////////////////양희끝////////////////////////
//////////////////성진//////////////////
let container = document.querySelector('.container')
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginBtn')
let loginBox = document.querySelector('.loginIcon')
let iconsBox = document.querySelector('.iconsBox')
let iconsCloseBtn = document.querySelector('.iconsCloseBtn')
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

function loadingFadeout(){
    loading.classList.add('fadeOut')
    loadingContainer.classList.remove('loadingContainer')
}
function loadingPage(){
    setTimeout(loadingFadeout,45) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

let activeIconWidth = 200; // 로그인 아이콘박스가 활성화 됐을 때의 너비

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none' &&
    loginBox.style.width == `${activeIconWidth}px`){
        loginModal.style.display = 'flex'
    }
}) // 로그인 아이콘을 클릭했을 때 모달창이 display none상태이고 로그인 아이콘 박스가 활성화 되지 않았다면 모달창을 활성화

iconsCloseBtn.addEventListener('click',function(){
        iconsBox.style.transform = 'translate(57px,0)'
        loginBox.style.width = '50px'
        loginBox.style.borderRadius = '50%'
})

const {width:loginBoxWidth, height:loginBoxheight} = loginBox.getBoundingClientRect();
const {width:containerWidth, height:containerHeight} = container.getBoundingClientRect();

let boxFlag = null;
let originLeft = null;
let originTop = null;
let originX = null;
let originY = null;
const xEndPoint = containerWidth - loginBoxWidth; //container의 크기에서 loginBox의 크기를 빼서 loginBox가 넘어가지 않는 경계선을 구한다.
const yEndPoint = containerHeight - loginBoxheight;

loginIcon.addEventListener('click',function(){
    if(loginBox.style.width != `${activeIconWidth}px`){
        iconsBox.style.transform = 'translate(0px,0)'
        loginBox.style.width = `${activeIconWidth}px`
        loginBox.style.borderRadius = '30px'
    } else{
        iconsBox.style.transform = 'translate(57px,0)'
        loginBox.style.width = '50px'
        loginBox.style.borderRadius = '50%'
    }
})

loginBox.addEventListener("mousedown", function(e){
    boxFlag = true;
    originX = e.clientX; //마우스의 x축 포인터(브라우저 기준)
    originY = e.clientY; //마우스의 y축 포인터(브라우저 기준)
    originLeft = loginBox.offsetLeft;//container(부모)기준 loginBox좌표
    originTop = loginBox.offsetTop;
}) //loginBox를 클릭했을 때 저장되는 변수 값들

document.addEventListener("mouseup", function(e){
    boxFlag = false;
})

document.addEventListener("mousemove", function(e){
    if(boxFlag && loginBox.style.width != '200px'){
        const diffx= e.clientX - originX // 마우스가 움직일 때의 좌표값에 처음 클릭했을 때 입력된 좌표값을 빼서 이동거리를 구한다. 
        const diffy= e.clientY - originY

        loginBox.style.left = `${Math.min(Math.max(0,originLeft+diffx),xEndPoint)}px`
        //좌우는 max로 좌측으론 0이하로 떨어지지 않게 만들고 , min으로 오른쪽 끝을 넘어가지 않게 만든다.
        loginBox.style.top = `${Math.min(Math.max(0,originTop+diffy),yEndPoint)}px`
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

    const eyeconSlash = document.querySelector('.slash')
    const eyeconShow = document.querySelector('.show')
    const eyecon = document.querySelector('#eyecon')

    eyecon.addEventListener('click', function () {
        if (legPw.type == 'password') {
            // input이 password 타입이면 text로 변경하고 그에 맞는 아이콘 활성화
            legPw.type = 'text'
            legPwCk.type = 'text'
            eyeconSlash.style.display = 'none'
            eyeconShow.style.display = 'block'
        } else {
            legPw.type = 'password'
            legPwCk.type = 'password'
            eyeconShow.style.display = 'none'
            eyeconSlash.style.display = 'block'
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


////////////-------Sign up 유효성 검사 끝--------///////////

////////////////////////////상호////////////////////////////



// 베스트셀러 책 캐러셀
let bookitem = document.querySelectorAll(".bookItem");
let bookslider = document.querySelector(".bestSeller-book-move");
let bookwarp = document.querySelector(".bestSeller-book-warp");
let bookfirstChild = bookslider.firstElementChild.cloneNode(true);
bookslider.appendChild(bookfirstChild)
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
        },300)
        i = 0;
    }       
},5000)


//광고 삭제 버튼
let bookBtn = document.querySelector("#bestSeller-book-btn");
let bookmove = document.querySelector(".bestSeller-book");
let bookicon = document.querySelector("#icon")
let flag = false;
    bookBtn.addEventListener("click",function(){
        if(flag === false){
            bookmove.style.left ="-150px";
            bookBtn.style.left = "-65px";
            bookmove.style.transition = "0.5s"
            bookBtn.style.transition = "0.5s"
            bookicon.className = "fa-solid fa-angle-right";
            flag = true;
        }
        else if(flag === true){
            bookmove.style.left = "0px";
            bookBtn.style.left = "80px";
            bookmove.style.transition = "0.5s"
            bookBtn.style.transition = "0.5s"
            bookicon.className = "fa-solid fa-angle-left";
            flag = false;
        }
       
    })


//메뉴바 호버
let hoverEle = document.querySelector(".hoverEle");
let dropdown = document.querySelector(".nav-bar-dropdown");
let dropdown_mo = document.querySelector(".nav-bar-modal");


hoverEle.addEventListener("mouseover",function(){
    dropdown.style.display = "flex";
    dropdown_mo.style.display = "block";


})
dropdown.addEventListener("mouseleave",function(){
    dropdown.style.display = "none";
    dropdown_mo.style.display = "none";

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
let SGslideWidth = 200; //
let SGslideMargin = 50;
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



//////////////////진주끝/////////////////////

////////////////////////양희시작///////////////////////////////


let boxs = document.querySelectorAll('.topimg');
let modalY = document.querySelector('.modalbg');
let close = document.querySelector('.close-area');
let modalimg = document.querySelector('.modalimg');
let heart = document.querySelectorAll('.fa-regular');

let p2 = document.querySelector('.p2Y');
let p3 = document.querySelector('.p3Y');


const modalpageY = [
        {
            date: "2022-07-26",
            text: "123"
        },
        {
            date: "2021-02-28",
            text: "456"
        },
        {
            date: "2020-07-21",
            text: "789"
        },
        {
            date: "2018-01-11"
            
        },
        {
            date: "2022-01-10"
           
        },
        {
            date: "2022-04-11"
          
        },
        {
            date: "2020-08-21"
           
        },
        {
            date: "2020-08-30"
            
        },
        {
            date: "2018-09-07"
         
        },
        {
            date: "2020-06-29"
            
        }
]


//모달창
for(let i = 0; i< boxs.length; i++){
    boxs[i].addEventListener('click', function(e){
        modalY.style.display = 'flex';
        //박스를 클릭했을 때 그 박스의 이미지를
        //모달창에 있는 이미지로 바로 가져올 수 있도록 함
        modalimg.src = e.target.src;


        //객체에서 내용가져와서 상자마다 내용다르게
        p2.innerHTML = modalpageY[i].date;
        
        

    })
}

//모달창 x클릭했을 때 닫히는 것
close.addEventListener('click', function(){
    modalY.style.display = 'none';
})


//모달창 외의 배경을 클릭했을 때 닫히는 것
modalY.addEventListener('click', function(e){

    //조건문을 사용!
    if(e.target.className == 'modalbg')
    {
        modalY.style.display = 'none';
    }
})


//하트 색칠+애니메이션
for(let i = 0; i <heart.length; i++)
{
    heart[i].addEventListener('click', function(e){
        
        //css에서 애니메이션으로 scale 조절 & opacity
        //queryselectorAll은 배열, 인덱스로 요소 하나하나를 접근
        if(heart[i].className == 'fa-regular fa-heart') //빈하트
        {
            heart[i].className = 'fa-solid fa-heart'; //꽉찬하트
            heart[i].classList.add('animation'); //애니메이션 호출
        }
        else if(heart[i].className == 'fa-solid fa-heart animation') //꽉찬하트
        {
            heart[i].className = 'fa-regular fa-heart'; //다시 빈하트로
        }
    })
}


//페이징

//상자 정보들을 제이슨 파일에 담기 (30개)

//복합적인 문제때문에 ajax로 했을 때나 그냥 했을 때나
//성능의 차이가 별로 없어서 fadein, fadeout으로 눈속임해야 할 듯

  let pagebtn = document.querySelectorAll('.listnumber span');
  let boxsimg = document.querySelectorAll('.topimg img');
  let nameY = document.querySelectorAll('.name');

for(let i=0; i<pagebtn.length; i++)
{
    //페이지 버튼 1,2,3을 눌렀을 때
    pagebtn[i].addEventListener('click', function(){
        //ajax사용
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){

            //json파일에 있는 객체 빼오기
            const myObj = JSON.parse(this.responseText);
            
            //1페이지
            if(i == 0)
            {
                for(let j=0; j < boxsimg.length; j++) //길이:10
                {
                    // console.log(boxsimg[j].src);
                    boxsimg[j].src = myObj[j].img;
                    nameY[j].innerHTML = myObj[j].name;  
                }
            }
            //2페이지
            else if(i == 1)
            {
                for(let j=0; j < boxsimg.length; j++) //길이:10
                {
                    
                    boxsimg[j].src = myObj[j+10].img;
                    nameY[j].innerHTML = myObj[j+10].name;  
                }
            }
            //3페이지
            else if(i == 2)
            {
                for(let j=0; j < boxsimg.length; j++) //길이:10
                {
                   
                    boxsimg[j].src = myObj[j+20].img;
                    nameY[j].innerHTML = myObj[j+20].name;  
                }
            }


        }
        //ajax는 서버에 get 혹은 post 방식의 요청을 보낼 수 있음
        //이때 서버로 전송하고자 하는 데이터는 url에 포함되어 전송

        xhttp.open("GET", "review.json");
        xhttp.send();
    })
}


//////////////////////양희끝////////////////////////
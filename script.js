//////////////////성진//////////////////
let container = document.querySelector('.container')
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginBtn = document.querySelector('.loginBtn')
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




loadingContainer.classList.add('loadingContainer') // 로딩 화면을 불러올 때 전체 화면의 크기를 display에 맞게 변경해서 스크롤이 생기지 않게 만듦
loadingPage();


function loadingPage(){
    setTimeout(loadingFadeout,4) // 첫 로딩 이미지(setTimeout으로 시간 조절)
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
    loadingContainer.classList.remove('loadingContainer')
}

let inActiveIconWidth = 50; // 로그인 아이콘박스가 비활성화 됐을 때의 너비
let activeIconWidth = 200; // 로그인 아이콘박스가 활성화 됐을 때의 너비
let iconsBoxTranslate = 57; // 비활성화 상태의 아이콘 박스에서 로그인 아이콘만 보이도록 좌표 조정

loginBtn.addEventListener('click',function(){
    if(loginModal.style.display == 'none' && loginBox.style.width == `${activeIconWidth}px`){
        loginModal.style.display = 'flex'
    }
}) // 로그인 아이콘을 클릭했을 때 모달창이 display none상태이고, 로그인 아이콘 박스가 활성화 되지 않았다면 모달창을 활성화

iconsCloseBtn.addEventListener('click',function(){
        iconsBox.style.transform = `translate(${iconsBoxTranslate}px, 0)`
        loginBox.style.width = `${inActiveIconWidth}px`
        loginBox.style.borderRadius = '50%'
}) // 아이콘 박스 내의 화살표 버튼을 누르면 아이콘 박스가 원형 모양으로 줄어든다.

const {width:loginBoxWidth, height:loginBoxheight} = loginBox.getBoundingClientRect();
const {width:containerWidth, height:containerHeight} = container.getBoundingClientRect();

let boxFlag = null;
let originLeft = null;
let originTop = null;
let originX = null;
let originY = null;
const xEndPoint = containerWidth - loginBoxWidth; //container의 크기에서 loginBox의 크기를 빼서 loginBox가 넘어가지 않는 경계선을 구한다. (x좌표)
const yEndPoint = containerHeight - loginBoxheight; //container의 크기에서 loginBox의 크기를 빼서 loginBox가 넘어가지 않는 경계선을 구한다. (y좌표)

loginBtn.addEventListener('click',function(){
    if(loginBox.style.width != `${activeIconWidth}px`){ // 아이콘 박스의 너비로 활성화 유무를 판단.
        iconsBox.style.transform = 'translate(0px,0)' // 아이콘 박스가 활성화 됐을 땐 좌표 조정이 필요 없음
        loginBox.style.width = `${activeIconWidth}px`
        loginBox.style.borderRadius = '30px'
    } 
}) // 로그인 버튼으로 로그인 박스를 활성화

loginBox.addEventListener("mousedown", function(e){
    boxFlag = true; // 아이콘 이동이 시작 되었다는 표시
    originX = e.clientX; //마우스의 x축 포인터(브라우저 기준)
    originY = e.clientY; //마우스의 y축 포인터(브라우저 기준)
    originLeft = loginBox.offsetLeft;//container(부모)기준 loginBox좌표
    originTop = loginBox.offsetTop;
}) //loginBox를 클릭했을 때 저장되는 변수 값들

document.addEventListener("mouseup", function(e){
    boxFlag = false; // 아이콘 이동이 끝났다는 표시 (마우스 클릭을 땠을 때)

    if(loginBox.style.left.split('px')[0]>=containerWidth-activeIconWidth){
        loginBox.style.left = `${containerWidth-activeIconWidth}px`;        
    } // 로그인 박스가 활성화 됐을 때, container밖으로 나갈 경우 left를 조정해서 나기지 않도록 한다.
})

document.addEventListener("mousemove", function(e){
    if(boxFlag && loginBox.style.width != '200px'){
        const diffx= e.clientX - originX // 마우스가 움직일 때의 좌표값에 처음 클릭했을 때 입력된 좌표값을 빼서 "이동거리"를 구한다. 
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
const REGIST_CHECK = /(pass){8,8}/
//마지막 검증 때 배열에 pass가 8개 들어있나 확인
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

let btnFlag = ['fail', 'fail', 'fail', 'fail', 'fail', 'fail', 'fail', 'fail'] //0~7 까지의 유효성 체크 여부를 저장하는 배열

///////글씨 색깔///////////////
let defaultColor = "D2691E";
let warnColor = "crimson";
let cautionColor = "orangered";
let passColor = "19,168,99";
///////////////////////////////


if(typeof(Storage)!== 'undefined'){
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
            legId.nextElementSibling.style.color = `#${defaultColor}`;
            btnFlag[0]='fail'
        } else if (ID_CHECK.test(legId.value) != true){
            legId.nextElementSibling.innerHTML = "영문 혹은 숫자가 아닙니다."
            legId.nextElementSibling.style.color = warnColor;
            btnFlag[0]='fail'
        } else if (legId.value.length > 20 || legId.value.length < 6) {
            legId.nextElementSibling.innerHTML = "6~20자 사이로 입력해 주세요."
            legId.nextElementSibling.style.color = cautionColor;
            btnFlag[0]='fail'
        } else {
            legId.nextElementSibling.innerHTML = "사용 가능"
            legId.nextElementSibling.style.color = `rgb(${passColor})`
            btnFlag[0]='pass' // 마지막에 가입하기를 눌렀을 때 유효성 검사에 통과했는지 확인하기 위한 배열 값.
        }
    })
    legPw.addEventListener('keyup', function () {
        if (legPw.value.length == 0) {
            legPw.nextElementSibling.innerHTML = '대/소문자, 숫자, 특수문자의 조합으로 작성해 주세요.(8~16자)'
            legPw.nextElementSibling.style.color = `#${defaultColor}`;
            btnFlag[1]='fail'
        } else if (PW_CHECK.test(legPw.value) != true) {
            legPw.nextElementSibling.innerHTML = "대문자,특수문자,숫자를 반드시 하나 이상 포함해 주세요."
            legPw.nextElementSibling.style.color = warnColor;
            btnFlag[1]='fail'
        } else if (legPw.value.length > 16 || legPw.value.length < 8) {
            legPw.nextElementSibling.innerHTML = "8~16자 사이로 입력해 주세요."
            legPw.nextElementSibling.style.color = cautionColor;
            btnFlag[1]='fail'
        } else {
            legPw.nextElementSibling.innerHTML = "사용 가능"
            legPw.nextElementSibling.style.color = `rgb(${passColor})`
            btnFlag[1]='pass'
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
            legPwCk.nextElementSibling.style.color = `#${defaultColor}`;
            btnFlag[2]='fail'
        } else if (legPw.value != legPwCk.value) {
            legPwCk.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치하지 않습니다."
            legPwCk.nextElementSibling.style.color = warnColor;
            btnFlag[2]='fail'
        } else {
            legPwCk.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치합니다."
            legPwCk.nextElementSibling.style.color = `rgb(${passColor})`;
            btnFlag[2]='pass'
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
            nameCheck.nextElementSibling.style.color = `#${defaultColor}`;
            btnFlag[3]='fail'
        } else if (NAME_CHECK.test(nameCheck.value) != true) {
            nameCheck.nextElementSibling.innerHTML = "이름은 영문 혹은 한글로만 입력해 주세요."
            nameCheck.nextElementSibling.style.color = warnColor;
            btnFlag[3]='fail'
        } else if (nameCheck.value.length < 2) {
            nameCheck.nextElementSibling.innerHTML = "2글자 이상 입력해 주세요."
            nameCheck.nextElementSibling.style.color = cautionColor;
            btnFlag[3]='fail'
        } else {
            nameCheck.nextElementSibling.innerHTML = "사용 가능"
            nameCheck.nextElementSibling.style.color = `rgb(${passColor})`;
            btnFlag[3]='pass'
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
            yearText.style.color = warnColor;
            btnFlag[4]='fail'
        } else if (year.value > nowYear) {
            yearText.innerHTML = '연도가 ' + nowYear + '년을 넘었습니다.'
            yearText.style.color = cautionColor;
            btnFlag[4]='fail'
        } else if (year.value.length == 4) {
            yearText.innerHTML = '완료'
            yearText.style.color = `rgb(${passColor})`;
            btnFlag[4]='pass'
        } else {
            yearText.innerHTML = '연도의 범위가 잘못 됐습니다.'
            yearText.style.color = cautionColor;
            btnFlag[4]='fail'
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
            dayText.style.color = warnColor;
            btnFlag[5]='fail'
        } else if (day.value.length == 0) {
            dayText.innerHTML = '&nbsp;'
            dayText.style.color = 'rgb(24, 65, 199)'
            btnFlag[5]='fail'
        } else if (day.value > 31 || day.value < 1) {
            dayText.innerHTML = '일자의 범위가 잘못 됐습니다.'
            dayText.style.color = cautionColor;
            btnFlag[5]='fail'
        } else {
            dayText.innerHTML = '사용 가능'
            dayText.style.color = `rgb(${passColor})`;
            btnFlag[5]='pass'
        }
    })

    identity.addEventListener('keyup', function () {
        // console.log(IDENTITY_CHECK.test(identity.value))
        if (identity.value.length == 0) {
            identity.nextElementSibling.innerHTML = '하이픈(-)을 포함해서 입력해 주세요.'
            identity.nextElementSibling.style.color = `#${defaultColor}`;
            btnFlag[6]='fail'
        } else if (IDENTITY_CHECK.test(identity.value) != true) {
            identity.nextElementSibling.innerHTML = "주민등록 번호를 제대로 입력해 주세요."
            identity.nextElementSibling.style.color = warnColor;
            btnFlag[6]='fail'
        } else if (identity.value.split("")[7] == 1 || identity.value.split("")[7] == 3) {
            //하이픈 뒤 첫 숫자가 1,3일 때 남자 표시를 띄움
            male.style.visibility = 'visible'
            female.style.visibility = 'hidden'
            identity.nextElementSibling.innerHTML = "사용 가능"
            identity.nextElementSibling.style.color = `rgb(${passColor})`;
            btnFlag[6]='pass'
        } else if (identity.value.split("")[7] == 2 || identity.value.split("")[7] == 4) {
            //하이픈 뒤 첫 숫자가 2,4일 때 여자 표시를 띄움
            female.style.visibility = 'visible'
            male.style.visibility = 'hidden'
            identity.nextElementSibling.innerHTML = "사용 가능"
            identity.nextElementSibling.style.color = `rgb(${passColor})`;
            btnFlag[6]='pass'
        }
    })

    addressBtn.addEventListener('click',function(){
        new daum.Postcode({
            oncomplete: function(data) { //선택시 입력값 세팅
                legAddress.value = data.address; // 주소 넣기
                legDetailAddress.focus(); //상세입력 포커싱
            }
        }).open();
    }); // 카카오 주소 찾기 api
    

    
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
            legPhone.nextElementSibling.style.color = `#${defaultColor}`;
            btnFlag[7]='fail'
        } else if (PHONENUMBER_CHECK.test(legPhone.value) != true) {
            legPhone.nextElementSibling.innerHTML = '번호를 정확히 입력해 주세요'
            legPhone.nextElementSibling.style.color = warnColor;
            btnFlag[7]='fail'
        } else {
            legPhone.nextElementSibling.innerHTML = '사용 가능'
            legPhone.nextElementSibling.style.color = `rgb(${passColor})`;
            btnFlag[7]='pass'
        }
    })
}

function join(){
    let lastCheck = '';
    for (let i = 0; i < btnFlag.length; i++) {
        lastCheck += btnFlag[i]
        //flag에 들어있는 배열의 값들을 변수에 저장
    }
    console.log(btnFlag)
    console.log(lastCheck)
    console.log(REGIST_CHECK.test(lastCheck))

    if (REGIST_CHECK.test(lastCheck) != true) {
        alert("가입 양식을 다시 한번 체크해 주세요.")
    } else {
        alert("가입을 축하합니다.")
        //lastCheck에 들어있는 값이 모두 pass라면 통과
        modalClose();
        loginModal.style.display = 'flex'
    }
}


////////////-------Sign up 유효성 검사 끝--------///////////

//////////////////footer start////////////////////////////////

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


/////////////////footer end///////////////////////////////////

////////////////////////////상호////////////////////////////



// 베스트셀러 책 캐러셀
let bookitem = document.querySelectorAll(".bookItem");
let bookslider = document.querySelector(".bestSeller-book-move");
let bookwarp = document.querySelector(".bestSeller-book-warp");
let bookfirstChild = bookslider.firstElementChild.cloneNode(true);
//마지막에서 첫번째로 돌아올때 잠시 보여질 첫번째 자식클론노드 변수에 저장
bookslider.appendChild(bookfirstChild)
// 클론노드 추가하기

let i = 0;
//setinterval의 실행 횟수를 사용하기 위해 변수 0 초기화
setInterval(function(){    
    if(bookitem.length >= i){
        bookslider.style.transform = "translate3d(-"+130*(i+1)+"px, 0px, 0px)";
        bookslider.style.transition = "0.2s";
        i++
    }
    // 이미지 요소 개수만큼 슬라이드를 구현하기 위해 length로 비교 조건을 주었음
    // 요소 개수보다 작으면 슬라이드를 요소의 넓이만큼 이동시킨뒤
    // 변수를 1증가 시킴
    if(i === 3){
        setTimeout(function(){
            bookslider.style.transition = "0s";
            bookslider.style.transform = "translate3d(0px,0px,0px)";
        },300)
    // 이미지 요소의 마지막인 3에서 슬라이드 위치를 초기하기위해 translate를 0으로 맞추고
    // 자연스러운 슬라이드를 위해 바뀌는 시간에는 미리 만들어놓은 클론노드가 잠시 보여진다
    // 처음부터 시작하기 위한 변수 0초기화
        i = 0;
    }       
},5000)



//광고 삭제 버튼
let bookBtn = document.querySelector("#bestSeller-book-btn");
let bookmove = document.querySelector(".bestSeller-book");
let bookicon = document.querySelector("#icon")
let flag = false;
// 플래그 사용
    bookBtn.addEventListener("click",function(){
        if(flag === false){
            bookmove.style.left ="-150px";
            bookBtn.style.left = "-65px";
            bookmove.style.transition = "0.5s"
            bookBtn.style.transition = "0.5s"
            bookicon.className = "fa-solid fa-angle-right";
            flag = true;
            // 버튼 클릭시 위치를 바꾸는 이벤트
            // -위치를 줘서 화면 바깥으로 나가보임

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
    // 마우스 포인터가 요소위로 올라가면 이벤트가 발생하는 mouseover사용으로
    // 드롭다운 구현
    dropdown.style.display = "flex";
    dropdown_mo.style.display = "block";


})
dropdown.addEventListener("mouseleave",function(){
    // 마우스 포인터가 요소를 떠나가면 이벤트가 발생하는 mouseleave사용
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


//전체적인 구현 -> 겹쳐놓은 이미지를 setinterval 실행횟수에 따라 하나씩 opacity 0 으로 바꿔주는 것 
//이미지의 개수만큼 효과가 구현되면 실행횟수 0으로 재할당
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
        //코드는 위에서 아래 순서로 시작되기 때문에 변수값이 변하면 이전에 발생한 코드를 먼저 사라지게 해줌
    setTimeout(function(){
        // 5초 간격으로 opacity 1에서 0으로 변하는 이벤트를 주기위해 setinterval을 5000간격으로 줌
        //폰트,이미지,헤더배경 각각 다른 시간차를 구현하고 싶어서 코드 실행 시간을 조정하는 settimeout을 각각 따로 부여  
        //총 3번 변하는 이벤트를 구현하기 위해 총 3개의 setinterval사용
        //변수는 실행 횟수를 0으로 초기화해서 사용
        //setinterval을 5000간격으로 주면 5초간격으로 실행되기 때문에 바로 실행되진 않음
        //처음 나오는 효과는 한번 사용하고 없어질수 있도록 if문으로 구현 실행
        headerimg_2.style.transition = "1s";
        headerimg_2.style.opacity = "1";
        imgEle.style.opacity = "1";
        imgEle.style.transition = "1s"
        imgEle.style.boxShadow = "0px 10px 20px 5px rgba(0, 0, 0, 0.5)";
        //제일먼저 실행될 코드 -> settimeout의 시간값이 제일 낮아서 먼저 시작됨

    },1200)
    setTimeout(function(){
        //두번째
        fontEle_3.style.transition = "1s";
        fontEle_3.style.opacity = "1";
        fontEle_3.style.transform = "translateY(-100px)";
    },1500)
    setTimeout(function(){
        //세번째
        fontEle_4.style.transition = "1s";
        fontEle_4.style.opacity = "1";
        fontEle_4.style.transform = "translateY(-100px)";
    },1800)
    setTimeout(function(){
        //네번째는 css 애니메이션으로 구현하였기 때문에 애니메이션 name이 있는 클래스로 변경        //마지막엔 그냥 변수 0으로 초기화하면됨
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
//전체적인 구현-> position absolute로 겹쳐놓은 요소를 하나씩 opacity 0으로 사라지게하고
//다른이미지가 보일때 opacity 1로 되돌리기 반복
//5000초 간격마다 코드를 실행하기 위해 setinterval사용
//마지막 요소에서 첫번째로 이동 할때 자연스러운 이동을 주기위해 첫번째 요소를
//클론노드로 추가하여 마지막요소에서 첫번째로 바뀔때 클론노드가 잠시 보인다
let sellCount = 0
    // setinterval 실행횟수를 사용하기 위해 변수를 0으로 초기화 
    setInterval(function(){
     if(sellItem.length > sellCount){
        //이미지의 개수만큼 실행하기 위해 length로 조건 비교
         sellItem[sellCount].style.opacity = "0";
        // 변수가 0~3으로 반복될것이기 때문에 쿼리셀렉터올의 요소를 변수로 하나씩 지정해줌
     }
     if(sellCount === 0){
        //변수가 0일때 이미지2번이 opacity 1이 됨
        sellItem[1].style.opacity = "1";
     }   
     if(sellCount ===1){
        //변수가 1일때 이미지2번이 opacity 1이 됨
        sellItem[2].style.opacity = "1";
     } 
     if(sellCount ===2){
        //변수가 2일때 이미지2번이 opacity 1이 됨
        sellItem[0].style.opacity = "1";
     }
    setTimeout(function(){
        //변수가 3일때 변수 0으로 재할당
        if(sellCount === 3){
                sellCount = 0
         }
        },101)
     
     sellCount++

    },5000)


//네비바 픽스드 이벤트
let scrollNav_bar = document.querySelector(".nav-bar"); 
//전체적인 구현 -> 스크롤의 위치값을 받아올수 있는 window객체의 pageoffset메소드 사용
//window객체를 사용하면 스크롤값에 따른 이벤트를 줄수 있다.

window.addEventListener("scroll",function(){
    //pageoffset으로 받은 값이 메뉴바의 높이인 80이 넘어가면 고정이 될수 있도록 조건을 80으로 작성
    //position fixed값이 있는 클래스로 변경하여 스크롤바 고정 이벤트 구현
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

//전체적인 구현-> 원하는 위치를 선정하여 클래스명을 부여하고 그 요소의 위치값을 받아올수 있는 속성 offsettop
//으로 위치값을 변수에 저장하고 클릭을 하면 위치값으로 이동 시킬수 있는 window객체의 scrollto메소드 사용
//scrollTo({top:위치값 , hehavior: 움직이는 스크롤 효과 지정}) 

scrollele[0].addEventListener("click",function(){
    //쿼리셀렉터올을 사용하여 []로 요소를 지정해서 클릭이벤트 부여
    window.scrollTo({top:first,behavior:"smooth"});
    // 원하는 좌표로 스크롤을 움직일수 있게 하는 window.scrollTo사용
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


//모달창
for(let i = 0; i< boxs.length; i++){
    boxs[i].addEventListener('click', function(e){
        modalY.style.display = 'flex';
        //박스를 클릭했을 때 그 박스의 이미지를
        //모달창에 있는 이미지로 바로 가져올 수 있도록 함
        modalimg.src = e.target.src;

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


let pagebtn = document.querySelectorAll('.listnumber span');
let boxsimg = document.querySelectorAll('.topimg img');
let nameY = document.querySelectorAll('.name');


//상자 정보들을 제이슨 파일에 담기 (30개)
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
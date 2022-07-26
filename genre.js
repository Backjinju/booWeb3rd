
let ISslides = document.querySelector('.issue_slides');
let ISslide = document.querySelectorAll('.issue_slides li');
let IScurrentIdx =0;
let ISslideWidth = 1221;
let ISslideMargin = 10;
let ISslideCount = ISslide.length;
let ISprevBtn = document.querySelector('.issue_prev');
let ISnextBtn = document.querySelector('.issue_next');


    ISmakeClone();

    function ISmakeClone() {
        for(let i=0; i < ISslideCount; i++) {
            let IScloneSlide = ISslide[i].cloneNode(true);
            IScloneSlide.classList.add('clone');
            ISslides.appendChild(IScloneSlide);
        }
        for(let i= ISslideCount-1; i >= 0; i--) {
            let IScloneSlide = ISslide[i].cloneNode(true);
            IScloneSlide.classList.add('clone');
            ISslides.prepend(IScloneSlide);
        }
        ISupdateWidth();
        ISsetInitialPos();
    }
    function ISupdateWidth() {
        let IScurrentSlides = document.querySelectorAll('.issue_slides li');
        let ISnewSlideCount = IScurrentSlides.length;
        
        let ISnewWidth = (ISslideWidth + ISslideMargin) * ISnewSlideCount - ISslideMargin + 'px';
        ISslides.style.width = ISnewWidth; 
    }
    function ISsetInitialPos() {
        let ISinitialTranslateValue = -(ISslideWidth + ISslideMargin) * ISslideCount;
        ISslides.style.transform = 'translateX(' +ISinitialTranslateValue+ 'px)'
    }

    ISnextBtn.addEventListener('click', function(){
        ISmoveSlide(IScurrentIdx +1);
    })

    ISprevBtn.addEventListener('click', function(){
        ISmoveSlide(IScurrentIdx -1);
    })

    function ISmoveSlide(num) {
        ISslides.style.left = -num * (ISslideWidth + ISslideMargin) + 'px';
        IScurrentIdx = num;
        if(IScurrentIdx == ISslideCount || IScurrentIdx == -ISslideCount) {
                ISslides.style.left = '0px';
                IScurrentIdx = 0;
        }

    }
let IStimer = undefined;
function ISautoSlide(){
    if(IStimer == undefined){
        IStimer = setInterval(function(){
            ISmoveSlide(IScurrentIdx +1);
        },3000);
    }
}
ISautoSlide();
function ISstopSlide(){
    clearInterval(IStimer);
    IStimer = undefined;
}
ISslides.addEventListener('mouseenter',function(){
    ISstopSlide();
})
ISslides.addEventListener('mouseleave',function(){
    ISautoSlide();
})

var THslides = document.querySelector('.theme_slides'),
    THslide = document.querySelectorAll('.theme_slides li'),
    THcurrentIdx =0;
    THslideWidth = 600,
    THslideMargin = 20,
    THslideCount = THslide.length,
    THprevBtn = document.querySelector('.theme_prev'),
    THnextBtn = document.querySelector('.theme_next');

    THmakeClone();

    function THmakeClone() {
        for(var i=0; i < THslideCount; i++) {
            var THcloneSlide = THslide[i].cloneNode(true);
            THcloneSlide.classList.add('clone');
            THslides.appendChild(THcloneSlide);
        }
        for(var i= THslideCount-1; i >= 0; i--) {
            var THcloneSlide = THslide[i].cloneNode(true);
            THcloneSlide.classList.add('clone');
            THslides.prepend(THcloneSlide);
        }
        THupdateWidth();
        THsetInitialPos();
    }
    function THupdateWidth() {
        var THcurrentSlides = document.querySelectorAll('.theme_slides li');
        var THnewSlideCount = THcurrentSlides.length;
        
        var THnewWidth = (THslideWidth + THslideMargin) * THnewSlideCount - THslideMargin + 'px';
        THslides.style.width = THnewWidth; 
    }
    function THsetInitialPos() {
        var THinitialTranslateValue = -(THslideWidth + THslideMargin) * THslideCount;
        THslides.style.transform = 'translateX(' +THinitialTranslateValue+ 'px)'
    }

    THnextBtn.addEventListener('click', function(){
        THmoveSlide(THcurrentIdx +1);
    })

    THprevBtn.addEventListener('click', function(){
        THmoveSlide(THcurrentIdx -1);
    })

    function THmoveSlide(num) {
        THslides.style.left = -num * (THslideWidth + THslideMargin) + 'px';
        THcurrentIdx = num;
        if(THcurrentIdx == THslideCount || THcurrentIdx == -THslideCount) {
            THslides.style.left = '0px';
            THcurrentIdx = 0;
        }

    }

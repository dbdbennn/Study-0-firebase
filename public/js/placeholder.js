inputs = document.getElementsByClassName("input");
widthChange = window.matchMedia('(max-width:768px)');
chagneMedia = function(e) {
    if(e.matches){
        inputs[0].placeholder = '아이디';
        inputs[1].placeholder = '비밀번호';
        inputs[2].placeholder = '비밀번호 확인';
        inputs[3].placeholder = '이메일';
    }
    else {
        for(let i =0; i<4; i++){
            inputs[i].placeholder = '';
        }
    }
}

widthChange.addListener(chagneMedia);
chagneMedia(widthChange);
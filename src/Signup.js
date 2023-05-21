import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./css/signup.css";
import "./css/font.css";
import "./css/base.css";

function SignUp() {
    const handleRegisterClick = () => {
        var email = document.getElementById('input-email').value;
        var pw = document.getElementById('input-pw').value;
        var pwchk = document.getElementById('input-pwchk').value;
        var nickname = document.getElementById('input-nickname').value;
    
        // 비밀번호 일치 여부 확인
        if (pw !== pwchk) {
          alert('비밀번호가 일치하지 않습니다.');
          return 0;
        }
    
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pw)
          .then((result) => {

            result.updateProfile({
              displayName: nickname
            })
            .then(() => {
              console.log(result);
            })
          })
          .catch((error) => {
            switch (error.code) {
              case 'auth/weak-password':
                alert('비밀번호는 6자리 이상이어야 합니다');
                break;
              case 'auth/invalid-email':
                alert('잘못된 이메일 주소입니다');
                break;
              case 'auth/email-already-in-use':
                alert('이미 가입되어 있는 계정입니다');
                break;
            }
          });

      };
    
      return (
        <div className="container">
          <div className="title">sign up</div>
          <div className="flex">
            <div className="input-div">
              <label className="label">이메일</label>
              <input id="input-email" className='input' type="text" />
            </div>
            <div className="input-div">
              <label className="label">닉네임</label>
              <input id="input-nickname" className='input' type="text" />
            </div>
            <div className="input-div">
              <label className="label">비밀번호</label>
              <input id="input-pw" className='input' type="password" />
            </div>
            <div className="input-div">
              <label className="label">비밀번호 확인</label>
              <input id="input-pwchk" className='input' type="password" />
            </div>
          </div>
          <button id="register" onClick={handleRegisterClick}>
            next
          </button>
        </div>
      );
}

export default SignUp;
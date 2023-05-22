import React, { useRef, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./css/signup.css";
import "./css/font.css";
import "./css/base.css";

function SignUp() {

  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const handleRegisterClick = () => {
    // 비밀번호 일치 여부 확인
    if (password !== passwordConfirmation) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: nickname
        })
          .then(() => {
            console.log(result.user);
            alert('회원가입 성공');
          })
          .catch((error) => {
            console.log(error);
          });
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
          default:
            alert(error);
            break;
        }
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegisterClick();
    }
  };

  const script = document.createElement("script");
    script.src = "./js/placeholder.js";
    script.async = true;
    document.body.appendChild(script);

  return (
    <div className="container">
      <div className="title">sign up</div>
      <div className="flex">
        <div className="input-div">
          <label className="label">이메일</label>
          <input
            ref={inputRef}
            id="input-email"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="input-div">
          <label className="label">닉네임</label>
          <input
            id="input-nickname"
            className="input"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="input-div">
          <label className="label">비밀번호</label>
          <input
            id="input-pw"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="input-div">
          <label className="label">비밀번호 확인</label>
          <input
            id="input-pwchk"
            className="input"
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <button id="register" onClick={handleRegisterClick}>
        next
      </button>
    </div>
);
}

export default SignUp;

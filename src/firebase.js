import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  // Firebase 구성 정보를 여기에 붙여넣기
};

// Firebase 앱 초기화
firebase.initializeApp(firebaseConfig);

// Firebase 서비스 객체 가져오기
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, auth, firestore, storage };
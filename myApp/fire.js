import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBvZdTYPwIxHvUzBWvDdyuTdwvEhOIZuPU",
    authDomain: "wikisum-13bd2.firebaseapp.com",
    projectId: "wikisum-13bd2",
    storageBucket: "wikisum-13bd2.firebasestorage.app",
    messagingSenderId: "92328728449",
    appId: "1:92328728449:web:191b9c70349d86d8cc7a80",
    measurementId: "G-DGSB8CK83D"
}
const app = initializeApp(config);

const appcheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LeaqXUqAAAAAOfSuhANoKRu_wSdtKIYzJ7Nkmc4"),
    isTokenAutoRefreshEnabled: true
})

const auth = getAuth(app);

const db = getFirestore(app)

import * as functions from 'firebase-functions'; 
import {initializeApp} from 'firebase/app'; 
import {getAuth} from 'firebase/auth'; 
import openai from 'openai'
import {getFirestore} from 'firebase/firestore'

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

const auth = getAuth(app);

const db = getFirestore(app)

const ai = new openai({apiKey: "<secret key>"})
const items = async (e) => {
    const collections = await ai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user", 
                content: [
                    {type: "text", text: "describe this image in 30 words or less"},
                    {
                        type: "image_url",
                        image_url: {
                            url: e,

                        }
                    }
                ]
            }
        ]
    })
}

export const funcs = functions.https.onRequest((req, res) => {
    const text = req.query.inputs
    res.send(text)
    res.end()
})

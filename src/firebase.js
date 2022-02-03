import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore"
const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAskR8sb0fa2DcPrRo_M8dlkUe2BOjzB8w",
        authDomain: "react-test-app-f08e6.firebaseapp.com",
        projectId: "react-test-app-f08e6",
        storageBucket: "react-test-app-f08e6.appspot.com",
        messagingSenderId: "866127697757",
        appId: "1:866127697757:web:dcd3f4a3de099970dcbab4"
    }
)
export const Auth = app.auth();
export const db = getFirestore();
export default app;
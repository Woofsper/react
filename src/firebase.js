import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    projectId: "woofsper-master-ax8z",
    appId: "1:140312683384:web:bb9136f79771fe8c2ade8d",
    storageBucket: "woofsper-master-ax8z.firebasestorage.app",
    apiKey: "AIzaSyC4t_wWNDupsOp_hQuMkOPU7QCBrJhzGJY",
    authDomain: "woofsper-master-ax8z.firebaseapp.com",
    messagingSenderId: "140312683384",
    measurementId: "G-XXXXXXXXXX",
    databaseURL: "https://woofsper-master-ax8z-default-rtdb.asia-northeast1.firebasedatabase.app" // Fallback local if needed
};

// Note: The database URL might change based on region. For Seoul, it's typically:
// https://[project-id]-default-rtdb.asia-northeast3.firebasedatabase.app

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app, "https://woofsper-master-ax8z-default-rtdb.asia-northeast3.firebasedatabase.app");
export default app;

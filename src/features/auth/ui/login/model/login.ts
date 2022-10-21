import { viewerModel } from "@/Entities/viewer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const signIn = ({email, password, dispatch, setAuth}:any) => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
		console.log(user.email)
		setAuth({email: user.email, uid: user.uid})
		dispatch(viewerModel.loginUser({email, uid: user.uid}))
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	});
}

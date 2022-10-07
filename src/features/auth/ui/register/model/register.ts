import { viewerModel } from "@/Entities/viewer";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";


export const signIn = ({email, password, dispatch}:any) => {
	const auth = getAuth();
	console.log(email, password)
	createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
		dispatch(viewerModel.loginUser({email, uid: user.uid}))
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	});
}

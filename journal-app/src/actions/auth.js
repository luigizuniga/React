import { types } from '../types/types';
import { firebase, googleAuthProvider} from '../firebase/firebase-config';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       firebase.auth().signInWithEmailAndPassword(email, password)
       .then(({ user }) => {
         console.log("Login success");
         dispatch(login(user.uid, user.displayName));
       })
       .catch( e => {
           console.log(e);
       })
    }
}



export const startRegisterWithEmailPasswordName = ( email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password )
        .then(
         async({user}) => {
             console.log("Register success");
             // Return name for firebase in case null
            await user.updateProfile({displayName: name});
            // send value firebase to store
            dispatch(login(user.uid, user.displayName));
        })
        .catch( e => {
            console.log(e);
        });
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then(
                ({user})  => {
                    console.log(user);
                    dispatch(
                    login( user.uid, user.displayName )
                )
            });
    }
}


export const login = (uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
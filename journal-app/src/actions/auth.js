import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { startLoading ,finishLoading } from './ui';



export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
       //Loading dispatch
       dispatch( startLoading() );

       //Login With Email and Password
       firebase.auth().signInWithEmailAndPassword(email, password)
       .then(({ user }) => {
         dispatch( login(user.uid, user.displayName) );
         dispatch( finishLoading() );
       })
       .catch( e => {
         console.log(e);
         dispatch( finishLoading() );
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
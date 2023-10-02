import React,{useEffect} from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store =>store.user)
  const handleSignOut =() =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error')
      // An error happened.
    });
  }
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL: photoURL }));
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
        // ...
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
     <img
     className='w-40'
     src={LOGO} alt="logo" />

    {user && <div className='flex p-2'>
      <img
      className='w-12 h-12'
      alt='usericon'
      src={user?.photoURL}
      />
      <button onClick={handleSignOut} className='font-bold text-white'>(sign Out)</button>
     </div>}
    </div>
  )
}

export default Header
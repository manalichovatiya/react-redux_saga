import { useDispatch, useSelector } from "react-redux";
import { GET_USER_PROCESS } from "./redux-saga/user/action/action";
import { useEffect, useRef } from "react";

function App() {
  const username = useRef()
  const password = useRef()
  const abc = useSelector((state) => state.user_reducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch({type:GET_USER_PROCESS})
  },[])


  return (
    <>
    <input name="username" ref={username}/>
    <input name="password" ref={password}/>
    <button>Submit</button>
    {
      abc.viewer_data?.map((val)=>{
        return(
          <>
          <h1>Usernamee:{val.username}</h1>
          <h1>password:{val.password}</h1>
          </>
        )
      })
    }
    </>
  )
}

export default App;
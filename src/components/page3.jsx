import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/userslice';

const Page3 = () => {

    useEffect(() => {

    }, [])

    
    const [apiCallRespData, setApiCallRespData] = useState("No Data")
    
    const onClickCallPostMethod = async () => {
      try{
        console.log("Call api func start")
        const resp = await axios.post("http://localhost:5500/abc", {
          username: "lunb",
          password: "abcdef"
        })

        if(resp.status === 200){
          console.log('resp.data ', resp.data)
          setApiCallRespData(resp.data)
        }
        console.log('resp : ', resp)
        console.log("Call api func end")
      }catch(err){
        console.log('err ', err)
      }finally{

      }
    }

    const user = useSelector((state) => state.user.user); // Access user from Redux state
    const dispatch = useDispatch(); // Get the dispatch function

    // Dispatch an action to update user
    const handleSetUser = () => {
      dispatch(setUser({ name: 'John' }));
    };

    
  return (
    <div>
      <p>Page 3</p>

      <span>apiCallRespData: {apiCallRespData}</span>

      <button onClick={onClickCallPostMethod}>
        Call /abc post method
      </button>


    </div>
  );
}

export default Page3;
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, signIn } from './actions';
// We can extract data from store using useSelector
import { useSelector, useDispatch } from 'react-redux';

function App() {

  let [username, setUsername] = useState('');

  let userNameVal = useRef('');

  const btnStyle = {
    background: 'gray',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '5px'
  };

  const loginSuccess = {
    backgroundColor: 'green',
    color: '#fff'
  }

  const loginFailed = {
    backgroundColor: 'red',
    color: '#fff'
  }

  const inputStyle = {
    padding: '10px',
    width: '50vw',
    marginBottom: '15px'
  }

  const btnLogin = {
    padding: '10px',
    width: '52vw'
  }


  // Getting Counter from Store
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  // Submit Form
  const submitForm = e => {
    if(!isLogged) {
      e.preventDefault();
      dispatch(signIn());
      setUsername(userNameVal.current.value);
      userNameVal.current.value = "";
    }
  }


  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>DevEd Redux Course</h1>

      {/* Simple Registration Form */}
      <form onSubmit={e => submitForm(e)}>

        {
          isLogged ? ""
            : <input
              placeholder="Enter Nickname..."
              type="text"
              style={inputStyle}
              ref={userNameVal}
            ></input>
        }

        <br/>
        <button style={btnLogin}>{isLogged ? 'Log Out' : 'Log In'}</button>
      </form>



      {
        isLogged ?
          <h3 style={loginSuccess}>Welcome back, {username} !</h3>
          : <h3 style={loginFailed}>Please Log In</h3>
      }

      <h3>Counter : {counter}</h3>
      <button style={btnStyle} onClick={() => dispatch(increment(2))}>+</button>
      <button style={btnStyle} onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
}


export default App;

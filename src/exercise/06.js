// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');
  const inputRef = React.useRef('');
  const submitBtnRef = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    console.log(inputRef.current.value)
    // onSubmitUsername(e.target.elements.username.value)
    onSubmitUsername(username)
  }

  function handleChange(e) {
    setUsername(e.target.value.toLowerCase());
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        {/* <input type="text" id="username" /> */}
        <input 
          type="text" 
          id="username"
          ref={inputRef}
          onChange={(event) => handleChange(event)}
          value={username}
        />
      </div>
      <button type="submit" ref={submitBtnRef}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
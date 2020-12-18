import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitUsername(e.target.elements.username.value)
  }

  function handleChange(e) {
    const isValid = e.target.value.toLowerCase() === e.target.value
    if (!isValid) {
        setError('Username must be lower case');
    } else if(error){
      setError(null);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username"
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
          {error ? error : null}
      </div>
      <button type="submit" disabled={error !== null}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
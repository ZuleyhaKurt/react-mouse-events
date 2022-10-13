import {useState} from 'react'


const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        alert(`username:${username}
        email: ${email},
        password: ${password}`)
        setUsername("");
        setEmail("");
        setPassword("");
}

    const handleUsername = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value)
}

    return (
      <form onSubmit={handleSubmit}>
        <h1 className="display-5 text-danger">FORMS</h1>
  
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
                    Username: <span>{ username}</span>
          </label>
          <input type="text" className="form-control" id="username"value={username} onChange={handleUsername}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
                    Email:<span>{email}</span>
          </label>
          <input type="email" className="form-control" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" value={password} id="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };
  
  export default Form;
  
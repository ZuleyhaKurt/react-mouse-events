import {useState} from 'react'


const FormObject = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password:"",
        
    });
    const{username,password,email}=formValues
  
 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        alert(`username:${username}
        email: ${email},
        password: ${password}`)
       
}

    const handleForm=()=>{}


    return (
      <form onSubmit={handleSubmit}>
        <h1 className="display-5 text-danger">FORM OBJECT</h1>
  
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
                    Username: <span>{ username}</span>
          </label>
                <input type="text" className="form-control" id="username" value={username}
                    onChange={handleForm } />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
                    Email:<span>{email}</span>
          </label>
                <input type="email" className="form-control" value={email} id="email"
                    onChange={ handleForm } />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
                <input type="password" className="form-control" value={password} id="password"
                    onChange={ handleForm } />
        </div>
  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };
  
export default FormObject;
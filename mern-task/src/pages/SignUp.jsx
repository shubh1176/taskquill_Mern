import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMeesage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) =>{
    setFormData({ ...formData,[e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username || !formData.email || !formData.password){
      return setErrorMeesage('Please fill out all Fields');
    }
    try{
      setLoading(true);
      setErrorMeesage(null);
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success === false){
        return setErrorMeesage(data.message)
      }
      setLoading(false);
    }catch(error){
      setErrorMeesage(error.message);
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side div */}
        <div className='flex-1'> 
          <p className='font-mono text-sm mt-5'> Connect with peers to work on any task!!</p>
        </div>


        {/* right side div */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value="Username"/>
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              onChange={handleChange}              

              />
            </div>
            <div className="">
              <Label value="email"/>
              <TextInput
                type='email'
                placeholder='email'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="password"/>
              <TextInput
                type='password'
                placeholder='password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button outline gradientDuoTone="cyanToBlue" type='submit'>
              Sign Up
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span>Have an account?</span> 
              <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
            
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }

        </div>
      </div>
    </div>
  )
}

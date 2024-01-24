import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")


    const login = async (data) => {
        setError("")
        try {
            const session =  await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width='100%' />
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold'>
            Sign in to your account
        </h2>
        <p className='mt-2 text-center text-base text-black/60'>
            Don&apos;t have an account?&nbsp;
            <Link to='/signup' 
            className='font-medium text-primary transition-all duration-200 hover:underline'
            >
                Sign up
            </Link>
        </p>
        {error && <p className='mt-8 text-center text-red-600'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                    label='Email: '
                    placeholder='Enter your Email'
                    type="email"
                    {...register('email', { 
                        required: 'Email is required', 
                        validate: {
                            matchPattern: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Invalid email address'
                        } 
                    })}
                />
                <Input 
                    label='Password: '
                    placeholder='Enter your Password'
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                    })}

                />
                <Button type='submit' className='w-full' 
                >Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default Login
import TransparentButton from '@/components/Buttons/TransparentButton';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'

const SignUpForm = () => {
    return (
        <form className='w-full md:w-1/2 bg-gray-50 flex flex-col justify-center space-y-3 items-center py-6 px-3 rounded-t-2xl md:rounded-r-2xl md:rounded-l-none'>
                <p className='text-black text-4xl font-bold'>Sign up</p>
                <div className='flex flex-row justify-evenly w-2/3'>
                    <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FcGoogle className='w-6 h-6' /></TransparentButton>
                    <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FaFacebook className='w-6 h-6' /></TransparentButton>
                    <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FaGithub className='w-6 h-6' /></TransparentButton>
                </div>
                <p className='font-semibold'>or sign up using email, password</p>
                <div className='flex flex-col space-y-2 w-3/4'>
                    <input type='text' name='name' placeholder='username' className='bg-purple-50 w-full py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                    <input type='email' name='email' placeholder='email' className='bg-purple-50 w-full py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                    <input type='password' name='password' placeholder='password' className='bg-purple-50 py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                    <input type='password' name='confirmPassword' placeholder='confirm password' className='bg-purple-50 py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                </div>
                <TransparentButton type='submit' customClass='rounded-3xl px-6 py-3 text-white border-none bg-purple-500 w-3/4 hover:text-black'>SIGN UP</TransparentButton>
            </form>
    );
};

export default SignUpForm;
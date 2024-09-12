import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignUp =  async () => {
  
    return (
        <section className='flex-container  size-full max-sm:px-6'>
            <AuthForm type="sign-up" />

        </section>
    )
}

export default SignUp


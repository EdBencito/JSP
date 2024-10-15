import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import SignupBox from '../SignUpBox'

interface SignUpProps { }

function SignUp(props: SignUpProps) {
    return (
        <>
        <SignupBox />
        <Footer />
        </>
    )
}
export default SignUp;
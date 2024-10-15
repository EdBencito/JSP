import React from 'react'
import '../../App.css'
import Tiles from '../Tiles'
import Footer from '../Footer'


interface EmployersProps { }

function Employers(props: EmployersProps) {
    return (
        <>
        {/* <h1 className='employers'>EMPLOYERS</h1> */}
        <Tiles/>
        <Footer />
        </>
    )
}
export default Employers;
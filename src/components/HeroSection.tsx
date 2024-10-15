import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { SearchBox} from './SearchBox'


interface HeroSectionProps { }

function HeroSection(props: HeroSectionProps) {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>READY FOR A FRESH START?</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button> */}
            </div>
            <SearchBox onSearch={function (what: string, where: string): void {
                throw new Error('Function not implemented.');
            } } />
        </div>
    )
}

export default HeroSection
import '../App.css';
import './HeroSection.css';
import {SearchBox} from './SearchBox'
import video from '/public/videos/video-1.mp4'


interface HeroSectionProps { }

function HeroSection(_props: HeroSectionProps) {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>READY FOR A FRESH START?</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
            </div>
            <SearchBox onSearch={function (_what: string, _where: string): void {
                throw new Error('Function not implemented.');
            } } />
        </div>
    )
}

export default HeroSection
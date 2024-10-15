import '../../App.css'
import HeroSection from '../HeroSection'
import Footer from '../Footer'

interface HomeProps { }

function Home(_props: HomeProps) {
    return (
        <>
        <HeroSection /> 
        <Footer />
        </>
    )
}

export default Home;
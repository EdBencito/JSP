import '../../App.css'
import Footer from '../Footer'
import LoginBox from '../LoginBox'

interface LogInProps { }

function LogIn(_props: LogInProps) {
    return (
        <>
        <LoginBox />
        <Footer />
        </>
    )
}
export default LogIn;
import  Navbar from './components/navbar/Navbar'
import HeroSection from './components/body/HeroSection'
import Rolunk from './components/body/Rolunk'
import Szolgaltatasok from './components/body/Szolgaltatasok'
import Elerhetoseg from './components/body/Elerhetoseg'
import IdopontSection from './components/body/IdopontSection'
import Footer from './components/footer/Footer'

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Rolunk />
            <Szolgaltatasok />
            <Elerhetoseg />
            <IdopontSection />
            <Footer />
        </div>
    )
}

export default App

import React from 'react'
import Idopont from '../navbar/Idopont'

function HeroSection() {
    return (
        <section
        initial={{
            rotate: 45,
            opacity:0,
            x: -1000
            }}
        animate ={{
            rotate: 0,
            opacity : 1,
            x:0
        }}
        transition= {{duration: .75}}
        className="hero">
            <h3 >Add meg autódnak</h3>
            <h2>Amire szükksége van</h2>
            <p>Klasszikus autók szereeésére szakosodott műhelyünk szakszerű javításokat végez.</p>
            <Idopont
            text="Időpont foglalása" section="idopont" />
            <div className="img"></div>
        </section>
    )
}

export default HeroSection

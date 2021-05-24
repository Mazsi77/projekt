import React from 'react'
import { motion } from 'framer-motion'

function Idopont({ text="Időpont"}) {
    return (
        <motion.a whileHover={{
            scale: 1.1,
            transition: { duration: 0.3},
            backgroundColor: '#612E00'
        }}
        whileTap={{
            scale: 0.9
        }}
        href="#idopont" className="ido">{text}</motion.a>
    )
}

export default Idopont

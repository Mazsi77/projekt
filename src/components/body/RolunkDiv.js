import { motion } from 'framer-motion'

function RolunkDiv({ image, index, text, position, children }) {

    return (
        <motion.div
        initial={{scale: 0, rotation: -180}}
        animate={{
            rotate: 0,
            left: `${(index - position+1)*60-60}vw`,
            scale: index === position ? 1: 0.6,
        }}
        transition={{
            ease: "easeInOut"
        }}
        className="rolunkDiv">
            <div className="img" style={{backgroundImage: `url(${image})`}} />
            <div className="text">
            <h3>{text}</h3>
            {children}
            </div>
        </motion.div>
    )
}

export default RolunkDiv

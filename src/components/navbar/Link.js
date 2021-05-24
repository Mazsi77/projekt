import { motion } from "framer-motion"
function Link({ text, section, toggle }) {
    return (
        <motion.li 
        >
            <motion.a href={"#"+section}   onClick={ ()=> {
            if(toggle!=null) {
                toggle()
            }
        }}
            whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
            backgroundColor: '#EEEDED',
            color: '#0F1112'
          }}
        whileTap={{ scale: 0.9 }}
        transition={{
            ease: 'easeInOut'
        }} style={{display: "block"}}
       > {text} </motion.a>
        </motion.li>
    )
}

export default Link

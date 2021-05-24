import { motion } from "framer-motion"
function SocialLink({ text, linkTo}) {
    return (
        <motion.li 
        >
            <motion.a href={linkTo} target="_blank"  onClick={ ()=> {
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

export default SocialLink

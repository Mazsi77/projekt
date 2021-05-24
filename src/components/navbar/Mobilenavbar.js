import Link from './Link'
import { motion, AnimatePresence } from "framer-motion"

function Mobilenavbar( {visible, toggle }) {
    return (
      <AnimatePresence >
        {visible &&
          <motion.ul
          initial={{ x: -800,
          opacity: 0}}
          animate={{ x: 0,
          opacity: 1,
        transition: {duration: 0.5}}}
          exit={{ x: 800,
          opacity: 0,
        transition: {duration: 0.5}}}
          className="mobile">
            <Link section="rolunk" text="Rólunk" toggle={toggle} /> 
            <Link section="szolgaltatasok" text="Szolgáltatások"  toggle={toggle} /> 
            <Link section="kapcsolat" text="Kapcsolat"  toggle={toggle} /> 
        </motion.ul> }
        </AnimatePresence>
    )
}

export default Mobilenavbar

import {useState, useEffect, useRef} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function SzolgaltatasokCard({background, cim, text}) {
    const delay=0.5;
    const [back, setBack] = useState(true)
    const [face, setFace] = useState(false)
    const isFirstRun= useRef(true)
    useEffect(() => {
       if(back===false){
           setTimeout(()=>{setFace(true)}, delay*1000)
       }
    }, [back]);
    useEffect(() => {
        if(isFirstRun.current){
            isFirstRun.current=false;
            return;
        }
        if(face===false){
            setTimeout(()=>{setBack(true)}, delay*1000)
        }
     }, [face]);
    return (
        <motion.div className="card" whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}>
            <AnimatePresence >
            {back && (<motion.div onClick={()=>setBack(false)} className="cardBack" style={{backgroundImage: `url(${background})`}}
            initial={{transform: 'rotate3d(0,1,0,90deg)'}}
            animate={{transform: 'rotate3d(0,0,0,0deg)'}}
            exit={{transform: 'rotate3d(0,-1,0,90deg)'}}
            transition={{ease: 'easeInOut',
        duration: delay}}
        
            >
                <h3>{cim}</h3>
            </motion.div> )}
            </AnimatePresence>
            <AnimatePresence >
            {face && <motion.div onClick={()=>setFace(false)} className='cardFace' style={{backgroundImage: `url(${background})`}}
            initial={{transform: 'rotate3d(0.1,1,0,-90deg)'}}
            animate={{transform: 'rotate3d(0,0,0,0deg)'}}
            exit={{transform: 'rotate3d(-0.1,-1,0,-90deg)'}}
            transition={{ease: 'easeInOut',
            duration: delay}}
            >
               <div>
              <h3>{cim}</h3>
              <p>{text}</p>
              </div>
            </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default SzolgaltatasokCard

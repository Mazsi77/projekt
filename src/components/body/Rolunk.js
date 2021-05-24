import {motion, useSpring} from 'framer-motion'
import {useState} from 'react'
import RolunkDiv from './RolunkDiv'

let tartalom=[
    {
        id: 0,
        text: "Történelmünk",
        image: './images/kep3.jpg',
        children: <ul>
            <li>Etiam id malesuada risus.</li>
            <li>AVivamus imperdiet dui non felis pellentesque, sit amet tempor purus auctor. Sed tristique lacus dolor, eu ullamcorper tellus bibendum eu.</li>
            <li>Cras vel facilisis lectus, non consequat eros.</li>
            </ul>
    },
    {
        id: 1,
        text: "Tudásunk alapja",
        image: './images/kep2.jpg',
        children: <ul>
            <li>Amet mattis vulputate enim nulla aliquet porttitor. Nisi est sit amet facilisis. In tellus integer feugiat scelerisque varius morbi enim nunc.</li>
            <li>Risus nec feugiat in fermentum posuere urna nec tincidunt.</li>
            </ul>
    },
    {
        id: 2,
        text: "Miért válaszd a mühelyünk?",
        image: './images/kep1.jpg',
        children: <p> Gravida dictum fusce ut placerat. Volutpat maecenas volutpat blandit aliquam etiam erat. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>
    }
]

function Rolunk() {
    const x= useSpring(0, {stiffness:1000, damping: 300})
    const [position, setPosition] = useState(0)
    //eltuntet és végere rak ha x> 100 
    let funct= (n) =>{
        if(n<-20 && position<tartalom.length -1){
           setPosition(position+1)
        }
        if(n>20 && position>0){
            setPosition(position-1)
        }
    }

    return (
        <section id="rolunk">
            <div className="cimWrapper"> <h2>Rólunk</h2></div>
           
            <motion.div className="rolunkWrapper"
             drag='x' 
             style={{x}}
             x={x}
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={()=> funct(x.prev)}
            >
             {tartalom.map((x) =><RolunkDiv key={x.id} index={x.id} position={position} text={x.text} image={x.image}>{x.children}</RolunkDiv>)}
            </motion.div> 
             <div className="controll">
                 <motion.button onClick={()=> position>0 && setPosition(position-1)}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                        borderColor: '#0F1112'
                      }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'easeInOut'
                    }}
                 ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" style={{transform: 'scaleX(-1)', WebkitTransform: 'scaleX(-1)'}} clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></motion.button>
                 <div className="progressContainer">
                     <motion.div className='progress'
                     animate={{
                         width: `${(position+1)/tartalom.length*100}%`
                     }}
                     transition={{
                         ease: 'easeInOut'
                     }}
                     
                     ></motion.div>
                 </div>
                 <motion.button onClick={()=> position<tartalom.length-1 && setPosition(position+1)}
                 whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                    borderColor: '#0F1112'
                  }}
                whileTap={{ scale: 0.9 }}
                 ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></motion.button>
             </div>
        </section>
    )
    }

export default Rolunk

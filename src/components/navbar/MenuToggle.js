import { motion } from "framer-motion";
import { useState } from "react"
import Mobilenavbar from "./Mobilenavbar";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

function MenuToggle() {
  let [ isOpen, setOpen ] = useState(false);

  const toggle=function(){
    setOpen(!isOpen)
  }

  return (
    <div className="linksContainer">
    <button onClick={() => setOpen(!isOpen)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 3%, 93%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 3%, 93%)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 3%, 93%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 3%, 93%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 3%, 93%)" },
          }}
          transition={transition}
        />
      </svg>
    </button>
     <Mobilenavbar visible={isOpen}  toggle={toggle}/>
    </div>
  );
}

export default MenuToggle;
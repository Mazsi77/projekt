import useForm from './useForm'
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'


function Form({submit}) {
    let date= new Date()
    let today= date.toISOString().slice(0, 10)
    let maxim= date
    maxim.setMonth(maxim.getMonth()+2)

    const {handleChange, values, handleSubmit, errors } = useForm(today)

    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Foglaglj Időpontot!</h3>
            <p>Proin in diam sit amet est rhoncus aliquam a vitae enim. Sed scelerisque volutpat lacus, pharetra aliquet erat molestie consectetur. Vivamus pharetra odio nec porta suscipit</p>
            <AnimateSharedLayout layour>
            <motion.div layout className="inputs" >
                <label htmlFor="nev">Név</label>
                <input id="nev" type='text' name="nev" placeholder="Neved" value={values.nev} onChange={handleChange}/>
                <AnimatePresence >
                {errors.nev && <motion.p initial={{opacity: 0, x: '-100%'}}
                animate={{opacity:1, x: "0"}}
                exit={{opacity: 0}}
                transition={{type: "spring", stiffness:100, duration: 1}}
                className="error">{errors.nev}</motion.p>} </AnimatePresence>
                <label htmlFor="telefon">Telefon</label>
                <input id="telefon" type='tel' name="telefon" placeholder="Neved" value={values.telefon} onChange={handleChange}/>
                <AnimatePresence>
                {errors.telefon && <motion.p initial={{opacity: 0, x: '-100%'}}
                animate={{opacity:1, x: "0"}}
                exit={{opacity: 0}}
                transition={{type: "spring", stiffness:100, duration: 1}} className="error">{errors.telefon}</motion.p>}
                </AnimatePresence>
                <label htmlFor="datum">Dátum</label>
                <input id="datum" type='date' name="datum" min={today} max={maxim.toISOString().slice(0,10)} value={values.datum} onChange={handleChange}/>
                <AnimatePresence>
                {errors.datum && <motion.p initial={{opacity: 0, x: '-100%'}}
                animate={{opacity:1, x: "0"}}
                exit={{opacity: 0}}
                transition={{type: "spring", stiffness:100, duration: 1}} className="error">{errors.datum}</motion.p>}
                </AnimatePresence>
                <motion.input type="submit" value="Időpont foglalása"  whileHover={{
            scale: 1.1,
            transition: { duration: 0.3},
            backgroundColor: '#612E00'
        }}
        whileTap={{
            scale: 0.9
        }}/>
            </motion.div>
            </AnimateSharedLayout>
        </form>
    )
}

export default Form

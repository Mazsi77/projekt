import {useState} from 'react'

const useForm = (today) => {
    const [values, setValues] = useState({
        nev: '',
        telefon : '',
        datum: today

    })
    const [errors, setErrors] = useState({})

    const handleChange = e =>{
        const {name, value} = e.target 
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validateInfo(values));
    }
    return { handleChange, values, handleSubmit, errors }
}

const validateInfo= (values)=>{
    let errors ={}
    if(!values.nev.trim()){
        errors.nev= "Név kötelező"
    }

    if(!values.telefon.trim()){
        errors.telefon="Telefonszám kötelező"
    }else if(!values.telefon.match(/[0](2|7)[0-9]{8}/g)){
        errors.telefon="Hibás telefonszám"
    }

    if(!values.datum){
        errors.datum="Dátum kötelező"
    }

    return errors
}

export default useForm

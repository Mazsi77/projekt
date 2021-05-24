import React from 'react'
import {AiOutlineCopyrightCircle, AiFillHeart} from 'react-icons/ai'

function Footer() {
    return (
        <footer>
           <div className="innerFooter">
            <p><AiOutlineCopyrightCircle />2021</p>
            <p>Made with<AiFillHeart /> from Transylvania</p>
            </div> 
        </footer>
    )
}

export default Footer

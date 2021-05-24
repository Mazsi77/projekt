import React from 'react'
import { useMediaQuery } from "react-responsive"
import Logo from './Logo'
import Links from './Links'
import Idopont from './Idopont'
import MenuToggle from './MenuToggle'

function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: "800px"})

    return (
        <header>
            <div className="headerInner">
               <Logo />
                { !isMobile && <Links /> }
                <Idopont />
                { isMobile &&<MenuToggle /> }
            </div>
        </header>
    )
}

export default Navbar

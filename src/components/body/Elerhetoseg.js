import {FaFacebook, FaYoutube, FaTwitter} from 'react-icons/fa'
import {useRef} from 'react'
import SocialLink from './SocialLink'
import Map from './Map'

function Elerhetoseg() {
    const ref = useRef(null)
    return (
        <section id='kapcsolat'>
            <h2>Kapcsolat</h2>
            <div className="elerhetosegWrapper" ref={ref}>
                <table>
                    <thead >
                    <tr >
                        <th colSpan="2"><h3>Nyitvatartas</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Hétfő-Péntek:</td>
                        <td>8:00-20:00</td>
                    </tr>
                    <tr>
                        <td>Szombat:</td>
                        <td>8:00-16:00</td>
                    </tr>
                    <tr>
                        <td>Vasárnap:</td>
                        <td>Zárva</td>
                    </tr>
                    </tbody>
                </table>
                <div className="socials">
                    <h3>Közösségi média</h3>
                    <ul className="icons">
                   <SocialLink text={<FaFacebook />}  linkTo="https://www.facebook.com/"/>
                   <SocialLink text={<FaYoutube />}  linkTo="https://www.youtube.com/"/>
                   <SocialLink text={<FaTwitter />} linkTo="https://www.twitter.com"/>
                    </ul>
                </div>
                <Map reference={ref}/>
            </div>
        </section>
    )
}

export default Elerhetoseg

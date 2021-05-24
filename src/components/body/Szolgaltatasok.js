import SzolgaltatasokCard from './SzolgaltatasokCard'

function Szolgaltatasok() {
    return (
        <section id='szolgaltatasok'>
           <h2>Szolgáltatások</h2> 
           <div className="cardWrapper">
           <SzolgaltatasokCard background='./images/vizsga.jpg' text='Hozza be saját vagy megvásárolni kívánt autóját és mi átvizsgáljuk és feltárjuk autója rejett hibáit' cim='Átvizsgálás'/>
           <SzolgaltatasokCard background='./images/szerel.jpg' text='Morbi placerat ultricies metus ac varius. Donec suscipit tellus sed dolor condimentum, quis maximus libero varius.' cim='Szerelés'/>
           <SzolgaltatasokCard background='./images/kozmetika.jpg' text='L. Integer a libero eget nulla tristique vestibulum eu in nunc. Vivamus varius nisl non ligula posuere accumsan.' cim='Kozmetika'/>
           </div>
        </section>
    )
}

export default Szolgaltatasok

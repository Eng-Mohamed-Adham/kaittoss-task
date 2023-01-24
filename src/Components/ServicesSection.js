
import {AiOutlinePrinter} from 'react-icons/ai';
import {MdOutlineDesktopMac} from 'react-icons/md';
import {BsPhone} from 'react-icons/bs';
import {TfiRulerPencil} from 'react-icons/tfi';
import img1 from '../images/white-iphone-6-png-32.png';

const ServicesSection = () => {
    return ( 
        <section className="icons-container">

            <div className="icons">
                <div className='table'>
                <span><AiOutlinePrinter size={32} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} /></span>
                <h3>Print Services</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                </div>
                <div className='table'>
               
                <h3> <MdOutlineDesktopMac size={32} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />Print Services</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                </div>
         
            </div>

            

           

            <div className="icons">
                <div className='table'>
                <h3><BsPhone size={32} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />Print Services</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                </div>
               

                <div className='table'>
                <h3><TfiRulerPencil size={32} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />Print Services</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                </div>
               

            </div>
            

        </section>
    );
}
 
export default ServicesSection;
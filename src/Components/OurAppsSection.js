
import '../css/style.css';

import {MdMessage} from 'react-icons/md';
import {FcIdea} from 'react-icons/fc';
import {TbVectorTriangle} from 'react-icons/tb';
import {MdOutlineDesktopMac} from 'react-icons/md';



const OurAppsSection = () => {
    return (
        <section className="blogs" id="blogs">

                <p className="our-head"> How our App works?</p>
                <h2 >We make this App!</h2>

                <div className="box-container">

                    <div className="box">
                        <div className="image">
                        <MdMessage size={52} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />
                        </div>
                        <div className="content">
                          
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                        </div>
                    </div>

                    

                    <div className="box">
                        <div className="image">
                        <TbVectorTriangle size={52} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />

                        </div>
                        <div className="content">
                      
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                          
                        </div>

                    </div>
                    <div className="box">
                        <div className="image">
                        <FcIdea size={52} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />

                        </div>
                        <div className="content">
                           
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                        <MdOutlineDesktopMac size={52} color={'rgb(235, 221, 28)'}  style={{textAlign:'center'}} />

                        </div>
                        <div className="content">
                        
                            <h3>Lorem ipsum</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, eius.</p>
                        </div>

                    </div>

                </div>
                <button className='btn-our'>DOWNLOAD NOW</button>


        </section>
    );
}
 
export default OurAppsSection;
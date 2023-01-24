
import '../css/style.css';
import img from '../images/macbook.png';

const AboutSection = () => {
    return (
        <section className="about" id="about">

            {/* <h1 className="heading"> <span>about</span> us </h1> */}

            <div className="row">

                

                <div className="content">
                   <div className='abov-div'>
                   <h3>This is awsome App!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores.</p>
                   </div>
                   <div>
                   <h3>This is awsome App!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates </p>
                    <a href="#" className="btn-abov"> DOWNLOAD NOW  </a>
                   </div>
                </div>
                <div className="image">
                    <img src={img} alt=""/>
                </div>

            </div>

        </section>
    );
}
 
export default AboutSection;
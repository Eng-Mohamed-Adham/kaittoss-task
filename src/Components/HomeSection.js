import '../css/style.css';
import img1 from '../images/white-iphone-6-png-32.png';




const HomeSection = () => {
    return (
        <section className="home" id="home">

            <div className="image">
                {/* <!-- <img src="image/home-img.svg" alt=""> --> */}
                <img src="./image//m1.svg" alt="" />
            </div>

            <div className="content">
                <p>Dscover the wold of awsome</p>
                <h3>Free PSD Templates</h3>

                <form className='form-body'>
                    <input type='email' user='' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <input type='submit' value='REGISTER' />

                </form>
                {/* <a href="#" className="btn"> contact us  </a> */}
            </div>
            <div className=" img-icons">
                <img src={img1} alt='' />
            </div>

        </section>
    );
}
 
export default HomeSection;

import '../css/style.css';
import img1 from '../images/pic-1.png';
import img2 from '../images/pic-2.png';
import img3 from '../images/pic-3.png';
import img4 from '../images/woman1.jpeg';

const ReviewSection = () => {
    return ( 
        <section className="review" id="review">
    
                <h3 className="reviews-head"> Meet our team </h3>
                <h1 className='reviews-h1'>We make this App!</h1>

                <div className="box-container">

                    <div className="box">
                        <img src={img1}alt=""/>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? R</p>
                    </div>

                    <div className="box">
                        <img src={img2} alt=""/>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? R</p>
                    </div>

                    <div className="box">
                        <img src={img3} alt=""/>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? R</p>
                    </div>
                    <div className="box">
                        <img src={img4} alt=""/>
                        <h3>john deo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil aperiam? R</p>
                    </div>

                </div>

        </section>
    );
}
 
export default ReviewSection;
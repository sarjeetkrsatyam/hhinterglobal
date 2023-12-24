import  React,{useState} from 'react'
// import { Carousel } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img/N7TNLIK31645005637.jpg'
import img2 from '../assets/img/cgYNpliD1647249636.jpg'
import img3 from '../assets/img/uqb6sKZm1647249780.jpg'


 import './Carousel.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function MiddlePage() {
  const [index, setIndex] = useState(0);

 



  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <div className='container-fluid p-0'>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <div className='caro-img-cont'>
       <img src='https://www.hughes.in/sites/hughes.in/files/banking_0.jpg' className='caro-img-cont'/>
       </div>
        <Carousel.Caption className='text-cente'>
          <h1 className='carosoul-text-h1'>Welcome to <br/> Hinter Global Bank</h1>
       <h2>Simple And Safe Digital Online Banking</h2>
          <p>Hinter Global Bank works around your schedule, offering innovative products <br/> that is better, faster and affordable.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src='https://de.statebank/documents/1904296/1910068/shutterstock_519378679-Personal-and-Corporate-Banking.jpg/7f91898b-d1ba-6b20-8a83-afa0330439e0?t=1574059894106' className='caro-img-cont'/>
        <Carousel.Caption>
       {/* <Link to="/persona-bank"> </Link> */}
       <button type='button'  className='learn-more-button'> <a href='/personabank'>Learn More</a> </button>
      
          <h3>Personal Banking</h3>
          <p>Customer can enjoy the convenience of banking service.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://av.sc.com/hk/content/images/hk-gba-business-and-enterprises-banner.jpg' className='caro-img-cont'/>
        <Carousel.Caption>
        {/* <button className='learn-more-button'>Learn More</button> */}
        <button type='button'  className='learn-more-button'> <a href='/corporatebank'>Learn More</a> </button>
          <h3>Corporate Banking</h3>
          <p>
            PGet it on PC or Mobile to create, send and receive bitcoins.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://www.cimb.com.sg/content/dam/cimbsg/business/images/home/1920x800-homepage-hero-rotatet2-bizgo-lite-20210225-1.jpg' className='caro-img-cont'/>
        <Carousel.Caption>

        <button className='learn-more-button'>Learn More</button>
          <h3>SME Banking</h3>
          <p>
          For availing SME loan it is required to mortgage collateral/security
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src='https://www.indusind.com/iblogs/wp-content/uploads/personal-loan.png' className='caro-img-cont'/>
        <Carousel.Caption>
        <button className='learn-more-button'>Learn More</button>
          <h3>Personal Loans</h3>
          <p>
          Genius Bank offers a wide range of loans to suit your needs..
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>




       {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
  )
}

export default MiddlePage

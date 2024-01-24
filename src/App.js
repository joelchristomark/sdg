import { CarouselCaption } from 'react-bootstrap';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Know from './components/Know';





function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-success">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><b><span className='text-light brand'>Life</span> <span style={{ color: "#0C089B" }} className='brand2'>on Land</span></b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#About">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#service">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-light" href="#Contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Section1 */}
      <div className='row' id='home'>
        <div className='col-lg-6 col-sm-12'>
      <img src='https://img.freepik.com/free-vector/save-world-illustration_24877-60159.jpg?w=740&t=st=1705937050~exp=1705937650~hmac=328ad89f999cbc673d61082c1f76d210a697ed657ef70bde5d3a266bcaa8f57f'/>  
      </div> 
      <div className='col-lg-6 col-12 container'>
        <h1 className='content'><b>Life <span style={{color:"#0C089B"}}>On Land</span></b></h1>
        <h3>Life <span style={{color:"#0C089B"}}>on land</span> is a dynamic tapestry of ecosystems, ranging from dense forests to expansive deserts. Terrestrial habitats provide a rich array of biodiversity, supporting countless species adapted to diverse conditions.</h3>
        <BrowserRouter>
        <Link to='/Know'><button className='btn btn-primary mt-1'><h4>Know more</h4></button></Link>
        <Routes>
          <Route path='/Know' element={<Know/>}/>
            </Routes>
            </BrowserRouter>
        
      </div>
      </div>

         {/*About*/}
         <section className='About' id='About'>
          <div className='row'>
            <div className='col'>
            <h1 className='About1'>About Us <span><h3 className='content2 col-lg-10 col-sm-12 mt-3'>As humans, life on land is our canvas for existence. From cultivating crops to constructing cities, we've molded the terrestrial realm to meet our needs.</h3>
</span></h1>
</div>
<div className='col'>
<Card style={{ width: '18rem',}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1492496913980-501348b61469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F2ZSUyMHNvaWx8ZW58MHx8MHx8fDA%3D" style={{height:'50vh'}} />
      <Card.Body>
        <Card.Title>Soil</Card.Title>
        <Card.Text>
        Soil is the unsung hero of our ecosystems, serving as a vital reservoir for nutrients essential to plant growth.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
</div>
<div className='col'>
<Card style={{ width: '18rem',}}>
      <Card.Img variant="top" src='https://images.pexels.com/photos/3468655/pexels-photo-3468655.jpeg?auto=compress&cs=tinysrgb&w=600' style={{height:'50vh'}}/>
      <Card.Body>
        <Card.Title>Ecosystem</Card.Title>
        <Card.Text>
        Ecosystems are vital for sustaining life on Earth, providing essential services such as clean air,climate regulation.
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
</div>
</div>
         </section>

         {/* Service */}
         <section className='service' id='service'>
          <h1 className='text-center'>Our Services</h1>
          <div className='row'>
            <div className='col'>
            <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>Forest</h1>
        </Carousel.Caption>
      <img src='https://images.pexels.com/photos/572937/pexels-photo-572937.jpeg?auto=compress&cs=tinysrgb&w=600' style={{height:'80vh', width:'100%'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <h1>Ecosystem</h1>
        </Carousel.Caption>

      <img src='https://img.freepik.com/free-photo/green-growing-trees-circle-generative-ai_169016-28712.jpg' style={{height:'80vh', width:'100%'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <h1>Wild life</h1>
        </Carousel.Caption>

      <img src='https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbGRsaWZlfGVufDB8fDB8fHww' style={{height:'80vh', width:'100%'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <h1>Mountains</h1>
        </Carousel.Caption>

      <img src='https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&w=600' style={{height:'80vh', width:'100%'}}/>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <h1>Desertification and drought</h1>
        </Carousel.Caption>

      <img src='https://images.pexels.com/photos/18364129/pexels-photo-18364129/free-photo-of-rock-formations-in-tatacoa-desert-in-colombia.jpeg?auto=compress&cs=tinysrgb&w=600' style={{height:'80vh', width:'100%'}}/>
      </Carousel.Item>





    </Carousel>
            </div>
          </div>

         </section>

         {/* COntact */}
         <section className='Contact' id='Contact'>
          <div className='row'>
            <div className='text-center'>
              <h1>Contact Us</h1>
            </div>
            <div className='footer-content col-lg-3 mt-5 mx-5'>
              <h3>Get to know us</h3>
              <a href=''>About us</a><br/>
              <a href=''>Careers</a>

            </div>
            <div className='footer-content1 col-lg-3 mt-5'>
              <h3>Connect with us</h3>
              <a href=''>Facebook</a><br/>
              <a href='https://www.instagram.com/joel20_______/'>Instagram</a><br/>
              <a href=''>Twitter</a><br/>
            </div>

            <div className='footer-content1 col-lg-3 mt-5'>
              <h3>Let Us Help You</h3>
              <a href=''>Phone: +918870115713</a><br/>
              <a href=''>Feedback</a><br/>
              <a href=''>FAQ</a><br/>
              <a href=''>Help</a><br/>
              
            </div>

          </div>

         </section>
    



    </>
  );
}

export default App;

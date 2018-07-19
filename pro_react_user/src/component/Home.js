import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class Home extends Component 
{
    render() 
    {
        return (
        <div>
            <Navbar />
            <Header />

             {/* CONTENT */}
      {/* Content - Big Photo Slides/Carousel */}
      <div id="maincontent">
        <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="active" />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="images/woman_and_fossilbag_logo_resize.jpg" alt="Bag1" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src="images/woman_and_fossilbag_logo_2.jpg" alt="Bag2" style={{width: '100%'}} />
              </div>
              <div className="item">
                <img src="images/woman_and_fossilbag_logo_3.jpg" alt="Bag3" style={{width: '100%'}} />
              </div>
            </div>
            {/* Left and right controls */}
            <Link to="#myCarousel" className="left carousel-control"  data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </Link>
            <Link to="#myCarousel" className="right carousel-control" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        {/* Content - Best Sellers Product Slides (Multi Items Carousel)*/}
        <div className="container-fluid" id="maincontent">
          <br />
          <p /><h3><center> POPULAR </center></h3><p />
          {/*The main div for carousel*/}
          <div className="container text-center">
            <div className="carousel slide row" data-ride="carousel" data-type="multi" data-interval={2000} id="bestsellercarousel">
              <div className="carousel-inner">
                <div className="item active">
                  <div className="col-md-3 col-sm-4 col-xs-6">
                    <figure>
                      {/* <Link to="/singleproduct"><img src="images/Crossbody_Campbell_1.jpg" className="img-responsive" /></Link> */}
                      <Link to = "/singleproduct"><img src="images/Crossbody_Campbell_1.jpg" className="img-responsive" alt="" /></Link>
                      <figcaption> Crossbody Campbell <br /> Rp. 900,000 </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-3 col-sm-4 col-xs-6">
                    <figure>
                      <Link to="/singleproduct"><img src="images/Tote_Fiona_1.jpg" className="img-responsive" alt="" /></Link>
                      <figcaption> Tote Bag Fiona <br /> Rp. 1,100,000 </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-3 col-sm-4 col-xs-6">
                    <figure>
                      <Link to="/singleproduct"><img src="images/Crossbody_Elle_1.jpg" className="img-responsive" alt="" /></Link>
                      <figcaption> Crossbody Elle <br /> Rp. 950,000 </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-3 col-sm-4 col-xs-6">
                    <figure>
                      <Link to="/singleproduct"><img src="images/Crossbody_Emma_1.jpg" className="img-responsive" alt="" /></Link>
                      <figcaption> Crossbody Emma <br /> Rp. 1,000,000 </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-3 col-sm-4 col-xs-6">
                    <figure>
                      <Link to="/singleproduct"><img src="images/Satchel_Rachel_1.jpg" className="img-responsive" alt="" /></Link>
                      <figcaption> Satchel Rachel <br /> Rp. 1,000,000 </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-3 col-sm-4 col-xs-6">
                    <figure>
                      <Link to="#"><img src="images/Tote_Rachel_Motif_1.jpg" className="img-responsive" alt="" /></Link>
                      <figcaption> Tote Bag Rachel Motif <br /> Rp. 1,250,000 </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <Link to="#bestsellercarousel" className="left carousel-control"  data-slide="prev"><i className="glyphicon glyphicon-chevron-left" /></Link>
              <Link to="#bestsellercarousel" className="right carousel-control"  data-slide="next"><i className="glyphicon glyphicon-chevron-right" /></Link> 
            </div>
            <br />
          </div>
        </div>
        {/* CONTENT - Bottom - Short Description */}
        <div className="hidden-xs" style={{backgroundColor: 'white', fontSize: 10, fontFamily: 'Georgia', textAlign: 'center', paddingTop: 5, paddingBottom: 5}}>
          <hr />
          <h4>LEATHER BAGS FOR WOMEN</h4>
          <p>
            Our must-have leather bags and leather purses pair fashion and functionality. 
            <br />
            Designed only to get better with age, our perfectly portable bags feature easy-to-carry silhouettes and long-lasting materials to help you tote your tech, news and small accessories without compromising on style.                    
            <br />
            Our signature leather in new neutrals and vibrant hues captures the richness of each season, while showcasing the clean lines of our iconic designs.
            <br />
            From classic, basic to motif bags and more, our collections are created to assure your destination will be a celebration.
          </p>
        </div>
        </div>
        {/* END of CONTENT */}
    
            <Footer />
               
        </div>
                
    
    );
    }
}
export default Home;
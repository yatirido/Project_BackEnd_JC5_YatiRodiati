import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class SingleProduct extends Component 
{
    render() 
    {
        return (
           
  <div>
    <Navbar />
    <Header />
 
 {/* CONTENT - Product Description */}
 <div className="container-fluid">
 <div className="col-md-4">
   <img src="images/Crossbody_Ryder_1.jpg" data-imagezoom="true" className="img-responsive" alt="Ryder Crossbody" />
 </div>
 <div className="col-md-8 single-right-left simpleCart_shelfItem">
   <h3>Ryder Crossbody</h3>
   <p><span>Rp. 750,000</span><del>Rp. 900,000</del></p>
   <div className>
     <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star-half-o" aria-hidden="true" /><i className="fa fa-star-o" aria-hidden="true" />
   </div>
   <br />
   <div>
     <form className="form-horizontal" action="#">
       <div className="form-group">
         <label className="control-label col-md-2" htmlFor="user"><h5><strong>Quantity :</strong></h5></label>
         <div className="col-md-2">
           <select id="quantity" className="form-control">
             <option value="null">1 Qty</option>
             <option value="null">2 Qty</option> 
             <option value="null">3 Qty</option>					
             <option value="null">4 Qty</option>								
           </select>
         </div>
       </div>
       <div className="form-group">
         <label className="control-label col-md-2" htmlFor="colour"><h5><strong>Colour :</strong></h5></label>
         <div className="col-md-6">
           <label className="radio-inline"><input type="radio" name="colour" defaultChecked />Olive </label>
           <label className="radio-inline"><input type="radio" name="colour" />Grey</label>
           <label className="radio-inline"><input type="radio" name="colour" />Light Blue</label>
         </div>
       </div>
     </form>
   </div>
   <div className="col-md-offset-2 col-md-6">
     {/* Trigger the Add to Cart modal with a button */}
     <button type="submit" className="btn btn-lg btn-primary-f" data-toggle="modal" data-target="#cartModal">Add to Cart</button>
     {/* Modal */}
     <div className="modal fade" id="cartModal" role="dialog">
       <div className="modal-dialog modal-sm">
         {/* Modal content */}
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal">×</button>
             <h4 className="modal-title">New item to add:</h4>
           </div>
           <div className="modal-body">
             <span><p>Ryder Crossbody Bag</p></span><input type="number" id="quantity" defaultValue={1} />
           </div>
           <div className="modal-footer">
             <Link to="/shoppingcart" target="_blank">
               <button type="button" className="btn btn-primary-f">Add to Cart</button>
             </Link>
           </div>
         </div>
       </div>
     </div>
   </div>
   <br />
   <div className>
     <br /><br />
     <p /><h6>Check delivery, payment options and charges at your location:<p /></h6>
     <form action="#" method="post">
       <input type="text" defaultValue="Enter postcode" required />
       <input type="submit" className="btn btn-xs btn-primary-f" defaultValue="CHECK" />
     </form>
   </div>
   <br />
   <div>
     <h4>Product Details:</h4>
     <h5>
       <ul>
         <li><strong>Silhouette:</strong> Crossbody</li>
         <li><strong>Tech Compatibility:</strong>Tech Compatibility: iPhone® 6, 7, 8</li>
         <li><strong>Exterior Material:</strong> Leather</li>
         <li><strong>Interior Details:</strong> 2 Slide Pockets and 1 Zip Pocket</li>
         <li><strong>Measurements:</strong> 25.4 cm L x 9.5 cm W x 22.9 cm H</li>
       </ul>
     </h5>
     <br />
     <p /><h4>Recommended Care:</h4><p />
     <p>
       We make our bags out of the finest, genuine leather. To keep it looking good over time, clean with a soft dry cloth.
       Leather stained by cleaning is not covered under our warranty. Will your leather weather the elements? Watch out for water and don't let it sun(bathe).
     </p>
     <p /><h4>Return:</h4><p />
     <p>
       We accept returns of unworn merchandise for up to 14 days from the day following receipt for a refund or 28 days for an exchange. 
       <br />Click here  to learn more.
     </p>
   </div>
   <br />
 </div>
 {/* END of CONTENT - Single Product */}
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
               <Link to="/singleproduct"><img src="images/Crossbody_Campbell_1.jpg" className="img-responsive" alt="Crossbody Campbell" /></Link>
               <figcaption> Crossbody Campbell <br /> Rp. 900,000 </figcaption>
             </figure>
           </div>
         </div>
         <div className="item">
           <div className="col-md-3 col-sm-4 col-xs-6">
             <figure>
               <Link to="/singleproduct"><img src="images/Tote_Fiona_1.jpg" className="img-responsive" alt="Tote Bag Fiona" /></Link>
               <figcaption> Tote Bag Fiona <br /> Rp. 1,100,000 </figcaption>
             </figure>
           </div>
         </div>
         <div className="item">
           <div className="col-md-3 col-sm-4 col-xs-6">
             <figure>
               <Link to="/singleproduct"><img src="images/Crossbody_Elle_1.jpg" className="img-responsive" alt="Crossbody Elle" /></Link>
               <figcaption> Crossbody Elle <br /> Rp. 950,000 </figcaption>
             </figure>
           </div>
         </div>
         <div className="item">
           <div className="col-md-3 col-sm-4 col-xs-6">
             <figure>
               <Link to="/singleproduct"><img src="images/Crossbody_Emma_1.jpg" className="img-responsive" alt="Crossbody Emma" /></Link>
               <figcaption> Crossbody Emma <br /> Rp. 1,000,000 </figcaption>
             </figure>
           </div>
         </div>
         <div className="item">
           <div className="col-md-3 col-sm-4 col-xs-6">
             <figure>
               <Link to="/singleproduct"><img src="images/Satchel_Rachel_1.jpg" className="img-responsive" alt="Satchel Rachel" /></Link>
               <figcaption> Satchel Rachel <br /> Rp. 1,000,000 </figcaption>
             </figure>
           </div>
         </div>
         <div className="item">
           <div className="col-md-3 col-sm-4 col-xs-6">
             <figure>
               <Link to="#"><img src="images/Tote_Rachel_Motif_1.jpg" className="img-responsive" alt="Tote Bag Rachel Motif" /></Link>
               <figcaption> Tote Bag Rachel Motif <br /> Rp. 1,250,000 </figcaption>
             </figure>
           </div>
         </div>
       </div>
       <Link to="#bestsellercarousel" className="left carousel-control"  data-slide="prev"><i className="glyphicon glyphicon-chevron-left" /></Link>
       <Link to="#bestsellercarousel" className="right carousel-control"  data-slide="next"><i className="glyphicon glyphicon-chevron-right" /></Link> 
     </div>
   </div>
 </div>
 <div className="hidden-xs" style={{backgroundColor: 'white', fontSize: 10, fontFamily: 'Georgia', textAlign: 'center', paddingTop: 5, paddingBottom: 5}}>
 </div>
</div>

<Footer />
</div>

);
}
}
export default SingleProduct;


import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Special from '../Special/Special';
import './HomePage.css';

const HomePage = () => {
    const [courses, setCourse] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setCourse(data))
      }, []);

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/specials')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);
    return (
        <div>
            <div className="banner">
                <div className="banner-text">
                    <h3 id="world">The World is a Book.</h3>
                    <h1>Explore and Travel</h1>
                </div>
            </div>
            <h2 id="tour">Tour Packages</h2> 
            <div className="best">            
            {
                courses.map(course => <Service course={course} key={course.id}></Service> )
            }
            </div>
            <div className="special-section">
                <div className="special-text">
                    <p>Travio Special</p>
                    <h3 id="sp-text">Why Travel with Travio?</h3>
                </div>
                <div className="services-cards">
                    {
                        services.map(service => <Special service={service} key={service.id}></Special> )
                    }
                </div>
            </div>
            <div className="travel-ess-area">
                <h3 className="card-text">Travel Essentials</h3>
                <div className="travel-essentials">
                    <div className="card">
                        <img className="card-img" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/shop-img-12-1-600x502.jpg" alt="" />
                        <p className="card-text">200 $</p>
                        <h5 className="card-text">Camera Tripod</h5>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/shop-img-10-1-600x502.jpg" alt="" />
                        <p className="card-text">80 $</p>
                        <h5 className="card-text">Shoes</h5>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/shop-img-13-1-600x502.jpg" alt="" />
                        <p className="card-text">1200 $</p>
                        <h5 className="card-text">DSLR Camera</h5>
                    </div>
                    <div className="card">
                        <img className="card-img" src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/shop-img-14-1-600x502.jpg" alt="" />
                        <p className="card-text">20 $</p>
                        <h5 className="card-text">Water Bottle</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


// http://localhost:5000/services
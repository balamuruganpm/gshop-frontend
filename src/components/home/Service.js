import React from 'react';

function Offers(props) {
    return (
        <div className="jtv-service-area" >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="jtv-service">
                <div className="ser-icon"> <i className="fa fa-truck flip-horizontal"></i> </div>
                <div className="service-content">
                  <h5>FREE SHIPPING WORLDWIDE </h5>
                  <p>free ship-on oder over $299.00</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="jtv-service">
                <div className="ser-icon"> <i className="fa fa-mail-forward"></i> </div>
                <div className="service-content">
                  <h5>MONEY BACK GUARATEE! </h5>
                  <p>30 days money back guarantee!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="jtv-service">
                <div className="ser-icon"> <i className="fa fa-comments flip-horizontal"></i> </div>
                <div className="service-content">
                  <h5>24/7 CUSTOMER SERVICE </h5>
                  <p>We support online 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Offers;
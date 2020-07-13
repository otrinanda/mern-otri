import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icon/citties.svg";
import IconTraveler from "assets/images/icon/traveller.svg";
import IconTreasure from "assets/images/icon/treasure.svg";
import Button from "elements/Button";
import formatNumber from 'utils/formatNumber'

export default function Hero(props) {

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

 

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 540 }}>
          <h1 className=" font-weight-bold line-height-1 mb-3">
            Forget the work, <br />
            <span className="text-primary">Start</span> 
            {" "}
             your 
             {" "}
             <span className="text-primary">vacation</span> 
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-100" style={{lineHeight:"170%"}}>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments. Your money can return, but your time
            is not. So, what are you waiting for?
          </p>
          <Button
            className="btn px-5 text-white"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>

          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                widht="42"
                height="42"
                src={IconTraveler}
                alt={`${props.data.travelers} Traveller`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                widht="42"
                height="42"
                src={IconCities}
                alt={`${props.data.cities} cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                widht="42"
                height="42"
                src={IconTreasure}
                alt={`${props.data.treasures} treasures`}
              />
              <h6 className="mt-3 ">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{width:520, height:360}}>
            <img
              src={ImageHero}
              width={500}
              alt="Tosca Building"
              className="img-fluid position-absolute"
              style={{margin:"-30px 0 0 -30px" ,zIndex:1}}
            />
            <img
              src={ImageHero_}
              width={500}
              alt="Tosca Building Frame"
              className="img-fluid position-absolute"
              style={{margin:"0 -15px -15px 0 "}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

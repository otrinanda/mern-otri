import React from "react";
import Star from "elements/Star";
import Button from "elements/Button"
import Fade from "react-reveal/Fade";
import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <Fade bottom>
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
            className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial frame"
             className="position-absolute"
              style={{ margin: `-20px 0 0 -20px` }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={40} height={40} spacing={4} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
          </span>
            <div>
                <Button 
                    className="btn px-5 text-white"
                    style={{marginTop:40,}}
                    hasShadow
                    isPrimary
                    type="link"
                    href={`/testimonial/${data._id}`}
                >
                    Read their story 
                </Button>
            </div>
        </div>
      </div>
      </Fade>
    </section>
  );
}

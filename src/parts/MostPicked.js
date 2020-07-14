import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item  column-4 
            ${index === 0 ? " row-2" : " row-1"} `}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      $ {item.price}
                      <span className="font-weight-light">
                        {" "}
                        per {item.unit}
                      </span>
                    </div>

                    <figure>
                      <div className="img-wrapper">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        />
                      </div>
                    </figure>

                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="streched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city},{item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}

          {/* contoh templatenya
                   <div className="item column-4 row-2">
                       <div className="card">Card 1</div>
                   </div>
                   <div className="item column-4 row-1">
                       <div className="card">Card 2</div>
                   </div>
                   <div className="item column-4 row-1">
                       <div className="card">Card 3</div>
                   </div>
                   <div className="item column-4 row-1">
                       <div className="card">Card 4</div>
                   </div>
                   <div className="item column-4 row-1">
                       <div className="card">Card 5</div>
                   </div> */}
        </div>
      </Fade>
    </section>
  );
}

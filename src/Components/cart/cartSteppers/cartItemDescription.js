import React from "react";
import image from "../../../images/image4.jpg";
import image2 from "../../../images/image2.png";
import image3 from "../../../images/image3.jpeg";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  return `${value}°C`;
}
const CartItemDescription = props => {
  if (props.index === 0) {
    return (
      <div className="CartItemDescription">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <p>Sando</p>
        </div>
        <div>
          <p>Black</p>
        </div>
        <div>
          <p>Large</p>
        </div>
        <div className="CartItemSlider">
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </div>
        <div>Rs 300/=</div>
        <div className="CardDescriptionIcon">
          <a>
            <i class="fas fa-times" />
          </a>
        </div>
      </div>
    );
  } else if (props.index === 1) {
    return (
      <div className="CartItemDescription">
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <p>Graphic Tee</p>
        </div>
        <div>
          <p>Red</p>
        </div>
        <div>
          <p>Medium</p>
        </div>
        <div className="CartItemSlider">
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </div>
        <div>Rs 300/=</div>
        <div className="CardDescriptionIcon">
          <a>
            <i class="fas fa-times" />
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CartItemDescription">
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <p>POLO Shirt</p>
        </div>
        <div>
          <p>White</p>
        </div>
        <div>
          <p>Small</p>
        </div>
        <div className="CartItemSlider">
          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />
        </div>
        <div>Rs 300/=</div>
        <div className="CardDescriptionIcon">
          <a>
            <i class="fas fa-times" />
          </a>
        </div>
      </div>
    );
  }
};

export default CartItemDescription;

import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';


interface SliderModelType {
  value: number;
  options: Options;
}

@Component({
  selector: 'slider-component',
  templateUrl: './slider-component.html',
  styleUrls:['./slider-component.scss']
})
export class SliderComponent {

  Slider1: SliderModelType = {
    value: 6,
    options: {
      floor: 6,
      ceil: 12,
      step:1,
      vertical: false,
      showSelectionBar: true,
      showTicksValues: true,
    }
  };

  Slider2: SliderModelType = {
    value: 4,
    options: {
      floor: 4,
      ceil: 12,
      step:1,
      vertical: false,
      showSelectionBar: true,
      showTicksValues: true,
    }
  };

  Slider3: SliderModelType = {
    value: 6,
    options: {
      floor: 6,
      ceil: 12,
      step:1,
      vertical: false,
      showSelectionBar: true,
      showTicksValues: true,
    }
  };

  Slider4: SliderModelType = {
    value: 6,
    options: {
      floor: 0,
      ceil: 100,
      step:25,
      vertical: false,
      showSelectionBar: true,
      showTicksValues: true,
    }
  };
}
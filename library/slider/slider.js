import { absolute } from './../common/common-styles.js';

export let HORIZONTAL = 0;
export let VERTICAL = 1;

export class QuadrupleShadow {
  constructor() {}
  update() {
    document.getElementById('specimen_corners').style.boxShadow = code;
    if (window.selectedElement) window.selectedElement.style.boxShadow = code;
  }
  generate_code() {}
}

export class Slider {
  static initialize() {
    console.log(
      "Initializing slider UI (convert all '.slider' to a slider UI control)"
    );
    document.querySelectorAll('.slider').forEach(function(obj) {
      let id = obj.getAttribute('id');
      let width = 200;
      let height = 16;
      new Slider(
        window.mouse,
        'slider_id_' + id,
        id,
        'name' + Math.floor(Math.random() * 100),
        { x: 0, y: 0 },
        HORIZONTAL,
        width,
        height,
        0,
        200,
        0,
        false,
        false
      );
    });
  }

  constructor(
    mouse, // globally available mouse object
    id, // unique id to assign to dynamically created element
    target, // container object
    name, // slider control name
    array_xy_pos, // slider position stored in array
    direction, // HORIZONTAL or VERTICAL
    width, // slider dimensions
    height,
    min, // min value limit
    max, // max value limit
    now, // value of the slider now
    show_value, // show numeric value in a box to the right of slider
    show_name // show name of the slider inside the slider box
  ) {
    this.id = id;

    this.mouse = mouse;

    // get element object of the container it will be embedded into
    this.container = document.getElementById(target);

    // store a reference to the object the values on this slider control will modify
    this.specimen = null;

    this.direction = direction;

    // width of the box where numeric value of this
    // slider is displayed (to the right of actual slider)
    // *not used if "show_value" argument is false or null
    this.value_width = 30;

    // Slider can be horizontal or vertical, horizontal is default, but flip axis if its vertical
    if (this.direction == VERTICAL) {
      let save = width;
      width = height;
      height = save;
    }

    this.width = width;
    this.height = height;
    this.min = 0;
    this.max = 100;
    this.now = now;
    this.background = { color: '#888' };

    if (this.direction == HORIZONTAL)
      this.scrubber = {
        x: 0,
        y: 0,
        width: 25,
        height: this.height,
        color: 'silver'
      };

    if (this.direction == VERTICAL)
      this.scrubber = {
        x: 0,
        y: 0,
        height: 25,
        width: this.width,
        color: 'silver'
      };

    this.canDrag = false;
    this.isDragging = false;
    this.memory = { x: 0, y: 0 };
    this.name = name;

    this.val = null;

    // Main slider area
    // this.div = document.createElement("div");

    // Create slider container
    this.div = absolute(
      id,
      array_xy_pos == null ? 0 : array_xy_pos[0],
      array_xy_pos == null ? 0 : array_xy_pos[1],
      this.width,
      this.height,
      1
    );

    this.div.style.marginTop = '8px';
    // if position is not provided, make this element "relative" (position works only with "absolute" display location)
    if (array_xy_pos == null) this.div.style.position = 'relative';
    this.div.setAttribute('class', 'noselect scrubber');
    this.div.style.background = this.background.color;
    this.div.style.color = 'gray';

    if (show_name)
      // Print name of this control inside it
      this.div.innerHTML =
        "<div style = 'line-height: 100%; color: #0eb279; padding-left: 28px; width: 100%; display: inline-block; text-align: left;'>" +
        name +
        '</div>';

    // Determine color and font of the name displayed inside the element
    this.div.style.fontFamily = 'Arial';
    this.div.style.fontSize = '14px';
    this.div.style.color = 'white';
    // Match line height to the height of the element
    this.div.style.lineHeight = this.height + 'px';
    // Add overflow hidden
    //this.div.style.overflow = "hidden";

    // Create the draggable knob
    this.knob = absolute(
      id + '_knob',
      0,
      this.scrubber.x,
      this.scrubber.width,
      this.scrubber.height,
      12
    );
    this.knob.setAttribute('class', 'scrubber-knob');
    this.knob.style.background = this.scrubber.color;
    this.knob.style.cursor = 'hand';

    // Create value display <div> (if enabled)
    if (show_value) {
      this.val = absolute(
        id + '_value',
        0,
        0,
        this.value_width,
        this.height,
        13,
        -this.value_width
      ); // align to right side
      this.val.style.background = 'black';
      this.val.style.border = '0';
      this.val.style.color = '#888';
      this.val.style.fontFamily = 'Arial';
      this.val.style.fontSize = '12px';
      this.val.style.paddingLeft = '10px';
      this.val.style.paddingTop = '2px';
      this.val.innerHTML = '0';
      this.val.value = this.now;
    }

    if (this.val) {
      // //console.log("Nest value inside Slider container")
      this.div.appendChild(this.val);
    }

    // Nest the knob inside the container
    this.div.appendChild(this.knob);

    // console.log("this.div = ", this.div);

    // Add the slider to target in the DOM
    this.container.appendChild(this.div);

    // Add mouse drag events
    this.events();
  }

  events() {
    ////console.log("Slider().events() for id = " + this.id);

    // knob
    this.knob.addEventListener('mousedown', e => {
      if (this.isDragging == false) {
        this.isDragging = true;
        this.memory.x = parseInt(this.knob.style.left);
        this.memory.y = parseInt(this.knob.style.top);
        // //console.log(this.memory);
      }
      // e.stopPropagation();
      e.preventDefault();
    });
    this.knob.addEventListener('mouseup', e => {
      this.isDragging = false;
    });

    // main events
    document.body.addEventListener('mousemove', e => {
      if (this.isDragging == true) {
        // Current value of this slider
        let val, bound;

        // Horizontal
        if (this.direction == HORIZONTAL) {
          val = this.memory.x + this.mouse.difference.x;
          bound = this.width - this.scrubber.width;
          if (val < 0) val = 0;
          if (val > bound) val = bound;
          this.knob.style.left = val + 'px';

          // Must be vertical
        } else {
          val = this.memory.y + this.mouse.difference.y;
          bound = this.height - this.scrubber.height;
          if (val < 0) val = 0;
          if (val > bound) val = bound;
          this.knob.style.top = val + 'px';
        }

        // Keep lime color if mouse is outside of the knob but still dragging
        this.knob.style.background = 'lime';

        // Update new slider value in slider value display <div>
        // if (this.val) this.val.innerHTML = val;

        // Do something with target:
        // ...
      }
    });
    document.body.addEventListener('mouseup', e => {
      this.isDragging = false;
      this.knob.style.background = this.scrubber.color;
    });
  }
}

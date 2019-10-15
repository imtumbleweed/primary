const Gender = { Female: 0, Male: 1, Undefined: 2 };

export class Avatar {
  constructor(container_id_name_without_hash) {
    this.id = container_id_name_without_hash;
    this.target = document.getElementById(container_id_name_without_hash);
    this.gender = Gender.UNDEFINED; // not used yet
    this.shape = 0; // head shape
    this.eyes = 0; //
    this.mouth = 0;
    this.haircut = 0;
    this.glasses = -1;
    this.collar = 0;
  }
  static start_blinking() {
    let eye1 = document.getElementById("left_eye");
    let eye2 = document.getElementById("right_eye");
    eye1.style.height = "16px";
    eye2.style.height = "16px";
    let direction = 1;
    this.timer = setInterval(() => {
        let h1 = parseInt(eye1.style.height) - 1;
        let h2 = parseInt(eye2.style.height) - 1;
        if (direction == -1) {
            h1 = parseInt(eye1.style.height) + 1;
            h2 = parseInt(eye2.style.height) + 1;
        }
        eye1.style.height = h1 + "px";
        eye2.style.height = h2 + "px";
        if (h1 <= 2)
            direction = -direction;
        if (h1 >= 17) {
            clearInterval(this.timer);
            this.timer = null;
            setTimeout(()=>{Avatar.start_blinking()}, 1000 + 1000 * Math.floor(Math.random() * 5));
        }
    }, 1);
  }
  // set_random_color(); this function here is just for fun, to show how to change avatar background color
  static set_random_color() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = 'rgb(' + r + ', ' + g + ' , ' + b + ')';
    let avatar = document.querySelector("#svgavatar"); // this.id
    avatar.style.fill = rgb;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    rgb = 'rgb(' + r + ', ' + g + ' , ' + b + ')';
    let foxy_mouth = document.querySelector("#foxy-mouth");
    foxy_mouth.style.backgroundColor = rgb;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    rgb = 'rgb(' + r + ', ' + g + ' , ' + b + ')';
    let bg = document.querySelector("#avatar-background");
    bg.style.backgroundColor = rgb;
  }
  static set = {
    eyes: (index) => console.log("Setting eyes to " + index),
    shape: (index) => console.log("Setting shape to " + index),
    mouth: (index) => console.log("Setting mouth to " + index),
    haircut: (index) => console.log("Setting haircut to " + index),
    glasses: (index) => console.log("Setting glasses to " + index),
  };
}

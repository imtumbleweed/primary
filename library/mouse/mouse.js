export class Mouse {
    constructor()  {
        this.current = {x: 0, y: 0};    // current mouse position on the screen, regardless of state
        this.memory = {x: 0, y: 0};     // memorized mouse position (for measuring dragging distance)
        this.difference = {x: 0, y: 0}; // difference between last click and current mouse position
        this.velocity = {x: 0, y: 0, vx: 0, vy: 0};   // same as above, except not reset after dragging stops
        this.inverse = {x: 0, y: 0};    // swapped
        this.dragging = false;
        this.trackVelocity = false;
        this.timer = null;
        document.body.addEventListener("mousedown", (e) => {
            if (this.dragging == false) {
                this.dragging = true;
                this.memory.x = this.current.x;
                this.memory.y = this.current.y;
                this.inverse.x = this.memory.x;
                this.inverse.y = this.memory.y;
                this.startTrackingVelocity();
            }
        });
        document.body.addEventListener("mouseup", (e) => {
            this.dragging = false;
            this.current.x = 0;
            this.current.y = 0;
            this.memory.x = 0;
            this.memory.y = 0;
            this.difference.x = 0;
            this.difference.y = 0;
            this.inverse.x = 0;
            this.inverse.y = 0;
            this.stopTrackingVelocity();
        });
        document.body.addEventListener("mousemove", (e) => {
            this.current.x = e.pageX;
            this.current.y = e.pageY;
            // this.velocity.x = this.current.x;
            // this.velocity.y = this.current.y;
            if (this.dragging) {
                this.difference.x = this.current.x - this.memory.x;
                this.difference.y = this.current.y - this.memory.y;
                if (this.current.x < this.memory.x) this.inverse.x = this.current.x;
                if (this.current.y < this.memory.y) this.inverse.y = this.current.y;
            }
        });
    }
    startTrackingVelocity() {
        this.trackVelocity = true;
        if (this.timer == null) {
            this.timer = setInterval(() => {
                let oldx = this.velocity.x;
                // this.velocity.x = this.current.x;
                // this.velocity.xv = (this.velocity.x - oldx) * 0.1;
            }, 35); // 35 is an ideal value, tried others doesn't work so well.
        }
    }
    stopTrackingVelocity() {
        if (this.timer != null) {
            // this.velocity = {x: 0, y: 0, vx: 0, vy: 0};
            clearInterval( this.timer );
            this.timer = null;
        }
        this.trackVelocity = false;
    }
    static initialize() {
        console.log("Initializing global mouse object");
        window.mouse = new Mouse();
    }
};
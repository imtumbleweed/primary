export class Checkbox {
    constructor() { }
    // Add event listeners to all checkboxes on the page
    static initialize() {
      console.log("Initializing checkbox UI  (convert all '.checkbox' to a slider UI control)");
      // Attach event listener to the checkbox
      document.querySelectorAll(".checkbox").forEach(function(obj) {
        obj.addEventListener("click", function(event) {
          let state = this.getAttribute("data-value");
          state == "off" ? this.setAttribute("data-value", "on") : this.setAttribute("data-value", "off");
        });
      });
      // Attach event listener to the checkbox label
      document.querySelectorAll(".checkbox-label").forEach(function(obj) {
        let f = obj.getAttribute("for");
        if (f) {
          obj.addEventListener("click", function(event) {
            let checkbox = document.getElementById(f);
            if (checkbox) {
                let state = checkbox.getAttribute("data-value");
                state == "off" ? checkbox.setAttribute("data-value", "on") : checkbox.setAttribute("data-value", "off");
            }
          });
        }
      });
    }
};
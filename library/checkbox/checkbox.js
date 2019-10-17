import { isNullOrUndefined } from "util";

export class Checkbox {
    constructor() { }
    // Add event listeners to all checkboxes on the page
    static initialize() {
      console.log("Initializing checkbox UI  (convert all '.checkbox' to a slider UI control)");
      // Attach event listener to the checkbox
      let matchingCheckbox = document.querySelectorAll('checkbox');
      matchingCheckbox.forEach(function(obj) {
        obj.addEventListener("click", function(event) {
          let state = this.getAttribute("data-value");
          if (isNullOrUndefined(state)){
            throw Error("Checkbox value seems to be nil or empty");
          }
          state === "off" ? this.setAttribute("data-value", "on") : this.setAttribute("data-value", "off");
        });
      });
      // Attach event listener to the checkbox label
      let matchingCheckboxLabel = document.querySelectorAll('checkbox-label');
      matchingCheckboxLabel.forEach(function(obj) {
        let labelAttribute = obj.getAttribute("for");
        if(isNullOrUndefined(labelAttribute)){
          throw Error("label value seems to be emtpy or nil")
        }

        obj.addEventListener("click", function(event) {
          let checkbox = document.getElementById(labelAttribute);
          // What if there's no such checkbox.
          if(isNullOrUndefined(checkbox)){
            throw Error("Cannot able to find checkbox.");
          }
          let state = checkbox.getAttribute("data-value")
          if (isNullOrUndefined(state)){
            throw Error("Checkbox value seems to be undefined or nil");
          }
          state === "off" ? checkbox.setAttribute("data-value", "on") :
              checkbox.setAttribute("data-value", "off");
        });
      });
    }
};
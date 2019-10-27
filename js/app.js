const popUp1 = document.querySelector("#pop-up1"); // href handling the click event
      const popUp2 = document.querySelector("#pop-up2"); // href handling the click event

      const POP1 = document.querySelector("#POP1"); // Popup to be displayed
      const POP2 = document.querySelector("#POP2"); // Popup2 to be displayed

      const pop1Close = document.querySelector("button#pop1Close");
      const pop2Close = document.querySelector("button#pop2Close");
      
      popUp1.addEventListener('click', (e) => {
        e.preventDefault();
        POP1.style.display="block";
      })

      popUp2.addEventListener('click', (e) => {
        e.preventDefault();
        POP2.style.visibility="visible";
      })

      pop1Close.addEventListener('click', () => {
        POP1.style.display="none";
      })
      pop2Close.addEventListener('click', () => {
        POP2.style.visibility="hidden";
      })
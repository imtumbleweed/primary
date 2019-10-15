export const id = (i) => document.getElementById(i);
export const style = (i) => id(i).style;

// creates a generic block with absolute position
export let absolute = (id, left, top, w, h, z, right, bottom) => {

    // defaults - used to replace missing arguments
    const POSITION = 0;
    const SIZE = 10;
    const Z = 1;

    // create a <div> element dynamically
    let div = document.createElement("div");

    // Set ID of the element
    div.setAttribute("id", id);

    // Set absolute behavior
    div.style.position = "absolute";
    div.style.display = "block";

    if (right) // If right is provided, reposition element
        div.style.right = right ? right : POSITION + "px";
    else
        div.style.left = left ? left : POSITION + "px";

    if (bottom) // If bottom is provided, reposition element
        div.style.bottom = bottom ? bottom : POSITION + "px";
    else
        div.style.top = top ? top : POSITION + "px";

    // If w,h and z were supplied, use them, otherwise use default values
    div.style.width  = w ? w + "px" : SIZE + "px";
    div.style.height = h ? h + "px" : SIZE + "px";
    div.style.zindex = z ? z : Z;

    // Return the object associated with this element
    return div;
};

// creates input element
export let input = (id, left, top, w, h, z, right, bottom) => {

    // defaults - used to replace missing arguments
    const POSITION = 0;
    const SIZE = 10;
    const Z = 1;

    // create a <div> element dynamically
    let div = document.createElement("input");

    // Set ID of the element
    div.setAttribute("id", id);

    // Set absolute behavior
    div.style.position = "absolute";
    div.style.display = "block";

    if (right) // If right is provided, reposition element
        div.style.right = right ? right : POSITION + "px";
    else
        div.style.left = left ? left : POSITION + "px";

    if (bottom) // If bottom is provided, reposition element
        div.style.bottom = bottom ? bottom : POSITION + "px";
    else
        div.style.top = top ? top : POSITION + "px";

    // If w,h and z were supplied, use them, otherwise use default values
    div.style.width  = w ? w + "px" : SIZE + "px";
    div.style.height = h ? h + "px" : SIZE + "px";
    div.style.zindex = z ? z : Z;

    // Return the object associated with this element
    return div;
};

// creates a column-based CSS grid
export let grid = (id, columns, x, y, w, h, z) => {
    const DEFAULTPOSITION = 0;
    const DEFAULTSIZE = 10;
    const DEFAULTZ = 1;
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.style.position = "absolute";
    div.style.display = "grid";
    let frs = "";
    let hei = "";
    for (let i = 0; i < columns; i++) {
        frs += "1fr"; hei += "32px";
        if (i < columns - 1) { frs += " "; hei += " "; };
    }
    div.style.gridTemplateColumns = frs;
    div.style.gridTemplateRows = hei;
    div.style.left = x ? x : DEFAULTPOSITION + "px";
    div.style.top = y ? y : DEFAULTPOSITION + "px";
    div.style.width = w ? w : DEFAULTSIZE + "px";
    div.style.height = h ? h : DEFAULTSIZE + "px";
    div.style.zindex = z ? z : DEFAULTZ;
    return div;
};

// creates a grid item
export let grid_item = (id, _class, image, z) => {
    const DEFAULTZ = "unset";
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", _class);
    div.style.zindex = z ? z : DEFAULTZ;
    return div;
};
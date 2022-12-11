let ftRef = document.getElementById("ft");
let mtRef = document.getElementById("mt");
let ctRef = document.getElementById("ct");

let convertFromft = () => {
    let ft = ftRef.value;
    //toFixed(2) limits the decimals to 2 digits.
    mtRef.value = (ft * 0.305).toFixed(2);
    ctRef.value = (ft * 30.48).toFixed(2);
};

let convertFrommt = () => {
    let mt = mtRef.value;
    ftRef.value = (mt * 3.28084).toFixed(2);
    ctRef.value = (mt * 100).toFixed(2);
};

let convertFromct = () => {
    let ct = ctRef.value;
    ftRef.value = (ct * 30.48).toFixed(2);
    mtRef.value = (ct / 100).toFixed(2);
};

ftRef.addEventListener("input", convertFromft);
mtRef.addEventListener("input", convertFrommt);
ctRef.addEventListener("input", convertFromct);
window.addEventListener("load", convertFromft);
hashCode = function (s) {
    for (var i = 0, h = 0; i < s.length; i++) {
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
        h = h % 4294967296;
    }
    return h;
};
const I64 = new BigNumber("18446744073709551616");
const I63 = new BigNumber("9223372036854775808");
const negI63 = new BigNumber("-9223372036854775808");


function shadow() {
    let seed = document.getElementById("seed").value;
    if ( seed===null || seed===""){
        return;
    }
    // check if it is a string
    if (isNaN(seed)) {
        seed = hashCode(seed);
    }
    // create a n bit number
    seed = new BigNumber(seed);
    // check if it is a 64 bit one else hash it
    if (seed.comparedTo(I63) >= 0 || seed.comparedTo(negI63) < 0) {
        seed = new BigNumber(hashCode(seed.toString()));
    }
    // get the solution as -7379792620528906219 - seed but make sure its a positive 64 bit value
    let solution = new BigNumber('-7379792620528906219').minus(seed);
    solution=solution.modulo(I64);
    // if should be signed, sign it
    if (solution.comparedTo(I63) >= 0) {
        solution=solution.minus(I64).negated()
    }
    while (solution.comparedTo(negI63) < 0) {
        solution=solution.plus(I64)
    }
    document.getElementById("result").textContent = solution.toString();
    document.getElementById("button_clipboard").style.display="inline-block";
}

function copy(el,id) {
    var copyText = document.getElementById(id);
    /* Select the text field */
    selectText(copyText);
    /* Copy the text inside the text field */
    document.execCommand("copy");
    el.textContent="Copied!"
}
function selectText(el) {
    let range;
    if (document.selection) { // IE
        range = document.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
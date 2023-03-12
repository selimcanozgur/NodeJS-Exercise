let info = process.argv.slice(2);

function calculateArea (r) {

    let pi = 3.14159265359;
    let result = pi * (r*r);

console.log(`Yarıçapı (${r}) olan dairenin alanı: (${result})`);

}

calculateArea(info[0]*1);





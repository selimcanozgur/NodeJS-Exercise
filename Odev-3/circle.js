function circleArea (r) {
    const info = Math.PI * Math.pow(r,2);
    console.log("Dairenin Alanı: ",info);
}


function circleCircumference (r){
    const info = 2 * (Math.PI) * r;
    console.log("Dairenin Çevresi: ",info);
}

module.exports = {
    circleArea,
    circleCircumference
}



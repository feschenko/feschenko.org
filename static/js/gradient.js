jsgradient = {
    inputA : "",
    inputB : "",
    inputC : "",
    gradientElement : "",
    
    hexToRgb : function(hex){
        let r, g, b;

        hex = hex.replace("#", "");

        if(hex.length !== 3 && hex.length !== 6){
            return [255,255,255];
        }

        if(hex.length === 3){
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }

        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);

        return [r,g,b];
    },

    rgbToHex : function(color){
        color[0] = (color[0] > 255) ? 255 : (color[0] < 0) ? 0 : color[0];
        color[1] = (color[1] > 255) ? 255 : (color[1] < 0) ? 0 : color[1];
        color[2] = (color[2] > 255) ? 255 : (color[2] < 0) ? 0 : color[2];

        return this.zeroFill(color[0].toString(16), 2) + this.zeroFill(color[1].toString(16), 2) + this.zeroFill(color[2].toString(16), 2);
    },

    zeroFill : function( number, width ){
        width -= number.toString().length;
        if ( width > 0 ){
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( "0" ) + number;
        }
        return number;
    },

    generateGradient : function(colorA, colorB, steps){
        let result = [];

        colorA = this.hexToRgb(colorA);
        colorB = this.hexToRgb(colorB);
        steps -= 1;

        let rStep = ( Math.max(colorA[0], colorB[0]) - Math.min(colorA[0], colorB[0]) ) / steps;
        let gStep = (Math.max(colorA[1], colorB[1]) - Math.min(colorA[1], colorB[1])) / steps;
        let bStep = ( Math.max(colorA[2], colorB[2]) - Math.min(colorA[2], colorB[2]) ) / steps;

        result.push("#" + this.rgbToHex(colorA));

        let rVal = colorA[0],
            gVal = colorA[1],
            bVal = colorA[2];

        for (let i = 0; i < (steps-1); i++) {
            rVal = (colorA[0] < colorB[0]) ? rVal + Math.round(rStep) : rVal - Math.round(rStep);
            gVal = (colorA[1] < colorB[1]) ? gVal + Math.round(gStep) : gVal - Math.round(gStep);
            bVal = (colorA[2] < colorB[2]) ? bVal + Math.round(bStep) : bVal - Math.round(bStep);
            result.push("#" + this.rgbToHex([rVal, gVal, bVal]));
        }

        result.push("#" + this.rgbToHex(colorB));

        return result;
    }
}

window.addEventListener("load", function () {
    let background = document.getElementById("introduction__container");
    let gradient = jsgradient.generateGradient("#ba45eb", "#ee52ae", 3);
    let degrees = (Math.random() * (360 - 0 + 1) ) << 0;

    background.style.backgroundImage = `linear-gradient(` + degrees + `deg, ` + gradient[0] + ` 20%, `  + gradient[1] + ` 38%, `+ gradient[2] + ` 70%, #fc5036 100%)`;

    setInterval(function () {
        let gradient = jsgradient.generateGradient("#ba45eb", "#ee52ae", 3);
        let degrees = (Math.random() * (360 - 0 + 1) ) << 0;
        background.style.opacity = "0.2";
        setTimeout(function () {
            background.style.opacity = "1";
            background.style.backgroundImage = `linear-gradient(` + degrees + `deg, ` + gradient[0] + ` 20%, `  + gradient[1] + ` 38%, `+ gradient[2] + ` 70%, #fc5036 100%)`;
        }, 750);
    }, 3500);
});

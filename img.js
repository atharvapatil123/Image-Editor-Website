///////////////////////////////////////////////////////////////////\\

//slider js

var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");

output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}
slider1.addEventListener('click' ,function(){
    var x = slider1.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider1.style.background = color;
})
slider1.addEventListener('mousemove' ,function(){
    var x = slider1.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider1.style.background = color;
})
// ///////////////////////

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
}
slider2.addEventListener("mousemove", function(){
    var x = slider2.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider2.style.background = color;
})
slider2.addEventListener('click', function(){
    var x = slider2.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider2.style.background = color;
})
// //////////////////////////

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("value3");

output3.innerHTML = slider3.value;

slider3.oninput = function() {
    output3.innerHTML = this.value;
}

slider3.addEventListener('mousemove',function(){
    var x = slider3.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider3.style.background = color;
})
slider3.addEventListener('click',function(){
    var x = slider3.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider3.style.background = color;
})
// /////////////////////

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("value4");

output4.innerHTML = slider4.value;

slider4.oninput = function() {
    output4.innerHTML = this.value;
}

slider4.addEventListener("mousemove",function(){
    var x = slider4.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider4.style.background = color;
})
slider4.addEventListener('click',function(){
    var x = slider4.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider4.style.background = color;
})
// //////////////////////

var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("value5");

output5.innerHTML = slider5.value;

slider5.oninput = function() {
    output5.innerHTML = this.value;
}

slider5.addEventListener("mousemove",function(){
    var x = slider5.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider5.style.background = color;
})
slider5.addEventListener('click',function(){
    var x = slider5.value;
    var color = 'linear-gradient(90deg, rgb(20, 225, 240)' + x + '%, rgb(252,252,252)' + x +'%)';
    slider5.style.background = color;
})

/////////////////////////////////////////////////////////////




// var q = 80;
var img;
var resetimg;
var p1, p2, p3, p4, p5, p6, p7, p8;
function upload() {
    var canvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    img = new SimpleImage(fileinput);
    resetimg = new SimpleImage(fileinput);
    p1 = new SimpleImage(fileinput);
    p2 = new SimpleImage(fileinput);
    p3 = new SimpleImage(fileinput);
    p4 = new SimpleImage(fileinput);
    p5 = new SimpleImage(fileinput);
    p6 = new SimpleImage(fileinput);
    p7 = new SimpleImage(fileinput);
    p8 = new SimpleImage(fileinput);
    img.drawTo(canvas);
}

function clear() {
    location.reload();
}

function reset() {
    
    for (var pixel of resetimg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        imgpix = resetimg.getPixel(x, y);
        img.setPixel(x, y, imgpix);
    }
    draww();
}

function draww() {
    var canvas = document.getElementById("can");
    img.drawTo(canvas);
    // for (var pixel of img.values()) {
    //     var x = pixel.getX();
    //     var y = pixel.getY();
    //     console.log(x," ",y);
    //     // imgpix = resetimg.getPixel(x, y);
    //     // img.setPixel(x, y, imgpix);
    // }
    // console.log()
}


function applyRed(){
    var x1 = slider1.value;
    for (var pixel of resetimg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = resetimg.getPixel(x, y);
        p1.setPixel(x, y, pix);
    }
    if(slider4.value>1){
        var x4 = slider4.value;
        for (var pixel of p1.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / (x4*0.1);
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
    }
    if(slider5.value>1){
        var x6 = Math.floor(slider5.value/3);
        var contrast = x6;
        var q = 30;
        var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        for (var pixel of p1.values()) {
            var r2 = (factor * (pixel.getRed() - q) + q);
            var b2 = (factor * (pixel.getBlue() - q) + q);
            var g2 = (factor * (pixel.getGreen() - q) + q);
            
            pixel.setRed(r2);
            pixel.setBlue(b2);
            pixel.setGreen(g2);
        }
        for (var pixel of p1.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            
            pix = p1.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
    }
    if(slider2.value>1){
        var x2 = slider2.value;
        for (var pixel of p1.values()){
            pixel.setGreen(pixel.getGreen() + x2/1.1);
        }
    }
    if(slider3.value>1){
        var x3 = slider3.value;
        for (var pixel of p1.values()) {
            pixel.setBlue(pixel.getBlue() + x3/1.1);
        }
    }
    for (var pixel of p1.values()) {
        pixel.setRed(pixel.getRed() + x1/1.1);
    }
    for (var pixel of p1.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = p1.getPixel(x, y);
        img.setPixel(x, y, pix);
    }

    draww();
}
function applyGreen(){
    var x2 = slider2.value;
    for (var pixel of resetimg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = resetimg.getPixel(x, y);
        p2.setPixel(x, y, pix);
    }
    if(slider4.value>1){
        var x4 = slider4.value;
        for (var pixel of p2.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / (x4*0.1);
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
    }
    if(slider5.value>1){
        var x6 = Math.floor(slider5.value/3);
        var contrast = x6;
        var q = 30;
        var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        for (var pixel of p2.values()) {
            var r2 = (factor * (pixel.getRed() - q) + q);
            var b2 = (factor * (pixel.getBlue() - q) + q);
            var g2 = (factor * (pixel.getGreen() - q) + q);
            
            pixel.setRed(r2);
            pixel.setBlue(b2);
            pixel.setGreen(g2);
        }
        for (var pixel of p2.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            
            pix = p2.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
    }
    if(slider1.value>1){
        var x1 = slider1.value;
        for (var pixel of p2.values()){
            pixel.setRed(pixel.getRed() + x1/1.1);
        }
    }
    if(slider3.value>1){
        var x3 = slider3.value;
        for (var pixel of p2.values()) {
            pixel.setBlue(pixel.getBlue() + x3/1.1);
        }
    }
    for (var pixel of p2.values()) {
        pixel.setGreen(pixel.getGreen() + x2/1.1);
    }
    for (var pixel of p2.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = p2.getPixel(x, y);
        img.setPixel(x, y, pix);
    }

    draww();
}
function applyBlue(){
    var x3 = slider3.value;
    for (var pixel of resetimg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = resetimg.getPixel(x, y);
        p3.setPixel(x, y, pix);
    }
    if(slider4.value>1){
        var x4 = slider4.value;
        for (var pixel of p3.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / (x4*0.1);
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
    }
    if(slider5.value>1){
        var x6 = Math.floor(slider5.value/3);
        var contrast = x6;
        var q = 30;
        var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        for (var pixel of p3.values()) {
            var r2 = (factor * (pixel.getRed() - q) + q);
            var b2 = (factor * (pixel.getBlue() - q) + q);
            var g2 = (factor * (pixel.getGreen() - q) + q);
            
            pixel.setRed(r2);
            pixel.setBlue(b2);
            pixel.setGreen(g2);
        }
        for (var pixel of p3.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            
            pix = p3.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
    }
    if(slider1.value>1){
        var x1 = slider1.value;
        for (var pixel of p3.values()){
            pixel.setRed(pixel.getRed() + x1/1.1);
        }
    }
    if(slider2.value>1){
        var x2 = slider2.value;
        for (var pixel of p3.values()){
            pixel.setGreen(pixel.getGreen() + x2/1.1);
        }
    }
    for (var pixel of p3.values()) {
        pixel.setBlue(pixel.getBlue() + x3/1.1);
    }
    for (var pixel of p3.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = p3.getPixel(x, y);
        img.setPixel(x, y, pix);
    }

    draww();
}

function applyGray() {
    var x4 = slider4.value;
    for (var pixel of resetimg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = resetimg.getPixel(x, y);
        p4.setPixel(x, y, pix);
    }
    if(x4==1){
        draww();
    }
    else{
        for (var pixel of p4.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / (x4*0.1);
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
        if(slider5.value>1){
            var x6 = Math.floor(slider5.value/3);
            var contrast = x6;
            var q = 30;
            var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
            for (var pixel of p4.values()) {
                var r2 = (factor * (pixel.getRed() - q) + q);
                var b2 = (factor * (pixel.getBlue() - q) + q);
                var g2 = (factor * (pixel.getGreen() - q) + q);
                
                pixel.setRed(r2);
                pixel.setBlue(b2);
                pixel.setGreen(g2);
            }
            for (var pixel of p4.values()) {
                var x = pixel.getX();
                var y = pixel.getY();
                
                pix = p4.getPixel(x, y);
                img.setPixel(x, y, pix);
            }
        }
        if(slider1.value>1){
            var x1 = slider1.value;
            for (var pixel of p4.values()){
                pixel.setRed(pixel.getRed() + x1/1.1);
            }
        }
        if(slider2.value>1){
            var x2 = slider2.value;
            for (var pixel of p4.values()){
                pixel.setGreen(pixel.getGreen() + x2/1.1);
            }
        }
        if(slider3.value>1){
            var x3 = slider3.value;
            for (var pixel of p4.values()) {
                pixel.setBlue(pixel.getBlue() + x3/1.1);
            }
        }
        for (var pixel of p4.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
    
            pix = p4.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
        draww();

    }
}

//////////////////////////CONTRAST/////////////////////
function contrast() {
    var x6 = Math.floor(slider5.value/3);
    for (var pixel of resetimg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();

        pix = resetimg.getPixel(x, y);
        p6.setPixel(x, y, pix);
    }
    if(slider4.value>1){
        var x4 = slider4.value;
        for (var pixel of p6.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / (x4*0.1);
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
    }
    if(slider1.value>1){
        var x1 = slider1.value;
        for (var pixel of p6.values()){
            pixel.setRed(pixel.getRed() + x1/1.1);
        }
    }
    if(slider2.value>1){
        var x2 = slider2.value;
        for (var pixel of p6.values()){
            pixel.setGreen(pixel.getGreen() + x2/1.1);
        }
    }
    if(slider3.value>1){
        var x3 = slider3.value;
        for (var pixel of p6.values()) {
            pixel.setBlue(pixel.getBlue() + x3/1.1);
        }
    }
    var contrast = x6;
    var q = 30;
    var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
    if(x6==1){
        draww();
    }
    else{
        for (var pixel of p6.values()) {
            var r2 = (factor * (pixel.getRed() - q) + q);
            var b2 = (factor * (pixel.getBlue() - q) + q);
            var g2 = (factor * (pixel.getGreen() - q) + q);
            
            pixel.setRed(r2);
            pixel.setBlue(b2);
            pixel.setGreen(g2);
        }
        for (var pixel of p6.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
            
            pix = p6.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
        draww();
    }
}

//////////////////////BRIGHTNESS//////////////////////
var clicked_bright = true;
var brightt = document.getElementById('bright');

brightt.addEventListener('mouseenter',()=>{
    if(clicked_bright){
        brightt.style.backgroundColor='rgb(20, 225, 240)';
    }
})
brightt.addEventListener('mouseleave',()=>{
    if(clicked_bright){
        brightt.style.backgroundColor='white';
    }
})
function applyBright() {
    if(clicked_bright){
        clicked_bright=false;
        brightt.style.backgroundColor = 'rgb(20, 225, 240)';
        // for (var pixel of resetimg.values()) {
        //     var x = pixel.getX();
        //     var y = pixel.getY();
    
        //     pix = resetimg.getPixel(x, y);
        //     p5.setPixel(x, y, pix);
        // }
        var q = 30;
        for (var pixel of img.values()) {
            var r = pixel.getRed();
            var b = pixel.getBlue();
            var g = pixel.getGreen();
            if (r >= b && r >= g) {
                pixel.setRed(r + q);
                pixel.setGreen(g + (q / 10));
                pixel.setBlue(b + (q / 10));
            }
            if (b >= r && b >= g) {
                pixel.setBlue(b + (q /0.85));
                pixel.setRed(r + (q / 8));
                pixel.setGreen(b + (q / 20));
    
            }
            if (g >= b && g >= r) {
                pixel.setRed(r + (q / 2));
                pixel.setGreen(g + q);
                pixel.setBlue(b + (q / 4));
            }
        }
        // for (var pixel of p5.values()) {
        //     var x = pixel.getX();
        //     var y = pixel.getY();
    
        //     pix = p5.getPixel(x, y);
        //     img.setPixel(x, y, pix);
        // }
        draww();
    }
    else{
        clicked_bright=true;
        invertt.style.backgroundColor = 'white';
        for (var pixel of resetimg.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
    
            pix = resetimg.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
        draww();
    }
}

///////////////////////INVERT///////////////////////

var clicked_invert = true;
var invertt = document.getElementById('invert');

invertt.addEventListener('mouseenter',()=>{
    if(clicked_invert){
        invertt.style.backgroundColor='rgb(20, 225, 240)';
    }
})
invertt.addEventListener('mouseleave',()=>{
    if(clicked_invert){
        invertt.style.backgroundColor='white';
    }
})


function invert() {
    if(clicked_invert){
        clicked_invert=false;
        invertt.style.backgroundColor = 'rgb(20, 225, 240)';
        var contrast = 60;
        for (var pixel of img.values()) {
            var r2 = (255 - pixel.getRed());
            var b2 = (255 - pixel.getBlue());
            var g2 = (255 - pixel.getGreen());
    
            pixel.setRed(r2);
            pixel.setBlue(b2);
            pixel.setGreen(g2);
        }
        draww();
    }
    else{
        clicked_invert=true;
        invertt.style.backgroundColor = 'white';
        for (var pixel of resetimg.values()) {
            var x = pixel.getX();
            var y = pixel.getY();
    
            pix = resetimg.getPixel(x, y);
            img.setPixel(x, y, pix);
        }
        draww();
    }
}

/////////////////////////////////SATURATE//////////////////
function saturate() {
    var sv = 2; // saturation value. 0 = grayscale, 1 = original
    var luR = 0.3086; // constant to determine luminance of red. Similarly, for green and blue
    var luG = 0.6094;
    var luB = 0.0820;

    var az = (1 - sv) * luR + sv;
    var bz = (1 - sv) * luG;
    var cz = (1 - sv) * luB;
    var dz = (1 - sv) * luR;
    var ez = (1 - sv) * luG + sv;
    var fz = (1 - sv) * luB;
    var gz = (1 - sv) * luR;
    var hz = (1 - sv) * luG;
    var iz = (1 - sv) * luB + sv;

    for (var pixel of img.values()) {

        var r = pixel.getRed();
        var g = pixel.getGreen();
        var b = pixel.getBlue();

        var r2 = (az * r + bz * g + cz * b);
        var g2 = (dz * r + ez * g + fz * b);
        var b2 = (gz * r + hz * g + iz * b);

        pixel.setRed(r2);
        pixel.setBlue(b2);
        pixel.setGreen(g2);
    }
    draww();
}

var download = function () {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('can').toDataURL()
    link.click();
}










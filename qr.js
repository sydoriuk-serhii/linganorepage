function generateQRCode() {
    var qr = qrcode(0, 'M');
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSfAcDisKwVNRFSWgI8QsNAABmItBau0gC-qYE6t6l9o8fPoQQ/viewform";
    qr.addData(url);
    qr.make();
    document.getElementById("qr-code").innerHTML = qr.createImgTag(6);
}
generateQRCode();

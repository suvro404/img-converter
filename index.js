module.exports.convert = function (imgFileData, targetFormat) {
    try {
        targetFormat = targetFormat.toLowerCase();
        let reader = new FileReader();
        return new Promise(resolve => {
            reader.onload = function (readerEvent) {
                let image = new Image();

                image.onload = function (imageEvent) {
                    let canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
                    let mimeType = 'image/' + targetFormat;
                    let dataUrl = canvas.toDataURL(mimeType);

                    let convertedImage = {
                        name: imgFileData.name.substring(0, imgFileData.name.lastIndexOf(".")),
                        format: targetFormat,
                        data: dataUrl
                    }
                    // console.log("convertedImage: ", convertedImage);
                    resolve(convertedImage);
                }
                image.src = readerEvent.target.result;
            }
            reader.readAsDataURL(imgFileData);
        });

    } catch (e) {
        console.log("Error occurred while converting : ", e);
    }
}
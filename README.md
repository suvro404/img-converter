## img-converter
##### A simple image conversion tool to convert jpg, png and gif image.

#### Install
```
npm install img-converter
```

### Usage
```
import ImgConverter from 'img-converter'

ImgConverter.convert(sourceImageFile, targetImageFormat);
```

### Example Code
```
<input type='file' accept=".jpg, .png, .gif" onchange="convertImg(this)" />

import ImgConverter from 'img-converter'

async function convertImg(input) {
    let sourceImageFile = input.files[0];
    let targetImageFormat = 'png'
    let convertedImgDataObj = await ImgConverter.convert(sourceImageFile, targetImageFormat);
}
```
###### This convert function will return a converted image data object which includes image name, format and base64 image string.
###### This base64 image string can be used to download the converted image.
```
function downloadImg(convertedImgDataObj) {
    let a = document.createElement("a");
    a.href = convertedImgDataObj.data;
    a.download = convertedImgDataObj.name + "." + convertedImgDataObj.format;
    a.click();
}
```


### License
MIT
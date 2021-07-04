const drawCanvas = (canvas) => {

    const canvasElement = document.querySelector('canvas');

    canvasElement.width = canvas.width;
    canvasElement.height = canvas.height;

}

const drawImage = (ctx) => {
     
    return (img, x, y, width = 20, height = 20) => {
        ctx.drawImage(img, x, y, width, height);
    }

}

const getContext = () => {
    const canvasElement = document.querySelector('canvas');
    return canvasElement.getContext('2d');
}

const draw = () => {
    const context = getContext();

    return drawImage(context);
}
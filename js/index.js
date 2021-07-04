const options = {
    canvas: {
        width: 500,
        height: 500,
    },
    player: {
        width: 20,
        heigth: 20,
        positionX: 240,
        positionY: 240,
    },
}

const loadImage = (image) => {
    return new Promise((resolve, reject) => {
        const newImage = new Image();
        newImage.addEventListener('load', () => {
            resolve(newImage);
        })
        newImage.addEventListener('error', () => {
            reject('Falha ao carregar a imagem');
        })
        newImage.src = image;
    })
}

const loadImagesToCanvas = async () => {

    const images = {
        N: await loadImage('images/N.png'),
        E: await loadImage('images/E.png'),
        S: await loadImage('images/S.png'),
        O: await loadImage('images/O.png'),
        pokebola: await loadImage('images/pokebola.png'),
    }

    return images;
}

const drawPlayer = (options, images) => {

    const { 
        player: {
            width,
            heigth,
            positionX,
            positionY,
        }
    } = options;

    const drawTool = draw();

    drawTool(images.N, positionX, positionY, width, heigth)

}

const init = async () => {

    const images = await loadImagesToCanvas();

    drawCanvas(options.canvas);

    drawPlayer(options, images);


    console.log(options, images)

}

init();


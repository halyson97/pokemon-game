export default class Game {
    constructor(player, canvas, images) {  
        this.player = player;
        this.canvas = canvas;
        this.images = images;
    }

    move = (direction) => {
        console.log('move to ', direction)

        let x = this.player.positionX;
        let y = this.player.positionY;

        let image = this.images.getUp();

        this.canvas.clear(x, y);
        
        switch (direction) {
            case 'E':
                x += 20;
                image = this.images.getRight();
                break;
            case 'O':
                x -= 20;
                image = this.images.getLeft();
                break;
            case 'N':
                y -= 20;
                image = this.images.getUp();
                break;
            case 'S':
                y += 20;
                image = this.images.getDown();
                break;
            default:
                return;
        }
    
        this.player.setPositions(x, y);

        this.player.capturePokemon(x, y);

        this.canvas.drawImage(x, y, image);
        
    }

    addEventsListeners = () => {
        document.addEventListener('keydown', (e)=>{
            const moves = {
                ArrowLeft: 'O',
                ArrowRight: 'E',
                ArrowUp: 'N',
                ArrowDown: 'S',
            }
    
            if(moves[e.key]){
                this.move(moves[e.key]);
            }
        })
    }

    init = () => {
        console.log('init game', this)
        this.addEventsListeners()
    }

  
  }
  
const DecoratorFactory = (type: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.playMusic = (): void => {
            console.log(`播放${type}音乐`);
        }
    }
}

@DecoratorFactory('music')
class Music{}

@DecoratorFactory('player')
class Player{}

const t = new Music();
(<any>t).playMusic()

const d = new Player();
(<any>d).playMusic()
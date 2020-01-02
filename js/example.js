class example extends Phaser.Scene {
    constructor() {
        super({ key: "example", active: true });
        this.run = {};
        this.enimyR = [];
        this.enimy = [];
        this.i = 0;
    }

    preload() {
        this.load.image('background', 'assets/bg3.png');
        this.load.image('land', 'assets/lands.png');

        //run
        this.load.image('run1', 'assets/run/adventurer-run-00.png');
        this.load.image('run2', 'assets/run/adventurer-run-01.png');
        this.load.image('run3', 'assets/run/adventurer-run-02.png');
        this.load.image('run4', 'assets/run/adventurer-run-03.png');
        this.load.image('run5', 'assets/run/adventurer-run-04.png');
        this.load.image('run6', 'assets/run/adventurer-run-05.png');

        //run left 
        this.load.image('runL1', 'assets/runLeft/adventurer-run-00-ConvertImage.png');
        this.load.image('runL2', 'assets/runLeft/adventurer-run-01-ConvertImage.png');
        this.load.image('runL3', 'assets/runLeft/adventurer-run-02-ConvertImage.png');
        this.load.image('runL4', 'assets/runLeft/adventurer-run-03-ConvertImage.png');
        this.load.image('runL5', 'assets/runLeft/adventurer-run-04-ConvertImage.png');
        this.load.image('runL6', 'assets/runLeft/adventurer-run-05-ConvertImage.png');

        //standup
        this.load.image('stand1', 'assets/standup/adventurer-idle-00.png');
        this.load.image('stand2', 'assets/standup/adventurer-idle-01.png');
        this.load.image('stand3', 'assets/standup/adventurer-idle-02.png');
        this.load.image('stand4', 'assets/standup/adventurer-idle-03.png');

        //jump
        this.load.image('jump1', 'assets/jump/adventurer-jump-00.png');
        this.load.image('jump2', 'assets/jump/adventurer-jump-01.png');
        this.load.image('jump3', 'assets/jump/adventurer-jump-02.png');
        this.load.image('jump4', 'assets/jump/adventurer-jump-03.png');

        //fall
        this.load.image('fall1', 'assets/jump/adventurer-fall-00.png');
        this.load.image('fall2', 'assets/jump/adventurer-fall-01.png');

        //attack
        this.load.image('attack1', 'assets/attack/adventurer-attack1-00.png');
        this.load.image('attack2', 'assets/attack/adventurer-attack1-01.png');
        this.load.image('attack3', 'assets/attack/adventurer-attack1-02.png');
        this.load.image('attack4', 'assets/attack/adventurer-attack1-03.png');
        this.load.image('attack5', 'assets/attack/adventurer-attack1-04.png');
        this.load.image('attack6', 'assets/attack/adventurer-attack2-00.png');
        this.load.image('attack7', 'assets/attack/adventurer-attack2-01.png');
        this.load.image('attack8', 'assets/attack/adventurer-attack2-02.png');
        this.load.image('attack9', 'assets/attack/adventurer-attack2-03.png');
        this.load.image('attack10', 'assets/attack/adventurer-attack2-04.png');
        this.load.image('attack11', 'assets/attack/adventurer-attack2-05.png');
        this.load.image('attack12', 'assets/attack/adventurer-attack3-00.png');
        this.load.image('attack13', 'assets/attack/adventurer-attack3-01.png');
        this.load.image('attack14', 'assets/attack/adventurer-attack3-02.png');
        this.load.image('attack15', 'assets/attack/adventurer-attack3-03.png');
        this.load.image('attack16', 'assets/attack/adventurer-attack3-04.png');
        this.load.image('attack17', 'assets/attack/adventurer-attack3-05.png');

        //ehimy
        this.load.spritesheet('enimy', 'assets/enimy/enimy.png', { frameWidth: 256, frameHight: 256 });

        //enimy right
        this.load.image('enimyR1', 'assets/enimy/enimyRightSide/tile000-ConvertImage.png');
        this.load.image('enimyR2', 'assets/enimy/enimyRightSide/tile001-ConvertImage.png');
        this.load.image('enimyR3', 'assets/enimy/enimyRightSide/tile002-ConvertImage.png');
        this.load.image('enimyR4', 'assets/enimy/enimyRightSide/tile003-ConvertImage.png');
        this.load.image('enimyR5', 'assets/enimy/enimyRightSide/tile004-ConvertImage.png');
        this.load.image('enimyR6', 'assets/enimy/enimyRightSide/tile005-ConvertImage.png');
        this.load.image('enimyR7', 'assets/enimy/enimyRightSide/tile006-ConvertImage.png');
        this.load.image('enimyR8', 'assets/enimy/enimyRightSide/tile007-ConvertImage.png');
        this.load.image('enimyR9', 'assets/enimy/enimyRightSide/tile008-ConvertImage.png');
        this.load.image('enimyR10', 'assets/enimy/enimyRightSide/tile009-ConvertImage.png');
        this.load.image('enimyR11', 'assets/enimy/enimyRightSide/tile010-ConvertImage.png');

    }

    create() {
        this.backgroud = this.add.tileSprite(120, 160, 240, 360, 'background');

        // this.backgroud.setOrigin(0, 0);
        // this.backgroud.setScrollFactor(0);

        this.land1 = this.physics.add.image(40, 280, 'land');
        this.land2 = this.physics.add.image(120, 280, 'land');
        this.land3 = this.physics.add.image(200, 280, 'land');

        this.anims.create({
            key: 'run',
            frames: [
                { key: 'run1' },
                { key: 'run2' },
                { key: 'run3' },
                { key: 'run4' },
                { key: 'run5' },
                { key: 'run6' },
            ],
            frameRate: 7,
            repeat: 1000,
            //hideOnComplete: true
        });

        this.anims.create({
            key: 'stand',
            frames: [
                { key: 'stand1' },
                { key: 'stand2' },
                { key: 'stand3' },
                { key: 'stand4' }
            ],
            frameRate: 5,
            repeat: 1000,
            //hideOnComplete: true
        });

        this.anims.create({
            key: 'jump',
            frames: [
                { key: 'jump1' },
                { key: 'jump2' },
                { key: 'jump3' },
                { key: 'jump4' }
            ],
            frameRate: 5,
            repeat: 0,
            // hideOnComplete: true
        });

        //fall
        this.anims.create({
            key: 'fall',
            frames: [
                { key: 'fall1' },
                { key: 'fall2' }
            ],
            frameRate: 3,
            repeat: 0,
            hideOnComplete: true
        });

        //run left
        this.anims.create({
            key: 'runLeft',
            frames: [
                { key: 'runL1' },
                { key: 'runL2' },
                { key: 'runL3' },
                { key: 'runL4' },
                { key: 'runL5' },
                { key: 'runL6' },
            ],
            frameRate: 7,
            repeat: 1000,
            //hideOnComplete: true
        });

        //attack
        //run left
        this.anims.create({
            key: 'attack',
            frames: [
                { key: 'attack1' },
                { key: 'attack2' },
                { key: 'attack3' },
                { key: 'attack4' },
                { key: 'attack5' },
                { key: 'attack6' },
                { key: 'attack7' },
                { key: 'attack8' },
                { key: 'attack9' },
                { key: 'attack10' },
                { key: 'attack11' },
                { key: 'attack12' },
                { key: 'attack13' },
                { key: 'attack14' },
                { key: 'attack15' },
                { key: 'attack16' },
                { key: 'attack17' },
            ],
            frameRate: 7,
            repeat: 0,
            //hideOnComplete: true
        });

        this.enimy = this.add.sprite(160, 150, 'enimy');

        //enimy
        this.anims.create({
            key: 'enimy1',
            repeat: 1000,
            frameRate: 7,
            frames: this.anims.generateFrameNames('enimy', { start: 1, end: 10 })
        });

        this.enimy.play('enimy1');
        this.enimy.displayWidth = 100;
        this.enimy.displayHeight = 100;

        //enimy right side
        this.anims.create({
            key: 'enimyRight',
            frames: [
                { key: 'enimyR1' },
                { key: 'enimyR2' },
                { key: 'enimyR3' },
                { key: 'enimyR4' },
                { key: 'enimyR5' },
                { key: 'enimyR6' },
                { key: 'enimyR7' },
                { key: 'enimyR8' },
                { key: 'enimyR9' },
                { key: 'enimyR10' }
            ],
            frameRate: 7,
            repeat: 1000,
            //hideOnComplete: true
        });

        this.stand = this.physics.add.sprite(20, 200, 'stand1').play('stand');
        this.stand.displayWidth = 50;
        this.stand.displayHeight = 50;

        //collider
        this.physics.add.collider(this.stand, this.land1);
        this.land1.setImmovable();

        this.physics.add.collider(this.stand, this.land2);
        this.land2.setImmovable();

        this.physics.add.collider(this.stand, this.land3);
        this.land3.setImmovable();

        //key handle
        this.keys_handle = this.input.keyboard.createCursorKeys();
        this.key_ENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update(time, delta) {
        //scroll background
        this.backgroud.tilePositionX += 1;

        //key handle
        if (this.keys_handle.right.isDown) {
            this.stand.x++;
            this.stand.anims.play('run', true)
        } else if (this.keys_handle.left.isDown) {
            this.stand.x--;
            this.stand.anims.play('runLeft', true)
        } else if (this.keys_handle.up.isDown) {
            this.stand.setVelocityY(-100);
            this.stand.anims.play('jump', true)
        } else if (this.key_ENTER.isDown) {
            this.stand.anims.play('attack', true)
        } else {
            this.stand.anims.play('stand', true)
        }

        if (this.keys_handle.up.isUp) {
            this.stand.setGravityY(+100);
            // this.stand.anims.play('fall', true)
        }

        //enimy
        this.enimy.x--;
        if (this.enimy.x == 20) {
            
            this.enimy.destroy();
            this.enimyR = this.physics.add.sprite(this.enimy.x, 150, 'enimyR1').play('enimyRight');
            this.enimyR.displayWidth = 100;
            this.enimyR.displayHeight = 100;
        }
        this.enimyR.x++;

        if (this.enimyR.x == 220) {
            this.enimyR.destroy();
            this.enimyR3 = this.physics.add.sprite(this.enimyR.x, 150, 0).play('enimy1');
            this.enimyR3.displayWidth = 100;
            this.enimyR3.displayHeight = 100;
        }
    }

}
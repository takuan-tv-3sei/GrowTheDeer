const Game = {
    canvas: null,
    ctx: null,
    foods: [],
    MAX_FOODS_AMOUNT: 10,
    ate_amount: 0,
    STUCKING_AMOUNT: 500,
    
    init: function() {
        this.canvas = $("#game")[0];
        this.ctx = this.canvas.getContext("2d");

        FoodSelector.init();

        this.canvas.addEventListener('click', (e) => this.addFood(e));

        Deer.image = new Image();
        Deer.image.src = "imgs/Deer.png";
        Deer.image.onload = () => {
            this.drawDeer()
            this.updateDeerInfo()
        };

        Deer.x = this.canvas.width / 2 - Deer.size / 2;
        Deer.y = this.canvas.height / 2 - Deer.size / 2;

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        this.foods = [];

        /* Intervals */
        setInterval(() => {
            Deer.save();
            this.ate_amount = 0;
        }, 60 * 1000);

        setInterval(() => {
            this.gameUpdate();
        }, 1000 / 60);

        setInterval(() => {
            Deer.age += 1;
            if (Deer.age >= Deer.deathAge)
            {
                Deer.death("老衰");
            }
        }, Deer.AGE_INTERVAL * 1000);

        this.loadDeer();
    },

    resizeCanvas: function() {
        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight;
        this.updateDeerInfo();
        FoodSelector.position();
    },

    drawText : function(text, x, y) {
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
        this.ctx.fillText(text, x, y);
    },

    gameUpdate : function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawFoods();
        this.updateDeerMovement();
        this.drawDeer(); 
        this.updateDeerInfo();

        if (Deer.name == undefined || Deer.name == null)
            Deer.init();
    },

    drawDeer : function() {
        if (Deer.image && Deer.image.complete) {
            const aspectRatio = Deer.image.width / Deer.image.height;
            const width = Deer.size;
            const height = Deer.size / aspectRatio;

            this.ctx.save();

            if (Deer.facingLeft) {
                this.ctx.scale(-1, 1);
                this.ctx.drawImage(Deer.image, -Deer.x - width, Deer.y, width, height);
            } else {
                this.ctx.drawImage(Deer.image, Deer.x, Deer.y, width, height);
            }

            this.ctx.restore();
        }
    },

    changeDeerSize : function(size) {
        Deer.size = size;
        this.drawDeer()
    },

    updateDeerInfo : function() {
        this.drawText(`名前: ${Deer.name}`, 10, 30);
        this.drawText(`レベル: ${Deer.level}`, 10, 60);
        this.drawText(`年齢: ${Deer.age}歳`, 10, 90);
        this.drawText(`サイズ: ${Math.floor(Deer.size * 10) / 10}`, 10, 120)
    },
    
    addFood : function(e) {
        if (this.foods.length < this.MAX_FOODS_AMOUNT) {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const selectedFood = FoodSelector.getSelectedFood();
            this.foods.push({
                x, 
                y, 
                size: selectedFood.size, 
                image: selectedFood.loadedImage,
                value: selectedFood.value,
                name: selectedFood.name
            });
        }
    },

    drawFoods: function() {
        for (let food of this.foods) {
            if (food.image && food.image.complete) {
                this.ctx.drawImage(food.image, food.x - food.size/2, food.y - food.size/2, food.size, food.size);
            }
        }
    },

    updateDeerMovement : function() {
        Deer.move(this.foods);
        Deer.eat(this.foods);
    },

    loadDeer: function() {
        let deerData = Deer.load();
        this.foods = [];
        if (deerData == null || deerData.dead) {
            Deer.init();
        } else {
            Deer.name = deerData.name;
            Deer.level = deerData.level;
            Deer.age = deerData.age;
            Deer.bornTime = deerData.bornTime;
            Deer.deathAge = deerData.deathAge;
            Deer.dead = deerData.dead;
            this.ate_amount = deerData.ate_amount;

            this.changeDeerSize(deerData.size);
            this.updateDeerInfo();
        }
    }
}

const FoodSelector = {
    canvas: null,
    ctx: null,
    
    foodTypes: [
        { name: "鹿せんべい", image: "imgs/ShikaSenbei.png", size: 20, value: 1, unlocked: true},
        { name: "りんご", image: "imgs/Apple.png", size: 25, value: 2, unlocked: false},
    ],
    selectedFoodIndex: 0,
    size: 50,
    padding: 10,

    init: function() {
        this.canvas = $("#foodSelector")[0];
        this.ctx = this.canvas.getContext("2d");

        this.loadFoodImages().then(() => {
            this.initCanvas();
            this.draw();
        });

        this.canvas.addEventListener('click', (e) => this.handleSelection(e));
    },

    loadFoodImages: function() {
        const promises = this.foodTypes.filter(food => food.unlocked).map(food => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    food.loadedImage = img;
                    resolve();
                };
                img.onerror = reject;
                img.src = food.image;
            });
        });
        return Promise.all(promises);
    },

    initCanvas: function() {
        const unlockedFoods = this.foodTypes.filter(food => food.unlocked);
        const totalWidth = unlockedFoods.length * (this.size + this.padding) + this.padding;
        this.canvas.width = totalWidth;
        this.canvas.height = this.size + 2 * this.padding;
        this.position();
    },

    position: function() {
        const gameCanvas = $("#game")[0];
        const gameRect = gameCanvas.getBoundingClientRect();
        
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = `${gameRect.top + 10}px`;
        this.canvas.style.left = `${gameRect.right + 10}px`;

        const availableWidth = window.innerWidth - gameRect.right - 20;

        const unlockedFoods = this.foodTypes.filter(food => food.unlocked);
        const requiredWidth = unlockedFoods.length * (this.size + this.padding) + this.padding;
        this.canvas.width = Math.min(availableWidth, requiredWidth);

        this.canvas.height = this.size + 2 * this.padding;

        this.draw();
    },

    handleSelection: function(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const unlockedFoods = this.foodTypes.filter(food => food.unlocked);
        const index = Math.floor(x / (this.size + this.padding));
        if (index >= 0 && index < unlockedFoods.length) {
            this.selectedFoodIndex = this.foodTypes.indexOf(unlockedFoods[index]);
            this.draw();
        }
    },

    draw: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(200, 200, 200, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const unlockedFoods = this.foodTypes.filter(food => food.unlocked);
        unlockedFoods.forEach((food, index) => {
            const x = index * (this.size + this.padding) + this.padding;
            const y = this.padding;

            if (food === this.foodTypes[this.selectedFoodIndex]) {
                this.ctx.fillStyle = 'rgba(100, 100, 255, 0.5)';
                this.ctx.fillRect(x - 2, y - 2, this.size + 4, this.size + 4);
            }

            if (food.loadedImage) {
                this.ctx.drawImage(food.loadedImage, x, y, this.size, this.size);
            }
        });
    },

    getSelectedFood: function() {
        return this.foodTypes[this.selectedFoodIndex];
    }
}

const Deer = {
    name: null,
    level: 0,
    age: 0,
    bornTime: null,
    deathAge: null,
    dead: false,

    facingLeft: false,

    AGE_INTERVAL: 180,
    
    size: 50,
    image: null,

    x: 0,
    y: 0,
    speed: 2,

    init : function() {
        this.name = prompt("鹿の名前を決めてください！");
        this.level = 0;
        this.age = 0;
        this.bornTime = Date.now();
        this.size = 50;
        this.dead = false;

        this.deathAge = Math.floor(Math.random() * 6) + 18

        Game.ate_amount = 0;
        Game.updateDeerInfo();
    },

    save : function() {
        let deerData = {
            name: this.name,
            level: this.level,
            age: this.age,
            size: this.size,
            dead: this.dead,
            bornTime: this.bornTime,
            deathAge: this.deathAge,
            ate_amount: Game.ate_amount,
        };

        localStorage.setItem("gameData", this.dead ? null : JSON.stringify(deerData));
        console.log("Data Saved!");
    },

    load : function() {
        let deerData = JSON.parse(localStorage.getItem("gameData"));
        console.log("Data Loaded!");
        console.log(deerData);
        return deerData;
    },

    move : function(foods) {
        if (foods.length > 0) {
            const target = foods[0];
            const dx = target.x - (this.x + this.size / 2);
            const dy = target.y - (this.y + this.size / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > this.speed) {
                const oldX = this.x;
                this.x += (dx / distance) * this.speed;
                this.y += (dy / distance) * this.speed;

                this.facingLeft = this.x < oldX;
            } else {
                this.x = target.x - this.size / 2;
                this.y = target.y - this.size / 2;
            }
        }
    },

    eat: function(foods) {
        if (foods.length > 0) {
            const target = foods[0];
            const dx = target.x - (this.x + this.size / 2);
            const dy = target.y - (this.y + this.size / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < (this.size / 2 + target.size / 2)) {
                Game.changeDeerSize(this.size + 0.1);
                Game.ate_amount++;

                if (Game.ate_amount > Game.STUCKING_AMOUNT)
                {
                    this.death(`のどに${target.name}が詰まった`);
                    this.ate_amount = 0;
                }

                foods.shift();
            }
        }
    },

    formatSurvivalTime: function(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        let result = '';
        if (days > 0) result += `${days}日 `;
        if (remainingHours > 0 || days > 0) result += `${remainingHours}時間 `;
        if (remainingMinutes > 0 || remainingHours > 0 || days > 0) result += `${remainingMinutes}分 `;
        result += `${remainingSeconds}秒`;

        return result;
    },

    death : function(reason) {
        Deer.dead = true;
        let time = Date.now() - Deer.bornTime;
        reason = reason == null ? "なし" : reason;
        alert(`${Deer.name}は死んでしまった！\n記録:\nレベル: ${Deer.level}\n年齢: ${Deer.age}歳\n生存時間: ${this.formatSurvivalTime(time)}\nサイズ: ${Math.floor(Deer.size * 10) / 10}\n原因: ${reason}`);
        Deer.init();
    }
}

$(document).ready(function() {
    Game.init();
})

$(window).on("beforeunload", function() {
    Deer.save();
});
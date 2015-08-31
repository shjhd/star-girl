var starObj = function(){
	this.x;
	this.y;
	this.picNo;
	this.timer;

	this.xSpad;
	this.ySpad;
}

starObj.prototype.init = function(){
	this.x = Math.random() * 600 + 100;
	this.y = Math.random() * 300 + 150;
	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;

	this.xSpad = Math.random() * 3 - 1.5;//[-1.5,1.5]
	this.ySpad = Math.random() * 3 - 1.5;
}

starObj.prototype.update = function(){
	this.x += this.xSpad * deltaTime *0.004;
	this.y += this.ySpad * deltaTime *0.004;

	//this.x 超过范围 init
	if(this.x < 100 || this.x >700){
		this.init();
		return;
	}

	//this.y 超过范围 init
	if(this.y < 150 || this.y >450){
		this.init();
		return;
	}

	this.timer += deltaTime;
	if(this.timer > 50){
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
}

starObj.prototype.draw = function(){
	ctx.save();
	ctx.globalAlpha = life; //[0,1]
	//drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
	ctx.drawImage(starPic,this.picNo * 7,0,7,7,this.x,this.y,7,7);
	ctx.restore();
}

function drawStars(){
	for(var i=0;i<num;i++){
		stars[i].update();
		stars[i].draw();
	}
}

function aliveUpdate(){
	if(switchy){
		//show stars
		life += 0.03 * deltaTime *0.05;
		if(life > 1){
			life = 1;
		}
	}else{
		//hide stars
		life -= 0.03 * deltaTime *0.05;
		if(life < 0){
			life = 0;
		}
	}
}
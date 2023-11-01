//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
		
	}

	get getWidth(){
		return this.width;
	}

	get getHeight(){
		return this.height;
	}

	getArea(){
		return Math.pow(this.width*this.height, 2);
	}

	
}

class Square extends Rectangle {
	constructor(width, height){
		super(width, height);
	}

	getPerimeter(){
		return 2*this.width*this.height;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

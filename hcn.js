class HinhChuNhat {
    width;
    height;
    // Cv;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // this.Cv = Cv;
    }


    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }
    getCv(){
        return (this.width + this.height) *2;
    }
    getDt(){
        return (this.height * this.width);
    }
}
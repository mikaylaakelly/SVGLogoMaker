class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}


class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
};


class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}"/>`
    }
};
class Square extends Shape {
    render() {
        return `<rect x="75" y="75" width="200" height="200" style="fill:${this.color}"/>`
    }
};






module.exports = { Circle, Square, Triangle };
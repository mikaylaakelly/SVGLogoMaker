



const { Circle, Square, Triangle } = require('../lib/shapes.js');

describe('Shapes', () => {
  describe('Circle', () => {
    it('should render a red circle', () => {
      const circle = new Circle();
      circle.setColor('red');

      const svgElement = circle.render();

      console.log('SVG for Circle:', svgElement);

      expect(svgElement).toContain('<circle');
      expect(svgElement).toContain('style="fill:red"');
    });
  });

  describe('Square', () => {
    it('should render a blue square', () => {
      const square = new Square();
      square.setColor('blue');

      const svgElement = square.render();

      console.log('SVG for Square:', svgElement);

      expect(svgElement).toContain('<rect');
      expect(svgElement).toContain('style="fill:blue"');
    });
  });

  describe('Triangle', () => {
    it('should render a green triangle', () => {
      const triangle = new Triangle();
      triangle.setColor('green');

      const svgElement = triangle.render();

      console.log('SVG for Triangle:', svgElement);

      expect(svgElement).toContain('<polygon');
      expect(svgElement).toContain('style="fill:green"');
    });
  });
});
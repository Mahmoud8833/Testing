const circle = {
  radius: 10,
  color: "orange",
  getArea() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference(){
    return 2 * Math.PI * this.radius;
  },
};

let { radius, getArea, getCircumference } = circle;
console.log(getArea());
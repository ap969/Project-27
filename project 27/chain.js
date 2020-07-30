class chain {
    constructor(body1,pointB,length,stiffness) {
    var slingshot_options={
        bodyA: body1,
        pointB: pointB,
        length: length,
        stiffness: stiffness,
    }
    this.chain = Constraint.create(slingshot_options);
    this.pointB = pointB;
    World.add(world,this.chain);
}
    display() {
        stroke(143,89,46);
        strokeWeight(4);
        var pointA = this.chain.bodyA;
        var pointB = this.pointB;
        line(pointA.position.x,pointA.position.y,pointB.x,pointB.y);

}
}
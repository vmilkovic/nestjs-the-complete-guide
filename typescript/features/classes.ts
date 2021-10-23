class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log('chugga chugga');
  }

  private honk(): void {
    console.log('beep');
  }

  public startHonking() {
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  protected drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
car.startHonking();

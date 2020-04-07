
public class Car extends Vehicle{
    String  make;
    String  model;
    int     cyl;

    public Car(String make, String model, int cyl){
        this.make = make;
        this.model = model;
        this.cyl = cyl;
    }
    public void setMake(String make){
        this.make = make;
    }
    public String getMake(){
        System.out.println("Car.getMake is called");
        return make;
    }
    public String getFullSpec(){
        System.out.println("Car.getFullSpec, is called");
        System.out.println("Makr: " + make + " | Model: " + model + " | Cylynders : "+ cyl);
        return "full Spec";
    }

}
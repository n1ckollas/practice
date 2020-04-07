package sec62;

public class Vehicle {
    private int state;
    private String type;

    public Vehicle(){
       this(0, "Vehicle"); 
    }
    public Vehicle(int state, String type){
       this.state = state;
       this.type = type; 
    }

    public void setState(int state){
        System.out.println("Vehicle.setState is called");
        this.state = state;
    }
    public int getState(){
        System.out.println("Vehicle.getState is called");
        return this.state;
    }
    public String getType(){
        System.out.println("Vehicle.getType is called");
        return this.type;
    }

    
}
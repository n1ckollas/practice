package constchain;

public class Train {
    public int cars;
    public String make;
    public String destination;
    public int speed;
    public String route;
    public String type;
    public int hamstersOnboard;
    public String madeIn;

    public static void main(String args[]){

    }
    
    Train(){
        this(4, "TWP", "Florida", 300, "Through DC", "LONG", 99, "Very Flexible");
    }
    Train(String type, int hamstersOnboard, String madeIn){
        this(99, "Am Track", "Florida", 999, "Through NY", type, hamstersOnboard, madeIn);
    }
    Train(int cars, String make, String destination, int speed, String route,
            String type, int hamstersOnboard, String madeIn){
           this.cars = cars;
           this.make = make;
           this.destination = destination;
           this.speed = speed;
           this.route = route;
           this.type = type;
           this.hamstersOnboard = hamstersOnboard;
           this.madeIn = madeIn; 
    }

}
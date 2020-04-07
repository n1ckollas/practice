public class Main{
    public static void main(String[] args){
        Car bmw = new Car("bmw", "m5", 8);
        Car bmw2 = new Car("bmw", "m5", 10);

        bmw.getFullSpec();
        bmw2.getFullSpec();
        bmw.getState();
        bmw2.getState();
    }
}
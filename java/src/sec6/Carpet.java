public class Carpet{
    private double cost;
    public static void main(String args[]){

    }

    public Carpet(double cost){
        this.cost = cost < 0 ? 0 : cost;
    }
    public double getCost(){
        return this.cost;
    }
}
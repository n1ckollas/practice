public class Calculator2{
    private Floor floor;
    private Carpet carpet;

    public static void main(String args[]){

    }

    public Calculator2(Floor floor, Carpet carpet){
        this.floor = floor;
        this.carpet = carpet;
    }

    public double getTotalCost(){
        return this.floor.getArea() * this.carpet.getCost();
    }
}
package inheritance;

public class Dog extends Animal{
    public int eyes;
    public int legs;
    public int tail;
    public int teeth;
    public String name;


    public static void main(String args[]){

    }

    Dog(int eyes, int legs, int tail, int teeth, String name, int size, int weight){
        super(name, 1, 1, size, weight);
        this.eyes = eyes;
        this.legs = legs;
        this.tail = tail;
        this.teeth = teeth;
        this.name = name;
    }
    private void chew(){
        System.out.println("Dog.chew() calle.");
    }

    @Override
    public void eat(){
        System.out.println("Dog.eat() called.");
        chew();
        super.eat();
    }
}
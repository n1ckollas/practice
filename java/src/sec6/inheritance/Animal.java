package inheritance;

public class Animal{
    String name;
    int brain;
    int body;
    int size;
    int weight;

    Animal(String name, int brain, int body, int size, int weight){
        this.name = name;
        this.brain = brain;
        this.body = body;
        this.size = size;
        this.weight = weight;      
    }

    public void eat(){
        System.out.println("Animal.eat() called");
    }
    public void move(){
        System.out.println("Animal.move() called.");
    }

}
package inheritance;

public class Dog extends Animal {
    String name;

    Dog(String name){
        super("Dog", 4);
        this.name = name;
    }

    public String getType(){
        return super.getType();
    }
    public int getLimbs(){
        return super.getLimbs();
    }
    public String getName(){
        return name;
    }

}
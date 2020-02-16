package inheritance;

class Animal {
    String type;
    int limbs;
    Animal(String type, int limbs){
        this.type = type;
        this.limbs = limbs;
    } 
    public void eat(){
        System.out.println("Animal.eat() called");
    }

    public void move(){
        System.out.println("Animal.move() called");
    }

    public String getType(){
        return type;
    }

    public int getLimbs(){
        return limbs;
    }
}
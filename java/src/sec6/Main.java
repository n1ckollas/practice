public class Main{
    public static void main(String[] args){

        Car bmw = new Car();
        // bmw.model = "M5"; //if model was a public var in Car class 
        System.out.println(bmw);
        bmw.setModel("BMW");
        System.out.println(bmw);
        System.out.println(bmw.getModel());
        Calculator calculator = new Calculator();
        calculator.setFirstNumber(5.25);
        calculator.setSecondNumber(0);
        System.out.println("Division" + calculator.getDivisionResult());
        Person person = new Person();
        person.setFirstName("Nick");
        person.setLastName("Rebez");
        person.setAge(18);
        System.out.println("First Name: " + person.getFirstName());
        System.out.println("Last Name: " + person.getLastName());
        System.out.println("IS TEEN: " + person.isTeen());



    }
}
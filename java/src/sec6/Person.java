public class Person{
    private String firstName;
    private String lastName;
    private int age;
    public static void main(String[] args){
        
    }

    public String getFirstName(){
        return this.firstName;
    }
    public String getLastName(){
        return this.lastName;
    }
    public int getAge(){
        return this.age;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }
    public void setLastName(String lastName){
        this.lastName = lastName;
    }
    public void setAge(int age){
        if(age > 0 && age < 101){
            this.age = age;    
        }else{
            this.age = 0;
        }
        
    }
    public boolean isTeen(){
        System.out.println("The age is : " + this.age);
        if(this.getAge() > 12 && this.getAge() < 20){
            return true;
        } else {
            return false;
        }
    }
    public String getFullName(){
        if(this.getFirstName() == ""){
            return this.getLastName();
        }else if(this.getLastName() == ""){
            return this.getFirstName();
        }else{
            return this.getFirstName() + " " + getLastName();
        }
    }
    

}
package constchain;

public class Bank{
    public String name;
    public String state;
    public String city;
    public Account account;

    public static void main(String args[]){

    }

    Bank(){
       this("Undefined Bank", "SomeWhere", "some city", new Account());
    }
    Bank(String name){
        this(name, "undisclosed Location", "secret city", new Account());
    }
    
    Bank(String name, String state){
        this(name, state, "Hidden City", new Account());
    }

    Bank(String name, String state, String city, Account account){
        this.name = name;
        this.state = state;
        this.city = city;
        this.account = account;
    }

}
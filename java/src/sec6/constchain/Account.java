package constchain;

public class Account{
    int balance;
    String userFname;
    String userLname;
    int depositAmount;
    String state;
    public static void main(String args[]){

    }
    Account(){
        this("first Name", "Last Name", 0, "New York");
        System.out.println("Empty constructor called.");
    }
    Account(String userFname, String state) {
        this(userFname,"Default Last name", 0, state);
        System.out.println("Const with only userFname and state called.");

    }
    Account(String userFname, String userLname, int depositAmount, String state){
        this.balance = 0;
        this.userFname = userFname;
        this.userLname = userLname;
       this.depositAmount = depositAmount;
       this.state = state; 
       this.balance += depositAmount;
       System.out.println("Constructor with all argumants called");
    }
}
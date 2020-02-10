package constchain;

public class Main{
    public static void main(String args[]){
        Account Nick = new Account();

        Account Anna = new Account("Anna", "Florida");

        // Account fail = new Account("FAIL", "FLO", "FLA", 345);

        Account boris = new Account("Boris", "Yugoslavskiy", 498, "new jersey");
        Bank bofa = new Bank();
        Bank chase = new Bank("Chase", "NY", "NYC", boris);

        Train amTrack = new Train();
        
        System.out.println(amTrack.make);

    }

}
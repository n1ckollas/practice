package constchain;

public class Main{
    public static void main(String args[]){
        Account Nick = new Account();
        System.out.println(Nick.balance);

        Account Anna = new Account("Anna", "Florida");
        System.out.println(Anna.userFname);
        System.out.println(Anna.userLname);
        System.out.println(Anna.balance);
        System.out.println(Anna.state);

        // Account fail = new Account("FAIL", "FLO", "FLA", 345);

        Account boris = new Account("Boris", "Yugoslavskiy", 498, "new jersey");
        System.out.println(boris.userFname);
        System.out.println(boris.userLname);
        System.out.println(boris.balance);
        System.out.println(boris.state);

        Bank bofa = new Bank();
        System.out.println(bofa.name);        
        System.out.println(bofa.state);        
        Bank chase = new Bank("Chase", "NY", "NYC", boris);
        System.out.println(chase.account.userFname);
        System.out.println(chase.name);
        System.out.println(chase.state);
        System.out.println(chase.city);



    }

}
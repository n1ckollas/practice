class ThreeSection {
    public static void main(String args[]){
        byte bte = 127;
        short shrt = 32_767;
        int intgr = 2_147_483_647;
        long lng = 2345L;
        float flt = 5.67f;
        double dbl = 0.234d;

        char c = 'A';
        String str = "Nick";
        boolean bool = true;

        // type precdence 
        double resOne = (bte * shrt) + (intgr / flt) - (flt / dbl);
        System.out.println(resOne);
        // casting
        float resTwo = (float) resOne;
        System.out.println(resTwo);
        short result3 = (short) (shrt - bte);
        System.out.println(result3);
        
        // Array 
        int month_days [] = new int[12];
        month_days[1] = 30;
        month_days[2] = 28;
        System.out.println(month_days[2]);

        //operators and expressions

        int resultTest = 1 + 2;
        resultTest = resultTest - 1;
        System.out.println(resultTest); 
        resultTest = resultTest + 2;
        System.out.println(resultTest); 
        
        // short hand operators;
        System.out.println("Shorthand operators.");
        int rs = 3;
        System.out.println(rs);
        rs++;
        System.out.println(rs);
        rs--;
        System.out.println(rs);
        rs+= 2; 
        System.out.println(rs);
        rs-=2;
        System.out.println(rs);
        rs*=10;
        System.out.println(rs);
        rs/=3;
        System.out.println(rs);

        boolean isTrue = true;
        
        if(isTrue){
            System.out.println("isTrue true");
        }
        if(isTrue == true){
            System.out.println("yep it's true");
        }

        int ten = 10;
        if (ten > 40){
            System.out.print("not going to see this");
        }

        if(ten > 9 || ten < 40){
            System.out.println("ten is more than 9 or less than 40");
        }
        
        boolean isBool = false;

        if(!isBool){
            System.out.println("you will see this");
        }

        boolean wasB = !isBool ? true : false;

        if(wasB){
            System.out.println("i shall be visible");
        }





    }
}
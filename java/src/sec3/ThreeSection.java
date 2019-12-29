class ThreeSection {
    public static void main(String args[]){
        System.out.println("hello World");
        // primitive types

        byte b = 127;
        short s = 32_767;
        int i = 2_147_483_647; // width 32
        long l = 234L; //width 64, max val 2 ** 63
        float f = 5.67f;
        double d = .1234d;
        char c = 'A';
        String str = "Nick";
        boolean bool = true;

        // type precedence 
        float r1 = f / b;
        double r2 = (i + d) / d;

        // casting
        byte cb  = (byte) (f / b);
        System.out.println(cb);

        int ci = (int) (l * f);
        System.out.println(ci);
        
        // Array
        int month_days [] = new int[12];
        System.out.println(month_days);
        month_days[0] = 1;
        month_days[1] = 2;
        System.out.println(month_days);
        
        // operators and expressions

        int res = 1 + 2;
        System.out.println(res);
        res = res - 1;
        System.out.println(res);
        res = res * 10;
        System.out.println(res);
        res = res / 5;
        System.out.println(res);
        res = res % 3;
        System.out.println(res);
        
        // short hand expressions
        System.out.println("short hand expressions");
        res++;
        System.out.println(res);
        res--;
        System.out.println(res);
        res += 2;
        System.out.println(res);
        res *= 10;
        System.out.println(res);
        res /=3;
        System.out.println(res);
        res -=2;
        System.out.println(res);
        
        // booleans


        
        
        
        





    }
}
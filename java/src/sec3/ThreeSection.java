class ThreeSection{
    public static void main(String args[]){
        //primitive types
        byte a = 127; // width 8
        short b = 32_767; // width 16
        int c = 2_147_483_647; // width 32
        long d = 234L;// or 2  ** 63, width 64
        float f = 5.67f;
        double dbl = .1234;

        char chr = 'A'; // width 16
        String str = "My name is Nick";
        boolean bool = true;

        // type precedence
        double dbltype = (f * b) + (c / chr) - (dbl - b);
        System.out.print(dbltype);
        

    }
}
class ThreeSection {
    public static void main(String args[]){
        byte bte = 127;
        short shrt = 32_767;
        int intgr = 2_147_483_647;
        long lng = 2345L;
        float flt = 5.67f;
        double dbl = 0.234;

        char c = 'A';
        String str = "Nick";
        boolean bool = true;

        // type precdence 
        double resOne = (bte * shrt) + (intgr / flt) - (flt / dbl);
        System.out.println(resOne);
        float resTwo = (float) resOne;
        System.out.println(resTwo);
        short result3 = (short) (shrt - bte);
        System.out.println(result3);


    }
}
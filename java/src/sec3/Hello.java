class Hello {
    public static void main(String args[]){
        byte b = 42;
        char c = 'A';
        short s = 1024;
        int i = 50_000;
        float f = 5.67f;
        double d = .1234;
        double result = (f * b) + (i / c) - (d * s);
        System.out.println("result = " + result);
        int month_days [];
        month_days = new int[12];
        month_days[1] = 28;
        System.out.println(month_days[1]);
        System.out.println(month_days[0]);

    }
}
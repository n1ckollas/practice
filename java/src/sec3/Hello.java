class Hello {
    public static void main(String args[]){
        int lightspeed;
        long days;
        long distance;
        long seconds;
        
        days = 1000;
        lightspeed = 186000;
        seconds = days * 24 * 60 * 60;
        distance = lightspeed * seconds;
        System.out.println("in +" + days + " days, light will travel this distance " + distance);

    }
}
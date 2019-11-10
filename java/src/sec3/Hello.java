class Hello{
    public static void main(String args[]){
        int lightspeed;
        long days;
        long seconds;
        long distance;
        
        lightspeed = 186000;
        days = 1000;
        seconds = 60 * 60 * 24 * days;
        distance = lightspeed * seconds;

        System.out.println("in " + days);
        System.out.println("days light will travel about");
        System.out.println(distance + " miles."); 
    }
}
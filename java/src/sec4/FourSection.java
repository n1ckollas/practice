class FourSection{
    public static void main(String args[]){
        System.out.println("Hello world");
       
        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        calculateScore( gameOver, score, levelCompleted, bonus);
        score = 10000;
        levelCompleted = 8;
        bonus = 200;
        calculateScore( gameOver, score, levelCompleted, bonus);

        int calcScore = calculateScore("Tim", 500);
        System.out.println("New score is " + calcScore);
        
        calculateScore(75);

        calculateScore();

        double cm = calcFeetAndInchesToCentimeters(5, 0);
        System.out.println(cm);
        cm  = calcFeetAndInchesToCentimeters(354);
        System.out.println(cm);

    }
    public static double calcFeetAndInchesToCentimeters(int feet, int inches){
        if((feet >= 0) && (inches >= 0 && inches <= 12)){
            int totalInches = (feet * 12) + inches;
            double cm = totalInches * 2.54;
            return cm;
        }
        return -1;
        
    }
    public static double calcFeetAndInchesToCentimeters(int inches){
        if(!(inches >= 0)){
            return -1;
        }
        double cm = inches * 2.54;
        return cm;
    }

    public static int calculateScore(boolean gameOver, int score, 
    int levelCompleted, int bonus){
        if (gameOver){
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 200;
            return finalScore;
        }
        return -1;
        
    }
    // Method overloading
    public static int calculateScore(String playerName, int score){
        System.out.println("Player " + playerName + " scored "
            + score + " points ");
        return score * 1000;
    }
    public static int calculateScore(int score){
        System.out.println("Unnamed player scored " + score + " points");
        return score * 1000;
    }
    public static int calculateScore(){
        System.out.println("No player name, no player score provided");
        return 0;
    }
    
}
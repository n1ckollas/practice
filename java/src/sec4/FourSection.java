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
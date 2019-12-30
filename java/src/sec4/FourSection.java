class FourSection{
    public static void main(String args[]){
        System.out.println("Hello world");
       
        boolean gameOver = true;
        int levelCompleted = 5;
        int bonus = 100;
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
    
}
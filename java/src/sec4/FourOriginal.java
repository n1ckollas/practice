class FourOriginal{
    public static void main(String[] args){

        boolean gameOver = true;
        int score = 800;
        int levelCompleted = 5;
        int bonus = 100;

        // Methods
        calculateScore(gameOver, score, levelCompleted, bonus);
        score = 10000;
        levelCompleted = 8;
        bonus = 200;
        calculateScore(gameOver, score, levelCompleted, bonus);


        int calcScore = calculateScore("Tim", 500);
        System.out.println("New score is " + calcScore);

        calculateScore(75);

        calculateScore();

        double centimeters = calcFeetAndInchesToCentimeters(6,0);
        if(centimeters <0.0) {
            System.out.println("Invalid parameters");
        }

        calcFeetAndInchesToCentimeters(157);


        // Create a method called calcFeetAndInchesToCentimeters
        // It needs to have two parameters.
        // feet is the first parameter, inches is the 2nd parameter
        //
        // You should validate that the first parameter feet is >= 0
        // You should validate that the 2nd parameter inches is
        // >=0 and <=12
        // return -1 from the method if either of the above is not true
        //
        // If the parameters are valid, then calculate how many centimetres
        // comprise the feet and inches passed to this method and return
        // that value.
        //
        // Create a 2nd method of the same name but with only one parameter
        // inches is the parameter
        // validate that its >=0
        // return -1 if it is not true
        // But if its valid, then calculate how many feet are in the inches
        // and then here is the tricky part
        // call the other overloaded method passing the correct 
        // feet and inches
        // calculated so that it can calculate correctly.
        // hints: Use double for your number datatypes is 
        // probably a good idea
        // 1 inch = 2.54cm  and one foot = 12 inches
        // use the link I give you to confirm your 
        // code is calculating correctly.
        // Calling another overloaded method just requires you to use the
        // right number of parameters.

    }

    public static void displayHighScorePosition(String playerName, 
    int highScorePosition) {
        System.out.println(playerName + " managed to get into position "
                + highScorePosition + " on the high score table");
    }

    public static int calculateHighScorePosition(int playerScore) {

        int position = 4;  // assuming position 4 will be returned

        if(playerScore >= 1000) {
            position = 1;
        } else if(playerScore >= 500) {
            position = 2;
        } else if(playerScore >= 100) {
            position = 3;
        }

        return position;
    }

    public static int calculateScore(boolean gameOver,int score, 
    int levelCompleted, int bonus) {

        if(gameOver) {
            int finalScore = score + (levelCompleted * bonus);
            finalScore += 2000;
            return finalScore;
        }

        return -1;

    }
    public static double calcFeetAndInchesToCentimeters(double feet, 
    double inches) {

        if((feet <0) || ((inches <0) || (inches >12))) {
            System.out.println("Invalid feet or inches parameters");
            return -1;
        }

        double centimeters = (feet * 12) * 2.54;
        centimeters += inches * 2.54;
        System.out.println(feet + " feet, " + inches 
        + " inches = " + centimeters + " cm");
        return centimeters;
    }

    public static double calcFeetAndInchesToCentimeters(double inches) {

        if(inches < 0) {
            return -1;
        }

        double feet = (int) inches / 12;
        double remainingInches = (int) inches % 12;
        System.out.println(inches + " inches is equal to " 
        + feet + " feet and " + remainingInches + " inches");
        return calcFeetAndInchesToCentimeters(feet, remainingInches);
    }

    public static int calculateScore(String playerName, int score) {
        System.out.println("Player " + playerName + " scored " 
        + score + " points");
        return score * 1000;
    }

    public static int calculateScore(int score) {
        System.out.println("Unnamed player scored " + score + " points");
        return score * 1000;
    }

    public static int calculateScore() {
        System.out.println("No player name, no player score.");
        return 0;
    }
}
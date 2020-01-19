public class Calculator{
    private double firstNumber;
    private double secondNumber;
    public static void main(String[] args){

    }

    public double getFirstNumber(){
        return this.firstNumber;
    }
    public double getSecondNumber(){
        return this.secondNumber;
    }
    public void setFirstNumber(double number){
        this.firstNumber =(double) number;
    }
    public void setSecondNumber(double number){
        this.secondNumber = (double) number;
    }
    public double getAdditionResult(){
        return this.getFirstNumber() + this.getSecondNumber();
    }
    public double getSubtractionResult(){
        return this.getFirstNumber() - this.getSecondNumber();
    }
    public double getMultiplicationResult(){
        return this.getFirstNumber() * this.getSecondNumber();
    }
    public double getDivisionResult(){
        if(this.getSecondNumber() != 0){
            return this.getFirstNumber() / this.getSecondNumber();
        } else {
            return 0.0;
        }
    }


}
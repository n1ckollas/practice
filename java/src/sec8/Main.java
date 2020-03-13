public class Main{
    public static void main(String[] args){
        int[] myIntArray = new int[10];
        // myIntArray[0] = 1;

        int[] intArray2 = { 1,2,3,4,5,6,7,8,9,10};

        for(int i=0; i < myIntArray.length; i++){
            myIntArray[i] = intArray2[i] * 2;
        }
        for(int i=0; i < myIntArray.length; i++){
            System.out.println("Element i in myIntAray" + i + ",  value is " + myIntArray[i]);
            System.out.println("Element i in intArray" + i + ",  value is " + intArray2[i]);
            System.out.println("--------------------------------------------------------");
        }
    }
}

public class Hello{
   public static void main(String[] args){
        System.out.println("Hello, Nick");
        int myFirstNum = 5; // 32 bits hense the width of 32

        System.out.println(myFirstNum);
        System.out.println("whatever");
        int mySecondNum = (10 + 5) + (2 * 10);
        System.out.println(mySecondNum);
        int myThirdNum = 6;
        int myTotal = myFirstNum + mySecondNum + myThirdNum;
        System.out.println(myTotal);
        int myLastOne = myTotal - 1000;
        System.out.println(myLastOne);

        // Primiteve types
        int myMinIntValue = Integer.MIN_VALUE;
        int myMaxIntValue = Integer.MAX_VALUE;
        System.out.println(myMinIntValue);
        System.out.println(myMaxIntValue);
        System.out.println("MyMax overflowed" + (myMaxIntValue + 1));
        // if you designate it directly

        int myMax = 2_147_483_647;

        // Bytes short long and width
        byte myByteMax = Byte.MAX_VALUE; // 8 bits hense the width of 8
        byte myByteMin = Byte.MIN_VALUE;
        System.out.println("myByteMax");
        System.out.println(myByteMax);
        System.out.println("myByteMin");
        System.out.println(myByteMin);

        short myShortMax = Short.MAX_VALUE; // 16 bits  => width of 16
        short myShortMin = Short.MIN_VALUE;

        System.out.println(myShortMax);
        System.out.println(myShortMin);

        long mylongVal = 100L; // 64 bits => width of 64

        long myLongMax = Long.MAX_VALUE;
        long myLongMin = Long.MIN_VALUE;
        System.out.println(myLongMax);
        System.out.println(myLongMin);

        // casting

        byte myNewByteValue = (byte) (myByteMin / 2);
        System.out.println(myNewByteValue);

        short myNewShortValue = (short) (myShortMax / 2);
        System.out.println(myNewShortValue);

        // floating numbers

        float myMinfloatVal = Float.MIN_VALUE;
        float myMaxfloatVal = Float.MAX_VALUE;
        System.out.println("myMinfloatVal => " + myMinfloatVal);
        System.out.println("myMaxfloatVal => " + myMaxfloatVal);

        double myMindoubleVal = Double.MIN_VALUE;
        double myMaxdoubleVal = Double.MAX_VALUE;
        System.out.println("myMindoubleVal => " + myMindoubleVal);
        System.out.println("myMaxdoubleVal => " + myMaxdoubleVal);

        System.out.println("myMindoubleVal > myMinfloatVal");
        System.out.println(myMindoubleVal > myMinfloatVal);
        
        System.out.println(myMaxdoubleVal);
        int myIntValue = 5 / 3;
        float myFloatValue = (float) 5 / (float) 3;
        float myFloatVal2 = 5f / 3f;
        double myDoubleValue = 5d / 3d;

        System.out.println("invalue = " + myIntValue);
        System.out.println("float val = " + myFloatValue);
        System.out.println("float val2 = " + myFloatVal2);
        System.out.println("my Double val = " + myDoubleValue);
        double pounds = 200d;
        double kilos = pounds * 0.45359237d;
        System.out.println(kilos);

        // Char and Boolean
        char myChar = 'D'; // You can only store a single character
        char myNumChar = (char) 65; // char occupies 2 bytes or 16 bits in memory hence its 16 bits;
        char myDchar = (char) '\u0044';
        System.out.println(myDchar);
        System.out.println(myNumChar);

        boolean myTrueVal = true;
        boolean myFalseVal = false;
        
        boolean isCustomerOver21 = true;
        
        // String DAta Types and primitives recap


        // byte
        // short
        
        // int
        // long
        
        // float
        // double
        
        // char
        // boolean
        
       String myString = "This is a string";
       System.out.println("myString is equal to " + myString); 
       myString = myString + "\u00A9 2019";
       System.out.println(myString);
       System.out.println("String plus an integer" + (int) 52);

        // Operators.
                


   }
}
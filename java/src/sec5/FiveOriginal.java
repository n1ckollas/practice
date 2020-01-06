class FiveOriginal{
    public static void main(String[] args){
        int switchVal = 4;

        switch(switchVal){
            case 1:
                System.out.println("The value is 1");
                break; 
                // break statement must be present at all times.
                // coment it out and see that case 1 AND case 2 will run.
            case 2:
                System.out.println("the value is 2 ");
                break;
            case 3:
                System.out.println("teh value is 3 ");
                break;
            case 4:
                System.out.println("the value is 4");
                break;
            default:
                System.out.println("the value is out of range");
                break;
        }

        // Cahllenge

        char testChar = 'C';

        switch(testChar){
            case 'A':
                System.out.println("it's an A");
                break;
            case 'B':
                System.out.println("it's a B");
                break;
            case 'C':
                System.out.println("it's a C");
                break;

            default:
                System.out.println("i do not know what it is");
                break;
        }

            printNumberInWord(4);
            System.out.println(isLeapYear(-1600));
            System.out.println(isLeapYear(1600));
            System.out.println(isLeapYear(2017));
            System.out.println(isLeapYear(2000));

            // for loop
            

        }
        public static void printNumberInWord(int param){
            switch(param){
                case 0:
                    System.out.println("ZERO");
                    break;
                case 1:
                    System.out.println("ONE");
                    break;
                case 2:
                    System.out.println("TWO");
                    break;
                case 3:
                    System.out.println("THREE");
                    break;
                case 4:
                    System.out.println("FOUR");
                    break;
                case 5:
                    System.out.println("FIVE");
                    break;
                case 6:
                    System.out.println("SIX");
                    break;
                case 7:
                    System.out.println("SEVEN");
                    break;
                case 8:
                    System.out.println("EIGHT");
                    break;
                case 9:
                    System.out.println("NINE");
                    break;
                default:
                    System.out.println("OTHER");
                    break;
            }
            
        }
        public static boolean isLeapYear(int year){
            if(year < 1 || year > 9999){
                return false;
            }
            if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
                return true;
            }
            return false;
        }
        public static int getDaysInMonth(int month, int year){
            if((month < 1 || month > 12) || (year < 1 || year > 9999)){
                return -1;
            }
            boolean isLeap = isLeapYear(year);
            int febDays = isLeap ? 29 : 28;

            switch(month){
                case 1:
                    return 31;
                case 2:
                    return febDays;
                case 3:
                    return 31;
                case 4:
                    return 30;
                case 5:
                    return 31;
                case 6:
                    return 30;
                case 7:
                    return 31;
                case 8:
                    return 31;
                case 9:
                    return 30;
                case 10:
                    return 31;
                case 11:
                    return 30;
                case 12:
                    return 31;
                default:
                    return -1;
            }
        }
        // For loop



    }
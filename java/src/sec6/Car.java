public class Car{
    private int doors;
    private int wheels;
    private String model;
    private String engine;
    private String colour;
    public static void main(String args[]){
    }

    public void setModel(String model){
        String validModel = model.toLowerCase();
        if(validModel.equals("bmw") || validModel.equals("volga")){
            this.model = model;
        } else {
            this.model = "Unknown"; 
        }
    }
    public String getModel(){
        return this.model;
    }
}
public class Floor {
    private double width;
    private double length;
    public static void main(String args[]){

    }
    public Floor(double width, double length){
        this.setWidth(width);
        this.setLength(length);
    }
    
    public double getArea(){
        return width * length;
    }
    public void setWidth(double width){
        this.width = width < 0 ? 0 : width;
    }
    public void setLength(double length){
        this.length = length < 0 ? 0 : length;
    }



}
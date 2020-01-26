public class Point {
    private int x;
    private int y;

    public static void main(String args[]){
        
    }
    public Point(){
        this(0,0);
    }
    public Point(int x, int y){
        this.setX(x);
        this.setY(y);
    }

    public void setX(int x){
        this.x = x;
    }
    public void setY(int y){
        this.y = y;
    }
    public int getY(){
        return this.y;
    }
    public int getX(){
        return this.x;
    }
    public double distance(){
        int x = 0;
        int y = 0;
        double toSquare = (double) ((x - getX()) * (x - getX())) + ((y - getY()) * (y - getY()));
        return Math.sqrt(toSquare);
    }
    public double distance(int x, int y){
        double toSquare = (double) ((x - getX()) * (x - getX())) + ((y - getY()) * (y - getY()));
        return Math.sqrt(toSquare);
    }
    public double distance(Point point){
        int x = point.getX();
        int y = point.getY();
        double toSquare = (double) ((x - getX()) * (x - getX())) + ((y - getY()) * (y - getY()));
        return Math.sqrt(toSquare);
    }
}
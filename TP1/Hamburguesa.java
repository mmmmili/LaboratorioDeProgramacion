package TP1;

public class Hamburguesa {
    private double precio;
    private String descripcion;


    public Hamburguesa(){
        precio =100;
        descripcion= "una hamburguesa";

    }

    public void setPrecio(double p){
        precio +=p;
    }

    public void setDescripcion(String d){
        descripcion+=d;
    }

    public double getPrecio(){
        return precio;
    }

    public String getDescripcion(){
        return descripcion;
    }

    
    public void armarHamburguesa(){
        precio = 10;
        descripcion= "2 panes y 1 carne";

    }
}

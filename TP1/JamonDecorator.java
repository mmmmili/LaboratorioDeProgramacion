package TP1;
//clase que añade jamon a la hamburguesa
public class JamonDecorator extends HamburguesaDecorator{
    //esta clase hereda el constructor de HamburguesaDecorador
    private double precio = 15;
    private String descripcion = ", jamon";

    public JamonDecorator(Hamburguesa hamburguesa){
        //inicializar el objeto hamburguesa
        super(hamburguesa);
        hamburguesa.aumentarPrecio(precio);
        hamburguesa.setDescripcion(descripcion);
    }
    public void aumentarPrecio(double p){
        hamburguesa.aumentarPrecio(p);
    }
    public void setDescripcion(String d){
        hamburguesa.setDescripcion(d);
    }
    public double getPrecio(){
        return hamburguesa.getPrecio() + precio;
    }
    public String getDescripcion(){
        return hamburguesa.getDescripcion() + descripcion;
    }

    public String toString(){
        return hamburguesa.toString();
    }

}


package TP1;
//clase que añade queso a la hamburguesa
public class QuesoDecorator extends HamburguesaDecorator{
    //esta clase hereda el constructor de HamburguesaDecorador
    private double precio = 11;
    private String descripcion = ", queso";

    public QuesoDecorator(Hamburguesa hamburguesa){
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

}

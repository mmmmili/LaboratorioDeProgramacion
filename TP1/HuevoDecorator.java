package TP1;
//clase que añade huevo a la hamburguesa
public class HuevoDecorator extends HamburguesaDecorator{
    //esta clase hereda el constructor de HamburguesaDecorador
    private double precio = 30;
    private String descripcion = ", huevo";

    public HuevoDecorator(Hamburguesa hamburguesa){
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

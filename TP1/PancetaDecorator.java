package TP1;
//clase que añade panceta a la hamburguesa
public class PancetaDecorator extends HamburguesaDecorador{
    //esta clase hereda el constructor de HamburguesaDecorador
    private double precio=40;
    private String descripcion= " panceta ";

    public PancetaDecorator(Hamburguesa hamburguesa){
        //inicializar el objeto hamburguesa
        super(hamburguesa);
        hamburguesa.setPrecio(precio);
        hamburguesa.setDescripcion(descripcion);

    }

    public void setPrecio(double p){

    }
    public void setDescripcion(String d){

    }
    public double getPrecio(){
        return hamburguesa.getPrecio() + precio;
    }
    public String getDescripcion(){
        return hamburguesa.getDescripcion() + descripcion;
    }

}

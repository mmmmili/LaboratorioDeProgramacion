package TP1;
//clase que añade queso a la hamburguesa
public class QuesoDecorator extends HamburguesaDecorador{
    //esta clase hereda el constructor de HamburguesaDecorador
    private double precio = 11;
    private String descripcion = ", queso ";

    public QuesoDecorator(Hamburguesa hamburguesa){
        //inicializar el objeto hamburguesa
        super(hamburguesa);
        hamburguesa.setDescripcion(descripcion);
        hamburguesa.setPrecio(precio);

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

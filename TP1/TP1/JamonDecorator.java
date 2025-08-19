package TP1;
//clase que añade jamon a la hamburguesa
public class JamonDecorator extends HamburguesaDecorador{
    //esta clase hereda el constructor de HamburguesaDecorador
    private double precio;
    private String descripcion;

    public JamonDecorator(Hamburguesa hamburguesa){
        //inicializar el objeto hamburguesa
        super(hamburguesa);
        precio = 60;
        descripcion = ", jamon";

    }
    //metodo que añade queso
    public void agregarIngrediente(Hamburguesa h){

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


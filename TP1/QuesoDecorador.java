import TP1.Hamburguesa;

//clase que añade queso a la hamburguesa
public class QuesoDecorador extends HamburguesaDecorador{
    //esta clase hereda el constructor de HamburguesaDecorador
    public QuesoDecorador(Hamburguesa hamburguesa){
        //inicializar el objeto hamburguesa
        super(hamburguesa);
    }
    //metodo que añade queso
    public void agregarIngrediente(){
        
    }

}

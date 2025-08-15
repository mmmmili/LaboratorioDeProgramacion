
//clase abstracta decorator principal
public abstract class HamburguesaDecorador extends Hamburguesa{
    //el elemento que vamos a "decorar"
    protected Hamburguesa hamburguesa;
    
    //constructor
    public HamburguesaDecorador(Hamburguesa h ){
        hamburguesa=h;
    }

    //metodo que utilizan los diferentes decorators
    public void agregarIngrediente(Hamburguesa h){

        //falta implementar en hamburguesaSimple este metodo
        //this.hamburguesa.agregarIngrediente(s);

    }
}

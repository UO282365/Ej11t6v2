class Ejercicio11{
    constructor(){

    }


    initMap() {
        var centro = { lat: 40.416895133420645, lng: -3.703282134664379 };//el centro por defecto esta en el km0 en madrid
        this.mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('main')[0], {//crea el mapa dinámico
            zoom: 5,
            center: centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    }

    mostrar(){
        var a = document.getElementsByTagName("input")[0].value;
        var b = document.getElementsByTagName("input")[1].value;

        if(!isNaN(parseFloat(a)) && !isNaN(parseFloat(b)) ){
            let infoWindow = new google.maps.InfoWindow;
            var pos = {
                lat: parseFloat(a),
                lng: parseFloat(b)
            };
            infoWindow.setPosition(pos);//seteamos la posicion
            infoWindow.open(this.mapaGeoposicionado);
        }


    }

}
var ej11 = new Ejercicio11();
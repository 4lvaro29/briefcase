import { Component, OnInit, Input } from '@angular/core';
import {WorksService} from '../../services/works.service'
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/services/config';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],

})
export class WorksComponent implements OnInit {
  public api_url:string=API_URL;
  public sliderImageWidth: Number = 450;
  public sliderImageHeight: Number = 300;
  

  uxUiWorks: Array<object> = [{
    video: 'https://4lvaro.s3.amazonaws.com/book/rebuild/rebuild-final.mp4',
    posterImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/lista+de+obras+y+su+info+%2B+reserva.png',
    title: 'Rebuild Prototype'
  },{
    image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Login.png',
    thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Login.png',
    alt: 'login',
    title: 'Rebuild Login'
}, {
    image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Signup.png', // Support base64 image
    thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Signup.png', // Support base64 image
    title: 'Signup', //Optional: You can use this key if want to show image with title
    alt: 'Signup' //Optional: You can use this key if want to show image with alt
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/index-materiales.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/index-materiales.png',
  title: 'Index Materiales',
  alt:'Materiales'
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/lista+de+obras+y+su+info+%2B+reserva.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/lista+de+obras+y+su+info+%2B+reserva.png',
  title: 'Obras',
  alt:'lista'
},{
  image:'https://4lvaro.s3.amazonaws.com/book/rebuild/Busqueda+autocompletada.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Busqueda+autocompletada.png',
  title: 'Búsqueda',
  alt: 'Busqueda'
},{
  image:'https://4lvaro.s3.amazonaws.com/book/rebuild/filtro-ubicacion-sin-material.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/filtro-ubicacion-sin-material.png',
  title: 'Ubicación de material',
  alt: 'Ubicación'
},{
  image:'https://4lvaro.s3.amazonaws.com/book/rebuild/cargar+factura.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/cargar+factura.png',
  title: 'Cargar factura',
  alt: 'Carga'
}, {
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/cargar+factura+%E2%80%93+3.png',
  thumbImage:'https://4lvaro.s3.amazonaws.com/book/rebuild/cargar+factura+%E2%80%93+3.png',
  title:'Asociation',
  alt:'Asociar',
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Dashboard+%E2%80%93+env%C3%ADo-correo.png',
  thumbImage:'https://4lvaro.s3.amazonaws.com/book/rebuild/Dashboard+%E2%80%93+env%C3%ADo-correo.png',
  title:'Dashboard',
  alt:'Dashboard',
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Dashboard+%E2%80%93+3.png',
  thumbImage:'https://4lvaro.s3.amazonaws.com/book/rebuild/Dashboard+%E2%80%93+3.png',
  title:'Sending Dashboard',
  alt:'Sending',
}

];

responsiveWorks: Array<object> = [{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+1.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+1.png',
  title: 'login responsive'
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+2.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+2.png',
  alt: 'Signup',
  title: 'Rebuild Signup'
}, {
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+3.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+3.png',
  alt: 'Index of materials',
  title: 'Index'
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+4.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+4.png',
  alt: 'Filter',
  title: 'Filter'
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+5.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+5.png',
  alt: 'Auto complete search ',
  title: 'search'
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+6.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+6.png',
  alt: 'Dashboard',
  title: 'Dashboard'
},{
  image: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+7.png',
  thumbImage: 'https://4lvaro.s3.amazonaws.com/book/rebuild/Responsive/iPhone+6-7-8+%E2%80%93+7.png',
  alt: 'Request material',
  title: 'Request'
}

];

brandWorks:Array<object>=[
  {
    image:'https://4lvaro.s3.amazonaws.com/book/logo.png',
    thumbImage:'https://4lvaro.s3.amazonaws.com/book/logo.png',
    title: 'Abeja negra logo',
    alt:'Logo'
  },{
    image:'https://4lvaro.s3.amazonaws.com/book/etiquetado_detalle_producto.jpg',
    thumbImage:'https://4lvaro.s3.amazonaws.com/book/etiquetado_detalle_producto.jpg',
    title: 'Label',
    alt:'Label'
  },{
    image:'https://4lvaro.s3.amazonaws.com/book/envase2_abeja_negra.jpg',
    thumbImage:'https://4lvaro.s3.amazonaws.com/book/envase2_abeja_negra.jpg',
    title: 'Labelled Bottle',
    alt:'Label'
  },{
    image:'https://4lvaro.s3.amazonaws.com/book/MockUp_ABEJA_NEGRA2.jpg',
    thumbImage:'https://4lvaro.s3.amazonaws.com/book/MockUp_ABEJA_NEGRA2.jpg',
    title: 'Second option',
    alt:'Second'
  }
]
  
  constructor(private worksService: WorksService,
    private http: HttpClient) { }

  ngOnInit() {
    
  }

  

}

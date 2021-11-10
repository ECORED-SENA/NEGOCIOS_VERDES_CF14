<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ventas

    p.mb-5(data-aos="flip-up") Las ventas son las ocupaciones llevadas a cabo para incentivar potenciales consumidores a hacer una cierta compra. El término de ventas es bastante extenso, pero fundamentalmente se basa en el acto de negociación en el que una sección es el vendedor y la otra el cliente (Rdstation, 2020).

    img.img-a.mb-5(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        h5 Las ventas forman parte de la sociedad desde hace un largo tiempo y pueden considerarse como una de las profesiones más viejas de todo el mundo.
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p Vender es una práctica muy antigua, inclusive más que la invención de la moneda, pues los individuos negociaban un producto por otro. A esto, se le conoce como intercambio, por ejemplo, canjeaban un kilogramo de maíz por uno de algodón. A continuación se indican algunas pautas para hacer una venta. 

    img.img-a.mb-5(src='@/assets/curso/tema_3/img_2.svg', alt='Texto que describa la imagen')(data-aos="flip-up")

    p.mb-5 Un proceso de ventas es nada más que un modelo de normas, actividades y ocupaciones usadas por el área comercial y debe contener las siguientes características:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        p.BorTit Proceso de ventas
        img.img-a(src='@/assets/curso/tema_3/img_3.png', alt='Texto que describa la imagen')
      .col-lg-5.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_3/img_4.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="flip-up") 
      strong El proceso tiene las fases necesarias para convertir las oportunidades en una venta, desde que se genera un lead hasta que se concluye el negocio. Todos los procesos de venta no son iguales ni siguen las mismas etapas, dependen del tipo de negocio; a continuación, se presenta un ejemplo: 

    .tarjeta.color-secundario.px-5.py-3.mb-5
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema_3/img_23.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Etapas de una venta
              p.text-small Clasificación de las etapas de una venta.
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/EtapasVenta.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


    separador
    #t_3_1.titulo-segundo(data-aos="flip-up")
      .h2 3.1 Preventa

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_3/img_5.png', alt='Texto que describa la imagen')
      .col-lg-6(data-aos="slide-right")
        p La preventa es una metodología que posibilita una más grande incorporación en medio de las ventas y el #[i marketing]. En ella se adoptan #[strong tácticas que guían al consumidor] a que se encuentre preparado para mercar el producto y/o servicio. Este proceso es nuevo y ha ido cambiando el enfoque de las organizaciones, de los clientes que ya permanecen y de los que todavía no. La finalidad es #[i prepararlos y dejarlos listos para la compra] para que la compañía tenga un nuevo público que pasaba inadvertido. Por consiguiente, las tácticas de preventa no se centran en dar productos y servicios, sino en #[strong atraer a los consumidores] que, en el futuro, serán abordados por los accesorios de ventas.

    p.mb-5(data-aos="flip-up") En una preventa se está comprando un producto antecedente de su día de lanzamiento; todo artículo que se encuentre en preventa debe contar con una fecha de presentación. Estos productos se enviarán el día de lanzamiento o ciertos días previamente para que el comprador los reciba el día de su salida. A continuación, se expone un ejemplo de preventa. 

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_3/img_6.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.tarj_txt Todo artículo que esté en precomercialización se puede apartar con $200 mandando un mensaje a nuestra página de Facebook de Flip a Coin.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_3/img_7.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Si se aparta un producto con avance de $200 como se mencionó en el punto anterior,  no se regresará el adelanto en caso de no liquidar el producto para la fecha límite que se le indicó anteriormente por mensaje en la página de Facebook.
      .col-sm-6.col-xl-3.mb-4.mb-sm-0.tarj_txt
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_3/img_8.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.tarj_txt En caso de que el lote de productos se recorte, se enviarán las directivas en orden como fueron desarrolladas, o sea que los primeros que hicieron su precomercialización serán los primeros en recibirla hasta agotar existencias.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-5(:style="{'background-image': `url(${require('@/assets/curso/tema_3/img_9.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Se puede reservar el derecho de cancelar cualquier orden en cualquier instante, si una orden debe ser cancelada se le comunicará  al comprador por correspondencia electrónico y se le regresará el total de su orden.

    p.mb-5 Las tácticas de preventa son las que se utilizan antes de la comercialización para dirigir al consumidor y prepararlo para mercar un producto o servicio. Esta metodología posibilita una gran unión en medio de las ventas y el #[i marketing], y su propósito es dejar al comprador preparado (lead) para la compra. En seguida, se enumeran ciertos componentes fundamentales que se deben realizar en un plan de preventa exitosa.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Prospección de consumidores")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Prospección de consumidores
            p Debe hacerse con gran cuidado y atención para identificar que estará en contacto con los consumidores, además de contar con  tácticas apropiadas y efectivas.
        
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_3/img_10.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Buena atención al comprador")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Buena atención al comprador
            p Pertenece a los pilares más relevantes de la preventa. A lo largo de este proceso se tratará con personas que poseen el potencial de transformarse en consumidores, pero que todavía permanecen investigando y pensando en la mejor solución, por eso es importante tener un buen trato y atención con ellos.
        
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_3/img_11.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Conversión")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Conversión
            p Esto pasa una vez la compañía alcanza la satisfacción del comprador y dicha persona se convierte en un lead cualificado. Aquí es donde acaba el trabajo de preventa se inicia el trabajo de ventas.
        
          .col-md-6
            figure
              img.img-a(src='@/assets/curso/tema_3/img_12.png', alt='Texto que describa la imagen')
    
    p.mb-5 Las funciones de  preventa son las propuestas que hace el equipo comercial para el cliente y presentan el producto o servicio. Además, ayuda a los comerciales a “definir la necesidad técnica” del cliente por el producto, estas funciones son:  

    TabsA.color-acento-contenido.mb-5(data-aos="flip-up")    
      .tarjeta.color-acento-botones.p-4(titulo="Objetivo")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/tema_3/img_13.png', alt='Texto que describa la imagen')
          .col-lg-8
            h5 Objetivo
            p Se refiere a manejar la compostura y la buena relación con los compradores potenciales ofreciendo productos que cubran sus necesidades.
      .tarjeta.color-acento-botones.p-4(titulo="Habilidad")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/tema_3/img_14.png', alt='Texto que describa la imagen')
          .col-lg-8
            h5 Habilidad
            p Un proceso muy destacado de la preventa es la manera de presentar su documentación, presentado de manera hábil el producto o servicio a ofrecer.
      .tarjeta.color-acento-botones.p-4(titulo="Confianza")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/tema_3/img_15.png', alt='Texto que describa la imagen')
          .col-lg-8
            h5 Confianza
            p La finalidad es entablar la confianza y la buena interacción con los consumidores potenciales, mostrando que se está cubriendo sus necesidades y requisitos técnicos.
      .tarjeta.color-acento-botones.p-4(titulo="Capacidad")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/tema_3/img_22.png', alt='Texto que describa la imagen')
          .col-lg-8
            h5 Capacidad
            p Una sección bastante fundamental de la preventa es la forma de idear la información, debido a que se posee experiencia en el ámbito exclusivo del producto o servicio a dar.
      .tarjeta.color-acento-botones.p-4(titulo="Datos sobre el producto")
        .row.justify-content-center.align-items-center
          .col-lg-3
            img(src='@/assets/curso/tema_3/img_16.png', alt='Texto que describa la imagen')
          .col-lg-8
            h5 Datos sobre el producto
            p Por naturaleza, cada una de las propiedades y especificaciones del artículo se resaltan y se aclaran en la página web del distribuidor.

    separador
    #t_3_2.titulo-segundo(data-aos="flip-up")
      .h2 3.2 Estrategias de ventas

    p.mb-5(data-aos="flip-up") Tener un plan de ventas no significa optar por un exclusivo modo de vender los productos. Entonces, #[strong ¿a qué se refiere exactamente una vez que se habla de un plan de ventas?] Existen dos tipos principales de estrategias de ventas: #[i inbound] y #[i outbound]. A continuación, se muestran cada una de ellas:

    .tarjeta--container.text-white.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/tema_3/img_17.png', alt='Texto que describa la imagen')
          
        h2.text-center Táctica de comercialización #[i inbound]
        p.text-center En esta clase de táctica comercial, un potencial comprador llega a la tienda por medio de otro tipo de canal que no precisamente está conectado con el negocio. Por ejemplo si un cliente encuentra la tienda por medio de Facebook y dictamina entrar en contacto con el vendedor, se puede desplegar la posibilidad de una secuencia de actividades que ayudarán a convertirlo es un comprador para el negocio.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.img-a(src='@/assets/curso/tema_3/img_18.png', alt='Texto que describa la imagen')
          
        h2.text-center Táctica de comercialización #[i outbound]
        p.text-center A diferencia del #[i inbound], en un plan de comercialización #[i outbound]  se va en busca del comprador. Un plan de ventas de esta clase principalmente implica una inversión fundamental en canales y herramientas como el #[i email marketing], las redes sociales y la comunicación telefónica o vocal por medio de  herramientas como Skype o #[i Voicemail]

    p.mb-5(data-aos="flip-up") La mayor relevancia para que una interacción comercial sea fructífera y productiva, para los consumidores y los proveedores, es la claridad y transparencia en las condiciones de comercialización en el instante de la negociación y que sirven como guía para la solución de inquietudes y posibilitan un claro conocimiento entre el usuario y los representantes, logrando así  implantar una admirable interacción comercial, es por ello que es clave ser transparente con el cliente en los siguientes ítems: 

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_3/img_19.png', alt='Texto que describa la imagen')
      .col-lg-4(data-aos="slide-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Condiciones de venta. 

          li 
            .lista-ol--cuadro__vineta
              span b
            | Pedidos.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Precios.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Cupos de crédito.
          li 
            .lista-ol--cuadro__vineta
              span e
            | Garantía.
          li 
            .lista-ol--cuadro__vineta
              span f
            | Condiciones de pago.
          li 
            .lista-ol--cuadro__vineta
              span g
            | Despachos.
          li 
            .lista-ol--cuadro__vineta
              span h
            | Fletes.

    separador
    #t_3_3.titulo-segundo(data-aos="flip-up")
      .h2 3.3 Cierre de venta

    p.mb-5 La finalidad del cierre es llegar a un acuerdo en la venta y debe hacerse en forma segura y con firmeza, y para que sea aceptada debe satisfacer las necesidades de la otra parte. Existen dos tipos de cierre:

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row.justify-content-center.align-items-center.bg07.mb-5.p-4(data-aos="slide-right")
          .col-lg-3.mb-4.mb-lg-0
            img.img-a.mb-2(src='@/assets/curso/tema_3/img_20.png', alt='Texto que describa la imagen')
          .col-lg-8.mb-4.mb-lg-0
            h5.mb-0 Cierre por concesión
            p.mb-0 Es la manera más recurrente en las negociaciones; equivale a finalizar la etapa de venta ofertando un bien para conseguir un pacto.
        .row.justify-content-center.align-items-center.bg07.mb-5.p-4(data-aos="slide-left")
          .col-lg-3.mb-4.mb-lg-0
            img.img-a.mb-2(src='@/assets/curso/tema_3/img_21.png', alt='Texto que describa la imagen')
          .col-lg-8.mb-4.mb-lg-0
            h5.mb-0 Cierre con resumen
            p.mb-0 En este cierre es importante tomarse un tiempo para resumir todos los beneficios de un producto y los principales puntos de valor que le aportaría al cliente potencial. También se puede usar para hacer distinciones entre dos o tres opciones posibles que está ofreciendo, para ayudar a recordarle al cliente potencial cuáles son todas sus opciones.

    separador
    #t_3_4.titulo-segundo(data-aos="flip-up")
      .h2 3.4 Postventa

    p.mb-5(data-aos="flip-up") La postventa es la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades. A continuación, se presenta en qué consiste la posventa: 

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/uBtd3thr7BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

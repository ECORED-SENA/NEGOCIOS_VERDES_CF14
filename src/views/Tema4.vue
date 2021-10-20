<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 #[i Neuromarketing]

    .row.justify-content-center.mb-5 
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left")
        .bloque-texto-d.color-acento-botones.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Se define como el conocimiento que estudia la manera en la que se reacciona a las actividades de venta y la forma como se comportan los consumidores. Es decir, la reacción del cerebro antes, durante y después de la compra.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
          .h5.mb-0 Núñez, 2021
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_4/img_1.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="flip-up") Desde la perspectiva de un profesional de la publicidad o el #[i marketing], el #[i neuromarketing] puede:

    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="flip-up")
        img.mb-3(src='@/assets/curso/tema_4/img_2.png', alt='Texto que describa la imagen')
        p Atraer  la atención de los clientes a través de la publicidad. 
      .col-lg-3.mb-4.mb-lg-0(data-aos="flip-up")
        img.mb-3(src='@/assets/curso/tema_4/img_3.png', alt='Texto que describa la imagen')
        p Comunicar emociones en publicidad. 
      .col-lg-3.mb-4.mb-lg-0(data-aos="flip-up")
        img.mb-3(src='@/assets/curso/tema_4/img_4.png', alt='Texto que describa la imagen')
        p Mostrar los productos en el momento adecuado.
      .col-lg-3.mb-4.mb-lg-0(data-aos="flip-up")
        img.mb-3(src='@/assets/curso/tema_4/img_5.png', alt='Texto que describa la imagen')
        p Mantener el producto en el imaginario colectivo. 

    p.mb-5(data-aos="flip-up") El #[i neuromarketing] es el estudio formal de las respuestas del cerebro a la publicidad y la marca, y el ajuste de esos mensajes en función de la retroalimentación para obtener respuestas aún mejores. Los investigadores utilizan tecnologías como la resonancia magnética funcional y la electroencefalografía para medir tipos específicos de actividad cerebral en respuesta a mensajes publicitarios. Con esta información, las empresas aprenden por qué los consumidores toman las decisiones que toman y qué partes del cerebro los motivan a hacerlo. Los ejemplos de #[i neuromarketing] pueden incluir:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img.img-a(src='@/assets/curso/tema_4/img_6.png', alt='Texto que describa la imagen')

      .tarjeta.bg02.p-3(x="57%" y="21%")
        p Seguimiento del movimiento de los ojos para ver qué partes de una página web captan primero la atención del usuario.

      .tarjeta.bg02.p-3(x="68%" y="50%")
        p Determinar qué versión de un anuncio genera la mayor actividad cerebral, como se ve en una resonancia magnética funcional. 

      .tarjeta.bg02.p-3(x="57%" y="82%")
        p Usar imágenes del cerebro para determinar la respuesta emocional de uno a un anuncio o producto.

    .row.justify-content-center
      .col-lg-11
        .cajon.color-primario.p-5
          .row
            .col-lg-4.mb-4.mb-lg-0
              img.img-a(src='@/assets/curso/tema_4/img_7.png', alt='Texto que describa la imagen')
            .col-lg-8.mb-4.mb-lg-0
              h5.mb-0 ¿Para qué tipo de clientes es eficaz el #[i neuromarketing]?
              p.mb-0 El #[i neuromarketing] es un método flexible para determinar las preferencias del cliente y la lealtad a la marca, porque puede aplicarse a casi cualquier persona que haya desarrollado una opinión sobre un producto o empresa. Independientemente de la forma que adopte, el #[i marketing] se centra en crear un impacto positivo y memorable en la mente de los clientes. El #[i neuromarketing] mide esos impactos, pero cualquiera puede tomar los descubrimientos básicos y ajustar su producto o servicio para reflejar las necesidades subconscientes del consumidor.



    


</template>

<script>
export default {
  name: 'Tema4',
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

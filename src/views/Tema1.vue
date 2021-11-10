<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Demostraciones de producto o servicio

    .row.justify-content-center.mb-5 
      .col-lg-6.mb-4.mb-lg-0(data-aos="slide-left")
        .bloque-texto-d.color-acento-botones.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Una demostración debe contener los atributos, ventajas y beneficios de tus productos o servicios. Los atributos son las “características técnicas del producto, así como sus cualidades primordiales”. Los beneficios es explicarle al comprador cómo funciona el producto y lo cual aporta.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
          .h5.mb-0 ClickBalance, 2021
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_1/img_1.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="flip-up") Hay dos tipos de demostraciones de productos: las que muestran objetos tangibles y las que se centran en promocionar servicios o recursos intangibles. Ahora se verán algunos ejemplos: 

    .row.justify-content-center.mb-5.d-flex 
      .col-lg-5.mb-4.mb-lg-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='Texto que describa la imagen')
        .bg01.p-4.bor1
          p.mb-0 Elaborar y transportar el producto al sitio del acontecimiento para que los asistentes logren verlo, tocarlo, oírlo, olerlo o probarlo de manera directa. 
      .col-lg-5.mb-4.mb-lg-0(data-aos="slide-right")
        img.img-a(src='@/assets/curso/tema_1/img_3.png', alt='Texto que describa la imagen')
        .bg01.p-4.bor2
          p.mb-0 Ordenar la infraestructura para que la compañía logre describir el desempeño del servicio y mostrar sus ventajas.  
          
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

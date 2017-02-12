<template>
    <div class="container">
        <div class="note">
            Boring &nbsp&nbsp&nbsp&nbsp <a href="/p/Markdown-Demo" id="nlink">Normal</a> &nbsp&nbsp&nbsp&nbsp Me
        </div>
        <card bgColor="black">
            <img class="cool" src="img/photo.jpg"></img>
            <div class="card-note" style="color: white"> STAY CHAN</div>
        </card>
        <card bgColor="#03a9f4" href="https://material.io">
            <img class="cool" src="img/material.png"/>
            <div class="card-note" style="color: white"> MATERIAL DESIGN</div>
        </card>
        <card bgColor="#f6f6f6" href="https://vuejs.org">
            <img class="cool" src="img/vue.png" style="width: 100px; margin: 100px"/>
            <div class="card-note" style="color: #41b883"> WITH VUE.JS </div>
        </card>
    </div>
</template>
<script>
    import Card from '~components/Card.vue'
    export default {
        layout: 'blog',
        components: {
            Card
        }
    }
</script>
<style lang="stylus" scoped>
a
    color #34495e
    text-decoration none
#nlink
    transition all .2s ease
    &:hover
        font-size 30px
.container
    padding 10px
    position relative
.note
    position absolute
    font-size 25px
    right 6em
    top 3em
    color #34495e
.cool
    border-radius 2px 2px 0 0
.card
    position relative
    top 15em
    margin 2em 4em
    vertical-align top
@media screen and (max-width: 900px)
    .container
        text-align center
    .card
        top 7em
        margin 2em 1em
    .note
        right 6vw
.card-note
    font-family "Roboto Mono",serif
    font-size: 18px;
    line-height: 28px;
    position absolute
    right 0
    bottom 0
    top auto
    vertical-align bottom
    margin 10px
    text-align right
</style>

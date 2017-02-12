<template>
    <a class="card" :style="{ backgroundColor: bgColor}" target="_blank" :href="href">
        <slot/>
    </a>
</template>
<script>
    export default {
        props: ['bgColor', 'href']
    }
</script>
<style lang="stylus">
a.card
    display inline-block
    box-sizing border-box
    margin 20px
    box-shadow 0px 0px 2px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.24)
    transition box-shadow .4s ease
    height 400px
    width 300px
    border-radius 2px
    &:hover
        box-shadow 0px 0px 8px 0px rgba(0,0,0,0.12), 0px 8px 8px 0px rgba(0,0,0,0.24)
</style>

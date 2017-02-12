<template>
    <div>
        <transition name="fade">
            <header class="header fix-top" @mouseenter="shadowOn" @mouseleave="shadowOn" :class="{'fix-top-shadow': fixTopShadow, 'fix-top-shadow-on': fixTopShadowOn}" v-show="fixTop">
                <div class="header-title">
                    <span> {{ title }} </span>
                </div>
            </header>
        </transition>
        <header class="header peekaboo"> 
            <div class="header-title">
                <span> {{ title }} </span>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data () {
        return {
            fixTop: false,
            fixTopShadow: false,
            fixTopShadowOn: false
        }
    },
    mounted () {
        let body = document.getElementsByTagName('body')[0]
        let that = this
        window.document.addEventListener('scroll', (e) => {
            if (body.scrollTop > 207) that.fixTop = true
            else that.fixTop = false
            if (body.scrollTop > 188) that.fixTopShadow = true
            else that.fixTopShadow = false
        })
    },
    methods: {
        shadowOn: function () {
            this.fixTopShadowOn = !this.fixTopShadowOn
        }
    }
}
</script>
<style lang="stylus" scoped>
.header
    background-color #4fc08d
    width 100%
    z-index 33
    color white
    box-sizing border-box
    transition box-shadow .4s
.fix-top
    position fixed
    min-height 64px
    top 0
    left 0
    padding 0 1em
    opacity 0.9
    span
        line-height 64px
        font-size 18px
    
.fix-top-shadow
    box-shadow 0px 0px 2px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.24)
.fix-top-shadow-on
    box-shadow 0px 0px 8px 0px rgba(0,0,0,0.12), 0px 8px 8px 0px rgba(0,0,0,0.24)
.peekaboo
    height 256px
    padding 115px 14em 0
@media screen and (max-width: 900px)
    .peekaboo
        padding 50px 10px
    .fix-top
        min-height 40px
        span
            line-height 40px
span
    font-size 56px
.fade-enter-active, .fade-leave-active
    transition transform .3s
.fade-enter, .fade-leave-to
    transform translateY(-48px)
</style>

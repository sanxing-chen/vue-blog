<template>
    <div>
        <tool-bar :title="title" />
        <div class="post-container" v-html="content">
        </div>
        <qr-code/>
    </div>
</template>
<script>
    import ToolBar from '~components/ToolBar.vue'
    import QrCode from '~components/QrCode.vue'
    import hljs from 'highlight.js/lib/highlight'

    ['javascript', 'css', 'bash', 'stylus', 'cpp'].forEach((langName) => {
        // https://bjacobel.com/2016/12/04/highlight-bundle-size/
        const langModule = require(`highlight.js/lib/languages/${langName}`)
        hljs.registerLanguage(langName, langModule)
    })
    var axios = require('axios')
    var md = require('markdown-it')({
            html: true,
            linkify: true,
            typographer: true,
            highlight: function (str, lang) {
                if (lang) {
                    try {
                        return hljs.highlight(lang, str).value
                    } catch (__) { }
                }

                return '' // use external default escaping
            }
        })
            .use(require('markdown-it-sub'))
            .use(require('markdown-it-sup'))
            .use(require('markdown-it-footnote'))
            .use(require('markdown-it-emoji'))
            .use(require('markdown-it-ins'))
            .use(require('markdown-it-deflist'))
    hljs.configure({
        classPrefix: ''     // don't append class prefix
    })
    export default {
        layout: 'blog',
        components: {
            ToolBar, QrCode
        },
        data () {
            return {
                content: '',
                title: '404 - Got Lost'
            }
        },
        mounted () {
            axios.get('/' + this.$route.params.p + '.md')
                .then(res => {
                    this.title = this.$route.params.p
                    this.content = md.render(res.data)
                })
            hljs.initHighlighting()
        }
    }
</script>
<style lang="stylus">
.post-container
    margin 5em 5vw
    position relative
    max-width 1160px
h1
h2
h3
h4
h5
h6
strong
    font-weight 600
    color #2c3e50
h1
    margin 0 0 1em
h2
    margin 45px 0 0.8em
    padding-bottom 0.7em
    border-bottom 1px solid #ddd
    z-index -1
h3
    margin 52px 0 1.2em
    &:before
        content "#"
        color #42b983
        position relative
        left -0.7em
        bottom -2px
        font-size 1.2em
        font-weight bold
        margin-right -0.5em
hr
    color #2c3e50
a
    color #42b983
    font-weight 500
    text-decoration none
blockquote
    margin 2em 0
    padding-left 20px
    border-left 4px solid #42b983
p, ul, ol
    line-height 1.6em
    margin 1.2em 0 -1.2em
    padding-bottom 1.2em
    position relative
    z-index 1
ul 
ol 
    padding-left 1.5em
    position inherit
table
    border 2px solid white
    margin 1.2em auto
table td
table th 
    line-height 1.6em
    padding 0.5em 1.4em
    border none
table td
    background-color #f9f8f8
table th
    background-color #42b983
    color #fff
    padding-top 0.85em
    padding-bottom 0.85em
    text-align left
.footnotes
    background-color #fbfbfb
code
    background-color #efefef
    color #e96900
pre code
    color #525252
    background-color transparent
    position relative
pre
    font-family 'Roboto Mono', Monaco, courier, monospace
    font-size 0.8em
    background-color #f8f8f8
    -webkit-font-smoothing initial
    -moz-osx-font-smoothing initial
    padding 15px 30px
    margin 0 2px
    border-radius 2px
    .class
        .title
            color #fff
    .title
        color #a6e22e
.language-js:after
    content 'JS'
.language-cpp:after
    content 'CPP'
.language-html:after
    content 'HTML'
.language-css:after
    content 'CSS'
.language-bash:after
    content 'SHELL'
.language-js:after,
.language-bash:after,
.language-css:after,
.language-html:after,
.language-cpp:after
    position absolute
    top -18px
    margin-left 21em
    color #ccc
    text-align right
    font-size 0.75em
    padding 5px 10px 0
    line-height 15px
    height 15px
    font-weight 600
pre .function .keyword, pre .constant
    color #0092db

pre .keyword, pre .attribute
    color #e96900

pre .number, pre .literal
    color #ae81ff

pre .tag, pre .tag .title, pre .change, pre .winutils, pre .flow, pre .lisp .title, pre .clojure .built_in, pre .nginx .title, pre .tex .special
    color #2973b7

pre .symbol, pre .symbol .string, pre .value, pre .regexp
    color #42b983

pre .tag .value, pre .string, pre .subst, pre .haskell .type, pre .preprocessor, pre .ruby .class .parent, pre .built_in, pre .sql .aggregate, pre .django .template_tag, pre .django .variable, pre .smalltalk .class, pre .javadoc, pre .django .filter .argument, pre .smalltalk .localvars, pre .smalltalk .array, pre .attr_selector, pre .pseudo, pre .addition, pre .stream, pre .envvar, pre .apache .tag, pre .apache .cbracket, pre .tex .command, pre .prompt
    color #42b983

pre .comment, pre .java .annotation, pre .python .decorator, pre .template_comment, pre .pi, pre .doctype, pre .deletion, pre .shebang, pre .apache .sqbracket, pre .tex .formula
    color #b3b3b3

pre .coffeescript .javascript, pre .javascript .xml, pre .tex .formula, pre .xml .javascript, pre .xml .vbscript, pre .xml .css, pre .xml .cdata
    opacity 0.5
</style>

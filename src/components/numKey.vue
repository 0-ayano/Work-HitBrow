<template >
<div class="center">
    <h1>　　Hit & Brow　　</h1>
</div>

<div class="panel">
    <input type="text" class="display" id="display" disabled />

    <table class="key">
        <tr>
            <td><input type="button" value="7" id="num" @click="main.numDisplay(7)" /></td>
            <td><input type="button" value="8" id="num" @click="main.numDisplay(8)" /></td>
            <td><input type="button" value="9" id="num" @click="main.numDisplay(9)" /></td>
        </tr>
        <tr>
            <td><input type="button" value="4" id="num" @click="main.numDisplay(4)" /></td>
            <td><input type="button" value="5" id="num" @click="main.numDisplay(5)" /></td>
            <td><input type="button" value="6" id="num" @click="main.numDisplay(6)" /></td>
        </tr>
        <tr>
            <td><input type="button" value="1" id="num" @click="main.numDisplay(1)" /></td>
            <td><input type="button" value="2" id="num" @click="main.numDisplay(2)" /></td>
            <td><input type="button" value="3" id="num" @click="main.numDisplay(3)" /></td>
        </tr>
        <tr>
            <td><input type="button" value="0"  id="num" @click="main.numDisplay(0)" /></td>
            <td><input type="button" value="C"  id="num" class="operator" @click="main.numDisplay('clear')" /></td>
            <td><input type="button" value="Go" id="num" class="operator" @click="main.judge(ans)" /></td>
        </tr>
    </table>
</div>

<div class="sideView">
    <div class="center">
        <h2>History (Stack)</h2>
    </div>

    <table class="history" id="history">
        <tbody>
            <tr class="Top">
                <td>Number</td>
                <td>Hit</td>
                <td>Brow</td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script setup>
import { ref } from 'vue'
import main from "../assets/HitBrow"

const ans = ref([])
main.ansInit(ans)



</script>

<style scoped>
</style>

<!-- 
Reference
1. Java Script
    - [【JavaScript入門】乱数の作り方(範囲指定/重複なし/ランダム文字列)](https://www.sejuku.net/blog/22432)
    - [現在のページを再読み込みする(location.reload)](https://www.javadrive.jp/javascript/webpage/index12.html)

2. Vue
    - [【Vue】Vue3＋Vite3の画面にVuetify3を導入する全手順](https://qiita.com/to3izo/items/6f162e26f07ac1eef701)
    - [Vue.js で外部 JS ファイルの関数を呼び出す](https://www.paveway.info/entry/2021/03/03/vuejs_exportjsfile)
    - [【Vue3】v-onとは?使い方を7パターン紹介する](https://blog.litely.net/blog/vuejs_v-on/)

3. CSS
    - [CSSのコピペだけ！おしゃれな見出しのデザイン例まとめ68選](https://saruwakakun.com/html-css/reference/h-design)
    - [CSSの余白調整、余白指定法｜margin、padding](https://ferret-plus.com/12506)
    - [HTML+CSS+JSで電卓を作ってみた※ウェブカツブログ記事参照](https://qiita.com/bumpfuji10/items/2b9470667530f67696ca)
    - [レスポンシブも対応！綺麗で見やすい表のデザイン11個[HTML&CSS]](https://pecopla.net/web-column/table-design)

4. Etc
    - [ソースコードを自動整形する方法【VSCode】](https://reactnative-st.com/2020/08/04/3835/)
-->
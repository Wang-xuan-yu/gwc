<template>
    <div id="goods">
        <header>商品列表</header>
        <nav>
            <ul>
                <li><router-link to="/goods/recom">推荐</router-link></li>
                <li><router-link to="/goods/baby">母婴</router-link></li>
                <li><router-link to="/goods/shoe">鞋包饰品</router-link></li>
                <li><router-link to="/goods/food">食品</router-link></li>
                <li><router-link to="/goods/code">数码家居</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Goods'
}
</script>

<style lang="scss">

header{
    width: 100%;
    height: 50px;
    background: white;;
    text-align: center;
    line-height: 50px;
    position: fixed;
    top: 0;
}
nav{
    width: 100%;
    height: 50px;
    overflow-x: auto;
    background: #5C4287;
    position: fixed;
    top: 50px;
} 
ul{
        display: flex;
        width: 200%;
        height: 80px;
        align-items: center;
        li{
            flex: 1;
            text-align: center;
            height: 100%;
            a{
                 width: 100%;
                height: 100%;
                text-decoration: none;
                display: inline-block;
                color: white;
                text-align: center;
                &.router-link-active{
                    background: #984fff;
                }
            }
        }
    }
</style>
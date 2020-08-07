<template>
    <div class="footer">
        <footer>
            <ul>
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                 <li>
                    <router-link to="/goods">商品</router-link>
                </li>
                 <li>
                    <router-link to="/cart">购物车</router-link>
                </li>
                 <li>
                    <router-link to="/my">我的</router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Foot'
}
</script>

<style lang="scss">
footer{
    width: 100%;
    height: 50px;
    background: #5C4287;
    position: fixed;
    bottom: 0;
}   
ul{
        width: 100%;
        display: flex;
        align-items: center;
        li{
            flex: 1;
            a{
                width: 100%;
                height: 100%;
                display: inline-block;
                text-decoration: none;
                color: white;
                line-height: 50px;
                text-align: center;
                &.router-link-active{
                    background: #984fff;
                }
            }
        }
    }
</style>
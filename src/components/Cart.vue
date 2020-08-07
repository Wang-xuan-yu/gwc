<template>
    <div class="cart">
        <header>
            <h2>购物清单</h2>
            <span @click="show()">编辑</span>
        </header>
        <div class="content">
            <dl v-for="(item,key) in list" :key="key">
                <dt>
                    <p class="anniu"><input type="checkbox" class="qx" v-show="flag" :value="item.id" v-model="arr"></p>
                    
                    <img :src="'/static/img/'+item.img">
                </dt>
                <dd>
                    <p class="s1">{{item.name}}</p>
                    <p class="s2">￥{{item.price}}</p>
                </dd>
                <p class="s4">
                    
                    <button @click="jian(key)" v-show="!flag">-</button>
                    <span  v-show="!flag">{{item.number}}</span>
                    <button @click="jia(key)" v-show="!flag">+</button>
                    <button class="del" v-show="flag" @click="del(key)">删除</button>
                </p>
                 
            </dl>
        </div>
        
        <!-- 底部 -->
        <div class="side">
            <span>
                <input type="checkbox" v-model="good" @click="all()" class="hh">全选
               <p class="h1">
                合计：￥:{{cont}}
                </p>
                <p class="h2"> 
                    去结算:({{n}})
                </p>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'Cart',
    data() {
        return {
            list:JSON.parse(localStorage.getItem('cart'))||[],
            arr:[],
            flag:false,
            good:false
        }
    },
    methods: {
        //减法运算
        jian(key){
            if(this.list[key].number<=1){
                alert('在减就没有了')
                return false
            }
            this.list[key].number--
            localStorage.setItem('cart',JSON.stringify(this.list))
        },
        //加法运算
        jia(key){
            if(this.list[key].number>=10){
                alert('库存没有了')
                return false
            }
            this.list[key].number++
             localStorage.setItem('cart',JSON.stringify(this.list))
        },
        //编辑
        show(){
            this.flag=!this.flag
            // alert('sd')
            localStorage.setItem('cart',JSON.stringify(this.list))
        },
        ///删除
        del(key){
             this.list.splice(key,1)
            localStorage.setItem("cart",JSON.stringify(this.list))
        },
        all(){
            if(this.good){
                this.arr=[]
            }else{
                for(var i in this.list){
                    this.arr.push(this.list[i].id)
                }
            }
            localStorage.setItem("cart",JSON.stringify(this.list))
        }
    },
    watch: {
        arr(val){
              if(val.length==this.list.length){
                this.good=true
              }else {
                this.good=false
              }
        }
    },
    computed: {
         n(){
            var num = 0
            for(var i=0;i<this.list.length;i++){
              num+=this.list[i].number
            }
            return num

          },
          cont(){
            if(this.good){
              var sum =0;
              for(var i=0;i<this.list.length;i++){
                sum+=this.list[i].price*this.list[i].number
              }
              return sum
            }


          }
    },
}
</script>

<style lang="scss">

header{
    display: flex;
    width: 100%;
    align-items: center;
    height: 50px;
    background: white;
    justify-content: space-between;
    position: fixed;
    top: 0;
    h2{
        width: 85%;
        text-align: center;
        
    }
    span{
        width: 15%;
        text-align: center;
    }
} 
.content{
    margin-top: 60px;
} 
dl{
    width: 100%;
    height: 120px;
    display: flex;
    margin-top: 10px;
    background: white;
    dt{
        width: 30%;
        display: flex;
        align-items: center;
        img{
            width: 100%;
            height: 100%;
        }
        .anniu{
            display: inline-block;
            width: 30px;
            height: 30px;
            .qx{
                width: 20px;
                height: 20px;
            }
        }
    }
    dd{
        width: 60%;
        .s1{
            font-size: 17px;
            margin-left: 10px;
            margin-top: 10px;
        }
        .s2{
            font-size: 15px;
            color: #984fff;
            font-weight: bold;
            margin-left: 10px;
            margin-top: 40px;
        }
        .s3{
            font-size: 13px;
            color: #666;
            margin-left: 10px;
        } 
    }
     .s4{
            width: 25%;
            height: auto;
            button{
                border:none;
                background: white;
                color: #666;
                font-weight: bold;
                outline: none;
                display: flex;
                align-items: center;
                justify-content: space-around;
                text-align: center;
                margin-left: 35px;
                 display: inline-block;
            }
            span{
                color: #666;
                font-weight: bold;
                width: 30px;
                height: 60px;
                text-align: center;
                display: inline-block;
                margin-left: 35px;
                line-height: 60px;
            }
            .del{
                text-align: center;
                margin-top: 20px;
                font-size: 16px;
                display: inline-block;
                height: 100px;
                line-height: 100px;
            }
        }
    
}  
.side{
    width: 100%;
    height: 50px;
    background:white;
    display: flex;
    line-height: 50px;
    position: fixed;
    bottom: 50px;
    span{
        width: 100%;
        display: flex;
       .hh{
           margin-top: 19px;
       }
        .h1{
            width: 40%;
            height: 50px;
            display: inline-block;
            padding-left: 10px;
            margin-left: 35px;
            color: #984fff;
            font-weight: bold;
        }
        .h2{
            background: #984fff;
            color: white;
            text-align: center;
            width: 30%;
            margin-left: 25px;
        }
    }
}
</style>
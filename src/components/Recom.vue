<template>
  <div class="recom">
    <div class="sort">
      <ul>
        <li v-show="!flag" @click="click()">升序</li>
        <li v-show="flag" @click="click()">降序</li>
      </ul>
    </div>

    <div class="main">
      <dl v-for="(item,key) in list" :key="key">
        <dt>
          <img :src="'/static/img/'+item.productImage" alt class="img" />
        </dt>
        <dd>
          <p class="p1">{{item.productName}}</p>
          <p class="p2">￥{{item.salePrice}}</p>
        </dd>
        <p class="p4">
          <button @click="add(item)">+</button>
        </p>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Recom",
  data() {
    return {
      list: JSON.parse(localStorage.getItem("cart")) || [],
      flag: false,
    };
  },
  mounted() {
    axios.get("/static/data.json").then((res) => {
      console.log(res);
      this.list = res.data.result.list;
    });
  },
  methods: {
    //添加
    add(item) {
      var arr = JSON.parse(localStorage.getItem("cart")) || [];
      console.log(arr);
      var index = arr.findIndex((i) => {
        return item._id == i.id;
      });
      var obj = {
        id: item._id,
        name: item.productName,
        price: item.salePrice,
        img: item.productImage,
        number: 1,
      };
      if (index == -1) {
        arr.push(obj);
      } else {
        arr[index].number++;
      }
      localStorage.setItem("cart", JSON.stringify(arr));
      this.$router.push("/cart");
    },
    click() {
      this.flag = !this.flag;
      if (this.flag) {
        this.list.sort(function (a,b) {
          return b.salePrice - a.salePrice;
        });
      } else {
        this.list.sort(function (a,b) {
          return a.salePrice - b.salePrice;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.io {
  width: 100%;
  height: 200px;
  background: pink;
  margin-top: 20px;
}

body,html{
 width: 100%;
  height: 100%;
}
.recom {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  .sort {
    width: 100%;
    height: 40px;
    margin-top: 68px;
    border: 1px solid #ccc;
    background: white;

    ul {
      width: 100%;
      display: flex;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        line-height: 40px;
      }
    }
  }
  .main {
    width: 100%;
    margin-bottom: 50px;

    dl {
      width: 100%;
      height: auto;
      display: flex;
      margin-top: 10px;
      background: white;
      dt {
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        width: 100%;
        .p1 {
          font-size: 17spx;
          margin-left: 10px;
          margin-top: 10px;
        }
        .p2 {
          font-size: 15px;
          color: #984fff;
          font-weight: bold;
          margin-left: 10px;
          margin-top: 30px;
        }
        .p3 {
          font-size: 13px;
          color: #666;
          margin-left: 10px;
        }
      }
      .p4 {
        width: 20%;
        button {
          text-align: center;
          border: none;
          background: #984fff;
          color: white;
          width: 35px;
          height: 20px;
          border-radius: 15px;
          font-weight: bold;
          margin-top: 40px;
          margin-left: 15px;
          outline: none;
        }
      }
    }
  }
}
</style>
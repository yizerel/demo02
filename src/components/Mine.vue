<template>

<div>

       
<van-tabbar>
            <van-tabbar-item
                icon="coupon-o"
            >
                <router-link to="/index">首页</router-link>
            </van-tabbar-item>
            <van-tabbar-item
                icon="eye"
            >
                <router-link to="/search">发现</router-link>
            </van-tabbar-item>
            <van-tabbar-item
                icon="logistics"
            >
                <router-link to="/order">点餐</router-link> 
            </van-tabbar-item>
            <van-tabbar-item
                icon="manager"
            >
                <router-link to="/mine">我的</router-link> 
            </van-tabbar-item>
        </van-tabbar>
</div>
</template>

<script>

    

export default {
   data(){
    return{

}
}
}
</script>

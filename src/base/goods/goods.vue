<template>
    <div class='hot-area'>
        <van-list>
            <van-row>
                <van-col span='12' v-for='(item, index) in hotGoods' :key='index'>
                    <div class='goods-image'>
                        <img :src='item.image' width='100%' />
                    </div>
                    <div class='goods-name' v-text='item.name'></div>
                    <div class='goods-price' v-text='item.price'></div>
                </van-col>
            </van-row>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'Goods',
        props: {
            hotGoods: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style scoped lang='stylus'>
    .hot-area
        text-align center
        font-size .3rem
        .goods-name
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
</style>
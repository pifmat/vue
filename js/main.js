var app = new Vue({
    el: '#app',
    data: {
        product:"Socks",
        description: "A pair of warm, fuzzy socks",
        image: "img/sock.jpeg",
        link: "www.vuemastery.com",
        inStock: true,
        onSale: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage:"img/sock.jpeg"
            },
            {
                variantId:2235,
                variantColor: "blue",
                variantImage:"img/blue-sock.jpeg"
            }
        ],
        sizes:["XS","S","M","L","XL","XXL"],
        cart:0
        
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        removeToCart: function(){
            if(this.cart == 0){
                return
            }else{
                this.cart -= 1
            }
        },
        updateProduct: function(variantImage){
            this.image = variantImage;
        }
    }
});
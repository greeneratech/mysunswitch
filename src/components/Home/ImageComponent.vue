<template>
    <v-app>
        <v-sheet color="black" height="730px" width=100%>
            <v-img :src="image" height="730px" width=100%>
            <v-sheet style="background:rgba(0, 0, 0, 0.6)" width=100% height=100%>
            <div class="imageContainer">
            <h2 class="headingText">
                Make 25 times (or more) your money back when you sponsor a solar project
            </h2>
            <p  class="white--text">
                Receive satisfying monthly returns paid from consumer fees for 20 years when you invest in a community solar electrification project today
            </p>

            <p class="starting-price">Start from just ₦50,000</p>

            <v-btn to="/signup" style="border-radius:16px" class="ctabutton white--text" color="#FF7B00">See how it works <v-icon>mdi-chevron-right</v-icon></v-btn>
             
             <div class="circleContainer">
                <div @click="setImage1()" id="circle1" class="circle"></div>
                <div @click="setImage2()" id="circle2" class="circle"></div>
            </div>

            </div>
            </v-sheet>

            </v-img>
            
        </v-sheet>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            image:""
        }
    },
    created(){
        setInterval(()=>{
            this.changeCircle()
        },2000)

        
        
    },
    methods:{
        setImage1(){
            this.image = "https://i.ibb.co/94qq4Hj/capture-png-1.png"
        },
        setImage2(){
            this.image = "https://i.ibb.co/yN67JhS/technician-engineer-checks-mai.jpg"
        },
      changeImage(){
          this.image = "https://i.ibb.co/94qq4Hj/capture-png-1.png"
      },
      changeCircle(){
        var circle1 = document.getElementById("circle1")
        var circle2 = document.getElementById("circle2")
        if(circle1.classList.contains("active")){
             this.image = "https://i.ibb.co/94qq4Hj/capture-png-1.png"
            circle1.classList.remove("active")
            circle2.classList.add("active")
            circle1.classList.remove("active")
            circle2.classList.add("active")
        }
        else{
            this.image = "https://i.ibb.co/yN67JhS/technician-engineer-checks-mai.jpg"
            circle2.classList.remove("active")
            circle1.classList.add("active")
            circle2.classList.remove("active")
            circle1.classList.add("active")
        }
      }
    }
}
</script>


<style scoped>
    .banner{
        background-image:url("../../assets/images/capture-png 1.png");
        background-position:cover;
        height:730px;
        width:100%;      
    }

    .gradient{
        background-image: linear-gradient(rgb(0,0,0,0.8)) !important;
    }

    .circle{
        width:18px;
        height:18px;
        border-radius:50%;
        margin:0px 10px;
        border:2px solid white
    }
    .active{
         background-color:white;
    }
    .circleContainer{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:20px;
    }

    .starting-price {
        padding: 0.5rem;
        margin: 1rem auto;
        border-radius: 1rem;
        background-color: white;
    }
</style>

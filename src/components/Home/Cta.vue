<template>
    <v-app>

        <div class="x-container">
            <h3 class="cta-h3">HOW WE CAN SERVE YOU</h3>

            <p>Make the sun pay you for eradicating carbon pollution from our world</p>

            <ul>
                <FeatureItem 
                    v-for="feature in features"
                    :key="feature.title"
                    :head="feature.title"
                    :body="feature.body"
                    :imgSrc="feature.imgSrc"
                />
            </ul>
        </div>

        <div class="x-container">
            <h3 class="cta-h3">OUR RECOGNITIONS AND AWARDS</h3>

            <p>
                Winner: Forbes Nigerian Digital Startup accelerator Prize 2020	All-On Energy incubation Innovation Prize (Include other competitions you have won in the industry from highly reputable organizations only).
            </p>

            <ul>
               <li v-for="recog in recognitions" :key="recog.text" class="recognition-item">
                    <img :src="recog.imgSrc" :alt="recog.text" width="300" height="200" />
               </li>
            </ul>
        </div>

        <!-- <div class="x-container">
            <h3 class="cta-h3">AN ACCOUNT THAT SUITS YOU</h3>

            <ul class="account-list">
                <li class="boxshadowGreen">
                    <div>
                        <img src="../../assets/images/GreenPanel.svg" />
                        <div class="boxshadowGreen-title">Enterprise Account</div>
                        <p class="boxshadowGreen-description">This is a kind of account for  business owners that wish to power their businesses</p>
                        <v-btn @click="$router.push('/business/signup')" class="signupButton">Sign up now</v-btn>
                    </div>
                </li>

                <li class="boxshadowGreen">
                   <div>
                        <img src="../../assets/images/Company.svg" />
                        <div class="boxshadowGreen-title">Solar cells at work</div>
                        <p class="boxshadowGreen-description">This kind enables its users finance solar projects, and earn via ROIs.</p>
                        <v-btn @click="$router.push('/signup')" class="signupButton">Sign up now</v-btn>
                   </div>
                </li>
            </ul>
        </div> -->

    </v-app>
</template>

<script>
import FeatureItem from '../../components/Home/FeatureItem.vue';

export default {
    components: {
        FeatureItem
    },

    data() {
        return {
          features: [
            {
                title: 'Sponsor pre-vetted locations only',
                body: 'Every community, estate, market unions and companies which apply for the power-up program are rigorously vetted to  prove their technological and economical viability before opening it up for you to sponsor.',
                imgSrc: '/images/home-feature-1.jpg'
            },
            {
                title: 'Start earning within a month ',
                body: 'The set-up timeline of every generating plant is disclosed. Upon completion, you will immediately begin to receive returns as the community uses it.',
                imgSrc: '/images/home-feature-2.jpg'
            },
            {
                title: 'Full disclosure',
                body: 'All the terms that affect you and your earning are disclosed before you purchase solar cells. Also you will be carried along by the team throughout the project’s lifetime, so you always know what’s happening with your cells.',
                imgSrc: '/images/home-feature-3.jpg'
            },
            {
                title: 'Earn for 20 years',
                body: 'Solar panels have a lifetime of 20 years. So when you sponsor a power-up project, you will earn from it through that time. You can earn between 25X to 40X your input over this period.',
                imgSrc: '/images/home-feature-4.jpg'
            },
            {
                title: 'Inflation-proof investments',
                body: 'Your earnings are pegged to realistic conditions, since your investment provides real value. hence whenever there is a hike in price due to inflation, your earnings will also go up to reflect this. This way, the value of yor money is always preserved.',
                imgSrc: '/images/home-feature-5.jpg'
            },
          ],

          recognitions: [
            {
                text: 'Forbes',
                imgSrc: '/images/forbes-logo.png',
            },
            {
                text: 'Global startup ecosystem',
                imgSrc: '/images/global-startup-ecosystem-logo.png',
            },
            {
                text: 'Allon',
                imgSrc: '/images/allon-logo.png',
            },
            // {
            //     text: 'Bella naija',
            //     imgSrc: '/images/bella-naija-logo.png',
            // },
            // {
            //     text: '234finance',
            //     imgSrc: '/images/234finance-logo.png',
            // },
          ],
        };
    },

    methods: {
        businessSignup() {
            this.$router.push('/signup')
        },
    }

};
</script>


<style lang="scss">
    .x-container {
        padding: 1rem;
        max-width: 70rem;
        margin: 2rem auto;
    }

    .x-container > p {
        text-align: center;
    }

    .x-container > ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        justify-content: center;
    }

    .cta-h3 {
        margin: auto;
        color: white;
        text-align: center;
        width: fit-content;
        border-radius: 1rem;
        margin-bottom: 1rem;
        padding: 0.5rem 2rem;
        background-color: #199958;
    }

    .recognition-item {
        padding: 1rem;
    }

    .recognition-item > img {
        display: block;
    }

   .signupButton{
       background:#199958 !important;
       color:white !important;
       padding:25px 40px !important;
       font-size:18px !important;
       margin-top:20px !important
   }

   .vertical {
       left: 50%;
       height: 400px;
       margin-top:-10px;
       border-left: 2px solid #BDBDBD;
    }

    .sunshineText{
        font-weight:700;
        font-size:48px;
        text-align:center;
        color:#000000;
        padding:12px 0px 0px 0px;
        line-height:48px !important
    }

    .boxshadow {
        box-shadow:0px 0px 0px 0px;
        height:502px;
        width:80%;
        vertical-align:middle;
        padding:96px 54px;
        border-radius:10px;
        border: 0.001em solid;
        margin:30px 0px 0px 0px
    }

    .boxshadowGreen {
        width: 100%;
        padding: 1rem;
        vertical-align: middle;
    }

    .boxshadowGreen > div {
        padding: 3rem 1rem;
        text-align: center;
        border-radius: 10px;
        background:rgba(19, 210, 122, 0.09);
    }

    .boxshadowGreen-title {
        padding: 15px;
        font-size: 25px;
        font-weight: 400;
        color: #000000;
    }

    .boxshadowGreen-description {
        font-size: 18px;
        color: #000000;
    }

    .ecosystemText{
        margin:30px 0px;
        color:#000000
    }

    .ecosystemText h2{
        font-size:48px;
        font-weight:700;
        line-height: 30px;
        padding:12px 0px
    }

    .ecosystemText p {
        margin:auto;
        width:45%;
        font-size:19px
    }

    @media screen and (min-width: 934px) {
        .boxshadowGreen {
            width: 50%;
        }
    }

    @media screen and (max-width:934px){
        .boxshadow{
            width:100%;
            height:50%
        }

        .sunshineText{
            font-weight:700;
            font-size:36px;
            text-align:center;
            color:#333333;
            line-height:36px !important;
            padding:10px 0px
        }

        .ecosystemText h2{
            font-size:36px;
            font-weight:700;
            line-height: 30px;
            padding:30px 0px
        }

        .ecosystemText p {
            margin:auto;
            width:100% !important;
            font-size:19px
        }
        
    }
</style>

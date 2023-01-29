<template>
    <footer>
        <ul class="social-contacts">
            <li v-for="sc in socialContacts" :key="sc.icon">
                <a :href="sc.link" target="_blank">
                    <v-icon x-large class="white--text">{{ sc.icon }}</v-icon>
                </a>
            </li>
        </ul>

        <div class="call-and-email">
            <div class="text-xl white--text">
                <v-icon x-large class="white--text">mdi-phone</v-icon> 
                <a href="tel:+2347033771639" class="contact-us-link">+234 703 377 1639</a>, 
                <a href="tel:+2348165533706" class="contact-us-link">+234 816 553 3706</a>
            </div>

            <div class="text-xl white--text">
                <v-icon x-large class="white--text">mdi-email</v-icon> 
                <a href="mailto:contact@greeneratech.com" class="contact-us-link">contact@greeneratech.com</a>
            </div>
        </div>
    
        <div class="brand">
            <div class="d-flex justify-center">
                <div class="text-center">
                    <v-img width="120px" class="mx-auto my-2" src="../../assets/images/sunswitchlogo.png"/>
                    <p class="white--text">Sunswitch by Greenera Technologies &copy; {{ currentYear }}. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
            socialContacts: [
                {
                    icon: 'mdi-twitter',
                    link: 'https://mobile.twitter.com/greeneratech',
                },
                {
                    icon: 'mdi-instagram',
                    link: 'https://www.instagram.com/greeneratech/?hl=en',
                },
                {
                    icon: 'mdi-linkedin',
                    link: 'https://www.linkedin.com/company/greeneratechnologies/',
                },
                {
                    icon: 'mdi-facebook',
                    link: 'https://web.facebook.com/greeneratechnologies/?_rdc=1&_rdr',
                },
            ],
        };
    },
};
</script>

<style scoped>
footer {
    padding: 2rem;
    background-color: #006838;
}

.social-contacts {
    display: flex;
    column-gap: 2rem;
    list-style: none;
    justify-content: center;
}

.social-contacts a {
    color: #FFFFFF;
    text-decoration: none;
}

.call-and-email {
    margin-top: 2rem;
    text-align: center;
}

.call-and-email > div {
    margin-bottom: 1rem;
}

.call-and-email a {
    color: white;
    text-decoration: none;
}

.brand {
    margin-top: 3rem;
    border-top: 1px solid white;
}

.routerLink{
    color:white !important;
    text-decoration:none !important
}
.contactDetails{
    padding-bottom:40px;
}
</style>

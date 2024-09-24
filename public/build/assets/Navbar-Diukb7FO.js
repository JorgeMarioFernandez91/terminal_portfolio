import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{f as i,n as c,b as C,t as n,g as v,F as h,l as u,o as d,p as _,q as b,m as r}from"./app-BU0E6zdd.js";const m={name:"Navbar",props:{isMobile:{type:Boolean,default:!1}},data(){return{scrolled:!1,mobileMenuVisible:!1,isBasketOpen:!1,mouseOutsideBasket:!1}},computed:{basketItems(){return this.$store.getters.basketItems},basketCount(){return this.$store.getters.basketItemCount},basketTotalPrice(){return this.$store.getters.basketTotalPrice.toFixed(2)}},mounted(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("click",l=>{this.isBasketOpen&&this.mouseOutsideBasket&&(this.mouseOutsideBasket=!1,this.isBasketOpen=!1)})},methods:{handleScroll(){window.scrollY>0?this.scrolled=!0:this.scrolled=!1},removeFromBasket(l){this.$store.dispatch("removeFromBasket",l)},navTo(l){this.$inertia.visit("/coffeeco/"+l)}}},e=l=>(_("data-v-1d9e1be9"),l=l(),b(),l),V=r('<svg height="80" viewBox="0 0 76 52" xmlns="http://www.w3.org/2000/svg" data-v-1d9e1be9><path d="M44.6177 24.0586L38.1181 17.3926C37.9977 17.2682 37.8545 17.1694 37.6968 17.1021C37.5391 17.0347 37.3699 17 37.199 17C37.0282 17 36.859 17.0347 36.7012 17.1021C36.5435 17.1694 36.4003 17.2682 36.28 17.3926L19 35.1148L20.8381 37L37.199 20.2203L41.8606 25.0012L34.5992 32.4484L36.4373 34.3336L44.6177 25.9437C44.7389 25.8202 44.835 25.6733 44.9006 25.5116C44.9662 25.3498 45 25.1764 45 25.0012C45 24.826 44.9662 24.6525 44.9006 24.4907C44.835 24.329 44.7389 24.1821 44.6177 24.0586Z" data-v-1d9e1be9></path><path d="M54.1361 9.33328L46.7727 16.7808L38.8623 8.77865C38.6161 8.53023 38.3237 8.33354 38.002 8.19991C37.6803 8.06628 37.3356 7.99835 36.9878 8.00003C36.2923 8.00194 35.6256 8.28181 35.1331 8.77865L27 17.0128L28.8639 18.898L36.9971 10.6652L45.8421 19.6086C45.9642 19.7327 46.1093 19.8311 46.2691 19.8983C46.4289 19.9654 46.6003 20 46.7734 20C46.9464 20 47.1178 19.9654 47.2776 19.8983C47.4374 19.8311 47.5825 19.7327 47.7047 19.6086L56 11.2185L54.1361 9.33328Z" data-v-1d9e1be9></path><path d="M46 9C43.2428 9 41 6.98143 41 4.5C41 2.01857 43.2428 0 46 0C48.7571 0 51 2.01857 51 4.5C51 6.98143 48.7571 9 46 9ZM46 2.57143C44.8185 2.57143 43.8571 3.43671 43.8571 4.5C43.8571 5.56329 44.8185 6.42857 46 6.42857C47.1814 6.42857 48.1428 5.56329 48.1428 4.5C48.1428 3.43671 47.1814 2.57143 46 2.57143Z" data-v-1d9e1be9></path><path d="M9.86857 44.3828H7.69102C7.65125 44.1011 7.57004 43.8509 7.44741 43.6321C7.32478 43.41 7.16734 43.2211 6.97511 43.0653C6.78287 42.9096 6.56081 42.7902 6.30892 42.7074C6.06034 42.6245 5.79021 42.5831 5.49855 42.5831C4.97156 42.5831 4.51251 42.714 4.12142 42.9759C3.73032 43.2344 3.42705 43.6122 3.21161 44.1094C2.99618 44.6032 2.88846 45.2031 2.88846 45.9091C2.88846 46.6349 2.99618 47.2448 3.21161 47.7386C3.43036 48.2325 3.73529 48.6053 4.12639 48.8572C4.51749 49.1091 4.9699 49.2351 5.48363 49.2351C5.77198 49.2351 6.03879 49.197 6.28406 49.1207C6.53264 49.0445 6.75304 48.9335 6.94528 48.7876C7.13751 48.6385 7.29661 48.4579 7.42255 48.2457C7.55181 48.0336 7.6413 47.7917 7.69102 47.5199L9.86857 47.5298C9.81223 47.9972 9.67137 48.4479 9.44599 48.8821C9.22393 49.313 8.92397 49.6991 8.54613 50.0405C8.17161 50.3785 7.72416 50.647 7.2038 50.8459C6.68676 51.0414 6.10177 51.1392 5.44883 51.1392C4.54069 51.1392 3.72866 50.9337 3.01275 50.5227C2.30016 50.1117 1.73671 49.5168 1.32241 48.7379C0.911425 47.959 0.705933 47.0161 0.705933 45.9091C0.705933 44.7988 0.914739 43.8542 1.33235 43.0753C1.74997 42.2964 2.31673 41.7031 3.03264 41.2955C3.74855 40.8845 4.55394 40.679 5.44883 40.679C6.03879 40.679 6.58567 40.7618 7.08946 40.9276C7.59656 41.0933 8.04566 41.3352 8.43676 41.6534C8.82786 41.9683 9.14604 42.3544 9.3913 42.8118C9.63988 43.2692 9.79897 43.7929 9.86857 44.3828Z" data-v-1d9e1be9></path><path d="M14.8228 51.1491C14.0505 51.1491 13.3827 50.9851 12.8192 50.657C12.2591 50.3255 11.8266 49.8648 11.5216 49.2749C11.2167 48.6816 11.0642 47.9938 11.0642 47.2116C11.0642 46.4228 11.2167 45.7334 11.5216 45.1435C11.8266 44.5502 12.2591 44.0895 12.8192 43.7614C13.3827 43.4299 14.0505 43.2642 14.8228 43.2642C15.595 43.2642 16.2612 43.4299 16.8213 43.7614C17.3848 44.0895 17.819 44.5502 18.1239 45.1435C18.4288 45.7334 18.5813 46.4228 18.5813 47.2116C18.5813 47.9938 18.4288 48.6816 18.1239 49.2749C17.819 49.8648 17.3848 50.3255 16.8213 50.657C16.2612 50.9851 15.595 51.1491 14.8228 51.1491ZM14.8327 49.5085C15.184 49.5085 15.4774 49.4091 15.7127 49.2102C15.948 49.008 16.1253 48.733 16.2446 48.3849C16.3673 48.0369 16.4286 47.6409 16.4286 47.1967C16.4286 46.7526 16.3673 46.3565 16.2446 46.0085C16.1253 45.6605 15.948 45.3854 15.7127 45.1832C15.4774 44.9811 15.184 44.88 14.8327 44.88C14.4781 44.88 14.1798 44.9811 13.9378 45.1832C13.6992 45.3854 13.5186 45.6605 13.3959 46.0085C13.2766 46.3565 13.2169 46.7526 13.2169 47.1967C13.2169 47.6409 13.2766 48.0369 13.3959 48.3849C13.5186 48.733 13.6992 49.008 13.9378 49.2102C14.1798 49.4091 14.4781 49.5085 14.8327 49.5085Z" data-v-1d9e1be9></path><path d="M24.065 43.3636V44.9545H19.3519V43.3636H24.065ZM20.4307 51V42.8118C20.4307 42.2583 20.5384 41.7992 20.7539 41.4347C20.9726 41.0701 21.2709 40.7966 21.6488 40.6143C22.0266 40.4321 22.4558 40.3409 22.9364 40.3409C23.2612 40.3409 23.5579 40.3658 23.8263 40.4155C24.0981 40.4652 24.3003 40.5099 24.4328 40.5497L24.055 42.1406C23.9721 42.1141 23.8694 42.0893 23.7468 42.0661C23.6275 42.0429 23.5048 42.0312 23.3789 42.0312C23.0673 42.0312 22.8502 42.1042 22.7276 42.25C22.605 42.3925 22.5436 42.593 22.5436 42.8516V51H20.4307Z" data-v-1d9e1be9></path><path d="M29.4653 43.3636V44.9545H24.7523V43.3636H29.4653ZM25.8311 51V42.8118C25.8311 42.2583 25.9388 41.7992 26.1543 41.4347C26.373 41.0701 26.6713 40.7966 27.0492 40.6143C27.427 40.4321 27.8562 40.3409 28.3368 40.3409C28.6616 40.3409 28.9582 40.3658 29.2267 40.4155C29.4985 40.4652 29.7007 40.5099 29.8332 40.5497L29.4554 42.1406C29.3725 42.1141 29.2698 42.0893 29.1472 42.0661C29.0278 42.0429 28.9052 42.0312 28.7793 42.0312C28.4677 42.0312 28.2506 42.1042 28.128 42.25C28.0054 42.3925 27.944 42.593 27.944 42.8516V51H25.8311Z" data-v-1d9e1be9></path><path d="M33.9659 51.1491C33.1804 51.1491 32.5042 50.9901 31.9375 50.6719C31.374 50.3504 30.9398 49.8963 30.6349 49.3097C30.33 48.7197 30.1775 48.022 30.1775 47.2166C30.1775 46.4311 30.33 45.7417 30.6349 45.1484C30.9398 44.5552 31.369 44.0928 31.9226 43.7614C32.4794 43.4299 33.1323 43.2642 33.8814 43.2642C34.3851 43.2642 34.8541 43.3454 35.2883 43.5078C35.7258 43.6669 36.107 43.9072 36.4318 44.2287C36.7599 44.5502 37.0151 44.9545 37.1974 45.4418C37.3797 45.9257 37.4708 46.4924 37.4708 47.142V47.7237H31.0227V46.4112H35.4772C35.4772 46.1063 35.411 45.8362 35.2784 45.6009C35.1458 45.3655 34.9619 45.1816 34.7265 45.049C34.4945 44.9131 34.2244 44.8452 33.9162 44.8452C33.5947 44.8452 33.3096 44.9197 33.061 45.0689C32.8158 45.2147 32.6235 45.4119 32.4843 45.6605C32.3451 45.9058 32.2739 46.1792 32.2706 46.4808V47.7287C32.2706 48.1065 32.3402 48.433 32.4794 48.7081C32.6219 48.9832 32.8224 49.1953 33.0809 49.3445C33.3395 49.4936 33.646 49.5682 34.0007 49.5682C34.236 49.5682 34.4514 49.535 34.647 49.4688C34.8425 49.4025 35.0099 49.303 35.1491 49.1705C35.2883 49.0379 35.3944 48.8755 35.4673 48.6832L37.4261 48.8125C37.3267 49.2831 37.1228 49.6941 36.8146 50.0455C36.5097 50.3935 36.1153 50.6652 35.6314 50.8608C35.1508 51.053 34.5956 51.1491 33.9659 51.1491Z" data-v-1d9e1be9></path><path d="M42.3331 51.1491C41.5476 51.1491 40.8714 50.9901 40.3047 50.6719C39.7412 50.3504 39.307 49.8963 39.0021 49.3097C38.6972 48.7197 38.5447 48.022 38.5447 47.2166C38.5447 46.4311 38.6972 45.7417 39.0021 45.1484C39.307 44.5552 39.7362 44.0928 40.2897 43.7614C40.8466 43.4299 41.4995 43.2642 42.2485 43.2642C42.7523 43.2642 43.2213 43.3454 43.6555 43.5078C44.093 43.6669 44.4742 43.9072 44.799 44.2287C45.1271 44.5502 45.3823 44.9545 45.5646 45.4418C45.7469 45.9257 45.838 46.4924 45.838 47.142V47.7237H39.3899V46.4112H43.8444C43.8444 46.1063 43.7781 45.8362 43.6456 45.6009C43.513 45.3655 43.329 45.1816 43.0937 45.049C42.8617 44.9131 42.5916 44.8452 42.2833 44.8452C41.9619 44.8452 41.6768 44.9197 41.4282 45.0689C41.183 45.2147 40.9907 45.4119 40.8515 45.6605C40.7123 45.9058 40.6411 46.1792 40.6378 46.4808V47.7287C40.6378 48.1065 40.7074 48.433 40.8466 48.7081C40.9891 48.9832 41.1896 49.1953 41.4481 49.3445C41.7066 49.4936 42.0132 49.5682 42.3679 49.5682C42.6032 49.5682 42.8186 49.535 43.0142 49.4688C43.2097 49.4025 43.3771 49.303 43.5163 49.1705C43.6555 49.0379 43.7616 48.8755 43.8345 48.6832L45.7933 48.8125C45.6939 49.2831 45.49 49.6941 45.1818 50.0455C44.8769 50.3935 44.4824 50.6652 43.9985 50.8608C43.518 51.053 42.9628 51.1491 42.3331 51.1491Z" data-v-1d9e1be9></path><path d="M50.5001 51V40.8182H54.5172C55.2861 40.8182 55.9424 40.9557 56.4859 41.2308C57.0328 41.5026 57.4488 41.8887 57.7338 42.3892C58.0222 42.8864 58.1663 43.4714 58.1663 44.1442C58.1663 44.8203 58.0205 45.402 57.7288 45.8892C57.4372 46.3731 57.0146 46.7443 56.4611 47.0028C55.9109 47.2614 55.2447 47.3906 54.4625 47.3906H51.7729V45.6605H54.1145C54.5255 45.6605 54.8669 45.6042 55.1386 45.4915C55.4104 45.3788 55.6126 45.2098 55.7452 44.9844C55.8811 44.759 55.949 44.4789 55.949 44.1442C55.949 43.8061 55.8811 43.5211 55.7452 43.2891C55.6126 43.0571 55.4088 42.8814 55.1337 42.7621C54.8619 42.6394 54.5188 42.5781 54.1045 42.5781H52.6528V51H50.5001ZM55.9987 46.3665L58.5293 51H56.1528L53.677 46.3665H55.9987Z" data-v-1d9e1be9></path><path d="M64.5449 47.7486V43.3636H66.6628V51H64.6294V49.6129H64.5499C64.3775 50.0604 64.0908 50.42 63.6898 50.6918C63.292 50.9635 62.8065 51.0994 62.2331 51.0994C61.7227 51.0994 61.2736 50.9834 60.8858 50.7514C60.498 50.5194 60.1947 50.1896 59.976 49.7621C59.7606 49.3345 59.6512 48.8224 59.6479 48.2259V43.3636H61.7658V47.848C61.7691 48.2988 61.8901 48.6551 62.1287 48.9169C62.3673 49.1787 62.6872 49.3097 63.0882 49.3097C63.3434 49.3097 63.5821 49.2517 63.8041 49.1357C64.0262 49.0163 64.2052 48.8407 64.3411 48.6087C64.4803 48.3767 64.5482 48.09 64.5449 47.7486Z" data-v-1d9e1be9></path><path d="M70.4748 46.5852V51H68.3569V43.3636H70.3753V44.7109H70.4648C70.6338 44.2668 70.9172 43.9155 71.3149 43.657C71.7127 43.3951 72.1949 43.2642 72.7617 43.2642C73.292 43.2642 73.7543 43.3802 74.1488 43.6122C74.5432 43.8442 74.8498 44.1757 75.0685 44.6065C75.2873 45.0341 75.3966 45.5445 75.3966 46.1378V51H73.2787V46.5156C73.282 46.0483 73.1627 45.6837 72.9208 45.4219C72.6788 45.1567 72.3457 45.0241 71.9215 45.0241C71.6364 45.0241 71.3846 45.0855 71.1658 45.2081C70.9504 45.3307 70.7813 45.5097 70.6587 45.745C70.5394 45.977 70.4781 46.2571 70.4748 46.5852Z" data-v-1d9e1be9></path></svg>',1),M=[V],H={class:"links"},k=e(()=>C("li",null,"About",-1)),w=e(()=>C("li",null,"Contact",-1)),g=e(()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[C("path",{d:"M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"})],-1)),Z=[g],B=r('<svg height="80" viewBox="0 0 76 52" xmlns="http://www.w3.org/2000/svg" data-v-1d9e1be9><path d="M44.6177 24.0586L38.1181 17.3926C37.9977 17.2682 37.8545 17.1694 37.6968 17.1021C37.5391 17.0347 37.3699 17 37.199 17C37.0282 17 36.859 17.0347 36.7012 17.1021C36.5435 17.1694 36.4003 17.2682 36.28 17.3926L19 35.1148L20.8381 37L37.199 20.2203L41.8606 25.0012L34.5992 32.4484L36.4373 34.3336L44.6177 25.9437C44.7389 25.8202 44.835 25.6733 44.9006 25.5116C44.9662 25.3498 45 25.1764 45 25.0012C45 24.826 44.9662 24.6525 44.9006 24.4907C44.835 24.329 44.7389 24.1821 44.6177 24.0586Z" data-v-1d9e1be9></path><path d="M54.1361 9.33328L46.7727 16.7808L38.8623 8.77865C38.6161 8.53023 38.3237 8.33354 38.002 8.19991C37.6803 8.06628 37.3356 7.99835 36.9878 8.00003C36.2923 8.00194 35.6256 8.28181 35.1331 8.77865L27 17.0128L28.8639 18.898L36.9971 10.6652L45.8421 19.6086C45.9642 19.7327 46.1093 19.8311 46.2691 19.8983C46.4289 19.9654 46.6003 20 46.7734 20C46.9464 20 47.1178 19.9654 47.2776 19.8983C47.4374 19.8311 47.5825 19.7327 47.7047 19.6086L56 11.2185L54.1361 9.33328Z" data-v-1d9e1be9></path><path d="M46 9C43.2428 9 41 6.98143 41 4.5C41 2.01857 43.2428 0 46 0C48.7571 0 51 2.01857 51 4.5C51 6.98143 48.7571 9 46 9ZM46 2.57143C44.8185 2.57143 43.8571 3.43671 43.8571 4.5C43.8571 5.56329 44.8185 6.42857 46 6.42857C47.1814 6.42857 48.1428 5.56329 48.1428 4.5C48.1428 3.43671 47.1814 2.57143 46 2.57143Z" data-v-1d9e1be9></path><path d="M9.86857 44.3828H7.69102C7.65125 44.1011 7.57004 43.8509 7.44741 43.6321C7.32478 43.41 7.16734 43.2211 6.97511 43.0653C6.78287 42.9096 6.56081 42.7902 6.30892 42.7074C6.06034 42.6245 5.79021 42.5831 5.49855 42.5831C4.97156 42.5831 4.51251 42.714 4.12142 42.9759C3.73032 43.2344 3.42705 43.6122 3.21161 44.1094C2.99618 44.6032 2.88846 45.2031 2.88846 45.9091C2.88846 46.6349 2.99618 47.2448 3.21161 47.7386C3.43036 48.2325 3.73529 48.6053 4.12639 48.8572C4.51749 49.1091 4.9699 49.2351 5.48363 49.2351C5.77198 49.2351 6.03879 49.197 6.28406 49.1207C6.53264 49.0445 6.75304 48.9335 6.94528 48.7876C7.13751 48.6385 7.29661 48.4579 7.42255 48.2457C7.55181 48.0336 7.6413 47.7917 7.69102 47.5199L9.86857 47.5298C9.81223 47.9972 9.67137 48.4479 9.44599 48.8821C9.22393 49.313 8.92397 49.6991 8.54613 50.0405C8.17161 50.3785 7.72416 50.647 7.2038 50.8459C6.68676 51.0414 6.10177 51.1392 5.44883 51.1392C4.54069 51.1392 3.72866 50.9337 3.01275 50.5227C2.30016 50.1117 1.73671 49.5168 1.32241 48.7379C0.911425 47.959 0.705933 47.0161 0.705933 45.9091C0.705933 44.7988 0.914739 43.8542 1.33235 43.0753C1.74997 42.2964 2.31673 41.7031 3.03264 41.2955C3.74855 40.8845 4.55394 40.679 5.44883 40.679C6.03879 40.679 6.58567 40.7618 7.08946 40.9276C7.59656 41.0933 8.04566 41.3352 8.43676 41.6534C8.82786 41.9683 9.14604 42.3544 9.3913 42.8118C9.63988 43.2692 9.79897 43.7929 9.86857 44.3828Z" data-v-1d9e1be9></path><path d="M14.8228 51.1491C14.0505 51.1491 13.3827 50.9851 12.8192 50.657C12.2591 50.3255 11.8266 49.8648 11.5216 49.2749C11.2167 48.6816 11.0642 47.9938 11.0642 47.2116C11.0642 46.4228 11.2167 45.7334 11.5216 45.1435C11.8266 44.5502 12.2591 44.0895 12.8192 43.7614C13.3827 43.4299 14.0505 43.2642 14.8228 43.2642C15.595 43.2642 16.2612 43.4299 16.8213 43.7614C17.3848 44.0895 17.819 44.5502 18.1239 45.1435C18.4288 45.7334 18.5813 46.4228 18.5813 47.2116C18.5813 47.9938 18.4288 48.6816 18.1239 49.2749C17.819 49.8648 17.3848 50.3255 16.8213 50.657C16.2612 50.9851 15.595 51.1491 14.8228 51.1491ZM14.8327 49.5085C15.184 49.5085 15.4774 49.4091 15.7127 49.2102C15.948 49.008 16.1253 48.733 16.2446 48.3849C16.3673 48.0369 16.4286 47.6409 16.4286 47.1967C16.4286 46.7526 16.3673 46.3565 16.2446 46.0085C16.1253 45.6605 15.948 45.3854 15.7127 45.1832C15.4774 44.9811 15.184 44.88 14.8327 44.88C14.4781 44.88 14.1798 44.9811 13.9378 45.1832C13.6992 45.3854 13.5186 45.6605 13.3959 46.0085C13.2766 46.3565 13.2169 46.7526 13.2169 47.1967C13.2169 47.6409 13.2766 48.0369 13.3959 48.3849C13.5186 48.733 13.6992 49.008 13.9378 49.2102C14.1798 49.4091 14.4781 49.5085 14.8327 49.5085Z" data-v-1d9e1be9></path><path d="M24.065 43.3636V44.9545H19.3519V43.3636H24.065ZM20.4307 51V42.8118C20.4307 42.2583 20.5384 41.7992 20.7539 41.4347C20.9726 41.0701 21.2709 40.7966 21.6488 40.6143C22.0266 40.4321 22.4558 40.3409 22.9364 40.3409C23.2612 40.3409 23.5579 40.3658 23.8263 40.4155C24.0981 40.4652 24.3003 40.5099 24.4328 40.5497L24.055 42.1406C23.9721 42.1141 23.8694 42.0893 23.7468 42.0661C23.6275 42.0429 23.5048 42.0312 23.3789 42.0312C23.0673 42.0312 22.8502 42.1042 22.7276 42.25C22.605 42.3925 22.5436 42.593 22.5436 42.8516V51H20.4307Z" data-v-1d9e1be9></path><path d="M29.4653 43.3636V44.9545H24.7523V43.3636H29.4653ZM25.8311 51V42.8118C25.8311 42.2583 25.9388 41.7992 26.1543 41.4347C26.373 41.0701 26.6713 40.7966 27.0492 40.6143C27.427 40.4321 27.8562 40.3409 28.3368 40.3409C28.6616 40.3409 28.9582 40.3658 29.2267 40.4155C29.4985 40.4652 29.7007 40.5099 29.8332 40.5497L29.4554 42.1406C29.3725 42.1141 29.2698 42.0893 29.1472 42.0661C29.0278 42.0429 28.9052 42.0312 28.7793 42.0312C28.4677 42.0312 28.2506 42.1042 28.128 42.25C28.0054 42.3925 27.944 42.593 27.944 42.8516V51H25.8311Z" data-v-1d9e1be9></path><path d="M33.9659 51.1491C33.1804 51.1491 32.5042 50.9901 31.9375 50.6719C31.374 50.3504 30.9398 49.8963 30.6349 49.3097C30.33 48.7197 30.1775 48.022 30.1775 47.2166C30.1775 46.4311 30.33 45.7417 30.6349 45.1484C30.9398 44.5552 31.369 44.0928 31.9226 43.7614C32.4794 43.4299 33.1323 43.2642 33.8814 43.2642C34.3851 43.2642 34.8541 43.3454 35.2883 43.5078C35.7258 43.6669 36.107 43.9072 36.4318 44.2287C36.7599 44.5502 37.0151 44.9545 37.1974 45.4418C37.3797 45.9257 37.4708 46.4924 37.4708 47.142V47.7237H31.0227V46.4112H35.4772C35.4772 46.1063 35.411 45.8362 35.2784 45.6009C35.1458 45.3655 34.9619 45.1816 34.7265 45.049C34.4945 44.9131 34.2244 44.8452 33.9162 44.8452C33.5947 44.8452 33.3096 44.9197 33.061 45.0689C32.8158 45.2147 32.6235 45.4119 32.4843 45.6605C32.3451 45.9058 32.2739 46.1792 32.2706 46.4808V47.7287C32.2706 48.1065 32.3402 48.433 32.4794 48.7081C32.6219 48.9832 32.8224 49.1953 33.0809 49.3445C33.3395 49.4936 33.646 49.5682 34.0007 49.5682C34.236 49.5682 34.4514 49.535 34.647 49.4688C34.8425 49.4025 35.0099 49.303 35.1491 49.1705C35.2883 49.0379 35.3944 48.8755 35.4673 48.6832L37.4261 48.8125C37.3267 49.2831 37.1228 49.6941 36.8146 50.0455C36.5097 50.3935 36.1153 50.6652 35.6314 50.8608C35.1508 51.053 34.5956 51.1491 33.9659 51.1491Z" data-v-1d9e1be9></path><path d="M42.3331 51.1491C41.5476 51.1491 40.8714 50.9901 40.3047 50.6719C39.7412 50.3504 39.307 49.8963 39.0021 49.3097C38.6972 48.7197 38.5447 48.022 38.5447 47.2166C38.5447 46.4311 38.6972 45.7417 39.0021 45.1484C39.307 44.5552 39.7362 44.0928 40.2897 43.7614C40.8466 43.4299 41.4995 43.2642 42.2485 43.2642C42.7523 43.2642 43.2213 43.3454 43.6555 43.5078C44.093 43.6669 44.4742 43.9072 44.799 44.2287C45.1271 44.5502 45.3823 44.9545 45.5646 45.4418C45.7469 45.9257 45.838 46.4924 45.838 47.142V47.7237H39.3899V46.4112H43.8444C43.8444 46.1063 43.7781 45.8362 43.6456 45.6009C43.513 45.3655 43.329 45.1816 43.0937 45.049C42.8617 44.9131 42.5916 44.8452 42.2833 44.8452C41.9619 44.8452 41.6768 44.9197 41.4282 45.0689C41.183 45.2147 40.9907 45.4119 40.8515 45.6605C40.7123 45.9058 40.6411 46.1792 40.6378 46.4808V47.7287C40.6378 48.1065 40.7074 48.433 40.8466 48.7081C40.9891 48.9832 41.1896 49.1953 41.4481 49.3445C41.7066 49.4936 42.0132 49.5682 42.3679 49.5682C42.6032 49.5682 42.8186 49.535 43.0142 49.4688C43.2097 49.4025 43.3771 49.303 43.5163 49.1705C43.6555 49.0379 43.7616 48.8755 43.8345 48.6832L45.7933 48.8125C45.6939 49.2831 45.49 49.6941 45.1818 50.0455C44.8769 50.3935 44.4824 50.6652 43.9985 50.8608C43.518 51.053 42.9628 51.1491 42.3331 51.1491Z" data-v-1d9e1be9></path><path d="M50.5001 51V40.8182H54.5172C55.2861 40.8182 55.9424 40.9557 56.4859 41.2308C57.0328 41.5026 57.4488 41.8887 57.7338 42.3892C58.0222 42.8864 58.1663 43.4714 58.1663 44.1442C58.1663 44.8203 58.0205 45.402 57.7288 45.8892C57.4372 46.3731 57.0146 46.7443 56.4611 47.0028C55.9109 47.2614 55.2447 47.3906 54.4625 47.3906H51.7729V45.6605H54.1145C54.5255 45.6605 54.8669 45.6042 55.1386 45.4915C55.4104 45.3788 55.6126 45.2098 55.7452 44.9844C55.8811 44.759 55.949 44.4789 55.949 44.1442C55.949 43.8061 55.8811 43.5211 55.7452 43.2891C55.6126 43.0571 55.4088 42.8814 55.1337 42.7621C54.8619 42.6394 54.5188 42.5781 54.1045 42.5781H52.6528V51H50.5001ZM55.9987 46.3665L58.5293 51H56.1528L53.677 46.3665H55.9987Z" data-v-1d9e1be9></path><path d="M64.5449 47.7486V43.3636H66.6628V51H64.6294V49.6129H64.5499C64.3775 50.0604 64.0908 50.42 63.6898 50.6918C63.292 50.9635 62.8065 51.0994 62.2331 51.0994C61.7227 51.0994 61.2736 50.9834 60.8858 50.7514C60.498 50.5194 60.1947 50.1896 59.976 49.7621C59.7606 49.3345 59.6512 48.8224 59.6479 48.2259V43.3636H61.7658V47.848C61.7691 48.2988 61.8901 48.6551 62.1287 48.9169C62.3673 49.1787 62.6872 49.3097 63.0882 49.3097C63.3434 49.3097 63.5821 49.2517 63.8041 49.1357C64.0262 49.0163 64.2052 48.8407 64.3411 48.6087C64.4803 48.3767 64.5482 48.09 64.5449 47.7486Z" data-v-1d9e1be9></path><path d="M70.4748 46.5852V51H68.3569V43.3636H70.3753V44.7109H70.4648C70.6338 44.2668 70.9172 43.9155 71.3149 43.657C71.7127 43.3951 72.1949 43.2642 72.7617 43.2642C73.292 43.2642 73.7543 43.3802 74.1488 43.6122C74.5432 43.8442 74.8498 44.1757 75.0685 44.6065C75.2873 45.0341 75.3966 45.5445 75.3966 46.1378V51H73.2787V46.5156C73.282 46.0483 73.1627 45.6837 72.9208 45.4219C72.6788 45.1567 72.3457 45.0241 71.9215 45.0241C71.6364 45.0241 71.3846 45.0855 71.1658 45.2081C70.9504 45.3307 70.7813 45.5097 70.6587 45.745C70.5394 45.977 70.4781 46.2571 70.4748 46.5852Z" data-v-1d9e1be9></path></svg>',1),f=[B],x=e(()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[C("path",{d:"M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"})],-1)),z={class:"amount"},O=e(()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[C("path",{d:"M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"})],-1)),T=[O],y={key:2,class:"mobileMenu"},S={class:"top-container"},I=e(()=>C("div",{class:"search-container"},[C("input",{class:"search",type:"text",placeholder:"Search"})],-1)),F=e(()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[C("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})],-1)),N=[F],E=e(()=>C("div",{class:"content"},[C("ul",null,[C("li",null,"Coffee"),C("li",null,"Apparel"),C("li",null,"Gear"),C("li",null,"Subscriptions"),C("li",null,"Locations"),C("li",null,"Tall Tails Blog"),C("li",null,"About"),C("li",null,"Contact")])],-1)),P={class:"top-container"},q=e(()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[C("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})],-1)),A=[q],$=e(()=>C("div",{class:"title"},"Shopping Cart",-1)),D={class:"amount"},G={class:"content-container"},K={class:"item-image"},Q=["src"],U={class:"item-details"},Y={class:"item-name"},j={class:"item-price"},J={class:"item-quantity"},R=["onClick"],W=e(()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[C("path",{d:"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"})],-1)),X=[W],C4={class:"bottom-container"},t4={class:"top"},s4=e(()=>C("div",{class:"total-title"},"Total",-1)),e4={class:"total-amount"},a4={class:"bottom"};function o4(l,t,p,l4,a,o){return d(),i(h,null,[p.isMobile?(d(),i("div",{key:1,class:c(["navbar-mobile",{scrolled:a.scrolled}])},[C("div",{class:"logo",onClick:t[4]||(t[4]=s=>o.navTo(""))},f),C("div",{class:"button",onClick:t[5]||(t[5]=s=>a.isBasketOpen=!0)},[x,C("div",z,n(o.basketCount),1)]),C("div",{class:"button",onClick:t[6]||(t[6]=s=>a.mobileMenuVisible=!0)},T)],2)):(d(),i("div",{key:0,class:c(["navbar",{scrolled:a.scrolled}])},[C("div",{class:"logo",onClick:t[0]||(t[0]=s=>o.navTo(""))},M),C("div",H,[C("ul",null,[C("li",{onClick:t[1]||(t[1]=s=>o.navTo("products"))},"Products"),C("li",{onClick:t[2]||(t[2]=s=>o.navTo("locations"))},"Locations"),k,w,C("li",{class:"basket-icon",onClick:t[3]||(t[3]=s=>a.isBasketOpen=!0)},Z)])])],2)),a.mobileMenuVisible?(d(),i("div",y,[C("div",S,[I,C("div",{class:"close",onClick:t[7]||(t[7]=s=>a.mobileMenuVisible=!1)},N)]),E])):v("",!0),a.isBasketOpen?(d(),i("div",{key:3,class:"basket",onMouseenter:t[10]||(t[10]=s=>a.mouseOutsideBasket=!1),onMouseleave:t[11]||(t[11]=s=>a.mouseOutsideBasket=!0)},[C("div",P,[C("div",{class:"close",onClick:t[8]||(t[8]=s=>a.isBasketOpen=!1)},A),$,C("div",D,n(o.basketCount),1)]),C("div",G,[(d(!0),i(h,null,u(o.basketItems,s=>(d(),i("div",{key:s.id,class:"item"},[C("div",K,[C("img",{src:s.image,alt:"item.name"},null,8,Q)]),C("div",U,[C("div",Y,n(s.name),1),C("div",j,"$"+n(s.price.toFixed(2)),1),C("div",J,"Quantity: "+n(s.quantity),1)]),C("div",{class:"item-remove",onClick:i4=>o.removeFromBasket(s)},X,8,R)]))),128))]),C("div",C4,[C("div",t4,[s4,C("div",e4,"$"+n(o.basketTotalPrice),1)]),C("div",a4,[C("div",{class:"checkout",onClick:t[9]||(t[9]=s=>o.navTo("checkout"))},"CHECKOUT")])])],32)):v("",!0)],64)}const c4=L(m,[["render",o4],["__scopeId","data-v-1d9e1be9"]]);export{c4 as default};
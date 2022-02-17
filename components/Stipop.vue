<template>
  <div>
      <h3 class="text-center">Stipop Test</h3>


          <h3 class="text-center"> 전송 스티커 </h3>
      <div>
          <img class="w-32" v-for="(list,i) in send_list" :key="i" :src="list"/>
      </div>



      <div class="text-center flex-auto flex space-x-3 p-2">
          <button class="w-1/3 flex items-center justify-center rounded-md bg-black text-white ocus:outline-none focus:ring-4 focus:ring-black-500 focus:ring-opacity-50" 

                    @click="click_type('recent')"> 최근사용 </button>
          <button class="w-1/3 flex items-center justify-center rounded-md bg-black text-white ocus:outline-none focus:ring-4 focus:ring-black-500 focus:ring-opacity-50" @click="click_type('hello')"> 채팅 스티커 '헬로' </button>
          <button class="w-1/3 flex items-center justify-center rounded-md bg-black text-white ocus:outline-none focus:ring-4 focus:ring-black-500 focus:ring-opacity-50" @click="get_camera()"> 카메라 스티커  </button>
          <button class="w-1/3 flex items-center justify-center rounded-md bg-black text-white ocus:outline-none focus:ring-4 focus:ring-black-500 focus:ring-opacity-50" @click="get_profile()"> 프로필 스티커  </button>

      </div>

      <div class="flex space-x-3 row border">
        <div v-for="(list,i) in stipop_list" :key=" i" class="">
            <button @click="send_stipop(list.stickerId,list.stickerImg)">
                 <img class="w-32 col-auto" :src="list.stickerImg"/>
            </button>
        </div>
      </div>

       <div class="flex space-x-3 row border">
        <div v-for="(list,i) in stipop_list" :key=" i" class="">
            <button @click="send_stipop(list.stickerId,list.packageImg)">
                 <img class="w-32 col-auto" :src="list.packageImg"/>
            </button>
        </div>
      </div>


     
      


  </div>
</template>

<script>
export default {
    data(){
        return{
            stipop_list:[],
            send_list:[],
        }

    },
    
    methods:{
        click_type(type) {
            var url = '';
            switch(type) {
                case "recent" :
                    url  = '/search/recent?userId=9937'
                    break;
                case "hello" :
                    url  = '/search?userId=9937&q=hello&lang=en&pageNumber=1&limit=30'
                    break;
                case "sad" :
                    url  = '/search?userId=9937&q=sad&lang=en&pageNumber=1&limit=30'
                    break;
            }
            this.get_stipop(url);
            // this.get_stipop('search?userId=9937&q=hello&lang=en&pageNumber=1&limit=30');
        },
    
        async send_stipop(id,img){
            
            var vm =this;
             vm.send_list.push(img);

            // return;

            const send = await this.$axios.post(
                '/api2/v1/analytics/send/'+id+'?userId=123123',
                {
                    
                  headers: { apikey:"ba2493568c4eab1ba705e05e7ad93128" },
                },
            )
            .then((response) => {
                vm.send_list.push(img)
                console.log(response.data)
            }).catch((error) => {
                console.warn(error);
            });

        },
        async get_stipop(url){
            console.log(url)
            const stipop = await this.$axios.get('/api2/v1'+url,{
                headers:{
                    
                    apikey:'6f361d4abf2b4dd71920ccfdfdc951ee'
                }
            })
            this.stipop_list = stipop.data.body.stickerList;
            console.log(stipop)
        },
        async get_camera(){
            const stipop = await this.$axios.get(`/api/v1/package?userId=111`,{
                headers:{
                    apikey:'6f361d4abf2b4dd71920ccfdfdc951ee'
                }
            })
            this.stipop_list = stipop.data.body.packageList;
            console.log(stipop)
        },
        async get_profile(){
            const stipop = await this.$axios.get('https://profile.stipop.io/v1/package?userId=12300',{
                headers:{
                    apikey:'6f361d4abf2b4dd71920ccfdfdc951ee'
                }
            })
            this.stipop_list = stipop.data.body.stickerList;
            console.log(stipop)
        },
     
    },
    created(){
        this.get_stipop();
    }

}
</script>

<style>

</style>
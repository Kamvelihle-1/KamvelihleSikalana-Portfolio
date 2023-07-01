<template>
    <footer class="container-fluid ">
        <div class="row contacts p-1 ">
            <h5 class="display-5 m-2">Contact Information</h5>
            <p class="m-2"><i class="bi bi-house-door-fill "></i> Cape Town,South Africa</p>
            <p class="m-2"><i class="bi bi-envelope-at "></i> ksikalana@gmail.com</p>
            <p class="m-2"><i class="bi bi-telephone-inbound-fill "></i> 083 475 7606</p>
        </div>
        <div class="row copy ">
            <div class="col-sm-6 col-12  p-0">
                <p>Copyright &copy; {{ cYear}} by Kamvelihle Sikalana</p>
             
            </div>
            <div class="col-sm-6 col-12 p-0">
                <ul>
                    <li class="list-inline-item "><a target="_blank" href="https://www.linkedin.com/in/kamvelihle-sikalana-4884a4198" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="bi bi-linkedin"></i></a></li>
                    <li class="list-inline-item"><a target="_blank" href="https://github.com/SmasherK" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="bi bi-github"></i></a></li>
                </ul>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        data(){
            return{
                cYear:new Date().getFullYear()
            }
        }
        
    }
</script>

<style scoped>
.copy{
    background-color: #06283d;
    color: #f3f2e9;
}
.contacts{
    background-color: #06283d;
    opacity: .75;
    color: #f3f2e9;
}
.list-inline-item:hover{
    transform: translateY(0.5rem);
    transition: top 0.5s, opacity 0.5s ;
    
}

</style>
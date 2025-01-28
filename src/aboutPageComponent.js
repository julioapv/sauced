export const aboutPageComponent = () => {
    const componentData = {
        imgUrl: "/cook-crew.jpg"
    };
    
    return `
    <div>
        <h1 class="text-2xl md:text-5xl font-bold text-center">About our Restaurant</h1>
        
        <div class="flex flex-col items-center justify-center gap-2 p-5">
            <img src="${componentData.imgUrl}" alt="Cook crew" class="md:w-6/12 mb-5 rounded-lg">
            <p class="text-center text-md md:text-2xl md:max-w-1/2">
                Welcome to sauced, the ultimate destination for spice lovers and the curious. Our bold, globally inspired dishes are crafted to thrill your taste buds and awaken your senses. Whether you crave heat or are ready to explore, every bite is an adventure. Book your table now and experience the fire!
            </p>
        </div>
</div>
    `
};
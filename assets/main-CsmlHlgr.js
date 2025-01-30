(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=()=>{const s={imgUrl:"assets/pexels-restaurant-min.jpg",title:"The hottest place around",description:"A unique experience for the lovers of spicy food and those who are curious about new sensations, book a table now and don't miss out.",buttonText:"Book now"};return`
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="block md:flex p-6 justify-evenly">
          <div class="flex flex-col items-center justify-center gap-4 mb-5 lg:max-w-1/2">
            <h3 class="text-2xl md:text-3xl font-bold text-center">${s.title}</h3>
            <p class="text-xs sm:text-xl md:text-3xl">${s.description}</p>
            <button class="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">${s.buttonText}</button>
          </div>
          <img src="${s.imgUrl}" alt="restaurant image" class="md:w-90 rounded-lg">
        </div>
    </div>  
    `},u=()=>`
    <div class="container mx-auto px-4 py-8">
        <div class="mb-8">
            <h1 class="text-2xl md:text-5xl font-bold text-center mb-4">Our menu</h1>
            <p class="text-center text-lg">Enjoy our lastest selection of dishes coming straight from the diverse kitchens in Asia</p>
        </div>
        <div class="flex flex-col items-center justify-center md:flex-row md:justify-center flex-wrap gap-5">
            ${[{name:"Golden egg curry",imgUrl:"assets/dish-1.jpg",description:"soft-boiled eggs in a rich and creamy spiced curry sauce, garnished with fresh herbs.",price:12.99},{name:"Sticky sesame noodles",imgUrl:"assets/dish-2.jpg",description:"savory noodles topped with crispy sesame-glazed meatballs and scallions.",price:14.49},{name:"Grilled fusion platter",imgUrl:"assets/dish-3.jpg",description:"grilled fish and chicken paired with turmeric rice and sautéed vegetables.",price:18.99},{name:"Crispy pork bowl",imgUrl:"assets/dish-4.jpg",description:"crispy pork belly on rice with lettuce, caramelized onions, and chili garnish.",price:13.99},{name:"Rainbow shrimp bowl",imgUrl:"assets/dish-5.jpg",description:"a vibrant mix of shrimp, fresh veggies, and sesame seeds over greens.",price:15.49},{name:"Salmon poke bowl",imgUrl:"assets/dish-6.jpg",description:"diced salmon, avocado, edamame, cucumber, and sesame seeds on a bed of rice.",price:16.99}].map(o=>`        
        <div class="w-full md:w-72 h-96 flex flex-col bg-amber-500 rounded-xl shadow overflow-hidden">
            <h2 class="font-bold text-xl md:text-2xl text-center py-3">${o.name}</h2>
            <div class="h-40 w-full flex-shrink-0">
                <img src="${o.imgUrl}" alt="${o.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 flex flex-col items-center justify-between p-4 overflow-y-auto">
                <p class="md:text-lg italic">${o.description}</p>
                <p>Price: <span class="font-bold">$${o.price}</span></p>
            </div>
        </div>`).join("")}
        </div>
    </div>
    `,m=()=>`
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="w-full max-w-2xl bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg p-6 m-4">
            <h2 class="text-2xl md:text-5xl font-bold text-center mb-6">Booking</h2>
            <p class="text-lg text-gray-700 mb-8 text-center">
                To book a table fill the form with the date and time you have in mind and we will get in contact with you as soon as we get your form
            </p>
            
            <form class="space-y-6">
                <div class="text-center">
                    <label for="name" class="block text-lg md:text-xl mb-2">Name:</label>
                    <div class="flex justify-center">
                        <input 
                            type="text" 
                            id="name" 
                            name="user_name" 
                            class="w-full md:w-2/3 px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                </div>

                <div class="text-center">
                    <label for="mail" class="block text-lg md:text-xl mb-2">Email:</label>
                    <div class="flex justify-center">
                        <input 
                            type="email" 
                            id="mail" 
                            name="user_email" 
                            class="w-full md:w-2/3 px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                </div>

                <div class="text-center">
                    <label for="msg" class="block text-lg md:text-xl mb-2">Message:</label>
                    <div class="flex justify-center">
                        <textarea 
                            id="msg" 
                            name="user_message" 
                            class="w-full md:w-2/3 px-4 py-2 border border-yellow-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        ></textarea>
                    </div>
                </div>

                <div class="text-center">
                    <button 
                        type="button" 
                        class="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                    >
                        Send your message
                    </button>
                </div>
            </form>
        </div>
    </div>
    `,f=()=>`
    <div>
        <h1 class="text-2xl md:text-5xl font-bold text-center">About our Restaurant</h1>
        
        <div class="flex flex-col items-center justify-center gap-2 p-5">
            <img src="${{imgUrl:"assets/cook-crew.jpg"}.imgUrl}" alt="Cook crew" class="md:w-6/12 mb-5 rounded-lg">
            <p class="text-center text-md md:text-2xl md:max-w-1/2">
                Welcome to sauced, the ultimate destination for spice lovers and the curious. Our bold, globally inspired dishes are crafted to thrill your taste buds and awaken your senses. Whether you crave heat or are ready to explore, every bite is an adventure. Book your table now and experience the fire!
            </p>
        </div>
</div>
    `,n=document.querySelector("#app"),p=document.querySelector("#links-container"),c=d(),g=u(),x=m(),b=f();p.addEventListener("click",s=>{switch(s.target.id){case"home-button":i(),n.innerHTML=c;break;case"menu-button":i(),n.innerHTML=g;break;case"booking-button":i(),n.innerHTML=x;break;case"about-button":i(),n.innerHTML=b;break}});function i(){n.innerHTML=""}n.innerHTML=c;

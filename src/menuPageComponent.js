export const menuPageComponent = () => {
    
    const dishes = [
        {
            name: "Golden egg curry",
            imgUrl: "/dish-1.jpg",
            description: "soft-boiled eggs in a rich and creamy spiced curry sauce, garnished with fresh herbs.",
            price: 12.99
        },
        {
            name: "Sticky sesame noodles",
            imgUrl: "/dish-2.jpg",
            description: "savory noodles topped with crispy sesame-glazed meatballs and scallions.",
            price: 14.49
        },
        {
            name: "Grilled fusion platter",
            imgUrl: "/dish-3.jpg",
            description: "grilled fish and chicken paired with turmeric rice and sautéed vegetables.",
            price: 18.99
        },
        {
            name: "Crispy pork bowl",
            imgUrl: "/dish-4.jpg",
            description: "crispy pork belly on rice with lettuce, caramelized onions, and chili garnish.",
            price: 13.99
        },
        {
            name: "Rainbow shrimp bowl",
            imgUrl: "/dish-5.jpg",
            description: "a vibrant mix of shrimp, fresh veggies, and sesame seeds over greens.",
            price: 15.49
        },
        {
            name: "Salmon poke bowl",
            imgUrl: "/dish-6.jpg",
            description: "diced salmon, avocado, edamame, cucumber, and sesame seeds on a bed of rice.",
            price: 16.99
        }
    ];
    
    const dishesContainer = dishes.map(dish => {
        return `        
        <div class="w-full md:w-72 h-96 flex flex-col bg-amber-500 rounded-xl shadow overflow-hidden">
            <h2 class="font-bold text-xl md:text-2xl text-center py-3">${dish.name}</h2>
            <div class="h-40 w-full flex-shrink-0">
                <img src="${dish.imgUrl}" alt="${dish.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 flex flex-col items-center justify-between p-4 overflow-y-auto">
                <p class="md:text-lg italic">${dish.description}</p>
                <p>Price: <span class="font-bold">$${dish.price}</span></p>
            </div>
        </div>`
    }).join('');
    
    return `
    <div class="container mx-auto px-4 py-8">
        <div class="mb-8">
            <h1 class="text-2xl md:text-5xl font-bold text-center mb-4">Our menu</h1>
            <p class="text-center text-lg">Enjoy our lastest selection of dishes coming straight from the diverse kitchens in Asia</p>
        </div>
        <div class="flex flex-col items-center justify-center md:flex-row md:justify-center flex-wrap gap-5">
            ${dishesContainer}
        </div>
    </div>
    `
};
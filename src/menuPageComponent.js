export const menuPageComponent = () => {
    
    const dishes = [
        {
            name: "Golden egg curry",
            imgUrl: "/dish-1.jpg",
            description: "soft-boiled eggs in a rich and creamy spiced curry sauce, garnished with fresh herbs."
        },
        {
            name: "Sticky sesame noodles",
            imgUrl: "/dish-2.jpg",
            description: "savory noodles topped with crispy sesame-glazed meatballs and scallions."
        },
        {
            name: "Grilled fusion platter",
            imgUrl: "/dish-3.jpg",
            description: "grilled fish and chicken paired with turmeric rice and sautéed vegetables."
        },
        {
            name: "Crispy pork bowl",
            imgUrl: "/dish-4.jpg",
            description: "crispy pork belly on rice with lettuce, caramelized onions, and chili garnish."
        },
        {
            name: "Rainbow shrimp bowl",
            imgUrl: "/dish-5.jpg",
            description: "a vibrant mix of shrimp, fresh veggies, and sesame seeds over greens."
        },
        {
            name: "Salmon poke bowl",
            imgUrl: "/dish-6.jpg",
            description: "diced salmon, avocado, edamame, cucumber, and sesame seeds on a bed of rice."
        }
    ];    

    const dishesContainer = dishes.map(dish => {
        return `        
        <div class="flex flex-col items-center justify-center p-3 gap-2 w-90 bg-amber-500 rounded-xl shadow">
            <h2 class="font-bold text-xl md:text-3xl">${dish.name}</h2>
            <img src="${dish.imgUrl}" alt="restaurant image" class="w-35 md:w-90">
            <p class="md:text-xl italic">${dish.description}</p>
        </div>`
    }).join('');

    return `
    <div>
        <h1 class="text-2xl md:text-5xl font-bold text-center">Our menu</h1>
        <p class="text-center">Enjoy our lastest selection of dishes coming straight from the diverse kitchens in Asia</p>
    </div>
    <div class="flex flex-col md:flex-row gap-5 p-5">
        ${dishesContainer}
    </div>
    `
};
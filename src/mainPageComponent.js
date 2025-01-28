export const createMainPageComponent = () => {
    const componentData = {
      imgUrl: "/pexels-restaurant-min.jpg",
      title: "The hottest place around",
      description: "A unique experience for the lovers of spicy food and those who are curious about new sensations, book a table now and don't miss out.",
      buttonText: "Book now"
    };
  
    return `
      <div class="block md:flex p-6 justify-evenly">
        <div class="flex flex-col items-center justify-center gap-4 mb-5 lg:max-w-1/2">
          <h3 class="text-2xl md:text-3xl font-bold text-center">${componentData.title}</h3>
          <p class="text-xs md:text-2xl">${componentData.description}</p>
          <button class="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50">${componentData.buttonText}</button>
        </div>
        <img src="${componentData.imgUrl}" alt="restaurant image" class="md:w-90 rounded-lg">
      </div>
    `;
  };
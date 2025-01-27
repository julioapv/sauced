export const createMainPageComponent = () => {
    const componentData = {
      imgUrl: "/pexels-restaurant-min.jpg",
      title: "The hottest place around",
      description: "A unique experience for the lovers of spicy food and those who are curious about new sensations, book a table now and don't miss out.",
      buttonText: "Book now"
    };
  
    return `
      <div class="block md:flex p-6">
        <div class="block md:flex md:p-10 flex-col justify-around">
          <h3>${componentData.title}</h3>
          <p>${componentData.description}</p>
          <button class="px-1 py-2 rounded-sm max-w-fit bg-amber-400">${componentData.buttonText}</button>
        </div>
        <img src="${componentData.imgUrl}" alt="restaurant image" class="md:w-90">
      </div>
    `;
  };
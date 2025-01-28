export const bookingPageComponent = () => {
    return `
    <div class="max-w-4/5 md:max-w-2xl mx-auto p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg">
        <h2 class="text-2xl md:text-5xl font-bold text-center mb-6">Booking</h2>
        <p class="text-lg text-gray-700 mb-8 text-center">
            To book a table fill the form with the date and time you have in mind and we will get in contact with you as soon as we get your form
        </p>
        
        <form class="space-y-6">
            <div class="text-center">
                <label for="name" class="block text-lg md:text-xl mb-2">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="user_name" 
                    class="w-full md:w-2/3 px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
            </div>

            <div class="text-center">
                <label for="mail" class="block text-lg md:text-xl mb-2">Email:</label>
                <input 
                    type="email" 
                    id="mail" 
                    name="user_email" 
                    class="w-full md:w-2/3 px-4 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
            </div>

            <div class="text-center">
                <label for="msg" class="block text-lg md:text-xl mb-2">Message:</label>
                <textarea 
                    id="msg" 
                    name="user_message" 
                    class="w-full md:w-2/3 px-4 py-2 border border-yellow-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                ></textarea>
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
    `
};
const puppies = [
    {name: 'Luna', breed: 'Golden Retriever', age: '3 months', description: 'Playful and loving', price: '$1200', imageUrl: './img/1.jpg', buttonText: 'Adopt Luna'},
    {name: 'Max', breed: 'German Shepherd', age: '2 months', description: 'Smart and loyal', price: '$1100', imageUrl: './img/2.jpg', buttonText: 'Adopt Max'},
    {name: 'Bella', breed: 'French Bulldog', age: '3 months', description: 'Curious and energetic', price: '$1500', imageUrl: './img/3.jpg', buttonText: 'Adopt Bella'},
    {name: 'Charlie', breed: 'Beagle', age: '2months', description: 'Friendly and fun-loving', price: '$1000', imageUrl: './img/4.jpg', buttonText: 'Adopt Charlie'},
    {name: 'Daisy', breed: 'Labrador', age: '2 months', description: 'Gentle and playful', price: '$1200', imageUrl: './img/5.jpg', buttonText: 'Adopt Daisy'},
    {name: 'Rocky', breed: 'Poodle', age: '3 months', description: 'Intelligent and loyal', price: '$1300', imageUrl: './img/6.jpg', buttonText: 'Adopt Rocky'},
    {name: 'Sadie', breed: 'Chihuahua', age: '1 month', description: 'Tiny but brave', price: '$800', imageUrl: './img/7.jpg', buttonText: 'Adopt Sadie'},
    {name: 'Oscar', breed: 'Cocker Spaniel', age: '2months', description: 'Loyal and loving', price: '$1100', imageUrl: './img/8.jpg', buttonText: 'Adopt Oscar'},
    {name: 'Rex', breed: 'Rottweiler', age: '2months', description: 'Strong and protective', price: '$1400', imageUrl: './img/9.jpg', buttonText: 'Adopt Rex'},
    {name: 'Penny', breed: 'Pomeranian', age: '2 months', description: 'Fluffy and energetic', price: '$1100', imageUrl: './img/10.jpg', buttonText: 'Adopt Penny'},
    {name: 'Lola', breed: 'Shih Tzu', age: '1.5months', description: 'Affectionate and playful', price: '$1300', imageUrl: './img/11.jpg', buttonText: 'Adopt Lola'},
    {name: 'Jack', breed: 'Boxer', age: '3months', description: 'Energetic and playful', price: '$1200', imageUrl: './img/12.jpg', buttonText: 'Adopt Jack'},
    {name: 'Milo', breed: 'Yorkshire Terrier', age: '2 months', description: 'Small but mighty', price: '$900', imageUrl: './img/13.jpg', buttonText: 'Adopt Milo'},
    {name: 'Gizmo', breed: 'Dachshund', age: '2 month', description: 'Curious and brave', price: '$950', imageUrl: './img/14.jpg', buttonText: 'Adopt Gizmo'},
    {name: 'Ruby', breed: 'Australian Shepherd', age: '3months', description: 'Active and intelligent', price: '$1500', imageUrl: './img/15.jpg', buttonText: 'Adopt Ruby'},
    {name: 'Zoe', breed: 'Siberian Husky', age: '3 months', description: 'Energetic and playful', price: '$1800', imageUrl: './img/16.jpg', buttonText: 'Adopt Zoe'},
    {name: 'Buddy', breed: 'Border Collie', age: '2 months', description: 'Loyal and hardworking', price: '$1100', imageUrl: './img/17.jpg', buttonText: 'Adopt Buddy'},
    {name: 'Maggie', breed: 'Bichon Frise', age: '3 months', description: 'Friendly and fluffy', price: '$1200', imageUrl: './img/18.jpg', buttonText: 'Adopt Maggie'},
    {name: 'Sasha', breed: 'Havanese', age: '3 months', description: 'Playful and affectionate', price: '$1300', imageUrl: './img/19.jpg', buttonText: 'Adopt Sasha'},
    {name: 'Toby', breed: 'Maltese', age: '2 months', description: 'Gentle and loving', price: '$1000', imageUrl: './img/20.jpg', buttonText: 'Adopt Toby'}
];

const puppiesGrid = document.querySelector('.puppies-grid');

puppies.forEach(puppy => {
    const puppyCard = document.createElement('div');
    puppyCard.classList.add('puppy-card');

    puppyCard.innerHTML = `
        <div class="puppy-image" style="background-image: url(${puppy.imageUrl})"></div>
        <div class="puppy-info">
            <h3>${puppy.name}</h3>
            <p>${puppy.breed} • ${puppy.age}</p>
            <p>${puppy.description}</p>
            <p class="price">${puppy.price}</p>
            <a href="#" class="adopt-button">${puppy.buttonText}</a>
        </div>
    `;

    puppiesGrid.appendChild(puppyCard);
});
// Select the hamburger menu and navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the 'active' class on the navigation links when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
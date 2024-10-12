import img1 from '../asset/images1/hats.png'
import img2 from '../asset/images1/hats2.png'
import img3 from '../asset/images1/hats3.webp'
import img4 from '../asset/images1/hats4.png'
import img5 from '../asset/images1/hats5.png'
import img6 from '../asset/images1/hats6.png'
import img7 from '../asset/images1/man1.png'
import img8 from '../asset/images1/man2.png'
import img9 from '../asset/images1/man3.png'
import img10 from '../asset/images1/man4.png'
import img11 from '../asset/images1/man5.png'
import img12 from '../asset/images1/man6.jpeg'
import img13 from '../asset/images1/man7.png'
import img14 from '../asset/images1/man8.png'
import img15 from '../asset/images1/man9.png'
import img16 from '../asset/images1/man10.jpeg'
import img17 from '../asset/images1/man11.png'
import img18 from '../asset/images1/shoe.webp'
import img19 from '../asset/images1/shoe2.png'
import img20 from '../asset/images1/shoe3.png'
import img21 from '../asset/images1/shoe4.png'
import img22 from '../asset/images1/shoe5.png'
import img23 from '../asset/images1/shoe6.png'
import img24 from '../asset/images1/shoe7.webp'
import img25 from '../asset/images1/shoe8.png'
import img26 from '../asset/images1/shoe9.png'
import img27 from '../asset/images1/woman.png'
import img28 from '../asset/images1/woman2.jpg'
import img29 from '../asset/images1/woman3.jpg'
import img30 from '../asset/images1/woman4.jpg'
import img31 from '../asset/images1/woman5.png'
import img32 from '../asset/images1/woman6.png'
import img33 from '../asset/images1/woman7.png'
import img34 from '../asset/images1/woman8.jpeg'
import img35 from '../asset/images1/woman9.png'
import img36 from '../asset/images1/woman10.jpeg'
import img37 from '../asset/images1/woman11.png'
import img38 from '../asset/images1/woman12.png'
import img39 from '../asset/images1/woman13.webp'
import img40 from '../asset/images1/woman13.jpeg'
import img42 from '../asset/images1/woman14.jpeg'
import img41 from '../asset/images1/woman15.png'
import carousel from '../asset/images1/carousel1.webp';
import carouse1l from '../asset/images1/carousel99.webp';
import carouse22 from '../asset/images1/carousel22.webp';
import carouse33 from '../asset/images1/carousel33.webp';
import carouse55 from '../asset/images1/carousel44.webp';
import carouse66 from '../asset/images1/carousel55.webp';
import carouse77 from '../asset/images1/carousel66.webp';
import carouse88 from '../asset/images1/carousel77.webp';
import carouse99 from '../asset/images1/hats-icon.png';
import carouse210 from '../asset/images1/carousel210.webp';
import menIcon from '../asset/images1/shoe.webp'

 const myProducts1 = [
    { id: 1, name: 'Bradford Casual Fedora', category: 'men', productType: 'hats', price: 25, description: 'A stylish fedora, perfect for casual outings or adding a touch of flair to your wardrobe.', img: img1 },
    { id: 2, name: 'Easton Classic Cap', category: 'men', productType: 'hats', price: 20, description: 'A casual hat with a modern design, ideal for everyday wear.', img: img2 },
    { id: 3, name: 'Summit Sports Cap', category: 'men', productType: 'hats', price: 22, description: 'A lightweight and sporty cap, perfect for outdoor activities and athletic wear.', img: img3 },
    { id: 4, name: 'Serena Vintage Sun Hat', category: 'women', productType: 'hats', price: 30, description: 'An elegant vintage-style sun hat, adding a timeless touch to your summer look.', img: img4 },
    { id: 5, name: 'Sophia Luxe Event Hat', category: 'women', productType: 'hats', price: 35, description: 'A chic luxury hat, designed for special occasions and formal events.', img: img5 },
    { id: 6, name: 'Aria Casual Knit Hat', category: 'women', productType: 'hats', price: 28, description: 'A comfortable and trendy knit hat for cool weather and casual outings.', img: img6 },
    { id: 7, name: 'Aiden Slim Fit Suit', category: 'men', productType: 'clothes', price: 50, description: 'A classic slim fit suit with a modern twist, perfect for formal or business occasions.', img: img7 },
    { id: 8, name: 'Oliver Urban Streetwear', category: 'men', productType: 'clothes', price: 55, description: 'A stylish and comfortable outfit for men, blending urban aesthetics with practicality.', img: img8 },
    { id: 9, name: 'James Business Casual Set', category: 'men', productType: 'clothes', price: 60, description: 'Elegant and comfortable business casual attire, suitable for meetings and semi-formal events.', img: img9 },
    { id: 10, name: 'Ethan Modern Blazer Combo', category: 'men', productType: 'clothes', price: 65, description: 'A fashionable blazer combo, offering both style and comfort for professional settings.', img: img10 },
    { id: 11, name: 'Liam Weekend Casual Outfit', category: 'men', productType: 'clothes', price: 70, description: 'A casual yet classy outfit, perfect for weekend outings or relaxed gatherings.', img: img11 },
    { id: 12, name: 'Noah Everyday Essentials', category: 'men', productType: 'clothes', price: 75, description: 'A modern and comfortable outfit, designed for everyday wear with a sleek edge.', img: img12 },
    { id: 13, name: 'Mason Formal Evening Wear', category: 'men', productType: 'clothes', price: 80, description: 'An elegant and trendy evening outfit, ideal for formal occasions and parties.', img: img13 },
    { id: 14, name: 'Logan Versatile Suit Set', category: 'men', productType: 'clothes', price: 85, description: 'A stylish suit set, perfect for various formal occasions and business events.', img: img14 },
    { id: 15, name: 'Lucas Tailored Fit Suit', category: 'men', productType: 'clothes', price: 90, description: 'A sleek and modern tailored suit, ideal for formal and semi-formal events.', img: img15 },
    { id: 16, name: 'Henry Casual Chic Ensemble', category: 'men', productType: 'clothes', price: 95, description: 'A chic and comfortable casual outfit, suitable for everyday wear.', img: img16 },
    { id: 17, name: 'Caleb Office Casual Look', category: 'men', productType: 'clothes', price: 100, description: 'A stylish outfit, perfect for achieving a professional yet relaxed business casual look.', img: img17 },
    { id: 18, name: 'Connor Everyday Sneakers', category: 'men', productType: 'shoes', price: 50, description: 'Casual and comfortable sneakers, ideal for daily wear and casual outings.', img: img18 },
    { id: 19, name: 'Dylan Classic Leather Shoes', category: 'men', productType: 'shoes', price: 55, description: 'Comfortable and stylish leather shoes, perfect for both casual and formal wear.', img: img19 },
    { id: 20, name: 'Benjamin Formal Derby Shoes', category: 'men', productType: 'shoes', price: 60, description: 'Elegant leather derby shoes, ideal for formal occasions and office wear.', img: img20 },
    { id: 21, name: 'Sebastian Rugged Boots', category: 'men', productType: 'shoes', price: 65, description: 'Durable and stylish boots, perfect for outdoor activities or rugged terrain.', img: img21 },
    { id: 22, name: 'Amelia Heeled Pumps', category: 'men', productType: 'shoes', price: 70, description: 'Fashionable heeled pumps, ideal for formal events or adding sophistication to any outfit.', img: img22 },
    { id: 23, name: 'Isabella Comfort Flats', category: 'men', productType: 'shoes', price: 75, description: 'Elegant and comfortable flats, perfect for all-day wear in casual and formal settings.', img: img23 },
    { id: 24, name: 'Mia Trendy Sneakers', category: 'women', productType: 'shoes', price: 80, description: 'Trendy and comfortable sneakers, suitable for a wide range of activities and occasions.', img: img24 },
    { id: 25, name: 'Charlotte Leather Sandals', category: 'women', productType: 'shoes', price: 85, description: 'Stylish and durable leather sandals, great for everyday wear and outdoor activities.', img: img25 },
    { id: 31, name: 'Sophie Casual Knit Set', category: 'women', productType: 'clothes', price: 65, description: 'Comfortable and stylish knitwear for women, perfect for everyday casual wear.', img: img31 },
    { id: 32, name: 'Lily Summer Dress', category: 'women', productType: 'clothes', price: 70, description: 'Fashion-forward summer dress, perfect for casual outings and warm weather.', img: img32 },
    { id: 33, name: 'Grace Evening Gown', category: 'women', productType: 'clothes', price: 75, description: 'Elegant and trendy evening gown, suitable for formal occasions and events.', img: img33 },
    { id: 34, name: 'Ava Casual Chic Ensemble', category: 'women', productType: 'clothes', price: 80, description: 'Modern and chic casual wear for women, offering both comfort and style.', img: img34 },
    { id: 35, name: 'Chloe Versatile Outfit', category: 'women', productType: 'clothes', price: 85, description: 'Stylish and comfortable outfit for women, suitable for a variety of occasions.', img: img35 },
    { id: 36, name: 'Evelyn Formal Event Dress', category: 'women', productType: 'clothes', price: 90, description: 'A chic and fashionable formal dress, perfect for both formal and casual events.', img: img36 },
    { id: 37, name: 'Madison Classy Party Dress', category: 'women', productType: 'clothes', price: 95, description: 'An elegant and classy outfit for women, ideal for special occasions and formal events.', img: img37 },
    { id: 38, name: 'Harper All-Day Wear Set', category: 'women', productType: 'clothes', price: 100, description: 'A stylish modern outfit for women, designed for all-day comfort and style.', img: img38 },
    { id: 39, name: 'Scarlett Elegant Dress', category: 'women', productType: 'clothes', price: 105, description: 'Comfortable and elegant dress, suitable for a variety of formal and casual occasions.', img: img39 },
    { id: 40, name: 'Ella Chic Casual Wear', category: 'women', productType: 'clothes', price: 110, description: 'A chic and stylish outfit, perfect for fashion-conscious women.', img: img40 },
    { id: 41, name: 'Violet Special Occasion Gown', category: 'women', productType: 'clothes', price: 115, description: 'Elegant and trendy gown for women, perfect for formal events and special occasions.', img: img41 }
    ,{ id: 42, name: 'Camilla Office Formal Wear', category: 'women', productType: 'clothes', 
        price: 100, description: 'Stylish and comfortable office wear for women, combining professionalism with modern style.', img: carouse33 }
    ,
        { id: 43, name: 'Ava Evening Gown', category: 'women', productType: 'clothes', price: 95, 
            description: 'An elegant and classy evening gown tailored for special occasions. Made from high-quality satin, this dress features a flattering silhouette and intricate detailing.', 
            img: carouse22 },
        { id: 44, name: 'Orion Leather Loafers', category: 'men', productType: 'shoes', price: 55, 
            description: 'Comfortable and stylish leather loafers, ideal for both casual and formal occasions. Crafted with premium leather for durability and a polished look.', 
            img: menIcon },
        { id: 45, name: 'James Slim-Fit Suit', category: 'women', productType: 'shoes', price: 90, 
            description: 'A sleek and modern slim-fit suit designed for the fashion-forward man. Perfect for business meetings or formal events, with a refined cut and breathable fabric.', 
            img: carouse210 },
        { id: 46, name: 'Maxwell Cotton Fedora', category: 'women', productType: 'clothes', price: 25, 
            description: 'Stylish fedora made from 100% cotton, designed for casual wear. Ideal for adding a vintage touch to any outfit.', 
            img: carouse55 },
        { id: 47, name: 'Brady Urban Snapback', category: 'women', productType: 'shoes', price: 20, 
            description: 'A modern snapback with a minimalistic design. Great for casual outings or adding an edge to your everyday style.', 
            img: carouse66 },
        { id: 48, name: 'Luca Everyday Sneakers', category: 'women', productType: 'clothes', price: 50, 
            description: 'Casual sneakers designed for everyday wear. Comfortable, durable, and made from lightweight materials for all-day comfort.', 
            img: carouse77 },
        { id: 49, name: 'Ethan Classic Derby', category: 'women', productType: 'clothes', price: 55, 
            description: 'A pair of comfortable and stylish classic Derby shoes. Perfect for formal occasions or adding a touch of elegance to any outfit.', 
            img: carouse88 },
            
    ];
    


export const myProducts = myProducts1.map((item)=>{
    return {
        ...item,
        quantity:1
    }
}
)
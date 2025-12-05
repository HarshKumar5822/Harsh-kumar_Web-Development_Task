import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import Review from './models/Review.js';

dotenv.config();

const optimize = (url) => `${url}?auto=format&fit=crop&w=1200&q=80`;

const products = [
  {
    name: "Midnight Elegance",
    description: "A sophisticated blend of dark vanilla, amber, and musk. This intoxicating fragrance captures the essence of a mysterious evening, perfect for those who appreciate timeless elegance and depth. The rich base notes of sandalwood and patchouli create a lasting impression that lingers throughout the night.",
    price: 89.99,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // User-provided realistic black bottle image (Freepik)
      optimize("https://sp.yimg.com/ib/th/id/OIP.06bEumYfEg9XWfjH5jGgxwHaE7?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"),
      optimize("https://sp.yimg.com/ib/th/id/OIP.06bEumYfEg9XWfjH5jGgxwHaE7?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"),
      optimize("https://sp.yimg.com/ib/th/id/OIP.06bEumYfEg9XWfjH5jGgxwHaE7?pid=Api&w=148&h=148&c=7&dpr=2&rs=1")
    ]
  },
  {
    name: "Ocean Breeze",
    description: "Fresh and invigorating, this aquatic fragrance transports you to a coastal paradise. With notes of sea salt, bergamot, and white flowers, it's the perfect companion for sunny days and warm evenings. The crisp, clean finish makes it ideal for everyday wear.",
    price: 75.50,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      optimize("https://images.unsplash.com/photo-1500043205121-586d69557218"),
      optimize("https://images.unsplash.com/photo-1509042239860-f550ce710b93"),
      optimize("https://images.unsplash.com/photo-1475180098004-ca77a66827be")
    ]
  },
  {
    name: "Rose Garden",
    description: "A romantic floral bouquet featuring the finest Bulgarian roses, complemented by jasmine and peony. This feminine fragrance blooms with elegance and grace, making it perfect for special occasions. The delicate heart notes are balanced by a warm vanilla base.",
    price: 95.00,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // User-provided floral pink perfume image (Dreamstime)
      optimize("https://thumbs.dreamstime.com/z/perfume-de-lujo-con-aroma-floral-para-mujeres-botella-fragancia-vidrio-sobre-fondo-plano-rosa-ai-generativo-270916860.jpg"),
      optimize("https://images.unsplash.com/photo-1501004318641-b39e6451bec6"),
      optimize("https://images.unsplash.com/photo-1441981974669-8f9bc0978b97")
    ]
  },
  {
    name: "Citrus Burst",
    description: "Energizing and vibrant, this zesty fragrance combines lemon, orange, and grapefruit with a hint of mint. Perfect for morning routines and active lifestyles, it provides an instant boost of freshness and vitality. The light, airy composition ensures it never overwhelms.",
    price: 65.00,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      // User-provided bright pink bottle image (Blogspot)
      optimize("https://in.images.search.yahoo.com/images/view;_ylt=Awr1RXjwMTBph1kf_FC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I2YWMwYjkxMWZjMjg1ZjRkN2VlZjNlYTFkYzQ0Zjg1BGdwb3MDOTcEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dperfume%2Bphoto%26type%3DG210IN826G91958M868ad25c2ef2c3a909f6675c6762cde1%26fr%3Dmcafee_e-26860_3pc-c%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D97&w=1024&h=1024&imgurl=cdn.shopify.com%2Fs%2Ffiles%2F1%2F0259%2F7733%2Fproducts%2Fafnan-9pm-femme_1024x1024.png%3Fv%3D1681948116&rurl=https%3A%2F%2Fwww.perfumenz.co.nz%2Fproducts%2F9pm-pour-femme-by-afnan-100ml-edp-for-women&size=777KB&p=perfume+photo&oid=b6ac0b911fc285f4d7eef3ea1dc44f85&fr2=piv-web&fr=mcafee_e-26860_3pc-c&tt=9pm+Pour+Femme+by+Afnan+100ml+EDP+for+Women+%7C+Perfume+NZ&b=61&ni=21&no=97&ts=&tab=organic&sigr=wADyOzRv4ZDz&sigb=La0s1j1PD0Aw&sigi=lHaoCbvbCXNN&sigt=51HvWuPMKPfU&.crumb=aQVIXjMcjqM&fr=mcafee_e-26860_3pc-c&fr2=piv-web&type=G210IN826G91958M868ad25c2ef2c3a909f6675c6762cde1"),
      optimize("https://in.images.search.yahoo.com/images/view;_ylt=Awr1RXjwMTBph1kf_FC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I2YWMwYjkxMWZjMjg1ZjRkN2VlZjNlYTFkYzQ0Zjg1BGdwb3MDOTcEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dperfume%2Bphoto%26type%3DG210IN826G91958M868ad25c2ef2c3a909f6675c6762cde1%26fr%3Dmcafee_e-26860_3pc-c%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D97&w=1024&h=1024&imgurl=cdn.shopify.com%2Fs%2Ffiles%2F1%2F0259%2F7733%2Fproducts%2Fafnan-9pm-femme_1024x1024.png%3Fv%3D1681948116&rurl=https%3A%2F%2Fwww.perfumenz.co.nz%2Fproducts%2F9pm-pour-femme-by-afnan-100ml-edp-for-women&size=777KB&p=perfume+photo&oid=b6ac0b911fc285f4d7eef3ea1dc44f85&fr2=piv-web&fr=mcafee_e-26860_3pc-c&tt=9pm+Pour+Femme+by+Afnan+100ml+EDP+for+Women+%7C+Perfume+NZ&b=61&ni=21&no=97&ts=&tab=organic&sigr=wADyOzRv4ZDz&sigb=La0s1j1PD0Aw&sigi=lHaoCbvbCXNN&sigt=51HvWuPMKPfU&.crumb=aQVIXjMcjqM&fr=mcafee_e-26860_3pc-c&fr2=piv-web&type=G210IN826G91958M868ad25c2ef2c3a909f6675c6762cde1"),
      optimize("https://in.images.search.yahoo.com/images/view;_ylt=Awr1RXjwMTBph1kfA1G9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2MxODkzZTgyODFiYTUwNTVmZDczMTVmNzIzNjFhYTk0BGdwb3MDMTA0BGl0A2Jpbmc-?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dperfume%2Bphoto%26type%3DG210IN826G91958M868ad25c2ef2c3a909f6675c6762cde1%26fr%3Dmcafee_e-26860_3pc-c%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D104&w=1200&h=1467&imgurl=slimages.macysassets.com%2Fis%2Fimage%2FMCY%2Fproducts%2F1%2Foptimized%2F21342221_fpx.tif%3Fwid%3D1200%26fmt%3Djpeg%26qlt%3D100&rurl=https%3A%2F%2Fwww.animalia-life.club%2Fqa%2Fpictures%2Fvalentina-perfume-for-women.html&size=878KB&p=perfume+photo&oid=c1893e8281ba5055fd7315f72361aa94&fr2=piv-web&fr=mcafee_e-26860_3pc-c&tt=Valentina+Perfume+For+Women&b=61&ni=21&no=104&ts=&tab=organic&sigr=k_6aOwSOOpn8&sigb=.kXXDz7zbAcx&sigi=6gTm8uloJJW1&sigt=CAV5M8ERzYnX&.crumb=aQVIXjMcjqM&fr=mcafee_e-26860_3pc-c&fr2=piv-web&type=G210IN826G91958M868ad25c2ef2c3a909f6675c6762cde1")
    ]
  },
  {
    name: "Velvet Woods",
    description: "A luxurious unisex fragrance featuring cedarwood, vetiver, and tonka bean. This sophisticated scent evokes the feeling of a cozy library filled with leather-bound books. The warm, earthy notes create a sense of comfort and refinement that lasts all day.",
    price: 110.00,
    sizes: ["30ml", "50ml", "100ml"],
    images: [
      optimize("https://sp.yimg.com/ib/th/id/OIP.06bEumYfEg9XWfjH5jGgxwHaE7?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"),
      optimize("https://sp.yimg.com/ib/th/id/OIP.06bEumYfEg9XWfjH5jGgxwHaE7?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"),
      optimize("https://sp.yimg.com/ib/th/id/OIP.06bEumYfEg9XWfjH5jGgxwHaE7?pid=Api&w=148&h=148&c=7&dpr=2&rs=1")
    ]
  }
];

const reviews = [
  {
    product_id: null, // Will be set after products are created
    username: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely love this fragrance! It's become my signature scent. The longevity is amazing and I get so many compliments."
  },
  {
    product_id: null,
    username: "Michael Chen",
    rating: 4,
    comment: "Great quality perfume. The packaging is beautiful and the scent is exactly as described. Would definitely recommend!"
  },
  {
    product_id: null,
    username: "Emma Williams",
    rating: 5,
    comment: "This is my second bottle! The fragrance is unique and sophisticated. Perfect for evening events."
  },
  {
    product_id: null,
    username: "David Brown",
    rating: 4,
    comment: "Nice scent, good value for money. The bottle design is elegant and it makes a great gift."
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/perfume-shop');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await Review.deleteMany({});
    console.log('Cleared existing data');

    // Insert products
    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products`);

    // Insert reviews (distribute across products)
    const reviewPromises = [];
    createdProducts.forEach((product, index) => {
      const productReviews = reviews.map((review, reviewIndex) => ({
        ...review,
        product_id: product._id
      }));
      reviewPromises.push(...productReviews.map(review => new Review(review).save()));
    });

    await Promise.all(reviewPromises);
    console.log(`Inserted reviews for all products`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();


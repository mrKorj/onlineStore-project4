// admin login
// email: admin@store.com
// password: 1234

use onlineStore;

db.users.insertOne([
    {name: 'Admin', lastName: 'Admin', role: 'admin', email: 'admin@store.com', idNumber: '123456789', password: '$2b$10$.aLa5Qem802gvPbdyrSoAOSVUlL4WQKSMGRNeOuuUgAsLlRl4j0Nq'}
]);

db.products.insertMany([
    {name: 'Milk 1.5L', category: 'milk & eggs', price: 8.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/FZQ30_L_P_57477_1.png'},
    {name: 'Milk 1L', category: 'milk & eggs', price: 6.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/WYB16_Z_P_51352_1.png'},
    {name: 'Milk 2L', category: 'milk & eggs', price: 10.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/JLT16_Z_P_42244_1.png'},
    {name: 'Nesquik Chocolate Milk', category: 'milk & eggs', price: 10.90, picUrl: 'https://www.dollargeneral.com/media/catalog/product/cache/6e5ff7de2a46bb5e4325e62839d28016/0/0/00028000772123_cf___jpeg_3.jpg'},
    {name: 'Yogurt Yoplait', category: 'milk & eggs', price: 5.00, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/QWR30_Z_P_4124892_1.png'},
    {name: 'Yogurt Dannon 8p', category: 'milk & eggs', price: 25.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/ECG50_Z_P_7290112347473_1.png'},
    {name: 'Yogurt Muller', category: 'milk & eggs', price: 4.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/UVF46_Z_P_7290102393190_1.png'},
    {name: 'Cheese Ski', category: 'milk & eggs', price: 3.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/RKZ26_Z_P_2824640_1.png'},
    {name: 'Eggs 12p', category: 'milk & eggs', price: 15.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/DVX14_Z_P_2710004_1.png'},
    {name: 'Eggs 30p', category: 'milk & eggs', price: 30.80, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/YKK54_Z_P_7296073261605_1.png'},
    {name: 'Cucumber 1kg', category: 'vegetables & fruits', price: 6.30, picUrl: 'https://ipm.missouri.edu/MEG/2014/3/Cucumber-A-Brief-History/Cucumber_SupremoHybrid1-Burpee.jpg'},
    {name: 'Tomato 1kg', category: 'vegetables & fruits', price: 4.50, picUrl: 'https://www.rd.com/wp-content/uploads/2018/05/shutterstock_1042840159-760x506.jpg'},
    {name: 'Cabbage 1kg', category: 'vegetables & fruits', price: 3.60, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/EHI12_Z_P_138_1.png'},
    {name: 'Potato 5kg', category: 'vegetables & fruits', price: 13.70, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/BMY14_Z_P_1715_1.png'},
    {name: 'Onion 1kg', category: 'vegetables & fruits', price: 2.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/RLM12_Z_P_480_1.png'},
    {name: 'Watermelon 1kg', category: 'vegetables & fruits', price: 2.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/WNO24_Z_P_965031_1.png'},
    {name: 'Kiwi 1kg', category: 'vegetables & fruits', price: 2.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/YYI36_Z_P_966663_1.png'},
    {name: 'Banana 1kg', category: 'vegetables & fruits', price: 7.90, picUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX569_.jpg'},
    {name: 'Grapes 1kg', category: 'vegetables & fruits', price: 12.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/YAH32_Z_P_966038_1.png'},
    {name: 'Peach 1kg', category: 'vegetables & fruits', price: 9.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/VAY28_Z_P_964027_1.png'},
    {name: 'Chicken 1kg', category: 'meat & fish', price: 27.90, picUrl: 'https://zootecnicainternational.com/wp-content/uploads/2016/06/Water-holding-poultry-meat--696x464.jpg'},
    {name: 'Salmon fillet 1kg', category: 'meat & fish', price: 97.90, picUrl: 'https://www.citarella.com/media/catalog/product/cache/1/mobile_image/9df78eab33525d08d6e5fb8d27136e95/0/2/024005800000_01_1.jpg'},
    {name: 'Minced meat 1kg', category: 'meat & fish', price: 32.90, picUrl: 'https://www.rooksonline.co.uk/_img/products/large/a6ad134588d30fad2900.jpg'},
    {name: 'Sausages', category: 'meat & fish', price: 42.0, picUrl: 'https://www.johnsonville.com/.imaging/mte/johnsonville-retail/640-wide/dam/johnsonville/product-images/hot-italian-links/jcr:content/hot-italian-links.png'},
    {name: 'Sausages x 2', category: 'meat & fish', price: 79.0, picUrl: 'https://www.johnsonville.com/.imaging/mte/johnsonville-retail/640-wide/dam/johnsonville/product-images/hot-italian-links/jcr:content/hot-italian-links.png'},
    {name: 'Meat 1kg', category: 'meat & fish', price: 69.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/OZC18_Z_P_2401155_1.png'},
    {name: 'Fish 1kg', category: 'meat & fish', price: 28.80, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/ILE44_Z_P_9391985_1.png'},
    {name: 'Tuna fillet 1kg', category: 'meat & fish', price: 88.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/CSS34_Z_P_9106909_1.png'},
    {name: 'Chicken Hearts', category: 'meat & fish', price: 18.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/ZHF34_Z_P_9807622_1.png'},
    {name: 'Chicken Hearts x 2', category: 'meat & fish', price: 33.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/ZHF34_Z_P_9807622_1.png'},
    {name: 'Coca Cola 2L', category: 'wine & drink', price: 5.90, picUrl: 'https://www.samos-deli.com/wp-content/uploads/2016/03/COCACOLA-PET2L.jpeg'},
    {name: 'Coca Cola Zero 1.5L', category: 'wine & drink', price: 6.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/XFX40_Z_P_8909860_1.png'},
    {name: 'Fanta 2L', category: 'wine & drink', price: 5.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/PRQ32_Z_P_3667109_1.png'},
    {name: 'Martini', category: 'wine & drink', price: 30.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/NKD32_Z_P_3208586_1.png'},
    {name: 'White Wine', category: 'wine & drink', price: 39.80, picUrl: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2018/07/Chardonnays.jpg'},
    {name: 'Corona Beer', category: 'wine & drink', price: 29.80, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/CXN50_Z_P_7501064191466_1.png'},
    {name: 'Red Wine', category: 'wine & drink', price: 37.90, picUrl: 'https://www.wine.com/product/images/w_767,c_fit,q_auto:good,fl_progressive/nsxzznnyoglp7fzunx3i.jpg'},
    {name: 'Schweppes 1.5L', category: 'wine & drink', price: 4.30, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/QPY46_Z_P_7290017023717_1.png'},
    {name: 'Water 1.5L x 6', category: 'wine & drink', price: 11.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/AOX54_Z_P_7290013585554_1.png'},
    {name: 'Dark Chocolate', category: 'sweets & snacks', price: 7.90, picUrl: 'https://www.uokpl.rs/fpng/f/162-1621415_lindt-dark-chocolate.png'},
    {name: 'Milk Chocolate', category: 'sweets & snacks', price: 6.90, picUrl: 'https://cdn.shopify.com/s/files/1/0209/2496/products/Solid-Milk_grande.png?v=1535030690'},
    {name: 'Nutella', category: 'sweets & snacks', price: 19.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/RSB30_Z_P_80176800_1.png'},
    {name: 'Ferrero Rocher ', category: 'sweets & snacks', price: 30.50, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/AWO38_Z_P_8000500009673_1.png'},
    {name: 'Fruit Candy', category: 'sweets & snacks', price: 19.90, picUrl: 'https://sc01.alicdn.com/kf/H330efda8ec5541f6bcbcd03214cdd451h.jpg'},
    {name: 'Mentos', category: 'sweets & snacks', price: 4.70, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/GPE40_Z_P_80854753_1.png'},
    {name: 'M&M`s', category: 'sweets & snacks', price: 6.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/XSH20_Z_P_40000514510_1.png'},
    {name: 'Snickers', category: 'sweets & snacks', price: 11.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/VHV50_Z_P_5000159468534_1.png'},
    {name: 'Kinder chocolate', category: 'sweets & snacks', price: 9.90, picUrl: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/SXL36_Z_P_80177616_1.png'},
]);

db.products.createIndex({name: 'text'});


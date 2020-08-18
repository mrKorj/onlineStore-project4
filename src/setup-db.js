//use onlineStore;


// password: 1234
db.users.insertOne([
    {name: 'Admin', lastName: 'Admin', role: 'admin', email: 'admin@store.com', idNumber: '123456789', password: '$2b$10$.aLa5Qem802gvPbdyrSoAOSVUlL4WQKSMGRNeOuuUgAsLlRl4j0Nq'}
]);

db.products.insertMany([
    {name: 'Milk 1L', category: 'milk & eggs', price: 5.90, picUrl: 'https://storage.googleapis.com/sp-public/product-images/global/8425/933922/large.jpg'},
    {name: 'Nesquik Chocolate Milk', category: 'milk & eggs', price: 10.90, picUrl: 'https://www.dollargeneral.com/media/catalog/product/cache/6e5ff7de2a46bb5e4325e62839d28016/0/0/00028000772123_cf___jpeg_3.jpg'},
    {name: 'Yogurt Dannon', category: 'milk & eggs', price: 3.90, picUrl: 'https://www.dannon.com/wp-content/themes/ultrasimpleRes/slider/slider2.jpg'},
    {name: 'Cucumber 1kg', category: 'vegetables & fruits', price: 3.50, picUrl: 'https://ipm.missouri.edu/MEG/2014/3/Cucumber-A-Brief-History/Cucumber_SupremoHybrid1-Burpee.jpg'},
    {name: 'Tomato 1kg', category: 'vegetables & fruits', price: 4.50, picUrl: 'https://www.rd.com/wp-content/uploads/2018/05/shutterstock_1042840159-760x506.jpg'},
    {name: 'Banana 1kg', category: 'vegetables & fruits', price: 7.90, picUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX569_.jpg'},
    {name: 'Chicken 1kg', category: 'meat & fish', price: 27.90, picUrl: 'https://zootecnicainternational.com/wp-content/uploads/2016/06/Water-holding-poultry-meat--696x464.jpg'},
    {name: 'Salmon 1kg', category: 'meat & fish', price: 97.90, picUrl: 'https://www.citarella.com/media/catalog/product/cache/1/mobile_image/9df78eab33525d08d6e5fb8d27136e95/0/2/024005800000_01_1.jpg'},
    {name: 'Minced meat 1kg', category: 'meat & fish', price: 32.90, picUrl: 'https://www.rooksonline.co.uk/_img/products/large/a6ad134588d30fad2900.jpg'},
    {name: 'Coca Cola 2L', category: 'wine & drink', price: 10.90, picUrl: 'https://www.samos-deli.com/wp-content/uploads/2016/03/COCACOLA-PET2L.jpeg'},
    {name: 'White Wine', category: 'wine & drink', price: 39.80, picUrl: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2018/07/Chardonnays.jpg'},
    {name: 'Red Wine', category: 'wine & drink', price: 37.90, picUrl: 'https://www.wine.com/product/images/w_767,c_fit,q_auto:good,fl_progressive/nsxzznnyoglp7fzunx3i.jpg'},
]);

db.products.createIndex({name: 'text'});


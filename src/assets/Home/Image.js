const Image = {
    logo: require('../../assets/logo.svg').default,
    step1: require('../Home/step-1.jpg'),
    step2: require('../Home/step-2.jpg'),
    step3: require('../Home/step-3.jpg'),
    step4: require('../Home/step-4.jpg'),
    ingredient: require('../Home/ingredients.jpg'),
    delivery: require('../Home/delivery.svg').default,
    bigDelivery: require('../Home/big-delivery.svg').default,
    analysis: require('../Home/analysis-thumb.jpg'),
};
const BannerImg = [
    { src: require('../Home/banner-rd.jpg'), des: 'A Natural Treat For Everyone' },
    {
        src: require('../Home/banner-nd.jpg'),
        des: ' “Gluten has been banned from my kitchen to make room for veggies and fruits."',
    },
    {
        src: require('../Home/banner-st.jpg'),
        des: '   “Fruits and vegetables are gifts from nature and the most natural way to heal your body and make yourself whole again.”',
    },
];
const ListName = [
    {
        name: 'CHICKEN',
        url: require('../Home/chicken.svg').default,
    },
    {
        name: 'TEA',
        url: require('../Home/tea.svg').default,
    },
    {
        name: 'PORK HAM',
        url: require('../Home/pork.svg').default,
    },
    {
        name: 'BREAKFAST',
        url: require('../Home/breakfast.svg').default,
    },
    {
        name: 'LUNCH',
        url: require('../Home/lunch.svg').default,
    },
    {
        name: 'JUICE',
        url: require('../Home/juice.svg').default,
    },
    {
        name: 'DINNER',
        url: require('../Home/dinner.svg').default,
    },
    {
        name: 'COFFEE',
        url: require('../Home/coffe.svg').default,
    },
    {
        name: 'ROAST BEEF',
        url: require('../Home/beef.svg').default,
    },
];
const DealImg = [
    {
        name: 'The Crispy Bun',
        src: require('../Home/cripspyPun.png'),
        price: '$15.00',
    },
    {
        name: 'BugOut Burgers',
        src: require('../Home/bugout.png'),
        price: '$60.00',
    },
    {
        name: 'Crazy Burgers',
        src: require('../Home/burgercrazy.png'),
        price: '$20.00',
    },
    {
        name: 'Beefcakes Burgers',
        src: require('../Home/beffcakes.png'),
        price: '$34.00',
    },
];
const UserFeedback = [
    {
        name: 'Tim Cook',
        organization: 'CEO of Apple',
        feedback:
            'I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent',
        avatar: require('../Home/user-timcok.jpg'),
    },
    {
        name: 'Mark Zuckerberg',
        organization: 'Co - Founder Facebook, Inc',
        feedback:
            'I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality',
        avatar: require('../Home/user-mark.jpg'),
    },
    {
        name: 'Rose',
        organization: 'Main vocalist of Backpink group',
        feedback:
            'Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!',
        avatar: require('../Home/user-rose.jpg'),
    },
];
export { BannerImg, ListName, DealImg, UserFeedback };
export default Image;

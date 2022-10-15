export default function menuPageLoad () {
    const content = document.querySelector('#content')
    const menulist = document.createElement('div')
    menulist.classList = "menusection"
    content.appendChild(menulist)

    //Adding items to the menu
    const itemOne = document.createElement('div')
    const foodPic1 = document.createElement('div')
    const price1 = document.createElement('div')
    price1.classList = "price1"
    foodPic1.classList = "food1"
    const foodText1 = document.createElement('div')
    foodText1.classList = "text1"
    foodText1.textContent = "Yum Yum, a food bowl - an assortment of fruits and veggies with rice"
    price1.textContent = "3$"
    foodText1.appendChild(price1)
    menulist.appendChild(itemOne)
    itemOne.appendChild(foodPic1)
    itemOne.appendChild(foodText1)


    const itemTwo = document.createElement('div')
    const foodPic2 = document.createElement('div')
    const price2 = document.createElement('div')
    price2.classList = "price2"
    foodPic2.classList = "food2"
    const foodText2 = document.createElement('div')
    foodText2.classList = "text2"
    foodText2.textContent = "Just look at that cheese, need i say more?"
    price2.textContent = "5$"
    menulist.appendChild(itemTwo)
    itemTwo.appendChild(foodPic2)
    itemTwo.appendChild(foodText2)
    foodText2.appendChild(price2)

    const itemThree = document.createElement('div')
    const foodPic3 = document.createElement('div')
    const price3 = document.createElement('div')
    price3.classList = "price3"
    foodPic3.classList = "food3"
    const foodText3 = document.createElement('div')
    foodText3.classList = "text3"
    foodText3.textContent = "Strawberry Cheesecake"
    price3.textContent = "5$"
    menulist.appendChild(itemThree)
    itemThree.appendChild(foodPic3)
    itemThree.appendChild(foodText3)
    foodText3.appendChild(price3)

    const itemFour = document.createElement('div')
    const foodPic4 = document.createElement('div')
    const price4 = document.createElement('div')
    price4.classList = "price4"
    foodPic4.classList = "food4"
    const foodText4 = document.createElement('div')
    foodText4.classList = "text4"
    foodText4.textContent = "Idk whats in here but that looks refreshing"
    price4.textContent = "2$"
    menulist.appendChild(itemFour)
    itemFour.appendChild(foodPic4)
    itemFour.appendChild(foodText4)
    foodText4.appendChild(price4)
}
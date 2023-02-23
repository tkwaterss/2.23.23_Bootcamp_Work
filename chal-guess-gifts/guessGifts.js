//givent two arrays of objects

//name size clatters, weight
//vs size clatters weight

let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
]

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]


const guessTheGifts = (wishlist, presents) => {
    let confirmed = wishlist.filter(wishObj => {
        const {wishSize, wishClatters, wishWeight} = wishObj;

        for (let i = 0; i < presents.length; i++) {
            const {size, clatters, weight} = presents[i];

            if (wishSize == size && wishClatters == clatters && wishWeight == weight) {
                return true;
            };
        }
    })
    console.log(confirmed)
}

guessTheGifts(wishlist, presents);


const guessThePresents = (wishlist, presents) => {
    
}
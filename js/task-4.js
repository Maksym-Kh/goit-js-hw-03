function getShippingCost(country) {
// свіч з посиланням на параметр функ
    switch (country) {
        // тру або фолс що параметр функ є China
        case "China": {
            // ств конст для ціни 
            const price = 100;
            // повертаєм шабл рядок з країною і ціною
            return (`Shipping to ${country} will cost ${price} credits`);
 
        }
            
        case "Chile": {
            const price = 250;
            return (`Shipping to ${country} will cost ${price} credits`);
     
        }
        case "Australia": {
            const price = 170;
            return (`Shipping to ${country} will cost ${price} credits`);
 
        }
        case "Jamaica": {
            const price = 120;
            return (`Shipping to ${country} will cost ${price} credits`);
  
        }
// коли незнайшло то остання дія це дефолт з поверненням тексту 
        default: {
            return ("Sorry, there is no delivery to your country");
        }
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

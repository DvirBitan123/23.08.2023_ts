"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items, filterFn) {
    var result = items.filter(filterFn);
    return result;
}
// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
var isBook = function (item) {
    return item.author !== undefined;
};
function printItemsData(items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var check = isBook(item);
        if (check) {
            console.log("item1: type: ".concat(item.type, ", title: ").concat(item.title, ", author: ").concat(item.author));
        }
        else
            console.log("item1: type: ".concat(item.type, ", title: ").concat(item.title, ", duration: ").concat(item.duration));
    }
}
// Test data
var libraryItems = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
// Step 5:  הדפיסו את כל המידע הנתון 
// printItemsData(libraryItems)
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
var longerThan2 = function (item) {
    var check = isBook(item);
    if (check === false) {
        return item.duration > 120;
    }
    else
        return false;
};
// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
var justHarperLee = function (item) {
    var check = isBook(item);
    if (check) {
        if (item.author === 'Harper Lee')
            return true;
        return false;
    }
    return false;
};
var harperArr = filterItems(libraryItems, justHarperLee);
console.log(harperArr);

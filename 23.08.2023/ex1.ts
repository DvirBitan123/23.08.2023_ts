// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
type: string,
title: string,
author: string
}

interface DVD {
  type: string,
  title: string,
  duration: number
}

type Fun = Book| DVD;

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים

function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
  const result = items.filter(filterFn)
  return result
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט

const isBook = (item: Fun) => {
  return (item as Book).author !== undefined
}

function printItemsData(items: Fun[]): void {
  for (let item of items) {
    const check = isBook(item);
    if (check) {
      console.log(`item1: type: ${item.type}, title: ${item.title}, author: ${item.author}`);
    }
    else console.log(`item1: type: ${item.type}, title: ${item.title}, duration: ${item.duration}`);
  }
}

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

// Step 5:  הדפיסו את כל המידע הנתון 
// printItemsData(libraryItems)

// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך 
const longerThan2 = (item: Fun) => {
  const check = isBook(item);
  if (check === false) {
    return item.duration > 120
  }
  else return false
}

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
const justHarperLee = (item: Fun) => {
  const check = isBook(item);
  if (check) {
    if (item.author === 'Harper Lee') return true
    return false
  } 
  return false
}

const harperArr = filterItems(libraryItems, justHarperLee)
console.log(harperArr);

# React editable table by Anh Nguyen

What's in the table?

 * [React](https://facebook.github.io/react/): JavaScript View library
 * [Redux](http://redux.js.org/): State maintainer
 * [ECMAScript 2015](https://github.com/lukehoban/es6features/): New standard of JavaScript
 * [Babel](https://babeljs.io/): ES.Next transpiler
 * [Bootstrap](http://getbootstrap.com/): CSS & JS framework
 * [SASS](http://sass-lang.com/): CSS pre-processor
 * And more...


### Usage

Here is the [**live demo**](http://haanh.pythonanywhere.com/)

Install dependency:

```javascript
npm install
```

Start the development server on port 8080:

```javascript
npm start
```

Compile the distribution build:

```javascript
npm run build
```

### Features & instructions

* The table depicts the data about 100 people. Those records are persisted in local storage of the browser
* The table consists of 5 pages by default, each of which holds 20 entries. You can switch to the new page by using the paginator at the bottom of the page
* Each entries are editable by clicking **exactly** on the **value** of each cell and **not** on the surrounding space or area. You can also edit the entry by click on the **pen** icon on the right side
* Once you are in editing mode, the pen icon turns blueish.
* To finish editing, you have to click on the **blue pen icon**. Note that the table is **sorted automatically** after being updated. Hence, your newly modified entry might be **repositioned** somewhere.
* You can also remove the entry entirely  by click the **x** button on the right side
* The table can be sorted by name, age, gender by both ascending and descending order. In order to perform such task, you have to **click or double click exactly** on the **title** of each column and **not** on the **sort icon** or the surrounding space
* You can also add more people to the list by using the form on top of the page

### Notes

I may have mentioned some of the following facts in previous section. This is just to make sure that people can use some of the features properly. You should:
* edit the row by clicking exactly on the data of each row or the gray pen icon and **NOT** the surrounding space
* You can sort or reverse the current order by clicking and reclicking **exactly** on the **title** of each column
* The **sort icon** on the right side of the titles **only shows** which category that the table is currently sorted on and the order of the sorting. Hence, it should not be clicked on.

Thank you and happy coding!


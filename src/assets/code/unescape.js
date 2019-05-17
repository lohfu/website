const { unescape } = require('@favware/unescape');
// or for TypeScript:
// import { unescape } from '@favware/unescape';

console.log(unescape('&lt;div&gt;abc&lt;/div&gt;'));
//=> '<div>abc</div>'

// use template tags
console.log(unescape`&lt;div&gt;abc&lt;/div&gt;`); // => '<div>abc</div>'

// or with variables
const unescaped = '&lt;div&gt;unescaped&lt;/div&gt;';
console.log(unescape`awesome text with some ${unescaped} section`); //=> 'awesome text with some <div>unescaped</div> section' 

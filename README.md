#DeBunk

1\.  [Synopsis](#synopsis)  
2\.  [Installation](#installation)  
3\.  [Examples](#examples)  
3.1\.  [Example 1](#example1)  
3.2\.  [Example 2](#example2)  
3.3\.  [Example 3](#example3)
3.4\.  [Example 3](#example4)
3.5\.  [Example 3](#example5)
3.6\.  [Example 3](#example6)  
4\.  [Testing](#testing)  
5\.  [Why DeBunk](#whydebunk)  
5.1\.  [Compare us to Our Competitors](#comparetocompetitors)  
5.2\.  [What Does Shibley Have to Say?](#shibley)  
5.3\.  [Concerning performance](#concerningperformance)  
6\.  [Contributions](#contributions)  
7\.  [License](#license)  


<a name="synopsis"></a>

##1\. Synopsis
_DeBunk_ is a highly performant, state-of-the-art 3 and/or 17 verifier.

<a name="installation"></a>

##2\. Installation

You can install _DeBunk_ with *npm*:

```bash
npm install debunk
```

<a name="examples"></a>

##3\. Examples

Here are some examples of how to use DeBunk.

<a name="example1"></a>

###3.1\. Example 1

```js
var debunk = require('debunk');
debunk.whatDoesThreeEqual(); //3
```

<a name="example2"></a>

###3.2\. Example 2

```js
var debunk = require('debunk');
debunk.whatDoesSeventeenEqual(); //17
```

<a name="example3"></a>

###3.3\. Example 3

```js
var debunk = require('debunk');
debunk.whatDoesThreeEqual() * debunk.whatDoesSeventeenEqual(); //51
```
<a name="example4"></a>

###3.4\. Example 4

```js
var debunk = require('debunk');
debunk.whatProbablyDoesNotEqualSeventeen() //Random number between 1 and 1,000. Could be 17 though, who knows.
```
<a name="example5"></a>

###3.5\. Example 5

```js
var debunk = require('debunk');
debunk.whatDoesSeventeenNotEqual(); //Returns 9, because seventeen does not equal 9.
```

<a name="example6"></a>

###3.6\. Example 6

```js
var debunk = require('debunk');
debunk.whatDoesShibleyHaveToSay(); // "Right on"
```

<a name="testing"></a>

##4\. Testing

Tests are not included in the DeBunk repo to cut down on bloated module sizes. It is, however, important to test your code. DeBunk is compliant with all major testing frameworks. Here is an example for writing tests to make sure DeBunk is behaving properly.

```js
var debunk = require('debunk');
var testPassed = debunk.whatDoesThreeEqual() === 3;
var otherTestPassed = debunk.whatDoesSeventeenEqual() === 17;
```

<a name="whydebunk"></a>

##5\. Why DeBunk

The main reason why I wrote _DeBunk_ was to solve the recurring need to establish a verifiable value for 3 and/or 17. As I'm sure you've experienced in your coding career, functionally determining the value of 3 and/or 17 can be quite cumbersome. I hope _DeBunk_ can alleviate your coding woes.

<a name="comparetocompetitors"></a>

###5.1\. Compare us to Our Competitors

Not conviced that _DeBunk_ is heads above the competitors. Download it and try us out. If you're not 123% satisfied, we will triple your money back. That's how much we believe in our project.

<a name="shibley"></a>

###5.2\. What Does Shibley Have to Say?

"Interesting. Have you noticed that I eat a lot? Let's play ping pong."

<a name="concerningperformance"></a>

###5.3\. Concerning performance

_DeBunk_ is the most performant piece of 3 and/or 17 value verifier on the market today. Our engineers are always working with new technologies to keep ahead of the advances in technology.

<a name="contributions"></a>

##6\. Contributions
_DeBunk_ is open source. Contribute today at [http://www.github.com/skuttleman/debunk](http://www.github.com/skuttleman/debunk)!

<a name="license"></a>

##7\. License

ISC Lisense

Copyright (c)2016, Ben Allred <skuttleman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

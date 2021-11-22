// 块级作用域绑定

function getValue(condition) {
    if (condition) {
        var value = "bule";
        return condition
    } else {
        return null;
    }
}
/*

块级作用域绑定的let和const为JavaScript引入了词法作用域，它们声明的变量不会提升，而且只可以在声明这些变量的代码块中使用。
如此一来，JavaScript声明变量的语法与其他语言更相似了，同时也大幅降低了产生错误的几率，因为变量只会在需要它们的地方声明。
与此同时，这一新特性还存在一个副作用，即不能在声明变量前访问它们，就算用typeof这样安全的操作符也不行。在声明前访问块级绑定会导致错误，因为绑定还在临时死区（TDZ）中。
let和const的行为很多时候与var一致。然而，它们在循环中的行为却不一样。
在for-in和for-of循环中，let和const都会每次迭代时创建新绑定，从而使循环体内创建的函数可以访问到相应迭代的值，而非最后一次迭代后的值（像使用var那样）。
let在for循环中同样如此，但在for循环中使用const声明则可能引发错误。
当前使用块级绑定的最佳实践是：默认使用const，只在确实需要改变变量的值时使用let。
这样就可以在某种程度上实现代码的不可变，从而防止某些错误的产生。
*/


# otto64 - 棍语编码

棍语编码器，可以把任意文本信息编码为棍语，支持无损解码。

另为开发者提供了 npm-package，可以自行引用到自己的网站或项目中。

## 在浏览器中使用

[otto64](https://otto64.huazhiwan.xyz)

## 在 node-js 中使用

```js
import otto64 from 'otto64'

console.log(otto64.encode('hello-world'))
console.log(otto64.decode(otto64.encode('hello-world')))
```

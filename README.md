# HeadFirstObjectOriented

## 概要
 + Head First オブジェクト指向分析設計(オライリージャパン社)のコードレポジトリ
  + Javaで書かれている内容をTypeScriptに書き直しながら設計の勉強

## 目的
 + 設計の勉強
 + TypeScriptの勉強

## メモ（JSの書き方）

### アロー関数
+ ES6から利用可能になった新しいJavaScriptの構文の一つです。

#### 書き方

```

//通常の関数（引数あり）
function fruits(count) {
    console.log(count);
}

//アロー関数(引数あり)
const obj = (count) => {
    console.log(count);
}


//通常の関数（引数なし）
function fruits() {
    console.log('number');
}

//アロー関数(引数なし)
let arrowFunc = () => {
    console.log('number');
}

```

```

//アロー関数（引数あり）
window.setTimeout((number) => { console.log(number)) }, 1000);

//アロー関数（引数なし）
window.setTimeout(() => { console.log('数字')) }, 1000);

```

#### thisの扱い
 + 通常の関数
     + 関数の中で定義したものをthisとする
 + アロー関数
     + 関数の外で定義したものをthisとする

```

this.name = 'apple'

const fruits = {
    name: 'orange',
    first: function () {
        return this.name
    },
    seccond: () => {
        return this.name
    }
}

console.log(fruits.first())
// orange
console.log(fruits.seccond())
// apple

```

### Mapオブジェクト
キーと値のペアを保持し、キーが最初に挿入された順序を覚える。

```
let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1

```

### Promise
#### Promiseとは

Promiseは非同期処理を抽象化したオブジェクトとそれを操作する仕組み
setTimeOut


```
const promise = new Promise((resolve, reject) => {
    // 非同期の処理
    // 処理が終わったら、resolve または rejectを呼ぶ
});
```

#### 参考コード
```
//resolveは成功した時に渡される引数
new Promise((resolve) => {
    resolve(55);
}).then((value) => {
    console.log(value);
    //55
});

```


### async/await


#### Async Function

Async Functionは通常の関数とは異なり、必ずPromiseインスタンスを返す関数を定義する構文です
→ new Promiseをしなくてもすむ

```

async function doAsync() {
    return "値";
}
// doAsync関数はPromiseを返す
doAsync().then((value) => {
    console.log(value); // => "値"
});
```


#### await式
 + 通常の処理の流れでは、非同期処理を実行した場合にその非同期処理の完了を待つことなく、次の行（次の文）を実行します。
   しかし、await式では非同期処理を実行し完了するまで、次の行（次の文）を実行しません。 そのためawait式を使うことで非同期処理が同期処理のように上から下へと順番に実行するような流れで書けます。
     + awaitを書くことで非同期処理が同期処理のように上から下へと順番に実行する
       + 全体的にthenをかけられるイメージ
※ async 関数の中でしか書くことはできない

```
// async functionは必ずPromiseを返す
async function doAsync() {
    // 非同期処理
}
async function asyncMain() {
    // doAsyncの非同期処理が完了するまでまつ
    await doAsync();
    // 次の行はdoAsyncの非同期処理が完了されるまで実行されない
    console.log("この行は非同期処理が完了後に実行される");
}

```

### 参考サイト
<a href="https://azu.github.io/promises-book/">JS Promiseの本</a>
<a href="https://blog.mitsuruog.info/2018/01/typescript-emun-tips">Enumの話</a>
<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map">Map オブジェクト</a>

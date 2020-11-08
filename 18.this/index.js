function normalfunction() {
  console.log(this)
}

normalfunction()

function callback() {
  console.log(this)
}
callback()

//事件監聽是自己

const aObject = {
  a: 1,
  b: 2,
  foo: function () {
    console.log(this.a)
    console.log(this.b)
    console.log(this)
  },
}

const bObject = {
  a: 99,
  b: 88,
}

const c = aObject.foo.bind(bObject)
c()

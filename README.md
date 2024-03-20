# Vue NextHint

A Vue component that creates autocomplete functionality for your input fields, but works as tab suggestions instead of dropdown. : [https://vue-nexthint.vercel.app/](https://vue-nexthint.vercel.app)

![Demo NextHint](https://res.cloudinary.com/veseylab/image/upload/v1708086865/nexthint/wuotjrvsld7xya72qhij.gif)


### From version 1.0.4, NextHint support swipe to complete on mobile:
![Demo NextHint on mobile](https://res.cloudinary.com/veseylab/image/upload/v1710901223/nexthint/dsun6kcueojxubou7rbx.gif)

# Installation
Currently, this package only works with Vue 3.

## NPM
Install it using npm: `npm i vue-nexthint`

After that, import to your component: `import { NextHint } from 'vue-nexthint'`

## Usage
In your template:
```
<NextHint
  placeholder="Type 'Vue'"
  @change="onChangeHandler"
  :suggestions="['Vue.js', 'React', 'Hello world']"
/>
```

The event @change will be trigger every time user enter something, you can handle it like this:
```
<script setup>
  const onChangeHandler = (text) => {
    // do something with the new text here
    console.log(text)
  }
</script>
```


# License ❤️
This package is totally free to use. However, if you want to use Magicmouse.js in your commercial projects, I require you to do a good thing for the poor people in your place. You can do whatever you think is "a good thing", like buy them some food, give them some money,..etc... 
I'm not requiring you to take a photo or do anything to prove it, just do it and you will feel great about yourself :)
Let's make the world better place. 
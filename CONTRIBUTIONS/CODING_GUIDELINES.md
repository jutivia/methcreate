# Coding guidelines

- Ensure your functions are as pure as possible. Functions should by default return one and only one type. That means, this:

```
const isEven = (int) => {
    return int % 2 === 0;
}
```

...is better than this:

```
const isEven = (int) => {
    if (int % 2 === 0) {
        return "Yes"
    }

    return false;
}
```

- Functions should be declared as `const`. This is to enforce immutability and maintain consistency across the codebase.
- We're writing ES6+ and not ES6--

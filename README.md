<img width="631" alt="Screenshot 2022-05-24 at 18 34 37" src="https://user-images.githubusercontent.com/31222514/170087315-a5525a2e-b4b3-42ea-a457-0af6a9ece8e3.png">

# 💪 Lifting State

## 🎯 Learning goals

- You understand why (and when) lifting state is necessary
- You can pass down props
- You can pass up functions
- You understand why we are not going to use it often

## Component state architecture

<img width="1102" alt="Screenshot 2022-05-24 at 21 07 53" src="https://user-images.githubusercontent.com/31222514/170113497-6fcbc813-c938-4a6a-a926-60b3f2655c92.png">

## Prop drilling

<img width="1102" alt="Screenshot 2022-05-24 at 21 09 03" src="https://user-images.githubusercontent.com/31222514/170113651-881fdc33-51cf-4a62-9243-ea73c291f3b5.png">

We can pass props down the components, so sub-components can use them

```js
// we fetched users
const users = [ ... ]

const Users = () => {

   return (
       <>
        { users.map(user =>
          (
            <Users user={user} />
          )
        )}
      </>
   )
```

## Lifting state

We will store The state in the parent component of all components that need to share the state between them.

- state goes down ⬇️
- setState goes up ⬆️

<img width="1102" alt="Screenshot 2022-05-24 at 21 17 13" src="https://user-images.githubusercontent.com/31222514/170114927-becf686b-0b95-4d4c-b19c-5525d6ec4dcd.png">

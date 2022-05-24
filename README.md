<img width="631" alt="Screenshot 2022-05-24 at 18 34 37" src="https://user-images.githubusercontent.com/31222514/170087315-a5525a2e-b4b3-42ea-a457-0af6a9ece8e3.png">

# 💪 Lifting State

## 🎯 Learning goals

- You understand why (and when) lifting state is necessary
- You can pass down props
- You can pass up functions
- You understand why we are not going to use it often

## Component state architecture
<img width="1102" alt="Screenshot 2022-05-24 at 20 22 57" src="https://user-images.githubusercontent.com/31222514/170105722-9480a4e0-d398-4529-b085-566c3dad7fec.png">


## Prop drilling

We can pass props down the components, so sub-components can use them

```
const users = [ ... ]
const user = { ... }

<div className="App">
   <Navbar user={user} />
   <Users user={user} users={users} />
   <Footer />
</div>
```



## Lifting state

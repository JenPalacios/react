- A component needs to have a render function.

- A component will only appear on the DOM if it is rendered through the react-dom render function.

- Use React.Fragment to return multiple children elements from a React component.

- Props are similar to HTML attributes. For example, the 'img' tag needs a src and alt attributes.
  Props is the way we get data into the component.

- State is where the data lives and props is how it gets to its end destination.

- STATE: an object that lives inside of a component that stores all the data that the component or children may need. Single source of truth. The state needs to be initialized in the highest component, so the information can be passed and read by children component. So in the case of this application, the state needs to be initialized inside App.js.

How do we get an item into state? You cannot update it directly from another component, other than App.js, because the method that updates the state and the state need to live inside the same component. So, a method (property) of `addFish = fish =>` is added to the App.js file.

To update the state, you need to:

1. Take a copy of the existing state
2. Add the object to the copy
3. Use React method this.setState to update the actual state. You don't have to pass the entire state object, just the piece of state that is being updated.

- GET STATE VALUES: JSX does not have any logic built into it. Therefore, we need to use plain ol' JS to do some things like loop over all the fishes to display them. The thing is, that the fishes is an object, and you cannot map over an object. So what needs to be done, is that the object needs to be wrappeda around Object.keys. This looks like this: `{Object.keys(this.state.fishes).map(key => <p>{key}</p>)}`.

The only problem with this, is that when running the code, REACT throws an error. React needs that every object have a unique identifier to be able to update that component fast. In order to achieve this, we would need to update the above code to: `{Object.keys(this.sate.fishes).map(key => <p key={key}>{key}</p>)}`

- PASS STATE VALUES TO COMPONENTS: `<Fish key={key} details={this.state.fishes[key]}`. In this piece of code, we pass the details. With the `fishes[key]` we pass 'fish1, fish2, fish3, etc.'

- KEY IN PROPS: So, as mentioned already, React needs for us to assign a unique key to each component in order to be able to update it fast. This is passed through a props property called 'key'. If I would need to access that 'key' inside my component, I need to manually pass my own key property without repeating the word key. So for example 'index' might be a good word.

- PASSING FUNCTIONS AS PROPS: In order to set the state, this needs to be done where the state is being handled. Usually this is in a higher level, like the App component in our case. In order to pass the functions down, they need to be passed to the components as props. Usually something like `addToOrder={this.addToOrder}`. Now, in the child component, one can access this function in two ways:

1. Through a custom function inside the child component:

```javascript
handleClick = () => {
  this.props.addToOrder(this.props.index);
};
<button onClick={this.handleClick}></button>;
```

2. Inline on the button:

```javascript
<button onClick={() => this.props.addToOrder(this.props.index)}></button>
```

- If you want to pass anything other than a string to a component, it has to be wrapped around curly brackets. So for example `age={50}`

- `$r` in the console logs the react object that is selected.

- If a component only has a render method and something called prop types, then it can be converted to something called stateless functional component. So, for example, the Header component only gets data fed into it, so there is no reason for it to be a whole Ract class.

```javascript
/* Not necessary */
class Header extends React.Component {
  render() {
    return <p>Returns something that gets rendered {this.props.tagline}</p>;
  }
}

/* Better way - stateless functional component */
const Header = props => {
  return <p>Returns something {props.tagline}</p>;
};

/* Even better way - stateless functional component with implicit return */

const Header = props => <p>Returns something here</p>;
```

In the example above, the stateless functional component does not need the `this` anymore inside the call for props.

- With multiple props, you can deconstruct the props in the following way:

```javascript
const Header = ({tagline, age}) => (
    <p>{tagline}</p>
    <p>{age}</p>
)
```

This way, you don't need to write props.tagline or props.age anymore.

- React does not come with a built in routing system. The two most popular libraries are react-router and next.js.

- Everything in React is a component. Even a router is a component.

- In JSX, you cannot put value as an HTML attribute, because value is reserved to be linked to a state. Instead, you need to use `defaultValue=`

- Events: they work the same as in JS, the difference is that it is done inline. Meaning that:

```javascript
/* Instead of this */
<button id="special-id-to-handle-js-event-in-js-file"></button>

/* You would do this */
<button onClick={this.handleClick}></button>
```

Then, you would add a method inside the component called `handleClick` for the event to work. It is important to mention that the `this.handleClick` does not have the fucntion call `()`, because that would mean that the function would be called when the component mounts. In other words, when the page loads. So, it needs to only be passed as `this.handleClick` so when the user actually clicks on it, then the function runs.

- Golden Rule in React: Don't touch the DOM! Meaning, don't manually select the elements in the DOM through something like querySelector or related selectors in JS.

- There are two ways of getting informatin from an input.

  1. Ref - Allows us to reference an actual DOM Node on the page.

  ```javascript
  /* First create the Ref in the component like so: */
  myInput = React.createRef();
  /* Then, you can add the following to the <input> tag, for example: */
  <input ref={this.myInput}></input>;
  ```

  In this case, only the `this.myInput` will fail as `this` will be undefined. So it is necessary to bind the events. There is no current way of doing this in a proper way. So, two funky ways are:

  ```javascript
  /* 1st way - not ideal, becuase if there are 6 or 10 methods, you would need a line for each of those events inside the constructor.*/
  constructor() {
      super();
      this.goToStore = this.goToStore.bind(this);
  }

  /* 2nd way - better way - most likely to be incorporated in future React versions. Instead of creating a method inside a component, we set a property. */
  goToStore = (event) => {

  }
  ```

  2. Syncing the text of the input into the state

* Lifecycle Events:

1. componentDidMount() = will run as soon as the component mounts, or is put onto the page.

- Push State: it allows us to change the URL without having to reload the page. This can be done with React Router.

- Any images that need to be used, need to live inside the public folder.

- SPREAD: a state has fishes and order. Insted of passing as props {this.state.fishes} and {this.state.order}, we could just pass {...this.state}. The spread operator will take care of assigning the fishes to the fishes and the orders to the order props. The problem with this, is that if something would get added to the state, and I don't wish to use the whole state on another component, then I would be passing trash. So it is better to explicitly pass the things that I need.

- Whenever I see [object Object] logged somewhere, that is because the browser was expecting a string, and instead I passed an object. So, for example, if I would create an object like:

```
const jen = {
  name: 'Jen'
}
```

and if I would alert(jen), I would get [object Object] as an alert. This is becuase, the browser did: `jen.toString()`. To fix this, I simply need to use `JSON.stringify(jen)`.

<!-- # DevStack — ASSIGNMENT 5 PROJECT

## Project Description:

This is my first website useing xhtml, tailwindcss and typescript. this is about an ideal development stack related website. here is people can add their skils to stack section. here is some differnt programming language model and you can choose here what is your main skill.

## Technology i use:

- Vite
- Typescript
- TailwindCss
- daisyUI
- React
- React Tostify
- React Icons

## Features:

- Interactive Stack : Now you can Chose your skill here and store it in side section.
- Feedback & Toast Notifications : When you chose any skill you can show what you choose in right hand side top corner. if you choose any option by mistake then you can remove from stack easyly.
- fully responsive and Sticky : you can use it any kind of device like Mobile, Tab, PC any screen size. when you use our site from mobile then you can see navigation bar sticky in top. when you use it on mobile then you can see our sidebar also sticky.

## Question & Answer:

##### i. What is JSX, and why is it used in React?

**Ans:** jsx is a syntax extension, it's allow us to use html code inside the javascript file. its look like just simple html.

##### ii. What is the difference between props and state?

**Ans:** Their Main difference is ownership and mutability Props send data and i can received data from another component. its completely immutable. on the other hand state is mutable.

##### iii. What does the useState hook do, and where did you use it in this project?

**Ans:** In React functional components, the useState hook is used to store mutable data and automatically re-render the screen or UI whenever that data changes.
I used this twice in my project: first, to manage the stack of selected technologies and second, to toggle the dropdown menu enabling it to open and close upon clicking while making the site mobile-responsive.

##### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans:** Manage side effect in React functional component.

##### v. Why does every item in a .map() list need a unique key prop?

**Ans:** React can uniquely identify each element and optimize performance.

##### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Ans:** Displaying different ui elements or components on the screen based on specific conditions or logic is called conditional rendering.

Example The empty stack message

```
{stack.length === 0 ? (
          <div className="border border-dashed border-slate-200 rounded-2xl py-8 flex items-center justify-center">
            <span className="text-sm font-medium text-slate-400">
              Your stack is empty.
            </span>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="space-y-3 max-h-90 overflow-y-auto pr-1">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between p-3.5 border border-slate-200 rounded-2xl hover:border-slate-300 transition-all bg-white"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 leading-tight">
                        {item.name}
                      </h5>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(item.name)}
                    className="p-1 text-slate-400 hover:text-rose-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <IoCloseOutline className="text-xl" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleToRemoveAll()}
              className="w-full mt-4 py-2.5 border border-rose-200 text-rose-500 hover:bg-rose-50 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Remove All
            </button>
          </div>
        )}
```

##### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:** React is a one way data flow. it's only pass data parent to child. if you want to send data chaild to parent then you need a callback function it's called lifting state up. -->

# 🚀 DevStack — ASSIGNMENT 5 PROJECT

## 📌 Project Description

This is my first website using HTML, Tailwind CSS, and TypeScript. This is about an ideal development stack-related website where people can add their skills to the stack section. Here are some different programming language models, and you can choose here what your main skill is.

---

## 🛠️ Technologies Used

- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **daisyUI**
- **React**
- **React Toastify**
- **React Icons**

---

## ✨ Features

- **Interactive Stack:** Now you can choose your skill here and store it in the side section.
- **Feedback & Toast Notifications:** When you choose any skill, you can see what you chose in the right-hand top corner. If you choose any option by mistake, you can easily remove it from the stack.
- **Fully Responsive & Sticky Layout:** You can use it on any kind of device like Mobile, Tab, or PC on any screen size. When you use our site from mobile, you can see the navigation bar sticky at the top. On desktop, our sidebar is also sticky.

---

## ❓ Questions & Answers

#### i. What is JSX, and why is it used in React?

**Ans:** JSX is a syntax extension; it allows us to use HTML code inside the JavaScript file. It looks just like simple HTML.

#### ii. What is the difference between props and state?

**Ans:** Their main difference is ownership and mutability. Props send data, and it can be received from another component; it is completely immutable. On the other hand, state is mutable.

#### iii. What does the useState hook do, and where did you use it in this project?

**Ans:** In React functional components, the `useState` hook is used to store mutable data and automatically re-render the screen or UI whenever that data changes.  
I used this twice in my project: first, to manage the stack of selected technologies, and second, to toggle the dropdown menu enabling it to open and close upon clicking while making the site mobile-responsive.

#### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans:** It is used to manage side effects in React functional components (preventing infinite render loops and safely loading asynchronous JSON data on mount).

#### v. Why does every item in a .map() list need a unique key prop?

**Ans:** React can uniquely identify each element and optimize rendering performance during updates.

#### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Ans:** Displaying different UI elements or components on the screen based on specific conditions or logic is called conditional rendering.

**Example (The empty stack message):**

```tsx
{
  stack.length === 0 ? (
    <div className="border border-dashed border-slate-200 rounded-2xl py-8 flex items-center justify-center">
      <span className="text-sm font-medium text-slate-400">
        Your stack is empty.
      </span>
    </div>
  ) : (
    <div className="space-y-3">
      <div className="space-y-3 max-h-90 overflow-y-auto pr-1">
        {stack.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-3.5 border border-slate-200 rounded-2xl hover:border-slate-300 transition-all bg-white"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />
              <div>
                <h5 className="text-sm font-bold text-slate-800 leading-tight">
                  {item.name}
                </h5>
                <span className="text-[11px] text-slate-400 font-medium">
                  {item.category}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleRemove(item.name)}
              className="p-1 text-slate-400 hover:text-rose-500 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              <IoCloseOutline className="text-xl" />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleToRemoveAll()}
        className="w-full mt-4 py-2.5 border border-rose-200 text-rose-500 hover:bg-rose-50 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
      >
        Remove All
      </button>
    </div>
  );
}
```

#### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:** Ans: React follows a one-way data flow; it passes data from parent to child via props. If you want to send data from child to parent, you need to pass a callback function as a prop, which is called "lifting state up."

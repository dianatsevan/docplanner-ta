Hi Docplanner team! I decided not to leave the comment’s inside the code but write the description to let you know and understand me and the reasons better.

Lets start with the project configuration.

I chose to use **React** for the solution. The project is being configured with the help of **vite**. The configuration of vite is minimum required. But, of course, it can be treated more according to what is needed: having separated dev and prod  versions, handling static content, env vars, code minification, etc.

Also, I’ve added a minimum required .**eslintrc** to follow single code style rules, but it also can be extended according to the team needs and requirements.

I use **pnpm** as a package manager cause it starts and builds the app faster using helpful technics under the hood, e.g. caching the data.

**Folder structure**. There is no an ideal way of how to do it. Agree, it’s not difficult to make up and implement your own structure, but it’s always a pain in the neck to have well-written documentation of it and keep it up to date to be able to share your idea with all teammates.

Some time ago in the net I bumped into Feature Sliced methodology. It has well-written documentation and quite wide community. I liked the idea of dividing the application into layers and creating segments inside. So, I implemented it in my TA, but not fully, because it’s methodology, what means that you don't need to strictly follow everything. And, of course, there were no need to implement in fully.

Since Docplanner is a wide-spread company and works in a lot of different countries, it means that the application should be translated to many languages. Therefore, I’d like to implement **translation mechanism** to handle this task.

What else very important to mention is **accessibility**. Since Docplanner is a product of health care domain, therefore it should be accessible for all people. To implement it in the best way, the application should be tested by a11y experts using screen reader tools and technics to highlight the weak places. I would like to make the application be more accessible: to have better navigation of the page using the keyboard, readable action items and other items which are important. For example, the error when schedule can’t be loaded, which should be announced to the user when it happens.

The **media query** was added too to make application fit the devices of different sizes. But the work here isn’t fully completed either, because there are a lot of use cases of how and where the application can be used.

I’ve created a couple of **reusable components**, e.g. Button, Typography, but usually in practice we have a team responsible for implementing them, ui kit to follow product’s design.

You can find **css variables** in the project too. I’ve added them to show that it’s much handy to work with them rather than hard code all the values in the project. Without vars the changes in the project become too complicated. Usually it’s also comes from ui kit, which implements the design system.

Some words about **routing**. I kept the app simple without routing. Its’s implementation depends on the requirements: the app should SPA or MPA.

**Testing**. The thing for which I, unfortunately, had no time. The best it to have 100% test-coverage of the project. To be able to have, we need to write test from the beginning of the project. If it isn't possible for some reason there always should a bandwidth planned for this.


## Command Line Interface

Start the app

```bash
pnpm run dev
```
# Makes a Tutorial based Website

## I have done this work in this project
* Makes a react project for Client site
* makes a server site project where I have created some course details
* installed react-router firebase
* used tailwind framework
* taken react icons
* created firebase 
* Login, Register section created

## Requirements of this project are 
* Make sure your design and website idea are unique. First, finalize your idea (What type of website do you want to build). Then google the site design or visit ThemeForest to get your website idea. However, your website can not relate to your previous assignments or any demo project displayed in the course or our conceptual sessions.

* Give your website a name. The name should appear on the website and be displayed on the website's title.

* It will contain a navbar with the options: website logo, website name, Courses, FAQ, Blog, toggle theme (dark/ light), and User Profile Picture (or login). The user profile picture on the navbar is conditional. If the user is signed in, the navbar will show the profile pic. The user's name will be visible when the mouse is in the picture.

* After clicking "Log in," it will redirect to a login page. 3 types of login systems you have to implement: Email & password login, Google, and GitHub login. The login page will have a toggle option to go to the register page.

* In your Email and Password registration form, there should be an input box for "Full name," where the user will type their full name. Other fields will be Photo URL, Email, and Password.

* Clicking "Courses" in the navbar (You can change this name to any meaningful name according to your design, but the purpose of this button should be the same according to our description) will redirect to a page that shows the courses. (Creating a fake dataset is necessary here). You have to create at least 6 courses (fake data). Design & course information is all up to you. (Load data from the server side - must). You can create one, two, or more courses in a row.

* The Courses page will be divided into two parts: a sidebar (either on the left side or on the right side according to your design) & content detail section. In the sidebar, there will be at least 6 options (course options or course categories, or anything else). Every option is clickable. (You will need to create necessary fake data)

* When you click an option (course card or an option on the left/right sidebar), It will take you to the course detail page. Content details depend on you. But, it must include a header, introductory description/course body, and one image. All details must be relevant to the topic. You may include a bullet list/ table/ chart if needed.

* The course/content detail section will have a heading at the top of the page. The heading will have an icon/ button on the side of the heading. When you click on that button, it will create a pdf and will be downloaded ( This will give you more fun. Try out this after completing all of your tasks. Hint: Explore react-to-pdf package). Your pdf should contain some relevant information about the course details.

* There will be a button at the bottom of the content detail called "Get premium access." Clicking the button will take the user to the Checkout route. This route will be a private/protected route. Please ensure that the private route redirects to the login page if the user is not logged in. After login, the user will be redirected to the checkout page.

* Your checkout page will be a dynamic route with route parameters having the id of the content that the user had clicked. On the checkout page, you will display the name based on the id.

* Use the Environment variable to hide the firebase key.

* If you reload the protected/private route (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

## Bonus
* Minimum 12 meaningful git commits on the client-side repository and minimum of 5 meaningful commits on the server-side repository.

* Make your website mobile & desktop responsive (tablet responsive is optional).

* Display errors when the user's email address or password doesn't match.

* Clicking "Blog" will redirect to a public route. That route will have 4 questions & answers.
    * what is cors?

    * Why are you using firebase? What other options do you have to implement authentication?

    * How does the private route work?

    * What is Node? How does Node work?

* (client-side repo) Meaningful readme.md file containing your website name and link to your live site. And at least five bullet points mentioning your website's different features and functionality. And a list of technologies (frameworks, libraries) used in your project. (added a meaningful readme.md file for the server-side repo is optional)

* Create a 404 page.

* Make sure your site looks reasonable. The design and color selection is meaningful.

* Clean and organized Code (folder structure). Organize components with meaningful names, and add comments when needed.
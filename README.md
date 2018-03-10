# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing
[update this section with information about the testing steps you took to ensure site quality]

--*--*--*--*--*--*--*--*--*--

Responsivity

Tested on Responsive Design Checker and Chrome Developer Tools. Site renders well and images/text remain clear when viewport is reduced. At 15" screen size or below, the text above the email form wraps, which makes it look a little less polished, but doesn't affect functionality.

Tested on Google's Mobile-Friendly Test. It's mobile friendly!

Also tested on Webpagetest. Load time is about 1 second on first view, and about half a second on repeat view. Most of the content (67.5%) is images. May be useful to look for ways to further optimize images.

--*--*--*--*--*--*--*--*--*--

Mobile Tests

iPhone 7
Tested on Chrome Developer Tools. Add to cart buttons do not seem to have a background color in their load state. This may be a factor of the emulator, but would be good to test on a physical device to be certain. Best practice would be to define the background color for the button's base (unclicked) state, which it looks like I forgot to do! Everything else looks good - font size and photos are big enough. Touch target areas for buttons are large enough to be used easily on mobile.

iPhone 6
Tested on Responsive Design Checker. Renders very similarly to iPhone 7, but the buttons are visible here. Layout and text/images sizes look good. Also checked landscape layout on Screenfly (another device emulator*) since Responsive Design Checker doesn't appear to allow you to rotate the emulated screen. *http://quirktools.com/screenfly/

iPhone 5
Tested physically on my old iPhone. Page renders well, but the buttons are all rounded instead of square. Could add consistency to the site by defining the border radius of the buttons as 0. Text/image sizes are good. Landscape layout good.

Galaxy S6
Tested on Responsive Design Checker. Renders very well, buttons look as expected, text/image sizes are good.

Galaxy S8
Was unable to find an emulator for this device online. (Would try to find physical device to test on.)

--*--*--*--*--*--*--*--*--*--

Tablet Tests

iPad Pro
Tested on Responsive Design Checker. Renders well on iPad, with no noticeable issues. Header image and H1 do appear a little too small in relation to the rest of the content. Something to fix?

iPad Mini
Tested on Responsive Design Checker. Mostly good, but in portrait mode the product columns are still 3 across, which starts to look cramped at this size. Set breakpoint to a slightly higher number of pixels?  

iPad Air
This one isn't on RDC or Screenfly, so I found another emulator.* Looks good in landscape, but a little cramped in portrait like the Mini. *http://www.viewportemulator.com/

Surface Pro 4
Tested on Screenfly. Looks good in both portrait and landscape. Everything on site looks as intended.

Galaxy Tab S2
Tested on Screenfly. Renders well, but a little cramped in portrait like the iPad Mini and Air.

--*--*--*--*--*--*--*--*--*--

Laptop Tests

Testing in browsers instead of trying to emulate devices (since it should look very similar on different devices). Ideally I would want to test each browser on Mac, Windows and possibly Linux machines.

Chrome
Tested on MacBook Pro 13" running High Sierra. Renders well at full size, and breakpoints seem effective on this device. Text is comfortable reading size and scales well when the user increases browser font size.

Firefox
Tested on MacBook Pro. Renders well, very similar to Chrome (can't see any functional or cosmetic differences.)

Edge
Tested on Toshiba Laptop running Windows 10. Page renders well, but there is no vertical margin between product listings (the border around a product listing touches the border of the one below), which makes them look crowded.

Opera
Tested on MacBook Pro. Renders well, looks identical to Chrome and Firefox.

Internet Explorer
Tested on Toshiba Laptop. Most of the site renders well, but the product images are vertically stretched about 50% larger than they should be. Need to find a fix for this. Check CSS and cross-reference IE's support for what I'm doing. (Try https://caniuse.com/)
// Execute this script in the Chrome DevTools console on the target webpage

// Selector for h1 element with specified classes
const h1Selector =
  'h1.page-title.node--type-rh-blog.rh-blog__node-title.rh-taxonomy__node-title';

// Selectors for header and footer elements to exclude
const headerSelector = 'site-header'; // Replace with the actual header selector
const footerSelector = 'footer'; // Replace with the actual footer selector

// Get h1 element with specified classes
const pageTitleElement = document.querySelector(h1Selector);

// Create an array to store the extracted links
const linksArray = [];

// Check if the h1 element is found
if (pageTitleElement) {
  // Get the text content of the h1 element and add it to the links array as the first item
  const pageTitle = pageTitleElement.textContent.trim();
  linksArray.push(pageTitle);
}

// Get all anchor (a) elements on the page
const allLinks = document.querySelectorAll('a');

// Function to check if an element or its ancestors match the given selector
const isElementOrAncestorMatchingSelector = (element, selector) => {
  return element.matches(selector) || element.closest(selector) !== null;
};

// Iterate through each anchor element and extract the href attribute
allLinks.forEach((link) => {
  // Check if the link is not in the header or footer
  if (
    !isElementOrAncestorMatchingSelector(link, headerSelector) &&
    !isElementOrAncestorMatchingSelector(link, footerSelector)
  ) {
    const href = link.getAttribute('href');
    if (href) {
      // Convert relative URLs to absolute URLs
      const fullUrl = new URL(href, window.location.href).href;
      linksArray.push(fullUrl);
    }
  }
});

// Print the array of links
console.log(linksArray);

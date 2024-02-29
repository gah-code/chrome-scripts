// Script returns an array of objects, where each object represents the extracted data for a URL. Each object has a title property for the page title and a links property for an array of links. If there's an error fetching a URL, the corresponding object will have an empty title and an empty links array. This structure provides a more organized and readable output.

// Selectors for header and footer elements to exclude
const headerSelector = 'header'; // Replace with the actual header selector
const footerSelector = 'footer'; // Replace with the actual footer selector

// Array of URLs
const exampleURLs = [
  'https://www.roberthalf.nl/nl/loopbaan/8-uitdagingen-voor-hr-managers',
  'https://www.roberthalf.nl/nl/werving/snelle-groei-effectief-managen-enkele-tips',
  'https://www.roberthalf.nl/nl/leiderschap/wat-betekent-de-csrd-voor-uw-bedrijf',
];

// Function to check if an element or its ancestors match the given selector
const isElementOrAncestorMatchingSelector = (element, selector) => {
  return element.matches(selector) || element.closest(selector) !== null;
};

// Function to extract links for a given URL and add them to the array
const extractLinksForURL = (url) => {
  // Send an HTTP request to the URL
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      // Create a temporary element to parse the HTML content
      const tempElement = document.createElement('div');
      tempElement.innerHTML = html;

      // Get the h1 element with specified classes
      const pageTitleElement = tempElement.querySelector(
        'h1.page-title.node--type-rh-blog.rh-blog__node-title.rh-taxonomy__node-title'
      );

      // Initialize an object to store the extracted data
      const extractedData = { title: '', links: [] };

      // Check if the h1 element is found
      if (pageTitleElement) {
        // Get the text content of the h1 element
        extractedData.title = pageTitleElement.textContent.trim();
      }

      // Get all anchor (a) elements within the temporary element
      const tempLinks = tempElement.querySelectorAll('a');

      // Iterate through each anchor element and extract the href attribute
      tempLinks.forEach((link) => {
        // Check if the link is not in the header or footer
        if (
          !isElementOrAncestorMatchingSelector(link, headerSelector) &&
          !isElementOrAncestorMatchingSelector(link, footerSelector)
        ) {
          const href = link.getAttribute('href');
          if (href) {
            // Convert relative URLs to absolute URLs
            const fullUrl = new URL(href, url).href;
            extractedData.links.push(fullUrl);
          }
        }
      });

      return extractedData;
    })
    .catch((error) => {
      console.error(`Error fetching ${url}: ${error}`);
      return { title: '', links: [] }; // Return an empty object in case of an error
    });
};

// Iterate through each URL and extract links
const extractLinksPromises = exampleURLs.map((url) => extractLinksForURL(url));

// Wait for all promises to resolve
Promise.all(extractLinksPromises).then((dataArray) => {
  // Print the refined data structure
  console.log(dataArray);
});

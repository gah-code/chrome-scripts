// Function to inspect network requests
function inspectNetwork() {
  // Listen for 'fetch' events
  const fetchHandler = (event) => {
    console.log('Network Request Detected:', event.request.url);
  };

  // Add event listener for 'fetch' events
  window.addEventListener('fetch', fetchHandler);

  // Provide a function to stop listening for network requests
  return () => {
    window.removeEventListener('fetch', fetchHandler);
    console.log('Stopped listening for network requests.');
  };
}

// Function to log event handler data
function logEventHandlerData(eventName, event) {
  switch (eventName) {
    case 'rhcl-button-clicked':
      console.log('rhcl-button-clicked Handler Data:', event);
      // You can add more handling logic for this event
      break;
    case 'rhcl-checkbox-changed':
      console.log('rhcl-checkbox-changed Handler Data:', event);
      // Add handling logic for this event
      break;
    case 'rhcl-chip-removed':
      console.log('rhcl-chip-removed Handler Data:', event);
      // Add handling logic for this event
      break;
    case 'rhcl-chip-selected':
      console.log('rhcl-chip-selected Handler Data:', event);
      // Add handling logic for this event
      break;
    case 'rhcl-dropdown-changed':
      console.log('rhcl-dropdown-changed Handler Data:', event);
      // Add handling logic for this event
      break;
    case 'rhcl-filter-item-changed':
      console.log('rhcl-filter-item-changed Handler Data:', event);
      // Add handling logic for this event
      break;
    case 'rhcl-filter-item-changed':
      console.log('rhcl-job-card-applied Handler Data:', event);
      // Add handling logic for this event
      break;
    default:
      console.log('Unknown Event:', eventName);
      break;
  }
}

// Function to add event listeners
function addEventListeners() {
  const eventListeners = [
    {
      event: 'rhcl-button-clicked',
      handler: (e) => rh_datalayer_event_tracking('button_click', e),
    },
    {
      event: 'rhcl-checkbox-changed',
      handler: (e) => rh_datalayer_event_tracking('toggle_click', e),
    },
    {
      event: 'rhcl-chip-removed',
      handler: (e) => rh_datalayer_event_tracking('button_click', e),
    },
    {
      event: 'rhcl-chip-selected',
      handler: (e) => rh_datalayer_event_tracking('button_click', e),
    },
    {
      event: 'rhcl-dropdown-changed',
      handler: (e) => rh_datalayer_event_tracking('toggle_click', e),
    },
    {
      event: 'rhcl-filter-item-changed',
      handler: (e) => rh_datalayer_event_tracking('filter_click', e),
    },
    {
      event: 'rhcl-job-card-applied',
      handler: (e) => rh_datalayer_event_tracking('filter_click', e),
    },
  ];

  // Add event listeners
  eventListeners.forEach((listener) => {
    document.addEventListener(listener.event, (event) => {
      inspectNetwork(); // Start inspecting network requests when an event is triggered
      logEventHandlerData(listener.event, event); // Log event handler data
    });
  });
}

// Call the function to add event listeners
addEventListeners();

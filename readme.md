# SendInBlue REST Tracker

No dependency REST implementation for SendinBlue's Tracker API

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

Then install it via:

```shell
npm install @wecre8websites/sendinblue-tracker --save
```

## Usage

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var sibTracker = require("@wecre8websites/sendinblue-tracker").sibTracker;
var apiKey = "YOUR-API-KEY"; //Replace with your SIB API key
var sib = new sibTracker(apiKey);

/**
 * Identify
 *
 * Returns on a successful request
 * Returns false on a bad request
 */

var email = "email@domain.com"; // Required
var properties = [
  // Optional
  ("key": "value"),
  // ...
];

sib.identify(email, properties).then(console.log).catch(console.error);

/**
 * trackEvent
 *
 * Returns on a successful request
 * Returns false on a bad request
 */

var email = "email@domain.com"; // Required
var event = "some_event"; // Required
var properties = [
  // Optional
  ("key": "value"),
  // ...
];

sib.trackEvent(email, event, properties).then(console.log).catch(console.error);

/**
 * trackLink
 *
 * Returns on a successful request
 * Returns false on a bad request
 */

var email = "email@domain.com"; // Required
var link = "some_link_identifier"; // Required
var properties = [
  // Optional
  ("key": "value"),
  // ...
];

sib.trackLink(email, link, properties).then(console.log).catch(console.error);

/**
 * trackPage
 *
 * Returns on a successful request
 * Returns false on a bad request
 */

var email = "email@domain.com"; // Required
var page = "https://domain.com/page"; // Required
var properties = [
  // Optional
  ("key": "value"),
  // ...
];

sib.trackLink(email, page, properties).then(console.log).catch(console.error);
```

(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{223:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[e._v("#")]),e._v(" Api")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#api"}},[e._v("Api")]),a("ul",[a("li",[a("a",{attrs:{href:"#integrating-third-party-services"}},[e._v("Integrating third party services")])]),a("li",[a("a",{attrs:{href:"#how-would-you-prevent-a-bot-from-scraping-your-publicly-accessible-api"}},[e._v("How would you prevent a bot from scraping your publicly accessible API?")])]),a("li",[a("a",{attrs:{href:"#if-a-user-attempts-to-create-a-resource-that-already-exists—for-example-an-email-address-that’s-already-registered—what-http-status-code-would-you-return"}},[e._v("If a user attempts to create a resource that already exists—for example, an email address that’s already registered—what HTTP status code would you return?")])]),a("li",[a("a",{attrs:{href:"#http-and-web-services"}},[e._v("HTTP and web services")])]),a("li",[a("a",{attrs:{href:"#lamp"}},[e._v("LAMP")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"integrating-third-party-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrating-third-party-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Integrating third party services")]),e._v(" "),a("p",[e._v("A common issue when integrating third party services within your own API requests is having to wait for the response, and as such, forcing the user to have to wait for longer.\nHow would you go about avoiding this? Name any relevant technologies if appropriate")]),e._v(" "),a("h3",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),a("p",[e._v("The most effective way to solve this problem is to use queues.\nWhen a request is made to our API, a separate job is then created and added to a queue. This job will then be executed independently to the requested endpoint, thus allowing the server to respond without delay.\nThere are many queue providers but the most notable are:")]),e._v(" "),a("ul",[a("li",[e._v("Amazon SQS")]),e._v(" "),a("li",[e._v("Redis")]),e._v(" "),a("li",[e._v("Beanstalkd")])]),e._v(" "),a("h2",{attrs:{id:"how-would-you-prevent-a-bot-from-scraping-your-publicly-accessible-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-would-you-prevent-a-bot-from-scraping-your-publicly-accessible-api","aria-hidden":"true"}},[e._v("#")]),e._v(" How would you prevent a bot from scraping your publicly accessible API?")]),e._v(" "),a("h3",{attrs:{id:"answer-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),a("p",[e._v("If the data within the API is publicly accessible then, technically, it is not possible to completely prevent data scraping. However, there is an effective solution that will deter most people/bots: rate limiting (also known as throttling).")]),e._v(" "),a("p",[e._v("Throttling will prevent a certain device from making a defined number of requests within a defined time. Upon exceeding the defined number of requests, a 429 Too Many Attempts HTTP error should be thrown.")]),e._v(" "),a("p",[e._v("Note: It is important to track the device with more than just an IP address as this is not unique to the device and can result in an entire network losing access to an API.")]),e._v(" "),a("p",[e._v("Other less-than-ideal answers include:")]),e._v(" "),a("ul",[a("li",[e._v("Blocking requests based on the user agent string (easy to circumvent)")]),e._v(" "),a("li",[e._v("Generating temporary “session” access tokens for visitors at the front end. This isn’t secure: Storing a secret on the front end can be reverse-engineered, thus allowing anyone to generate access tokens.")])]),e._v(" "),a("h2",{attrs:{id:"if-a-user-attempts-to-create-a-resource-that-already-exists—for-example-an-email-address-that’s-already-registered—what-http-status-code-would-you-return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-a-user-attempts-to-create-a-resource-that-already-exists—for-example-an-email-address-that’s-already-registered—what-http-status-code-would-you-return","aria-hidden":"true"}},[e._v("#")]),e._v(" If a user attempts to create a resource that already exists—for example, an email address that’s already registered—what HTTP status code would you return?")]),e._v(" "),a("h3",{attrs:{id:"answer-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),a("p",[e._v("Although the answer to this is debatable, the widely accepted practice would be to use a 409 Conflict HTTP status code.")]),e._v(" "),a("p",[e._v("It would also be acceptable to return a 422 Unprocessable Entity.")]),e._v(" "),a("p",[e._v("Some may argue that a 400 Bad Request is acceptable, but we discourage this, since conventionally it implies the server did not understand the request, which in this case is not true.")]),e._v(" "),a("h2",{attrs:{id:"http-and-web-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-and-web-services","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP and web services")]),e._v(" "),a("p",[e._v("What are the different types of HTTP methods that are used in RESTful APIs? Explain when each is used and the differences between them.")]),e._v(" "),a("h3",{attrs:{id:"answer-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer-4","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),a("p",[e._v("While this question is technical in nature, the use of RESTful APIs is independent of platform and very common in web development. Regardless of what programming languages or server side logic is being employed, the REST guidelines are the same. As such, even a relatively new fullstack developer should be well familiar with them.")]),e._v(" "),a("h2",{attrs:{id:"lamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lamp","aria-hidden":"true"}},[e._v("#")]),e._v(" LAMP")]),e._v(" "),a("p",[e._v("Do you have any experience with LAMP?")]),e._v(" "),a("h3",{attrs:{id:"answer-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Answer")]),e._v(" "),a("p",[e._v("LAMP is an open-source solution stack that contains everything you need to create a complete, stand-alone platform for your web application—Linux, Apache, MySQL, and PHP. This question is a good opportunity for your prospective programmer to detail any experience they have taking a web project from conception to completion.")])])}),[],!1,null,null,null);t.default=s.exports}}]);
## Background & Objectives

Build an input with autocomplete capability. What's that? As soon as **one** character is typed in the input field, you get autocomplete suggestions underneath.

The goal is to build an autocomplete input with **Dictionary words**

## Specs

Launch your local webserver with:

```bash
rake webpack
```

There are three files:

- `index.html`
- `style.css`
- `lib/index.js`

To get suggestions, the following API can be used:

```bash
GET https://wagon-dictionary.herokuapp.com/autocomplete/:stem
```

Here, you will replace `:stem` with the characters typed by the user. As soon as the user enters a new character (`keyup` maybe?), you will trigger a new AJAX call. If you look at your "Network" tab in Chrome Inspector you should see something like this:

```bash
https://wagon-dictionary.herokuapp.com/autocomplete/u
https://wagon-dictionary.herokuapp.com/autocomplete/un
https://wagon-dictionary.herokuapp.com/autocomplete/und
https://wagon-dictionary.herokuapp.com/autocomplete/unde
https://wagon-dictionary.herokuapp.com/autocomplete/under
etc.
```

When the API returns the JSON, the job here is to update the `ul#results` list with suggestions!

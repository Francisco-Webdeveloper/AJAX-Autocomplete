## Background & Objectives

Build an input with autocomplete capability. As soon as **one** character is typed in the input field, you get autocomplete suggestions underneath.

The goal is to build an autocomplete input with **Dictionary words**

https://user-images.githubusercontent.com/67716187/126180321-646bbe35-86a3-4a2f-b507-e1ab53738e5d.mov

## Setup

Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/AJAX-Autocomplete.git
yarn install
```
Launch your local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) to test the code in the browser

## Specs

To get suggestions, the following API can be used:

```bash
GET https://wagon-dictionary.herokuapp.com/autocomplete/:stem
```

Here, you will replace `:stem` with the characters typed by the user. As soon as the user enters a new character, you will trigger a new AJAX call. If you look at your "Network" tab in Chrome Inspector you should see something like this:

```bash
https://wagon-dictionary.herokuapp.com/autocomplete/u
https://wagon-dictionary.herokuapp.com/autocomplete/un
https://wagon-dictionary.herokuapp.com/autocomplete/und
https://wagon-dictionary.herokuapp.com/autocomplete/unde
https://wagon-dictionary.herokuapp.com/autocomplete/under
etc.
```
When the API returns the JSON, the job here is to update the `ul#results` list with suggestions!

## Other information
You can also check the code and a preview 👉  https://codepen.io/francisco-frontend/pen/vYmZQBq

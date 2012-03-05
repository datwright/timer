Simple jQuery-UI timer widget for tracking time on a page.
----------------------------------------------------------

<br />

Include jQuery, jQueryUI and jQueryUI css

```html
<link  href="css/jquery-ui.css" rel="Stylesheet" type="text/css" />
<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery-ui.js" type="text/javascript"></script>
```


Include the timer js and css

```html
<link href="css/ui.timer.css" rel="Stylesheet" type="text/css" />
<script src="js/jquery.ui.timer.js" type="text/javascript"></script>
```

<br />

Start a running timer at 0 seconds

```js
$('#timer').timer();
```


Don't start the timer right away

```js
$('#timer').timer({ autostart: false });
```


Initially start the timer at 1 minute

```js
$('#timer').timer({ initial_seconds: 60 });
```

Update the value of the input tag with id 'time_input'

```js
$('#timer').timer({ hidden_selector: "#time_input" });
```


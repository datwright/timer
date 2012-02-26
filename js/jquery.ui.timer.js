(function($) {
    $.widget("ui.timer", {
        options: {
          seconds: 0,
          width: 250,
          height: 50
        },

        _create: function() {
            $(this.element).addClass("ui-timer");

            this.timeDisplayElement = document.createElement("div");
            $(this.timeDisplayElement).addClass("timer-display");

            $(this.element).append(this.timeDisplayElement);

            this._drawPauseButton();

            this.extraTime = this.options.seconds * 1000;

            this.active = false;
            this.start();
        },

        toggle: function() {
            this[this.active ? "stop" : "start"]();
        },

        stop: function() {
            $(this.buttonElement).button({label: "Resume"});
            clearInterval(this.intervalId);
            this.extraTime += this._elapsedMillisecondsSinceStart();
            this.active = false;
        },

        start: function() {
            this.active = true;
            $(this.buttonElement).button({label: "Pause"});
            this.startTime = this._getCurrentTime();
            self = this;
            this.intervalId = setInterval($.proxy(function() {
                this._refreshTime();
                this._redrawTime();
            },this), 100);
        },

        seconds: function() {
            return this.milliseconds() / 1000.0;
        },

        milliseconds: function() {
            return this._elapsedMillisecondsSinceStart() + this.extraTime;
        },

        _elapsedMillisecondsSinceStart: function() {
            if (!this.active) { return 0; }

            var now = this._getCurrentTime();
            return now - this.startTime;
        },

        _refreshTime: function() {
            var displayTime = this.seconds();
            this.displayMinutes = Math.floor(displayTime / 60);
            this.displaySeconds = Math.floor(displayTime % 60);
        },

        _redrawTime: function() {
            var timeText = this._padZero(this.displayMinutes);
            timeText += " : ";
            timeText += this._padZero(this.displaySeconds);

            $(this.timeDisplayElement).text(timeText);
        },

        _drawPauseButton: function() {
            this.buttonElement = document.createElement("button");

            $(this.buttonElement).addClass("pause-button");

            $(this.element).append(this.buttonElement);

            $(this.buttonElement).button();
            self = this;
            $(this.buttonElement).click($.proxy(function() {
                this.toggle();
            },this));
        },

        _padZero: function(number) {
            numberString = number + "";
            if (numberString.length == 1) {
                numberString = "0" + numberString;
            }
            return numberString;
        },

        _getCurrentTime: function () {
            return (new Date()).getTime();
        }

    });
})(jQuery);
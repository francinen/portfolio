jquery-disablescroll
===

Author: [Josh Harrison](http://www.joshharrison.net) at [Aloof](http://aloofdesign.com)

Disables scroll events from mousewheels, touchmoves and keypresses on a given scrollable element, typically `$(window)`.

Use it while jQuery is animating the scroll position for a guaranteed super-smooth ride!


Demo
---
**http://jsfiddle.net/9L2WR/7/**


Example Usage
---

    var $window = $(window);

    // Disable user scrolling just before animating scrollTop
    $window.disablescroll();

    $("html, body").animate({ scrollTop: 500 }, "slow", function() {

        // Enable user scrolling again, now that animated scrolling has completed
        $window.disablescroll("undo");

    });


Options
---

Can be passed on first use:

    $window.disablescroll({
        option : value
    });

Option            | Default Value                              | Description
:---------------- | :----------------------------------------- | :---------------------------------------------------------
handleKeys        | `true`                                     | Boolean indicating whether to disable scroll events caused by keypresses, e.g. the down button.
scrollEventKeys   | `[32, 33, 34, 35, 36, 37, 38, 39, 40]`     | Array of scroll-related keycodes to disable during scroll. See below for reference.


Keycode Reference
---
The following scroll-related keys are all included by default:

Keycode    | Key
:--------- | :-----------
32         | Spacebar
33         | Page Up
34         | Page Down
35         | End
36         | Home
37         | Left Arrow
38         | Up Arrow
39         | Right Arrow
40         | Down Arrow
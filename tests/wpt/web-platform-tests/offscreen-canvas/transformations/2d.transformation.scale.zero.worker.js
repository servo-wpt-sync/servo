// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.scale.zero
// Description:scale() with a scale factor of zero works
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("scale() with a scale factor of zero works");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.save();
ctx.translate(50, 0);
ctx.scale(0, 1);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.restore();
ctx.save();
ctx.translate(0, 25);
ctx.scale(1, 0);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.restore();
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();

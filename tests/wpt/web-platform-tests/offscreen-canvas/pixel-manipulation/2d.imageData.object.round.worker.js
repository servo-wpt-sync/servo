// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.object.round
// Description:ImageData.data rounds numbers with round-to-zero
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("ImageData.data rounds numbers with round-to-zero");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var imgdata = ctx.getImageData(0, 0, 10, 10);
imgdata.data[0] = 0.499;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 0.5;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = 0.501;
_assertSame(imgdata.data[0], 1, "imgdata.data[\""+(0)+"\"]", "1");
imgdata.data[0] = 1.499;
_assertSame(imgdata.data[0], 1, "imgdata.data[\""+(0)+"\"]", "1");
imgdata.data[0] = 1.5;
_assertSame(imgdata.data[0], 2, "imgdata.data[\""+(0)+"\"]", "2");
imgdata.data[0] = 1.501;
_assertSame(imgdata.data[0], 2, "imgdata.data[\""+(0)+"\"]", "2");
imgdata.data[0] = 2.5;
_assertSame(imgdata.data[0], 2, "imgdata.data[\""+(0)+"\"]", "2");
imgdata.data[0] = 3.5;
_assertSame(imgdata.data[0], 4, "imgdata.data[\""+(0)+"\"]", "4");
imgdata.data[0] = 252.5;
_assertSame(imgdata.data[0], 252, "imgdata.data[\""+(0)+"\"]", "252");
imgdata.data[0] = 253.5;
_assertSame(imgdata.data[0], 254, "imgdata.data[\""+(0)+"\"]", "254");
imgdata.data[0] = 254.5;
_assertSame(imgdata.data[0], 254, "imgdata.data[\""+(0)+"\"]", "254");
imgdata.data[0] = 256.5;
_assertSame(imgdata.data[0], 255, "imgdata.data[\""+(0)+"\"]", "255");
imgdata.data[0] = -0.5;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
imgdata.data[0] = -1.5;
_assertSame(imgdata.data[0], 0, "imgdata.data[\""+(0)+"\"]", "0");
t.done();

});
done();

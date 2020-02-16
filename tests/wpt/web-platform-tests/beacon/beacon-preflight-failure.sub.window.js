// META: script=/common/utils.js
// META: script=/common/get-host-info.sub.js

promise_test(async (test) => {
  const sid = token();
  const tid = token();
  const origin = get_host_info().REMOTE_ORIGIN;
  const store =
    `${origin}/beacon/resources/beacon.py?cmd=store&sid=${sid}&tid=${tid}&tidx=0`;
  const monitor =
    `/beacon/resources/beacon.py?cmd=stat&sid=${sid}&tidx_min=0&tidx_max=0`;

  assert_true(navigator.sendBeacon(store, new Blob([], {type: 'x/y'})));

  let actual;
  for (let i = 0; i < 30; ++i) {
    await new Promise(resolve => test.step_timeout(resolve, 10));

    const response = await fetch(monitor);
    const obj = await response.json();
    if (obj.length > 0) {
      actual = JSON.stringify(obj);
      break;
    }
  }

  const expected =
    JSON.stringify([{id: tid, error: 'Preflight not expected.'}]);

  assert_equals(actual, expected);
});

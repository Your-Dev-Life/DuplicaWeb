if (isIE()) {
  const msg =
    'Your current browser, Internet Explorer, does not support ' +
    'all the features of this site. Please upgrade to Microsoft Edge or use ' +
    'the latest brower from Google Chrome, Firefox or Safari';
  window.alert(msg);
  throw new Error(msg);
}

function isIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE '); // IE 10 or older
  var trident = ua.indexOf('Trident/'); //IE 11
  return msie > 0 || trident > 0;
}

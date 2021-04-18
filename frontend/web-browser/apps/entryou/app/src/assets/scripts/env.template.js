(function(window) {
  window.env = window.env || {};

  // Environment variables
  window['env']['apiGatewayHostUrl'] = "${API_GATEWAY_HOST_URL}";
  window['env']['pushHostUrl'] = "${PUSH_HOST_URL}";
  window['env']['entryHostUrl'] = "${ENTRY_HOST_URL}";
  window['env']['uaaHostUrl'] = "${UAA_HOST_URL}";
})(this);

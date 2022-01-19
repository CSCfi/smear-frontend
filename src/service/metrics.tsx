
export const recordMetricsEvent = (content : string) => {
  // The scope argument is ignored fdweRecordEvent function, so we have to pass the content via the meta element
  // attribute. See: https://metrics.fairdata.fi/fdwe.js
  const scope = document.getElementsByName("fdwe-scope")
  if (scope.length > 0) {
    scope[0]["content"] = content
  }
  if (document.readyState === "complete") {
      // @ts-ignore
      global.fdweRecordEvent && global.fdweRecordEvent()
  }
}

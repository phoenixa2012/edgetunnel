addEventListener(
  "fetch", event => {
  let url = new URL(event.request.url);
  url.hostname = "s14xui.speedyflare.ir";
  url.protocol = "https";
  let request = new Request(url, event.request);
  event.respondWith(fetch(request)
  )
  }
  )

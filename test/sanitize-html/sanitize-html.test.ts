import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";

import sanitizeHtml from "http://localhost:8080/sanitize-html@2.7.0";

Deno.test("sanitize-html", () => {
  const rawHtml =
    `<script>location.href="https://boom.com"</script><h1>Hello world!</h1>`;
  const html = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
    allowedAttributes: sanitizeHtml.defaults.allowedAttributes,
  });
  assertEquals(
    html,
    `<h1>Hello world!</h1>`,
  );
});

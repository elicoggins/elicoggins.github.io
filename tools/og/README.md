# Social card sources

`public/og.png` and `public/og-keyboardwarrior.png` are the Open Graph / Twitter
card images. They are rendered from the HTML here so they can be regenerated
rather than being orphan binaries.

The font paths inside these files are absolute `file://` URLs pointing at
`public/fonts/`, because headless Chrome needs them resolvable from disk.

To regenerate:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --screenshot=public/og.png \
  "file://$PWD/tools/og/og-home.html"
```

Same for `og-kw.html` → `public/og-keyboardwarrior.png`.

1200×630 is the size Facebook, LinkedIn, Slack and Discord all key off, and it
satisfies Twitter's `summary_large_image` 2:1-ish requirement.

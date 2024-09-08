# Wikipedia skin redirector addon

[All the Wikipedia skins](https://en.wikipedia.org/wiki/Wikipedia:Skin)

A small addon that does two things:
1) it always remove the mobile prefix from wikipedia links
2) it adds a `useskin` parameter to wikipedia links. If the parameter is already given, it won't overwrite it unless the corresponding `force` setting is set.


## Development notes

Just a reminder for myself :-)

The storage API does not work unless an extension ID is set:
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
- https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/

### Publish

```bash
zip wikipedia_redirector.zip *.html *.css *.js *.png
```
https://extensionworkshop.com/documentation/publish/submitting-an-add-on/

## Credits

Logo source: https://en.wikipedia.org/wiki/File:Wikipedia_logo_gold.png

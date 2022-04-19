# A simple Google Translate CLI Tool

`npm` module which wraps [@vitalets/google-translate-api](https://github.com/vitalets/google-translate-api) and allows to use it as CLI.

## Install

### With `npm`

```bash
npm install -g @argshook/translate
```

### With `yarn`

```bash
yarn global add @argshook/translate
```

## Use

```txt
Usage: translate --from <lang> --to <lang> 'phrase to translate'

Options:
      --version    Show version number                                 [boolean]
  -f, --from       Language to translate from                           [string]
  -t, --to         Language to translate to. Default is English
                                                        [string] [default: "en"]
  -l, --languages  List of all available languages                     [boolean]
      --help       Show help                                           [boolean]
```

## Examples

```bash
$ translate --from uk 'Слава Україні!'
Glory to Ukraine!
```

```bash
$ translate --to ru "it's not a special operation" 
Это не специальная операция
```

## Contribute

```bash
git clone git@github.com:argshook/translate.git
cd translate
npm install
node src/index.js
```

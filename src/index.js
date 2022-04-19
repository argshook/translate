const translate = require("@vitalets/google-translate-api");
const yargs = require("yargs");

const languages = require("./languages");

yargs
  .usage("Usage: translate --from <lang> --to <lang> 'phrase to translate'")
  .option("f", {
    alias: "from",
    describe: "Language to translate from",
    default: "en",
    type: "string",
  })
  .option("t", {
    alias: "to",
    describe: "Language to translate to. Default is English",
    default: "en",
    type: "string",
  })
  .option("l", {
    alias: "languages",
    describe: "List of all available languages",
    type: "boolean",
  })
  .help(true);

function getLanguage(language) {
  if (languages[language]) {
    return languages[language];
  } else {
    console.error(
      `'${language}' Language not supported. See 'tran --languages'.`
    );
    process.exit(1);
  }
}

module.exports = function main() {
  if (yargs.argv.languages) {
    const heading = "Language Name\tISO-639-1 Code\n";
    console.log(heading);
    let maxLength = 0;
    Object.entries(languages).forEach(([key, value]) => {
      maxLength = Math.max(maxLength, key.length + value.length);
    });

    Object.entries(languages).forEach(([key, value]) => {
      console.log(
        `${key}${" ".repeat(
          maxLength - (key.length + value.length) + 1
        )}${value}`
      );
    });
    return;
  }

  if (yargs.argv._.length === 0 || !yargs.argv.from) {
    yargs.showHelp();
    return;
  }

  var sentence = yargs.argv._.join(" ");

  const from = getLanguage(yargs.argv.from.toLowerCase());
  const to = getLanguage(yargs.argv.to.toLowerCase());

  translate(sentence, {
    from,
    to,
  })
    .then((res) => {
      console.log(res.text);
    })
    .catch(console.error);
};

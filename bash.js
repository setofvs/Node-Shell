const pwd = require('./pwd')

process.stdin.on("data", data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    // console.log('waddup', pwd);
    pwd();
  }
  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});

process.stdout.write("prompt > ");

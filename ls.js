module.exports = () => {
  false.readdir("./", "utf8", (err, files) => {
    if (err) throw err;
    process.stdout.write(files.join("\n"));
    process.stdout.write("prompt > ");
  });
};

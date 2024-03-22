const fs = require("fs");
const yaml = require("js-yaml");
const { exec } = require("child_process");

// Load existing YAML file
fs.readFile("data.yaml", "utf8", (err, data) => {
  if (err) throw err;

  // Parse YAML file
  let doc = yaml.load(data);

  // Check if doc is undefined
  if (!doc) {
    doc = {};
  }

  // Update the date field
  doc.date = new Date().toISOString();

  // Write back to the YAML file
  fs.writeFile("data.yaml", yaml.dump(doc), (err) => {
    if (err) throw err;

    // Add changes to git
    exec("git add .", (err, stdout, stderr) => {
      if (err) throw err;

      // Commit changes
      exec('git commit -m "Daily commit"', (err, stdout, stderr) => {
        if (err) throw err;

        // Push changes
        exec("git push", (err, stdout, stderr) => {
          if (err) throw err;
          console.log("Daily commit done!");
        });
      });
    });
  });
});

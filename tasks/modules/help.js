var help = {
  "GRUNT COMMANDS": {
    "watch": "Watch scss",
    "build": "Build the initial files and installs Bower/Branding components",
    "debug": "Build for the debug environment",
    "dev": "Build the dev files",
    "release": "Build the release files"
  },
  "GRUNT COMMANDS (ADVANCED)": {
    "bower": "Install bower dependencies",
    "git": "Clone UI-Framework from github",
    "sass:dev": "Compile scss files",
    "sass:release": "Minify  compiled CSS file",
    "copy": "Copy files from Bower Components to MVC file structure",
    "clean": "Delete the Bower components folder",
    "jshint": "Run jslint for javascript errors",
    "uncss:dev": "Remove unused css styles",
    "uncss:release": "Remove unused css styles",
    "captain_hook:debug": "link page to debug version of the files",
    "captain_hook:dev": "link page to dev version of javascript and CSS",
    "captain_hook:release": "link page to release version of javascript and CSS"
  }
}

module.exports = function(grunt) {
  for(group in help) {
    grunt.log.writeln("\r\n - \x1b[97m" + group + "\x1b[39;49m -------------------------------------------------------------\r\n");
    for(item in help[group]) {
      grunt.log.writeln("   grunt \x1b[93m" + item + "\x1b[39;49m - " + help[group][item]);
    }
  }
}
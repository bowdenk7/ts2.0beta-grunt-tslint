module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        tsconfig: true
      }
    },
    tslint: {
        options: {
            configuration: "tslint.json"
        },
        files: {
            src: ["**/*.ts", "!node_modules/**"]
        },
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");
  grunt.registerTask("default", ["tslint", "ts"]);
};

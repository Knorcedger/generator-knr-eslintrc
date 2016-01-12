'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	writing: {
		addEslintrc: function() {
			this.fs.copyTpl(
				this.templatePath('eslintrc.js'),
				this.destinationPath('.eslintrc.js')
			);
		},
		addDependencies: function() {
			this.npmInstall(['eslint'], {saveDev: true});
			this.npmInstall(['eslint-config-google'], {saveDev: true});
		}
	}
});

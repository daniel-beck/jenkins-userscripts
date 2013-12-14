jenkins-userscripts
===================

Collection of Greasemonkey userscripts for Jenkins CI

Jenkins_Plugin_Popularity.user.js
---------------------------------

This Greasemonkey userscript adds a column with the number of known installations to each table row in the plugin manager. This can help administrators make decisions on whether to use a plugin.

### Known issues

- Requires admins to make [a JSON file with installation stats](http://stats.jenkins-ci.org/plugin-installation-trend/latestNumbers.json) available on the Jenkins server (e.g. in `/userContent`).



Jenkins_Role_Strategy_Role_Assignment.user.js
---------------------------------------------

This Greasemonkey userscript improves the role assignment dialog of Jenkins Role Strategy plugin to work with a lot of roles.

- Role names in the title table row are printed 90 degrees rotated so that the columns take up less space
- The header column printing user/group names is repeated in the last column

### Known Issues

- The repeated header column only gets added for rows that exist when the page was loaded, so newly added rows look a bit broken.



Jenkins_Role_Strategy_Role_Management.user.js
---------------------------------------------

This Greasemonkey userscript improves the role assignment dialog of Jenkins Role Strategy plugin to work with a lot of roles.

- Permission names in the title table row are printed 90 degrees rotated so that the columns take up less space
- The header column printing Role names names is repeated in the last column

### Known Issues

- The repeated header column only gets added for rows that exist when the page was loaded, so newly added rows look a bit broken.

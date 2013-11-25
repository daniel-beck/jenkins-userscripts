// ==UserScript==
// @name        Jenkins Role Strategy Role Management Enhancer
// @author      https://github.com/daniel-beck
// @downloadURL https://raw.github.com/daniel-beck/jenkins-userscripts/master/Jenkins_Role_Strategy_Role_Management.user.js
// @description Enhancement of Jenkins Role Strategy plugin 'Manage Roles' dialog
// @icon        https://2.gravatar.com/avatar/ceb204ad3216b4594ba32364def06deb?r=x&s=32
// @namespace   com.github.daniel-beck.jenkins-userscripts
// @include     http://*/role-strategy/manage-roles
// @include     http://*/jenkins/role-strategy/manage-roles
// @version     1.0
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js
// ==/UserScript==

(function ($) {
    $.fn.rotateTableCellContent = function () {
  /*
Version 1.0
7/2011
Written by David Votrubec (davidjs.com) and
Michal Tehnik (@Mictech) for ST-Software.com
Modified to inline CSS and fix some positioning issues by Daniel Beck (github.com/daniel-beck)
*/
        var cellsToRotate = $(this);

        var betterCells = [];
        cellsToRotate.each(function () {
            var cell = $(this)
            , newText = cell.text()
            , height = cell.height()
            , width = cell.width()
            , newDiv = $('<div>', { height: width, width: height })
            , newInnerDiv = $('<div>', { text: newText, 'style': '-webkit-transform: rotate(270deg);-moz-transform: rotate(270deg);writing-mode:tb-rl;white-space: nowrap;' });

            // fix positioning issues in Jenkins
            newInnerDiv.css('-webkit-transform-origin', (width / 2) + 'px ' + (width / 2) + 'px');
            newInnerDiv.css('-moz-transform-origin', (width / 2) + 'px ' + (width / 2) + 'px');
            newDiv.append(newInnerDiv);

            betterCells.push(newDiv);
        });

        cellsToRotate.each(function (i) {
            $(this).html(betterCells[i]);
        });
    };
})(jQuery);



(function ($) {
    $.fn.addHeaderColumnOnRight = function (options) {
        var rows = $('tr', this);
        rows.each(function() {
            var row = $(this)
            var cl = $(row).find('td:nth-child(2)').clone();
            $(row).find('td:nth-last-child(2)').after(cl);
        });
    };
})(jQuery);


jQuery(document).ready(function(){
    jQuery.noConflict();
    jQuery('#projectRoles .caption-row th').rotateTableCellContent();
    jQuery('#globalRoles .caption-row th').rotateTableCellContent();
    jQuery('#projectRoles').addHeaderColumnOnRight();
    jQuery('#globalRoles').addHeaderColumnOnRight();
});

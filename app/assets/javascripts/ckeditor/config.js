/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.toolbar = "mini";
  config.allowedContent = true;
  config.extraAllowedContent = 'section article header nav aside[lang,foo]';
  config.fillEmptyBlocks = false;
};

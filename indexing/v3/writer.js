/*******************************************************************************
 * Copyright (c) 2017 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 *******************************************************************************/

var java = require('core/v3/java');

exports.add = function(index, location, lastModified, contents, parameters) {
	var parametersJson = {};
	if (parameters) {
		parametersJson = JSON.stringify(parameters);
	}
	java.call('org.eclipse.dirigible.api.v3.indexing.IndexingFacade', 'add', [index, location, lastModified, contents, parametersJson]);
};

'use babel';
/* flow */
/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

class DiffViewElement extends HTMLElement {

  initialize(model) {
    // TODO(most): Create the React diff view component, initialize it with the model and attach here.
    return this;
  }

  /**
   * Return the tab title for the opened diff view tab item.
   */
  getTitle() {
    return 'Diff View';
  }

  /**
   * Return the tab URI for the opened diff view tab item.
   * This guarantees no two diiff views are open for the same URI.
   */
  getURI() {
    return null;
  }
}

module.exports = DiffViewElement = document.registerElement('nuclide-diff-view', {
  prototype: DiffViewElement.prototype,
});
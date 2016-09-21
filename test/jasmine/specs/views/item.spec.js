define(function(require, exports, module) {
    'use strict';

    var Data = require('models/Data');
    var Item = require('views/Item');

    describe('Item View', function() {
        it('can be instantiated', function() {
            var view = new Item();
            expect(view.model instanceof Data.Model).toBeTruthy();
        });
    });
})

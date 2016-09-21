define(function(require) {
    'use strict';

    var Data = require('models/Data');

    describe('Data', function() {
        beforeEach(function() {
            //code
        });
        describe('Model', function() {
            it('can be instantiated', function() {
                var model = new Data.Model();
            });
        });
        describe('Collection', function() {
            it('can be instantiated', function() {
                var collection = new Data.Collection();
            });
        });
    });
})

define(function(require, exports, module) {
    'use strict';

    var StaticView = require('views/Static');
    var Data       = require('models/Data');
    var Item       = require('views/Item');

    describe('Static View', function() {
        var view;
        beforeEach(function() {
            view = new StaticView();
        });
        afterEach(function() {
            view.destroy();
        });
        it('can be instantiated', function() {
            expect(view instanceof Item).toBeTruthy();
            expect(view.model instanceof Data.Model).toBeTruthy();
        });
        it('executes render in initialize', function() {
            spyOn(view, 'render');
            view.initialize();
            expect(view.render).toHaveBeenCalled();
        });
    });
})

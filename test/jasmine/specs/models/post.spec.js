define(function(require) {
    'use strict';

    require('sinon');

    var Data = require('models/Data');
    var Post = require('models/Post');

    describe('Post', function() {
        describe('Model', function() {
            var model;
            beforeEach(function() {
                model = new Post.Model();
            });
            it('can be initialized', function() {
                expect(model instanceof Data.Model).toBeTruthy();
                expect(model.get('title')).toEqual('New Post');
            });
        });
        describe('Collection', function() {

        });
    });
});

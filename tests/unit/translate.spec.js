describe("angular-translate module", function () {

    describe("factory test suite", function () {

        var Dictionary, d, scope;

        beforeEach(module("angular.translate"));

        beforeEach(inject(function ($rootScope, _Dictionary_) {
            Dictionary = _Dictionary_;
            d = new Dictionary();
            scope = $rootScope;

        }));

        it("should have registered module", function () {
            expect(module).toBeDefined();
        });

        it("should have registered Dictionary service", function () {
            expect(Dictionary).toBeDefined();
        });

        it("should contain all essential Dictionary functions", function () {
            expect(typeof d.add).toBe("function");
            expect(typeof d.extend).toBe("function");
            expect(typeof d.use).toBe("function");
        });

        it("should contain all essential variables", function () {
            expect(angular.isObject(d.languages)).toBe(true);
            expect(angular.isObject(d.current)).toBe(true);
            expect(d.language).toBe(false);
        });

    });

});
var LoadingPage = function() {

    this.get = function() {
        browser.get("http://localhost:8000/example/index.html");
    };

    this.change = function(lang) {
        return element(by.id("btn-" + lang)).click();
    };

    this.helloBtn = function() {
        return element(by.binding("Hello"));
    };

    this.byeBtn = function() {
        return element(by.binding("Bye"));
    };

    this.bye = function() {
        return this.byeBtn().getText();
    };

    this.hello = function() {
        return this.helloBtn().getText();
    };

};

describe("language loading test suite", function() {

    var page = new LoadingPage();

    beforeEach(function() {
        page.get();
    });

    it("should the original text before loading a language", function() {

        expect(page.hello()).toBe("Hello");
        expect(page.bye()).toBe("Bye");

    });

    it("should translate an inline-loaded language", function() {

        page.change("mk").then(function() {
            expect(page.hello()).toBe("Zdravo");
            expect(page.bye()).toBe("Cao");
        });


    });

    it("should translate an inline-loaded language", function() {

        page.change("es").then(function() {
            expect(page.hello()).toBe("Hola");
            expect(page.bye()).toBe("Adiós");
        });

    });

});
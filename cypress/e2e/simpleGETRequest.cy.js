describe("simple API get request", () =>{
    it('Verify Bookstore Books collection with GET request', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books',
            failOnStatusCode : false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            //verify body object 
            expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns')
            //verify headers
            expect(response.headers['content-type']).to.equal('application/json; charset=utf-8')
        })
    })
} )
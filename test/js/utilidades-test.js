var expect = chai.expect;
chai.should();

describe('recortar', function () {

  var cadenaFoo,
      cadenaFo_o,
      cadenaFo____o,
      textoPrueba;

  beforeEach (function () {
    cadena_Foo_ = " foo ";
    cadena_Fo_o_ =" fo  o ";
    cadenaFo____o ="fo    o";
    textoPrueba =" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    ";
  })


  it('Should return empty string for empty string', function () {
    expect(recortar("")).to.equal("")
  })

  it('Should return empty string for one space', function () {
    expect(recortar(" ")).to.equal("")
  })

   it('Should return "foo" for " foo "', function () {
    expect(recortar(cadena_Foo_)).to.equal("foo")
  })

    it('Should return "foo" for " fo  o "', function () {
    expect(recortar(cadena_Fo_o_)).to.equal("fo o")
  })

     it('Should return "foo" for "fo    o"', function () {
    expect(recortar(cadenaFo____o)).to.equal("fo o")
  })

    it('Should return the correct spaces for a more complex word', function () {
    expect(recortar(textoPrueba)).to.equal("El veloz murciélago hindú comía feliz cardillo y kiwi")
  })
})

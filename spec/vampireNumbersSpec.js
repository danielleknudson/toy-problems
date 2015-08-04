(function() {
  'use strict';

  describe('vampireNumbers', function() {

    it('should return true for when fangs are found in product', function() {
      expect(vampireNumbers(6, 21)).to.be.true;
      expect(vampireNumbers(204, 615)).to.be.true
      expect(vampireNumbers(30, -51)).to.be.true
      expect(vampireNumbers(2947050, 8469153)).to.be.true
    });

    it('should return false for when fangs are not found in product', function() {
      expect(vampireNumbers(-246, -510)).to.be.false
      expect(vampireNumbers(2947051, 8469153)).to.be.false
    });
   
  });

}());



    

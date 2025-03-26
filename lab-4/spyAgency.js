// spyAgency.js - After Fixing the Issue

class SpyAgency {
  constructor() {
      this.COPIES_REQUIRED = 10;
  }

  signDocument(blindDocs, callback) {
      if (blindDocs.length !== this.COPIES_REQUIRED) {
          throw new Error(`There must be ${this.COPIES_REQUIRED} documents, but I only received ${blindDocs.length}`);
      }

      blindDocs.forEach((doc, i) => {
          if (!doc || typeof doc !== 'number') {
              throw new Error(`Document ${i} is invalid`);
          }
      });

      console.log("All documents are valid. Proceeding with signing.");
      callback(blindDocs, this.verifyAndSign);
  }

  verifyAndSign(document) {
      return document + 1; // Simulated signing
  }
}

module.exports = SpyAgency;

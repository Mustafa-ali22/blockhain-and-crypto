// driver.js - After Fixing the Issue

const SpyAgency = require('./spyAgency');
const agency = new SpyAgency();

const blindDocs = [24924005, 59325211, 51193959, 26211463, 54662907, 575719, 12345678, 87654321, 11223344, 55667788];

try {
    console.log("Agency selected", blindDocs.length);
    agency.signDocument(blindDocs, (docs, signFunction) => {
        const signedDocs = docs.map(signFunction);
        console.log("Signed Documents:", signedDocs);
    });
} catch (error) {
    console.error("Error:", error.message);
}

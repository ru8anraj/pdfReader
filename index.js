const fs = require('fs');

var readPdf = function() {
    return new Promise(resolve => {
        try {
            fs.readFile('./Rubanraj.pdf', 'utf-8', (err, data) => {
                if (err) {
                    throw err;
                } else {
                    resolve(data);
                }
            });
        } catch (error) {
            throw error;            
        }
    });
};

var pdfReader = async function() {
    try {
        let response = await readPdf();
        // console.log(response);
        return response;
    } catch (e) {
        throw e;
    }
};

if (require.main === module) {
    pdfReader().then(t => console.log(' - > ', t));
} else {
    console.info("Running PDF Reader as an exported module");
    exports.pdfReader = pdfReader;
}

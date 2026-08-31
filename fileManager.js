const fs = require("fs");

fs.writeFile("test.txt", "Hello Node.js", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File Created");
  
    fs.readFile("test.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File Content:", data);

        fs.appendFile("test.txt", "\nLearning FS Module", (err) => {
            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("File Updated");

            fs.readFile("test.txt", "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file");
                    return;
                }

                console.log("Updated Content:");
                console.log(data);

                fs.unlink("test.txt", (err) => {
                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});

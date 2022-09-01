// Echo hello world

// console.log("Passed an ENV Variable: ", process.env.name);

const { exec } = require('child_process');
var yourscript = exec('ffmpeg',
        (error, stdout, stderr) => {
            console.log("FFMPEG Ran Successfully", stdout);
            console.log("FFMPEG STD Error", stderr);
            if (error !== null) {
                console.log(`Total exec error: ${error}`);
            }
        });
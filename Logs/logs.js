const fs = require("fs");
const moment = require("moment");
const path = 'logs.txt';

module.exports = {
    writeBackLog: (log) => {
        const currentDate = moment().format('L');
        const currentTime = moment().format('LTS');
        const logText = currentDate + " - " + currentTime + " -  " + log + '\n';
        fs.appendFile(path, logText, function (err) {
            if (err) throw err;
            console.log('saved!');
                // errorServerLogs(`Error writing to backlog: ${err}`);
        })
    }
};
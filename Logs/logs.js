const fs = require("fs");
const moment = require("moment");
const path = 'logs.txt';
const colors = require('colors');

module.exports = {
    writeBackLog: (log, color) => {
        const currentDate = moment().format('L');
        const currentTime = moment().format('LTS');
        const logText = currentDate + " - " + currentTime + " -  " + log + '\n';
        fs.appendFile(path, logText, function (err) {
            if (err) throw err;
            color === 'green' ?
                console.log(`${logText}`.green) : console.log(`${logText}`.red);
            // errorServerLogs(`Error writing to backlog: ${err}`);
        })
    }
};
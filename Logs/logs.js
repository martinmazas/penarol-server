const fs = require("fs");
const moment = require("moment");
const path = 'logs.txt';
const colors = require('colors/safe');

module.exports = {
    writeBackLog: (log, color) => {
        const currentDate = moment().format('L');
        const currentTime = moment().format('LTS');
        const logText = currentDate + " - " + currentTime + " -  " + log + '\n';
        fs.appendFile(path, logText, function (err) {
            if (err) throw err;
            color === 'green' ?
                console.log(colors.green(`${logText}`)) : console.log(colors.red(`${logText}`));
            // errorServerLogs(`Error writing to backlog: ${err}`);
        })
    }
};
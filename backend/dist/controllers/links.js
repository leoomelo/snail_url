"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links = [];
let proxId = 1;
function generateCode() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
const getLink = (req, res) => {
    res.send('GET link');
};
const postLink = (req, res) => {
    const link = req.body;
    link.id = proxId++;
    link.code = generateCode();
    link.hits = 0;
    links.push(link);
    res.status(201).json(link);
};
const getStats = (req, res) => {
    res.send('GET stats');
};
exports.default = {
    getLink,
    postLink,
    getStats
};

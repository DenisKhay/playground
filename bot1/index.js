const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("file.jpg");
const link = 'https://coubsecure-s.akamaihd.net/get/b102/p/coub/simple/cw_file/335e75c33e5/cad407b373267d4021d07/muted_mp4_med_size_1553223159_muted_med.mp4'
const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
    response.pipe(file);
});
// 引入模块
let http = require('http');
let https = require('https');
// 引入fs
let fs = require('fs');
// 引入path
let path = require('path');
// 引入url模块
let url = require('url')
// 引入qs
let qs = require('querystring');

// 定义根路径
const root = path.join(process.cwd(), 'web');

// 文档类型
let MINE_TYPES = {
	'html': 	'text/html',
	'xml': 		'text/xml',
	'txt': 		'text/plain',
	'css': 		'text/css',
	'js': 		'text/javascript',
	'json': 	'application/json',
	'pdf': 		'application/pdf',
	'swf': 		'application/x-shockwave-flash',
	'svg': 		'image/svg+xml',
	'tiff': 	'image/tiff',
	'png': 		'image/png',
	'gif': 		'image/gif',
	'ico': 		'image/x-icon',
	'jpg': 		'image/jpeg',
	'jpeg': 	'image/jpeg',
	'wav': 		'audio/x-wav',
	'wma': 		'audio/x-ms-wma',
	'wmv': 		'video/x-ms-wmv',
	'woff2': 	'application/font-woff2'
};


// 创建服务器
let main = async (req, res) => {

    // 获取文件地址
    // 为了支持中文，将其转码
    let filePath = path.join(root, decodeURIComponent(req.url));
    // 如果是data目录下的，直接添加.json
    // if (req.url.indexOf('/data/') === 0) {
    //     // 添加拓展名
    //     filePath += '.json';
    // }
    // 获取拓展名
    // console.log(111, path.extname(filePath));
    // 没有拓展名，设置默认文件 index.html
    if (!path.extname(filePath)) {
        // 设置默认的
        filePath = path.join(filePath, './index.html')
    }
    // 解析文件地址
    let fileObj = path.parse(filePath);
    // console.log(fileObj);
    // 获取拓展名
    let extname = fileObj.ext.slice(1);
    // 判断文件是否存在
    let isExist = await new Promise(resolve => {
        // 判断文件是否存在
        fs.exists(filePath, (result) => resolve(result))
    })
    // 判断结果
    if (isExist) {
        // 读取文件，返回结果
        let data = await new Promise(resolve => {
            // 读取文件
            fs.readFile(filePath, (err, data) => resolve(data))
        })
        // 是否读取成功
        if (data) {
            // 返回数据设置状态码
            res.writeHead(200, {
                'Content-Type': MINE_TYPES[extname || 'txt'] + '; charset=utf-8'
            })
            // 返回数据
            return res.end(data)
        }
    }
    // 没有找到文件
    res.writeHead(404, {
        'Content-Type': MINE_TYPES.txt + '; charset=utf-8'
    })
    res.end(req.url + ' not found!')
}

http.createServer(main).listen(80)
// 读取密钥文件
let key = fs.readFileSync(path.join(process.cwd(), 'ssl', 'private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(), 'ssl', 'file.crt'));
https.createServer({key, cert}, main).listen(443)
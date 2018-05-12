const secret = 'song'; //加密的时候混淆
const port = 3080; //端口
const admin = {
    user: 'admin',
    pass: 'e10adc3949ba59abbe56e057f20f883e'
}; //admin
const verifyPath = ['/auth/logined', '/auth/logout', /^\/auth/]; // 验证token路径
module.exports = { secret, port, verifyPath, admin };
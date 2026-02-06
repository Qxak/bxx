/**
 * 生成目标 Chrome 87 浏览器 User-Agent（封装可复用函数）
 * @returns {string} 固定的 Windows 10 64位 Chrome 87 UA
 */
function generateTargetUA() {
  return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36';
}

module.exports = Object.freeze({
    /**
     * ## 账号相关
     * - `COOKIE` 是必填项
     * - `NOTE` 帐号备注
     * - `NUMBER` 表示是第几个账号
     * - `CLEAR` 是否启用清理功能
     * - `ACCOUNT_UA` 账号UA, 可在浏览器控制台输入 navigator.userAgent 查看
     * ## 高级功能
     * - `ENABLE_CHAT_CAPTCHA_OCR` 开启评论验证码识别 使用方法见README
     * - `CHAT_CAPTCHA_OCR_URL` 验证码识别接口 POST `url`->`code`
     * - `ENABLE_MULTIPLE_ACCOUNT` 是否启用多账号
     * - `MULTIPLE_ACCOUNT_PARM` 多账号参数(JSON格式) <不推荐使用
     * ## 调试相关
     * - `LOTTERY_LOG_LEVEL` 输出日志等级 Error<Warn<Info<Debug 1<2<3<4
     * - `NOT_GO_LOTTERY` 关闭抽奖行为
     *
     * ## 多账号
     * 自动从环境变量中加载所有 Ray_BiliBiliCookies__数字 格式的账号
     * - `WAIT` 表示下一个账号运行等待时间(毫秒)
     *
     * **按顺序依次执行, 防止访问频繁封禁IP**
     */
    account_parm: {
        COOKIE: '', // 主账号 COOKIE 不再使用，使用多账号配置
        NOTE: '',
        NUMBER: 1,
        CLEAR: true,
        ACCOUNT_UA: generateTargetUA(), // 调用函数生成 UA

        ENABLE_CHAT_CAPTCHA_OCR: true,
        CHAT_CAPTCHA_OCR_URL: 'http://115.191.15.30:9898/ocr/url/text',
        ENABLE_MULTIPLE_ACCOUNT: true,

        MULTIPLE_ACCOUNT_PARM: '',
        LOTTERY_LOG_LEVEL: 3,
        NOT_GO_LOTTERY: ''
    },

    /**
     * 自动生成多账号配置
     * 扫描所有以 Ray_BiliBiliCookies__ 开头的环境变量，并生成对应的账号配置
     */
    multiple_account_parm: (() => {
        const accounts = [];
        const prefix = 'Ray_BiliBiliCookies__';
        
        // 遍历所有环境变量，查找符合条件的 COOKIE
        for (const envName in process.env) {
            if (envName.startsWith(prefix)) {
                // 提取账号序号（数字部分+1）
                const match = envName.match(/^Ray_BiliBiliCookies__(\d+)$/);
                if (match) {
                    const envNumber = parseInt(match[1]);
                    const accountNumber = envNumber + 1; // 数字转换为实际账号序号
                    accounts.push({
                        COOKIE: process.env[envName] || '',
                        NOTE: `自动加载账号${accountNumber}`,
                        NUMBER: accountNumber,
                        CLEAR: true,
                        WAIT: 80 * 1000 + accountNumber * 10 * 1000, // 每个账号增加10秒间隔
                        ACCOUNT_UA: generateTargetUA(), // 调用函数生成 UA（多账号共用同一规则）
                        PROXY_HOST: '',//代理ip1.92.95.0
                        PROXY_PORT: '',//代理ip端口8899
                        PROXY_USER: '',//代理ip账号admin
                        PROXY_PASS: '',//代理ip密码AyNzE4M
                    });
                }
            }
        }
        
        // 按账号序号排序
        accounts.sort((a, b) => a.NUMBER - b.NUMBER);
        
        return accounts;
    })(),

    /**
     * 推送相关参数
     */
    push_parm: {
        SCKEY: '',
        SENDKEY: '',
        QQ_SKEY: '',
        QQ_MODE: '',
        BARK_PUSH: '',
        BARK_SOUND: '',
        PUSHDEER_URL: '',
        PUSHDEER_PUSHKEY: '',
        TG_BOT_TOKEN: '',
        TG_USER_ID: '',
        TG_PROXY_HOST: '',
        TG_PROXY_PORT: '',
        DD_BOT_TOKEN: '',
        DD_BOT_SECRET: '',
        QYWX_AM: '',
        QYWX_KEY: '73c65ca1-528b-497a-b1fc-762f0e139dde',
        IGOT_PUSH_KEY: '',
        PUSH_PLUS_TOKEN: '88892035cea74ca99fb3c2bcaa9b6fd7',
        PUSH_PLUS_USER: '',
        QMSG_KEY: '',
        QMSG_QQ: '',
        SMTP_HOST: '',
        SMTP_PORT: '',
        SMTP_USER: '',
        SMTP_PASS: '',
        SMTP_TO_USER: '',
        GOTIFY_URL: '',
        GOTIFY_APPKEY: ''
    }
});
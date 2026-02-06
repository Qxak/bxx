module.exports = Object.freeze({
    /** 
     * 默认设置(公用)
     * 修改公用设置可填写到最下方
     * 单独设置区将会覆盖公共设置
     */
    default_config: {
        /**
         * 监视更转的用户uid
         */
        UIDs: [],

        /**
         * 监视的tag
         */
        TAGs: [],

        /**
         * 监视的专栏关键词
         */
        Articles: [],

        /**
         * @typedef {object} LotteryInfo
         * @property {string} lottery_info_type
         * @property {number} create_time
         * @property {boolean} is_liked
         * @property {number[]} uids `[uid,ouid]`
         * @property {string} uname
         * @property {Array<{}>} ctrl
         * @property {string} dyid
         * @property {string} reserve_id
         * @property {string} reserve_lottery_text
         * @property {string} rid
         * @property {string} des
         * @property {number} type
         * @property {boolean} hasOfficialLottery 是否官方
         * @typedef {object} RespondBody
         * @property {string} err_msg 错误信息
         * @property {LotteryInfo[]} lottery_info
         * 
         * - 从API接口中获取抽奖信息
         * 获取抽奖信息的链接字符串
         * @example
         * ["https://github.com/spiritLHL/sync_lottery"]
         * 
         * - 从当前路径下符合要求的文件中获取
         * 文件名
         * @example
         * ["file://lottery_info_1.json"]
         */
        APIs: ['file://lottery_info_1.json'],

        /**
         * lottery_dyids目录下抽奖动态文件名(如dyids.txt)
         * 一行一个dyids(非数字字符分割即可)
         */
        TxT: ['dyids.txt'],

        /**
         * 抽奖参与顺序组合
         * * 0 - UIDs
         * * 1 - TAGs
         * * 2 - Articles
         * * 3 - APIs
         * * 4 - TxT
         * @example
         * [3,2,1,0]
         * [1,2,1,2,1]
         */
        LotteryOrder: [2, 0, 1, 3],

        /**
         * 保存抽奖信息至文件
         */
        save_lottery_info_to_file: false,
        
        daily_lottery_limit: 30,      // 每日最多转发30条
        lottery_batch_size: [20, 40], // 每次随机抽20-40条
        /**
         * API发送数据类型 {LotteryInfo[]}
         * 上传抽奖信息的链接字符串
         */
        set_lottery_info_url: '',

        /**
         * 动态中的关键词(表示须同时满足以下条件)
         * 符合js正则表达式的字符串
         */
        key_words: [
            '[抽奖送揪]|福利',
            '[转关评粉]|参与'
        ],

        /**
         * - '00' 关闭自动抽奖
         * - '10' 只转发官方抽奖
         * - '01' 只转发非官方抽奖
         * - '11' 都转
         */
        model: '11',

        /**
         * - '00'关闭自动评论
         * - '10'只评论官抽
         * - '01'只评论非官抽
         * - '11'都评论
         */
        chatmodel: '01',

        /**
         * 不参与预约抽奖
         */
        disable_reserve_lottery: false,

        /**
         * 不转关预约抽奖
         * - 预约抽奖可能与转发抽奖并存
         */
        is_not_relay_reserve_lottery: false,

        /**
         * 检查是否重复转发
         * - 不检查 -1
         * - 通过是否点赞判断(自动点赞) 0
         * - 检索本地dyids文件 1
         * - 通过是否点赞判断(不自动点赞)+检索本地dyids文件 2
         * - 通过是否点赞判断(自动点赞)+检索本地dyids文件 3
         */
        check_if_duplicated: 1,

        /**
         * 偷塔模式不检查是否重复转发
         * * 偷塔模式: 临近开奖时参与抽奖
         */
        sneaktower: true,

        /**
         * 屏蔽动态类型
         * 
         * | 动态类型   | type值 |
         * | :------- |:----- |
         * | 转发       | `1`    |
         * | 含图片     | `2`    |
         * | 无图纯文字  | `4`    |
         * | 视频       | `8`    |
         * | 番剧       | `512`  |
         * | 活动       | `2048` |
         * | 专栏       | `64`   |
         */
        block_dynamic_type: [0],

        /**
         * - 动态创建时间
         * - 多少天前
         */
        max_create_time: 60,

        /**
         * 不加判断的转发所监视的uid转发的动态
         */
        is_imitator: false,

        /**
         * - 在uid里检索的页数
         */
        uid_scan_page: 3,

        /**
         * - 在tag里检索的页数
         */
        tag_scan_page: 3,

        /**
         * - 获取专栏数量
         */
        article_scan_page: 3,

        /**
         * - 专栏创建时间距离现在的最大天数
         */
        article_create_time: 7,

        /**
         * - 不检查专栏是否看过，若选择检查可以提高检测效率
         * - 默认false(检查)
         */
        not_check_article: false,

        /**
         * - 开奖时间距离现在的最大天数
         * - 默认不限制
         */
        maxday: Infinity,

        /**
         *  - 循环等待时间(指所有操作完毕后的休眠时间)
         *  - 单位毫秒
         */
        lottery_loop_wait: 0,
        check_loop_wait: 0,
        clear_loop_wait: 0,

        /**
         * - 转发间隔时间
         * - 单位毫秒
         * - 上下浮动50%
         */
        wait: 30 * 1000,

        /**
         * - 检索动态间隔
         * - 单位毫秒
         */
        search_wait: 2000,

        /**
         * - 读取下一页私信间隔
         * - 单位毫秒
         */
        get_session_wait: 3000,

        /**
         * - 已读私信间隔
         * - 单位毫秒
         */
        update_session_wait: 1000,

        /**
         * - 读取下一页关注列表间隔
         * - 单位毫秒
         */
        get_partition_wait: 2000,

        /**
         * - 获取动态细节间隔
         * - 单位毫秒
         */
        get_dynamic_detail_wait: 2000,

        /**
         * - 过滤间隔(开奖时间/粉丝数)
         * - 单位毫秒
         */
        filter_wait: 1000,

        /**
         * - 随机动态间隔
         * - 单位毫秒
         */
        random_dynamic_wait: 2000,

        /**
         * - 预约抽奖间隔
         * - 单位毫秒
         */
        reserve_lottery_wait: 6000,

        /**
         * - up主粉丝数限制
         */
        minfollower: 1000,

        /**
         * - 只转发已关注的
         */
        only_followed: false,

        /**
         * - 是否发送随机动态(防止被开奖机过滤)
         */
        create_dy: false,

        /**
         * 随机动态类型
         * - 0 自定义文字与图片
         * - 1 推荐视频
         * - -1 混合
         */
        create_dy_type: 0,

        /**
         * - 结束运行时发送随机动态的数量
         */
        create_dy_num: 1,

        /**
         * - 随机动态内容
         * - 类型 `content[]`
         * @typedef Picture
         * @property {string} img_src 站内源
         * @property {number} img_width
         * @property {number} img_height
         * @param { string | Picture[] } content
         */
        dy_contents: ['[doge]', '[doge][doge]'],

        /**
         * - 每转发x条抽奖动态就发送x条随机动态
         * - @example [[10,11,9],[6,8,9]] 每转发9,10,11条抽奖动态就发送6,8,9条随机动态
         */
        create_dy_mode: [[0], [0]],

        /**
         * 转发时[at]的用户
         */
        at_users: [['转发抽奖娘', 294887687], ['你的工具人老公', 100680137]],

        /**
         * - 动态dyid或UID
         * - 英文逗号分隔 如: 1,2,3
         */
        blacklist: '',

        /**
         * 屏蔽词
         */
        blockword: ['脚本', '抽奖号', '钓鱼'],

        /**
         * 奖品价值筛选 - 启用后只抽高价值奖品
         * - true 启用筛选
         * - false 关闭筛选(默认)
         */
        enable_prize_filter: true,

        /**
         * 高价值奖品关键词白名单
         * - 包含这些关键词的奖品会被保留
         * - 支持正则表达式
         * - 根据B站实际抽奖数据优化
         */
        prize_whitelist: [
            // 手机品牌
            '手机', 'iPhone', '苹果', '华为', '小米', 'OPPO', 'vivo', 'iQOO', '荣耀', '三星', '一加', 'realme',
            'Redmi', '红米', 'IQOO', 'Mate', 'Nova', 'P\\d{2}', '魅族', 'Meizu', '中兴', 'nubia', '努比亚',
            'ROG', '黑鲨', '拯救者', '红魔', '真我', 'Turbo', '一加Turbo',
            // 显卡/电脑硬件
            '显卡', 'RTX', 'GPU', 'GTX', '4060', '4070', '4080', '4090', '3060', '3070', '3080', '3090',
            'AMD', 'Radeon', 'RX\\d{4}', '英伟达', 'NVIDIA', '七彩虹', '华硕', 'ASUS', '微星', 'MSI',
            'CPU', '处理器', '内存', 'DDR4', 'DDR5', 'SSD', '固态硬盘', '机械硬盘', '电源', '主板', '散热器', '机箱',
            '水冷', '风冷', '阿斯加特', '女武神', '追风者', '冰灵', 'ID-COOLING', '酷凛',
            // 现金/卡券
            '现金', '红包', '微信红包', '支付宝红包', '转账',
            '京东卡', '京东E卡', 'E卡', 'JD卡', '购物卡', '礼品卡', '充值卡', '话费', '流量',
            '美团卡', '饿了么', '星巴克', '瑞幸', '奈雪', '喜茶',
            // 耳机/音频
            '耳机', 'AirPods', '蓝牙耳机', 'TWS', '降噪耳机', 'Beats', 'Sony', '索尼', 'Bose', 'JBL',
            '森海塞尔', 'Sennheiser', '铁三角', '漫步者', 'FIIL', '万魔', '1MORE', 'QCY', '华为耳机',
            '小米耳机', 'Redmi耳机', 'OPPO耳机', 'vivo耳机', '音响', '音箱', 'HomePod', '小爱音箱',
            '头戴耳机', 'SONGX', '可维迪', 'KVIDIO', 'iKF', 'middix', '西伯利亚', 'Xiberia',
            // 键盘/外设
            '键盘', '机械键盘', '客制化', '磁轴', '鼠标', '罗技', 'Logitech', '雷蛇', 'Razer', '赛睿', 'SteelSeries',
            '达尔优', '杜伽', 'HHKB', 'Leopold', 'Filco', '阿米洛', 'Varmilo', 'Cherry', '樱桃',
            '海盗船', 'Corsair', '冰豹', 'ROCCAT', '黑爵', 'AJAZZ', 'AK\\d{3}', 'PMO', '极光',
            'VGN', 'ROG龙骑士', 'Nuphy', 'nuphy', '凯诺克斯', 'i石头', '末斯', '蜜氪', 'zynoo',
            '来酷', 'Lecoo', 'Firstblood', '一血', 'iLovbee', 'TRYX', '电竞椅',
            // 手办/模型/周边
            '手办', '限定', '典藏', '周年', '景品', 'Figure', '模型', '高达', 'Gundam', '万代', 'Bandai',
            'GSC', 'Good Smile', '寿屋', 'Kotobukiya', 'Alter', 'Max Factory', '粘土人', 'Nendoroid',
            'APEX-TOYS', '洛天依', 'Vsinger', '毛绒玩偶', '周边福袋',
            // 平板/电脑
            '平板', 'iPad', 'MatePad', 'Tab', '小新Pad', '联想平板', '三星平板',
            '电脑', '笔记本', '台式机', '主机', 'MacBook', 'ThinkPad', '戴尔', 'Dell', '惠普', 'HP',
            '华硕笔记本', '联想', 'Lenovo', '宏碁', 'Acer', '微软', 'Surface', '外星人', 'Alienware',
            'Y9000', '游戏本', '天选',
            // 显示器/电视
            '显示器', '电视', '投影仪', '投影机', '4K', '8K', '曲面屏', '带鱼屏', '小米电视', '华为智慧屏',
            '索尼电视', '三星电视', 'LG', 'AOC', '明基', 'BenQ', '戴尔显示器', '飞利浦', 'AGON', '爱攻',
            // 游戏机/游戏
            '游戏机', 'PS5', 'PS4', 'PlayStation', 'Switch', 'Nintendo', '任天堂', 'Xbox', '掌机',
            'Steam Deck', 'ROG掌机', '游戏卡带', '游戏光盘', 'CDK', '激活码', '兑换码',
            // 相机/摄影
            '相机', '镜头', '无人机', '单反', '微单', '运动相机', 'GoPro', '大疆', 'DJI', '佳能', 'Canon',
            '尼康', 'Nikon', '索尼相机', 'Sony相机', '富士', 'Fujifilm', '松下', 'Panasonic', '稳定器', '云台',
            'Insta360',
            // 手表/穿戴
            '手表', '智能手表', 'Apple Watch', '华为手表', 'GT\\d', '小米手表', 'Amazfit', '佳明', 'Garmin',
            '手环', '智能手环', '小米手环', '华为手环', '护眼仪',
            // 会员/服务
            '大会员', '年度大会员', '年费会员', 'VIP', 'SVIP', '超级会员', '腾讯视频', '爱奇艺', '优酷',
            '芒果TV', '网易云音乐', 'QQ音乐', '酷狗', '喜马拉雅', 'WPS', 'Office', 'Adobe', 'PS会员',
            'Xbox Game Pass', 'EA Play', 'Nintendo Online', '优酷月卡', '月卡', '季卡', '年卡',
            // 其他高价值
            '空调', '冰箱', '洗衣机', '扫地机器人', '吸尘器', '戴森', 'Dyson', '小米扫地机', '石头科技',
            '按摩椅', '跑步机', '健身器材', '电动车', '平衡车', '滑板车', '暖风机',
            '机票', '酒店', '旅游', '门票', '演唱会', '音乐节',
            '联名礼盒', '新年礼盒', '福利礼盒', '大礼包', '联通大礼包',
            // 金额匹配（100元以上）
            '\\d{3,}元', '\\d{2,}00元', '千元', '万元'
        ],

        /**
         * 低价值奖品关键词黑名单
         * - 包含这些关键词的奖品会被过滤掉
         * - 黑名单优先级高于白名单
         */
        prize_blacklist: [
            '水杯', '便携水杯', '保温杯',
            '贴纸', '明信片', '徽章', '胸针', '挂件', '钥匙扣',
            '文件夹', '鼠标垫', '帆布袋', '手提袋', '购物袋',
            '笔记本(?!电脑)', '便签', '书签',
            '海报', '立牌', '亚克力',
            '冰箱贴', '杯垫', '抱枕套',
            '优惠券', '折扣券', '体验券', '试用装',
            '签名照', '亲笔签名'
        ],

        /**
         * 转发并评论
         * - 评论内容与转发内容相同
         */
        is_repost_then_chat: false,

        /**
         * 转发评语
         * 支持变量${uname}
         */
        relay: ['转发动态'],

        /**
         * 评论内容
         * 支持变量${uname}
         * @example
         * "祝${uname}早日百大!"
         */
        chat: [
            '[OK]', '[星星眼]', '[歪嘴]', '[喜欢]', '[偷笑]', '[笑]', '[喜极而泣]', '[辣眼睛]', '[吃瓜]', '[奋斗]',
            '永不缺席 永不中奖 永不放弃！', '万一呢', '在', '冲吖~', '来了', '万一', '[保佑][保佑]', '从未中，从未停', '[吃瓜]', '[抠鼻][抠鼻]',
            '来力', '秋梨膏', '[呲牙]', '从不缺席', '分子', '可以', '恰', '不会吧', '1', '好',
            'rush', '来来来', 'ok', '冲', '凑热闹', '我要我要[打call]', '我还能中！让我中！！！', '大家都散了吧，已经抽完了，是我的', '我是天选之子', '给我中一次吧！',
            '坚持不懈，迎难而上，开拓创新！', '[OK][OK]', '我来抽个奖', '中中中中中中', '[doge][doge][doge]', '我我我',
        ],

        /**
         * AI Chat completions参数
         * https://learn.microsoft.com/en-us/azure/ai-foundry/openai/reference#chat-completions
         */
        ai_comments_parm: {
            /**
             * /chat/completions
             */
            url: '',
            body: {},
            prompt: ''
        },

        /**
         * 是否抄热评
         */
        is_copy_chat: false,

        /**
         * 热评屏蔽词
         */
        copy_blockword: ['三不原则'],

        /**
         * - 抽奖UP用户分组id(网页端点击分区后地址栏中的tagid)
         * - 自动获取
         */
        partition_id: 0,

        /**
         * - 是否不为抽奖UP单独设置关注分区
         */
        is_not_create_partition: false,

        /**
         * 是否异常
         */
        is_exception: true,

        /**
         * 是否关注已达上限
         */
        is_outof_maxfollow: false,

        /**
         * - 中奖通知关键词(满足一个就推送)
         * - 符合js正则表达式的字符串
         * - 若以 ~ 开头则表示为黑名单规则
         * - 优先级递增
         */
        notice_key_words: [
            '~预约成功|预约主题',
            '中奖|获得|填写|写上|提供|收货地址|支付宝账号|码|大会员',
            '~你的账号在新设备或平台登录成功',
            '~你预约的直播已开始'
        ],

        /**
         * 是否发送运行状态通知
         */
        notice_running_state: false,

        /**
         * - 获取私信页数
         */
        check_session_pages: 16,

        /**
         * - 清理白名单uid或dyid
         * - 英文逗号分隔 如: 1,2,3
         */
        clear_white_list: '',

        /**
         * - 取关分区
         * - 默认为: 此处存放因抽奖临时关注的up
         * - 可用逗号分割以取关多分区
         */
        clear_partition: '',

        /**
         * 清理多少天之前的动态或关注
         */
        clear_max_day: 30,

        /**
         * - 快速移除关注
         * - 不加判断只去除关注
         */
        clear_quick_remove_attention: false,

        /**
         * - 快速移除关注
         * - 不加判断只去除关注
         * - 移除粉丝数小于指定数量的
         */
        clear_quick_remove_attention_fans_number_smallest: Infinity,

        /**
         * 是否移除动态
         */
        clear_remove_dynamic: true,

        /**
         * 是否移除关注
         */
        clear_remove_attention: true,

        /**
         * 清除延时(毫秒)
         */
        clear_remove_delay: 8000,

        /**
         * 清除动态类型
         * 
         * | 动态类型   | type值 |
         * | :------- |:----- |
         * | 无        | `0`    |
         * | 转发       | `1`    |
         * | 含图片     | `2`    |
         * | 无图纯文字  | `4`    |
         * | 视频       | `8`    |
         * | 番剧       | `512`  |
         * | 活动       | `2048` |
         * | 专栏       | `64`   |
         * 
         * @example
         * 1
         * [1,2,4]
         */
        clear_dynamic_type: [1],
    },

    /**
     * 针对某一账号的特别设置
     * config_[数字] 依次类推
     */
    config_1: {
        /**
         * 手动添加抽奖号UID
         * - 抽奖动态下的二级小号
         * 
         * 帐号1存储抽奖信息至文件
         */
        UIDs: [],

        TAGs: [],

        Articles: [
            '抽奖合集'
        ],

        APIs: [],

        /**
         * 默认为硅基流动，可以修改为其他AI服务
         */
        ai_comments_parm: {
            url: 'https://api.siliconflow.cn/v1/chat/completions',
            body: {
                'model': 'Qwen/Qwen3-32B',
                'max_tokens': 512,
                'thinking_budget': 4096,
                'min_p': 0.05,
                'temperature': 0.7,
                'top_p': 0.7,
                'top_k': 50,
                'frequency_penalty': 0.5,
                'n': 1,
            },
            prompt: '请根据以下内容直接生成一条简短评论，无需说明信息，且不包含任何敏感词汇。'
        },

        save_lottery_info_to_file: true,
    },
    /**
     * 后续帐号从文件提取抽奖信息转抽
     */
    config_2: {},
    config_3: {}
});

/**
 * @file mock data
 * @author autoresponse
 */

/* eslint-disable fecs-camelcase */

/**
 * 获取 mock 响应数据
 *
 * @param {string} path 请求路径名
 * @param {Object} queryParam 查询参数信息
 * @param {Object} postParam post 的查询参数信息
 * @return {Object}
 */
module.exports = function(path, queryParam, postParam) {
    return {
        // 可以通过该属性来设置响应的延时，也可以设为值为'0,100'，表示随机 0-100ms 的延时，默认 0
        _timeout: 0,

        // 通过该状态来设置响应的 http 的状态码，默认 200
        _status: 200,

        // 对于要响应的 json 数据可以统一放在该字段里，也可以不使用该字段，直接跟 _xx 属性平级放
        _data: {
            code: 0,
            msg: "succ",
            data: {
                "header_area": {
                    "avatar_url": "http://test-img.gsxservice.com/81_xvle7ck2.jpeg",
                    "nick_name": "哒哒",
                    "detail_page": "test-img.gsxservice.com/81_xvle7ck2.jpeg",
                    "teacher_intro": "学英语，找跟谁学",
                    "question_count": 33,
                    "zan_count": 44,
                    "icon_one": 1,
                    "icon_two": 1
                },
                "cur_page": 2,
                "has_more": 0,
                "question_list": [{
                    "question": {
                        "number": "70516711142",
                        "user_id": "897377578",
                        "integral": "50",
                        "content": "对于文综，很多同学都会有这样的感受就是老师平时发的一些试卷，卷，这次做错的题下次遇到相同的题还是不会做，那么做试卷的意义何在呀？",
                        "pics": "",
                        "pic": null,
                        "subject_id": "124",
                        "subject_name": "地理",
                        "create_time": "2016-06-30 22:41:52",
                        "update_time": "2016-07-15 14:40:40",
                        "answer_count": "8",
                        "answer_users": "4",
                        "view_count": "0",
                        "focus_count": "0",
                        "best_answer_id": null,
                        "best_teacher_id": null,
                        "ip": "171.42.140.194",
                        "status": "10",
                        "complain_count": "0",
                        "notice_user": "0",
                        "app_type": null,
                        "city_id": null,
                        "zyt_id": null,
                        "zyt_subject": null,
                        "zyt_question": null,
                        "zyt_answer": null,
                        "read_status": "1",
                        "verify_status": "0",
                        "pics_url": [],
                        "user": {
                            "number": "897377578",
                            "mobile": "15827964796",
                            "name": "曾默涵",
                            "sex": 0,
                            "avatar_url": "http://img.gsxservice.com/30527_gfzuxphk.jpeg",
                            "usertype": 2,
                            "realname": "曾默涵",
                            "display_name": "曾默涵",
                            "vip": false,
                            "nickname": "曾默涵",
                            "area_id": null,
                            "location": ""
                        },
                        "time_desc": "06月30日 22:41"
                    },
                    "answer_list": [{
                        "id": "243248",
                        "teacher_id": "625893558",
                        "user_role": "0",
                        "question_id": "70516711142",
                        "content": "你应该思考的是为什么这次错了下次还会错，而不是去质疑试卷本身的意义，经典的练习题可以多次做",
                        "pic": null,
                        "create_time": "2016-06-30 22:43:00",
                        "update_time": "2016-07-01 23:35:13",
                        "comment_count": "4",
                        "best_answer": null,
                        "audio": "12132112",
                        "audio_length": 9,
                        "app_type": null,
                        "verify_status": "0",
                        "user_can_comment": false,
                        "user_number": "625893558",
                        "user_id": "90073",
                        "teacher": {
                            "number": "625893558",
                            "mobile": "15828204512",
                            "name": "雨燕老师",
                            "sex": 0,
                            "avatar_url": "http://img.gsxservice.com/13421928_4nql9249.jpeg",
                            "usertype": 0,
                            "realname": "于春艳",
                            "display_name": "雨燕老师",
                            "vip": 0,
                            "nickname": "雨燕老师",
                            "area_id": "84155392",
                            "city": "广东-广州-越秀区",
                            "category_name": "独立老师",
                            "domain": "yuyanup0301",
                            "school_age": "5",
                            "short_introduce": "帮你高考文综提分，助你跨入名校之门！",
                            "organization_id": null,
                            "detail_url": "http://m.genshuixue.com/625893558",
                            "institution": "独立老师",
                            "location": "广东-广州-越秀区"
                        },
                        "student": null,
                        "content_ext": null,
                        "pic_urls": [],
                        "pic_url": "",
                        "audio_url": "http://file.gsxservice.com/14140834_9kw7ealb.mp3"
                    }, {
                        "id": "243249",
                        "teacher_id": "433853948",
                        "user_role": "0",
                        "question_id": "70516711142",
                        "content": null,
                        "pic": null,
                        "create_time": "2016-07-01 00:12:55",
                        "update_time": "2016-07-01 23:12:43",
                        "comment_count": "2",
                        "best_answer": null,
                        "audio": "3892864",
                        "audio_length": "47",
                        "app_type": null,
                        "verify_status": "0",
                        "user_can_comment": false,
                        "user_number": "433853948",
                        "user_id": "607750",
                        "teacher": {
                            "number": "433853948",
                            "mobile": "13108743012",
                            "name": "我行我素",
                            "sex": 0,
                            "avatar_url": "http://img.gsxservice.com/headpic_woman.png",
                            "usertype": 0,
                            "realname": "刘月秀",
                            "display_name": "我行我素",
                            "vip": 0,
                            "nickname": "我行我素",
                            "area_id": "489686016",
                            "city": "云南-曲靖-麒麟区",
                            "category_name": "独立老师",
                            "domain": "433853948",
                            "school_age": "26",
                            "short_introduce": "对待学生认真负责，和学生亦师亦友",
                            "organization_id": null,
                            "detail_url": "http://m.genshuixue.com/433853948",
                            "institution": "独立老师",
                            "location": "云南-曲靖-麒麟区"
                        },
                        "student": null,
                        "content_ext": null,
                        "pic_urls": [],
                        "pic_url": "",
                        "audio_url": "http://file.gsxservice.com/14140834_9kw7ealb.mp3"
                    }, {
                        "id": "243323",
                        "teacher_id": "918388338",
                        "user_role": "0",
                        "question_id": "70516711142",
                        "content": "l楼上老师，学生就是学生，别用这样的口吻教训学生了。这样的乖乖学生来这里提问也说明他自己说想进步改进的。这样的口气学生已经听够了。建议:同类型的题目去翻一翻一下资料进行归类建模。而且把同型题再练一练。归类好知识体系。但是我同时告诉你，也要规避模式，因为高考靠能力不考模式。希望采纳。祝你越来越好。有稳妥也可以来我的主页，很多有价值免费课程。",
                        "pic": null,
                        "create_time": "2016-07-02 09:25:36",
                        "update_time": "2016-07-02 09:25:36",
                        "comment_count": "1",
                        "best_answer": null,
                        "audio": null,
                        "audio_length": null,
                        "app_type": null,
                        "verify_status": "0",
                        "user_can_comment": false,
                        "user_number": "918388338",
                        "user_id": "1472061",
                        "teacher": {
                            "number": "918388338",
                            "mobile": "18908045765",
                            "name": "黄素祥",
                            "sex": 1,
                            "avatar_url": "http://img.gsxservice.com/13905874_69q805rg.jpeg",
                            "usertype": 0,
                            "realname": "黄素祥",
                            "display_name": "黄素祥",
                            "vip": 1,
                            "nickname": "黄哥地理",
                            "area_id": "419706880",
                            "city": "四川-成都-新津",
                            "category_name": "独立老师",
                            "domain": "geoteacherhsx",
                            "school_age": "8",
                            "short_introduce": "地理名师优质免费课仍你选！地理高分不是梦",
                            "organization_id": null,
                            "detail_url": "http://m.genshuixue.com/918388338",
                            "institution": "独立老师",
                            "location": "四川-成都-新津"
                        },
                        "student": null,
                        "content_ext": null,
                        "pic_urls": [],
                        "pic_url": ""
                    }, {
                        "id": "244582",
                        "teacher_id": "941879408",
                        "user_role": "0",
                        "question_id": "70516711142",
                        "content": "个人建议，遇见错题了，先明白它考的是什么知识点，然后弄清楚知识点，或者可以抄下来，一直到弄懂为止，下次可能考，一样的题目可能有不一样的问题呢，所以理解一个是一个，平时错了再做还是错的话，就可能要从自己身上找原因了，现在错没关系，考试不错就OK啦",
                        "pic": null,
                        "create_time": "2016-07-15 14:40:40",
                        "update_time": "2016-07-15 14:40:40",
                        "comment_count": "1",
                        "best_answer": null,
                        "audio": null,
                        "audio_length": null,
                        "app_type": null,
                        "verify_status": "0",
                        "user_can_comment": false,
                        "user_number": "941879408",
                        "user_id": "3832496",
                        "teacher": {
                            "number": "941879408",
                            "mobile": "15084889714",
                            "name": "陈巧超",
                            "sex": 1,
                            "avatar_url": "http://img.gsxservice.com/15434024_3jpm5sxa.jpeg",
                            "usertype": 0,
                            "realname": "陈巧超",
                            "display_name": "陈巧超",
                            "vip": 0,
                            "nickname": "陈英俊老师",
                            "area_id": "218366976",
                            "city": "湖南-长沙-岳麓区",
                            "category_name": "独立老师",
                            "domain": "941879408",
                            "school_age": "3",
                            "short_introduce": "优秀的中学地理老师，幽默感强，责任心强",
                            "organization_id": null,
                            "detail_url": "http://m.genshuixue.com/941879408",
                            "institution": "独立老师",
                            "location": "湖南-长沙-岳麓区"
                        },
                        "student": null,
                        "content_ext": null,
                        "pic_urls": [],
                        "pic_url": ""
                    }]
                },{
                "question": {
                    "number": "67798236802",
                    "user_id": "770658958",
                    "integral": "0",
                    "content": "在直角三角形abc中，ab等于四，bc等于三，角abc等于90度，以点c为原点，bc所在的直线为x轴建立平面直角坐标系，求点a的坐标。",
                    "pics": "",
                    "pic": null,
                    "subject_id": "12",
                    "subject_name": "初二数学",
                    "create_time": "2016-07-05 13:05:26",
                    "update_time": "2016-07-05 20:50:04",
                    "answer_count": "2",
                    "answer_users": "1",
                    "view_count": "0",
                    "focus_count": "0",
                    "best_answer_id": "243551",
                    "best_teacher_id": "633549",
                    "ip": "36.62.162.158",
                    "status": "20",
                    "complain_count": "0",
                    "notice_user": "0",
                    "app_type": null,
                    "city_id": "34865152",
                    "zyt_id": null,
                    "zyt_subject": null,
                    "zyt_question": null,
                    "zyt_answer": null,
                    "read_status": "1",
                    "verify_status": "0",
                    "pics_url": [],
                    "user": {
                        "number": "770658958",
                        "mobile": "15855046797",
                        "name": "最帅不过权志龙",
                        "sex": 1,
                        "avatar_url": "http://img.gsxservice.com/15200169_dts1krn5.jpeg",
                        "usertype": 2,
                        "realname": "最帅不过权志龙",
                        "display_name": "最帅不过权志龙",
                        "vip": false,
                        "nickname": "最帅不过权志龙",
                        "area_id": null,
                        "location": ""
                    },
                    "time_desc": "07月05日 13:05"
                },
                "answer_list": [
                    {
                        "id": "243551",
                        "teacher_id": "730024198",
                        "user_role": "0",
                        "question_id": "67798236802",
                        "content": null,
                        "pic": "3908406",
                        "create_time": "2016-07-05 15:11:36",
                        "update_time": "2016-07-05 20:50:04",
                        "comment_count": "2",
                        "best_answer": "1",
                        "audio": null,
                        "audio_length": null,
                        "app_type": null,
                        "verify_status": "0",
                        "user_can_comment": false,
                        "user_number": "730024198",
                        "user_id": "633549",
                        "teacher": {
                            "number": "730024198",
                            "mobile": "13469998921",
                            "name": "李婉荣",
                            "sex": 0,
                            "avatar_url": "http://img.gsxservice.com/13193259_4mn6nqha.jpeg",
                            "usertype": 0,
                            "realname": "李婉荣",
                            "display_name": "李婉荣",
                            "vip": 0,
                            "nickname": "李婉荣",
                            "area_id": "134483968",
                            "city": "海南-海口-美兰区",
                            "category_name": "独立老师",
                            "domain": "730024198",
                            "school_age": "2",
                            "short_introduce": "知名企业小初数学特优级教师",
                            "organization_id": null,
                            "detail_url": "http://m.genshuixue.com/730024198",
                            "institution": "独立老师",
                            "location": "海南-海口-美兰区"
                        },
                        "student": null,
                        "content_ext": null,
                        "pic_urls": [
                            "http://img.gsxservice.com/14442814_e2vwekit.jpeg"
                        ],
                        "pic_url": "http://img.gsxservice.com/14442814_e2vwekit.jpeg"
                    }
                ]
            }],
                "loginuser": {
                    "user_number": null,
                    "user_role": null
                }
            },
            ts: 1468899261,
            declare_config: {
                "declareTpl": "v2/resources/page/qa/askRoom/index"
            }
        }
    };
};

/* eslint-enable fecs-camelcase */
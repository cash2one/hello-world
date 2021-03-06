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
module.exports = function (path, queryParam, postParam) {
    return {
        // 可以通过该属性来设置响应的延时，也可以设为值为'0,100'，表示随机 0-100ms 的延时，默认 0
        _timeout: 0,

        // 通过该状态来设置响应的 http 的状态码，默认 200
        _status: 200,

        // 对于要响应的 json 数据可以统一放在该字段里，也可以不使用该字段，直接跟 _xx 属性平级放
        _data: {
            "code": 0,
            "msg": "succ",
            "data": {
                "comment_list": [{
                    "serial_number": "151225676765",
                    "user_id": "344654",
                    "teacher_user_id": "341957",
                    "desc_match": "5.0",
                    "teach_result": "5.0",
                    "service_attitude": "5.0",
                    "face_type": "1",
                    "info": "瀹為檯涓婂氨鏄粖鐢熶粖涓�",
                    "create_time": "2015-12-25",
                    "fr": "0",
                    "course_type": "2",
                    "course_number": "151225482635",
                    "thumb_up": "1",
                    "has_photo": "0",
                    "display_title": "璇捐妭1-1",
                    "anonymous": "0",
                    "comment_num": "2",
                    "teacher_user_number": "874275788",
                    "private_domain": "qq123123123123",
                    "comment_id": "39142",
                    "has_thumb_up": false,
                    "comprehensive_score": "5.0",
                    "course": {
                        "course_name": "鏀惰垂鐩存挱璇撅紝姝ｅ湪涓婅涓�-绗�1璇捐妭",
                        "hours": "11.0",
                        "lesson_way": "2",
                        "real_student": "ugh",
                        "lesson_way_name": "鍦ㄧ嚎鎺堣",
                        "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                        "course_number": "151225482635",
                        "course_url": "http://test.genshuixue.com/teacher/classCourseDetail/151225482635",
                        "teacher_name": "闈掗潚"
                    },
                    "user": {
                        "display_name": "ugh",
                        "avatar_url": "http://test-img.gsxservice.com/394143_zlfil6d7.jpeg",
                        "number": "454744198",
                        "url": "http://lizhaosheng-m.test.genshuixue.com/x/454744198"
                    },
                    "photo_list": [],
                    "is_my_comment": false,
                    "if_can_addition": false,
                    "if_can_review": false,
                    "has_more": 0,
                    "can_open": 1,
                    "other_comment": [{
                        "serial_number": "0",
                        "user_id": "344654",
                        "teacher_user_id": "341957",
                        "desc_match": "2.0",
                        "teach_result": "3.0",
                        "service_attitude": "3.0",
                        "face_type": "2",
                        "info": "234",
                        "create_time": "2015-12-28",
                        "fr": "0",
                        "course_type": "2",
                        "course_number": "151225482635",
                        "thumb_up": "1",
                        "has_photo": "0",
                        "display_title": "鎬昏绋�",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "39225",
                        "has_thumb_up": false,
                        "comprehensive_score": "3.0",
                        "course": {
                            "course_name": "鏀惰垂鐩存挱璇撅紝姝ｅ湪涓婅涓�-鎬昏绋�",
                            "hours": "11.0",
                            "lesson_way": "2",
                            "real_student": "ugh",
                            "lesson_way_name": "鍦ㄧ嚎鎺堣",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "151225482635",
                            "course_url": "http://test.genshuixue.com/teacher/classCourseDetail/151225482635",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "ugh",
                            "avatar_url": "http://test-img.gsxservice.com/394143_zlfil6d7.jpeg",
                            "number": "454744198",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/454744198"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false
                    }]
                }, {
                    "serial_number": "150331744430",
                    "user_id": "341981",
                    "teacher_user_id": "341957",
                    "desc_match": "1.0",
                    "teach_result": "3.0",
                    "service_attitude": "2.0",
                    "face_type": "2",
                    "info": "b鈥唍鈥唍",
                    "create_time": "2015-12-29",
                    "fr": "0",
                    "course_type": "1",
                    "course_number": "0",
                    "thumb_up": "1",
                    "has_photo": "0",
                    "display_title": "璇捐妭1-1",
                    "anonymous": "1",
                    "comment_num": "1",
                    "teacher_user_number": "874275788",
                    "private_domain": "qq123123123123",
                    "comment_id": "39278",
                    "has_thumb_up": false,
                    "comprehensive_score": "2.0",
                    "course": {
                        "course_name": "鍚変粬-绗�2璇捐妭",
                        "hours": "1.0",
                        "lesson_way": "2",
                        "real_student": "199****0002",
                        "lesson_way_name": "鍦ㄧ嚎鎺堣",
                        "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                        "course_number": "0",
                        "course_url": "",
                        "teacher_name": "闈掗潚"
                    },
                    "user": {
                        "display_name": "鍖垮悕鐢ㄦ埛",
                        "avatar_url": "http://img.gsxservice.com/0common/ic_anonymous_user_n.png",
                        "url": ""
                    },
                    "photo_list": [],
                    "is_my_comment": false,
                    "if_can_addition": false,
                    "if_can_review": false,
                    "has_more": 0,
                    "can_open": 0
                }, {
                    "serial_number": "0",
                    "user_id": "341958",
                    "teacher_user_id": "341957",
                    "desc_match": "2.0",
                    "teach_result": "2.0",
                    "service_attitude": "2.0",
                    "face_type": "1",
                    "info": "楣�",
                    "create_time": "2015-12-28",
                    "fr": "0",
                    "course_type": "2",
                    "course_number": "151225482635",
                    "thumb_up": "0",
                    "has_photo": "0",
                    "display_title": "鎬昏绋�",
                    "anonymous": "0",
                    "comment_num": "2",
                    "teacher_user_number": "874275788",
                    "private_domain": "qq123123123123",
                    "comment_id": "39205",
                    "has_thumb_up": false,
                    "comprehensive_score": "2.0",
                    "course": {
                        "course_name": "鏀惰垂鐩存挱璇撅紝姝ｅ湪涓婅涓�-鎬昏绋�",
                        "hours": "11.0",
                        "lesson_way": "2",
                        "real_student": "涓冧竷",
                        "lesson_way_name": "鍦ㄧ嚎鎺堣",
                        "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                        "course_number": "151225482635",
                        "course_url": "http://test.genshuixue.com/teacher/classCourseDetail/151225482635",
                        "teacher_name": "闈掗潚"
                    },
                    "user": {
                        "display_name": "涓冧竷",
                        "avatar_url": "http://test-img.gsxservice.com/179602_6oeuoggk.jpeg",
                        "number": "874257868",
                        "url": "http://lizhaosheng-m.test.genshuixue.com/x/874257868"
                    },
                    "photo_list": [],
                    "is_my_comment": false,
                    "if_can_addition": false,
                    "if_can_review": false,
                    "has_more": 0,
                    "can_open": 1,
                    "other_comment": [{
                        "serial_number": "151225676889",
                        "user_id": "341958",
                        "teacher_user_id": "341957",
                        "desc_match": "5.0",
                        "teach_result": "5.0",
                        "service_attitude": "5.0",
                        "face_type": "1",
                        "info": "濂�",
                        "create_time": "2015-12-28",
                        "fr": "0",
                        "course_type": "2",
                        "course_number": "151225482635",
                        "thumb_up": "0",
                        "has_photo": "0",
                        "display_title": "璇捐妭1-1",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "39210",
                        "has_thumb_up": false,
                        "comprehensive_score": "5.0",
                        "course": {
                            "course_name": "鏀惰垂鐩存挱璇撅紝姝ｅ湪涓婅涓�-绗�1璇捐妭",
                            "hours": "11.0",
                            "lesson_way": "2",
                            "real_student": "涓冧竷",
                            "lesson_way_name": "鍦ㄧ嚎鎺堣",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "151225482635",
                            "course_url": "http://test.genshuixue.com/teacher/classCourseDetail/151225482635",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "涓冧竷",
                            "avatar_url": "http://test-img.gsxservice.com/179602_6oeuoggk.jpeg",
                            "number": "874257868",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/874257868"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false
                    }]
                }, {
                    "serial_number": "151225611989",
                    "user_id": "341981",
                    "teacher_user_id": "341957",
                    "desc_match": "5.0",
                    "teach_result": "5.0",
                    "service_attitude": "5.0",
                    "face_type": "1",
                    "info": "濂�",
                    "create_time": "2015-12-26",
                    "fr": "0",
                    "course_type": "2",
                    "course_number": "151225482635",
                    "thumb_up": "0",
                    "has_photo": "0",
                    "display_title": "璇捐妭1-1",
                    "anonymous": "0",
                    "comment_num": "2",
                    "teacher_user_number": "874275788",
                    "private_domain": "qq123123123123",
                    "comment_id": "39160",
                    "has_thumb_up": false,
                    "comprehensive_score": "5.0",
                    "course": {
                        "course_name": "鏀惰垂鐩存挱璇撅紝姝ｅ湪涓婅涓�-绗�3璇捐妭",
                        "hours": "11.0",
                        "lesson_way": "2",
                        "real_student": "涓€涓嬫鍑哄樊",
                        "lesson_way_name": "鍦ㄧ嚎鎺堣",
                        "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                        "course_number": "151225482635",
                        "course_url": "http://test.genshuixue.com/teacher/classCourseDetail/151225482635",
                        "teacher_name": "闈掗潚"
                    },
                    "user": {
                        "display_name": "涓€涓嬫鍑哄樊",
                        "avatar_url": "http://test-img.gsxservice.com/422267_gmihh664.jpeg",
                        "number": "874931158",
                        "url": "http://lizhaosheng-m.test.genshuixue.com/x/874931158"
                    },
                    "photo_list": [],
                    "is_my_comment": false,
                    "if_can_addition": false,
                    "if_can_review": false,
                    "has_more": 0,
                    "can_open": 1,
                    "other_comment": [{
                        "serial_number": "0",
                        "user_id": "341981",
                        "teacher_user_id": "341957",
                        "desc_match": "2.0",
                        "teach_result": "2.0",
                        "service_attitude": "3.0",
                        "face_type": "1",
                        "info": "鍝堝凹",
                        "create_time": "2015-12-28",
                        "fr": "0",
                        "course_type": "2",
                        "course_number": "151225482635",
                        "thumb_up": "0",
                        "has_photo": "0",
                        "display_title": "鎬昏绋�",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "39245",
                        "has_thumb_up": false,
                        "comprehensive_score": "2.0",
                        "course": {
                            "course_name": "鏀惰垂鐩存挱璇撅紝姝ｅ湪涓婅涓�-鎬昏绋�",
                            "hours": "11.0",
                            "lesson_way": "2",
                            "real_student": "涓€涓嬫鍑哄樊",
                            "lesson_way_name": "鍦ㄧ嚎鎺堣",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "151225482635",
                            "course_url": "http://test.genshuixue.com/teacher/classCourseDetail/151225482635",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "涓€涓嬫鍑哄樊",
                            "avatar_url": "http://test-img.gsxservice.com/422267_gmihh664.jpeg",
                            "number": "874931158",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/874931158"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false
                    }]
                }, {
                    "serial_number": "0",
                    "user_id": "342307",
                    "teacher_user_id": "341957",
                    "desc_match": "5.0",
                    "teach_result": "5.0",
                    "service_attitude": "5.0",
                    "face_type": "3",
                    "info": "鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J鍎跨鍙彲鍙彲鍙彲绉戞妧灞€ 鍠滼J鑰虫満鍠濈劍鎭╀繆浣犲憿鐒︽仼淇婄畝浠嬭€虫満楗垮€熻鍗＄户鑰岀劍鎭╀繆楗跨劍鎭╀繆鍎跨鑺傚亣鏃ュ姞鍏ョ劍鎭╀繆鍎跨鍙彲鍙彲鍙彲鑾狫J",
                    "create_time": "2015-03-21",
                    "fr": "2",
                    "course_type": "0",
                    "course_number": "0",
                    "thumb_up": "8",
                    "has_photo": "0",
                    "display_title": "",
                    "anonymous": "0",
                    "comment_num": "11",
                    "teacher_user_number": "874275788",
                    "private_domain": "835036908",
                    "comment_id": "36823",
                    "has_thumb_up": false,
                    "comprehensive_score": "5.0",
                    "course": {
                        "lesson_way": "4",
                        "lesson_way_name": "瀛︾敓涓婇棬",
                        "course_name": "鎻掕姳-鎬昏绋�",
                        "hours": "4.00",
                        "teacher_url": "http://www.test.genshuixue.com/835036908",
                        "course_number": "0",
                        "course_url": "",
                        "teacher_name": "闈掗潚"
                    },
                    "user": {
                        "display_name": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                        "avatar_url": "http://test-img.gsxservice.com/361306_kc22eyay.jpeg",
                        "number": "835036908",
                        "url": "http://lizhaosheng-m.test.genshuixue.com/x/835036908"
                    },
                    "photo_list": [],
                    "is_my_comment": false,
                    "if_can_addition": false,
                    "if_can_review": false,
                    "has_more": 1,
                    "can_open": 1,
                    "other_comment": [{
                        "serial_number": "150729516867",
                        "user_id": "342307",
                        "teacher_user_id": "341957",
                        "desc_match": "3.0",
                        "teach_result": "2.0",
                        "service_attitude": "4.0",
                        "face_type": "2",
                        "info": "T7diofyocytcyfiicytiotoyfoyoyfofyyogoyfvyoyoyoyoyoyggouougougougougougougougoygt9dotdoydoyfpfoyfoydt88dtf9yfy9foyfoyfyofpyffpy",
                        "create_time": "2015-11-03",
                        "fr": "0",
                        "course_type": "1",
                        "course_number": "0",
                        "thumb_up": "0",
                        "has_photo": "0",
                        "display_title": "璇捐妭1-1",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "38601",
                        "has_thumb_up": false,
                        "comprehensive_score": "3.0",
                        "course": {
                            "course_name": "缇庢床鐣欏-ft-绗�1璇捐妭",
                            "hours": "1.0",
                            "lesson_way": "2",
                            "real_student": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                            "lesson_way_name": "鍦ㄧ嚎鎺堣",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "0",
                            "course_url": "",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                            "avatar_url": "http://test-img.gsxservice.com/361306_kc22eyay.jpeg",
                            "number": "835036908",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/835036908"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false
                    }, {
                        "serial_number": "150402810915",
                        "user_id": "342307",
                        "teacher_user_id": "341957",
                        "desc_match": "3.0",
                        "teach_result": "4.0",
                        "service_attitude": "3.0",
                        "face_type": "2",
                        "info": "鍙濮愭枻鏂よ杈冪湅",
                        "create_time": "2015-11-03",
                        "fr": "0",
                        "course_type": "1",
                        "course_number": "0",
                        "thumb_up": "1",
                        "has_photo": "0",
                        "display_title": "璇捐妭2-1",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "38593",
                        "has_thumb_up": false,
                        "comprehensive_score": "3.0",
                        "course": {
                            "course_name": "鍚変粬-绗�2璇捐妭",
                            "hours": "1.0",
                            "lesson_way": "4",
                            "real_student": "瀛濅笢鍚�",
                            "lesson_way_name": "瀛︾敓涓婇棬",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "0",
                            "course_url": "",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                            "avatar_url": "http://test-img.gsxservice.com/361306_kc22eyay.jpeg",
                            "number": "835036908",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/835036908"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false
                    }, {
                        "serial_number": "150401810030",
                        "user_id": "342307",
                        "teacher_user_id": "341957",
                        "desc_match": "4.0",
                        "teach_result": "2.0",
                        "service_attitude": "3.0",
                        "face_type": "1",
                        "info": "鍛靛懙绾㈢孩鐏伀鎭嶆亶鎯氭儦",
                        "create_time": "2015-11-03",
                        "fr": "0",
                        "course_type": "1",
                        "course_number": "0",
                        "thumb_up": "1",
                        "has_photo": "0",
                        "display_title": "璇捐妭1-1",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "38589",
                        "has_thumb_up": false,
                        "comprehensive_score": "3.0",
                        "course": {
                            "course_name": "鍚変粬-绗�3璇捐妭",
                            "hours": "1.0",
                            "lesson_way": "4",
                            "real_student": "瀛濅笢鍚�",
                            "lesson_way_name": "瀛︾敓涓婇棬",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "0",
                            "course_url": "",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                            "avatar_url": "http://test-img.gsxservice.com/361306_kc22eyay.jpeg",
                            "number": "835036908",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/835036908"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false
                    }, {
                        "serial_number": "150729582347",
                        "user_id": "342307",
                        "teacher_user_id": "341957",
                        "desc_match": "5.0",
                        "teach_result": "5.0",
                        "service_attitude": "5.0",
                        "face_type": "1",
                        "info": "鍝堝搱鍝�",
                        "create_time": "2015-09-14",
                        "fr": "0",
                        "course_type": "1",
                        "course_number": "0",
                        "thumb_up": "1",
                        "has_photo": "0",
                        "display_title": "璇捐妭1-1",
                        "anonymous": "0",
                        "teacher_user_number": "874275788",
                        "private_domain": "qq123123123123",
                        "comment_id": "38116",
                        "has_thumb_up": false,
                        "comprehensive_score": "5.0",
                        "course": {
                            "course_name": "闆呮€�-闃�-绗�4璇捐妭",
                            "hours": "1.0",
                            "lesson_way": "8",
                            "real_student": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                            "lesson_way_name": "鑰佸笀涓婇棬",
                            "teacher_url": "http://www.test.genshuixue.com/qq123123123123",
                            "course_number": "0",
                            "course_url": "",
                            "teacher_name": "闈掗潚"
                        },
                        "user": {
                            "display_name": "瀛濅笢鍚涚殑鍚嶅氨鏄繖",
                            "avatar_url": "http://test-img.gsxservice.com/361306_kc22eyay.jpeg",
                            "number": "835036908",
                            "url": "http://lizhaosheng-m.test.genshuixue.com/x/835036908"
                        },
                        "photo_list": [],
                        "is_my_comment": false,
                        "if_can_addition": false,
                        "if_can_review": false,
                        "additional": {
                            "student": {
                                "teacher_comment_id": "38116",
                                "info": "绾㈢孩鐏伀",
                                "type": "1",
                                "create_time": "46澶╁悗杩借瘎"
                            }
                        }
                    }]
                }],
                "has_more": 1,
                "additional": {
                    "desc_match": "3.7",
                    "service_attitude": "3.7",
                    "teach_result": "3.6",
                    "average": "3.7",
                    "user_total_number": "28",
                    "total_number": 186,
                    "total_score": {
                        "one": 13,
                        "two": 12,
                        "three": 59,
                        "four": 34,
                        "five": 68,
                        "total": 186,
                        "one_rate": "0.07",
                        "two_rate": "0.06",
                        "three_rate": "0.32",
                        "four_rate": "0.18",
                        "five_rate": "0.37",
                        "total_rate": "1.00"
                    },
                    "face_type": {
                        "total": 186,
                        "lower": 42,
                        "great": 111,
                        "middle": 33,
                        "has_photo": 39,
                        "comment_tags": []
                    }
                },
                "profile": {"number": "874275788", "name": "闈掗潚"},
                "my_comment_list": [],
                "my_comment_list_model": {
                    "my_comment_list": [],
                    "total_number": 0,
                    "my_comment_list_url": "/comment/getMyTeacherCommentList?teacher_number=874275788",
                    "has_more": 0
                },
                "can_comment_list": [],
                "declare_Tpl": "v2/resources/page/comment/commentDetail/component/commentListAjax.tpl"
            },
            "ts": 1454034854
        }
    };
};

/* eslint-enable fecs-camelcase */

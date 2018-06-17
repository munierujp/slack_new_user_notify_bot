var moment = Moment.moment

var properties = PropertiesService.getScriptProperties()
var MESSAGE_TEMPLATE = properties.getProperty('MESSAGE_TEMPLATE')
var MESSAGE_TEMPLATE_DATE_LANG = properties.getProperty('MESSAGE_TEMPLATE_DATE_LANG')
var MESSAGE_TEMPLATE_DATE_FORMAT = properties.getProperty('MESSAGE_TEMPLATE_DATE_FORMAT')
var WEBHOOK_URL = properties.getProperty('WEBHOOK_URL')

var REQUEST_TYPE_URL_VERIFICATION = 'url_verification'
var REQUEST_TYPE_EVENT_CALLBACK = 'event_callback'
var EVENT_TYPE_TEAM_JOIN = 'team_join'

function doPost (e) {
  var request = normalizeRequest_(e)
  var requestType = request.type

  if (requestType === REQUEST_TYPE_URL_VERIFICATION) {
    var challenge = request.challenge
    return createTextOutput_(challenge)
  } else if (requestType === REQUEST_TYPE_EVENT_CALLBACK) {
    var event = request.event

    if (event.type === EVENT_TYPE_TEAM_JOIN) {
      var message = createMessage_(event)
      postToSlack_(message)
    }
  }
}

/**
* リクエストを正規化します。
* @param {Object} e - リクエスト
* @return {Object} リクエスト
*/
function normalizeRequest_ (e) {
  var postData = e.postData
  var request = postData.contents || postData.getDataAsString()
  return JSON.parse(request)
}

/**
* TextOutputオブジェクトを作成します。
* @param {string} text - テキスト
* @return {TextOutput} TextOutputオブジェクト
*/
function createTextOutput_ (text) {
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.TEXT)
}

/**
* メッセージを作成します。
* @param {Object} event - イベント
* @param {Object} event.user - イベントのユーザー
* @param {string} event.user.id - イベントのユーザーのID
* @param {string} event.user.name - イベントのユーザーの名前
* @param {string} event.user.real_name - イベントのユーザーの実名
* @param {Object} event.user.profile - イベントのユーザーのプロフィール
* @param {Object} event.user.profile.email - イベントのユーザーのプロフィールのメールアドレス
* @param {number} event.user.updated - イベントのユーザーの更新日持
* @return {string} メッセージ
*/
function createMessage_ (event) {
  var user = event.user
  var data = {
    id: user.id,
    name: user.name,
    real_name: user.real_name,
    email: user.profile.email,
    updated: moment(user.updated * 1000).format(MESSAGE_TEMPLATE_DATE_FORMAT)
  }
  return Mustache.render(MESSAGE_TEMPLATE, data)
}

/**
* Slackにメッセージを投稿します。
* @param {string} message - メッセージ
*/
function postToSlack_ (message) {
  var params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    payload: '{"text":"' + message + '"}'
  }
  UrlFetchApp.fetch(WEBHOOK_URL, params)
}

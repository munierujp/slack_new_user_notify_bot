[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# slack_new_user_notify_bot
Slackの新規ユーザーを通知するBOT

## プロパティ
|プロパティ|説明|例|
|---|---|---|
|`MESSAGE_TEMPLATE`|メッセージのテンプレート|`{{real_name}} (<@{{id}}>) has joined.`|
|`MESSAGE_TEMPLATE_DATE_LANG`|メッセージのテンプレートの日付の言語|`ja`|
|`MESSAGE_TEMPLATE_UPDATED_FORMAT`|メッセージのテンプレートの`updated`のフォーマット|`YYYY[/]M[/]D H[:]mm[:]ss`|
|`WEBHOOK_URL`|SlackのWebhook URL|`https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`|

### MESSAGE_TEMPLATE
以下の変数を用いて、[Mustache.js](https://github.com/janl/mustache.js/)の記法で書けます。

|変数|説明|例|
|---|---|---|
|`id`|ユーザーID|`U024BE7LH`|
|`name`|ユーザー名|`spengler`|
|`real_name`|ユーザーの実名|`Egon Spengler`|
|`email`|ユーザーのメールアドレス|`spengler@ghostbusters.example.com`|
|`updated`|ユーザーの更新日持|`2017-08-07T20:44:46.000Z`|

### MESSAGE_TEMPLATE_DATE_LANG
以下の言語を指定できます。  
指定しなかった場合や、これ以外の値を指定した場合は英語になります。

|値|説明|
|---|---|
|`ja`|日本語|

## ライブラリ
* Moment  
`MHMchiX6c1bwSqGM1PZiW_PxhMjh3Sh48`
* Mustache  
`MoB1GsrPeNTPPX8SRqpw8QDVZgzu5bsVr`

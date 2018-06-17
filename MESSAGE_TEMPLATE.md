# MESSAGE_TEMPLATE
以下のデータを用いて、[Mustache.js](https://github.com/janl/mustache.js/)の記法で書けます。

## [user](https://api.slack.com/events/team_join)
|プロパティ|型|説明|
|---|---|---|
|`id`|string|ユーザーID|
|`team_id`|string|チームID|
|`name`|string|名前|
|`deleted`|boolean|削除済みかどうか|
|`color`|string|色|
|`real_name`|string|実名|
|`tz`|string|タイムゾーン|
|`tz_label`|string|タイムゾーンのラベル|
|`tz_offset`|number|タイムゾーンのオフセット|
|`profile`|object|プロフィール|
|`is_admin`|boolean|管理者かどうか|
|`is_owner`|boolean|オーナーかどうか|
|`is_primary_owner`|boolean|プライマリーオーナーかどうか|
|`is_restricted`|boolean|マルチチャンネルゲストかどうか|
|`is_ultra_restricted`|boolean|シングルチャンネルゲストかどうか|
|`is_bot`|boolean|BOTかどうか|
|`is_stranger`|boolean|部外者かどうか|
|`updated`|string|更新日時|
|`is_app_user`|boolean|Appかどうか|
|`has_2fa`|boolean|2段階認証が有効かどうか|
|`locale`|string|言語|

### profile
|プロパティ|型|説明|
|---|---|---|
|`avatar_hash`|string|アバターのハッシュ|
|`status_text`|string|ステータスのテキスト|
|`status_emoji`|string|ステータスの絵文字|
|`real_name`|string|実名|
|`display_name`|string|表示名|
|`real_name_normalized`|string|正規化された実名|
|`display_name_normalized`|string|正規化された表示名|
|`email`|string|メールアドレス|
|`image_24`|string|プロフィール画像のURL（24px）|
|`image_32`|string|プロフィール画像のURL（32px）|
|`image_48`|string|プロフィール画像のURL（24px）|
|`image_72`|string|プロフィール画像のURL（72px）|
|`image_192`|string|プロフィール画像のURL（192px）|
|`image_512`|string|プロフィール画像のURL（512px）|
|`team`|string|チームID|

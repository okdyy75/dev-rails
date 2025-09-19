# TODO API

シンプルな TODO 管理用の Rails API アプリケーションです

## 必要環境
- Ruby 3.4.1
- Bundler 2.6.7
- SQLite3

## セットアップ手順

```bash
# 依存関係のインストール
bundle install

# データベース初期化
bin/rails db:migrate

# テスト実行
bin/rails test

```

## 実行方法

```bash
bin/rails server

open http://127.0.0.1:3000
```

### サンプルリクエスト

```bash
# 一覧取得
curl -X GET http://127.0.0.1:3000/api/todos

# 詳細取得
curl -X GET http://127.0.0.1:3000/api/todos/1

# 新規作成
curl -X POST http://127.0.0.1:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
        "todo": {
          "title": "買い物",
          "description": "牛乳を買う",
          "completed": false
        }
      }'

# 更新
curl -X PATCH http://127.0.0.1:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{
        "todo": {
          "completed": true
        }
      }'

# 削除
curl -X DELETE http://127.0.0.1:3000/api/todos/1
```

### レスポンス例
```json
{
  "id": 1,
  "title": "買い物",
  "description": "牛乳を買う",
  "completed": false,
  "created_at": "2025-09-19T00:00:00.000Z",
  "updated_at": "2025-09-19T00:00:00.000Z"
}
```

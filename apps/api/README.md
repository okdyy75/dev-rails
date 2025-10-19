# TODO API

シンプルな TODO 管理用の Rails API アプリケーションです

## 実行方法

```bash
docker compose up -d api

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

## Rake タスク

### Todos エクスポート

すべての TODO を Markdown チェックリスト形式でエクスポートします。

```bash
# seed 実行
docker compose exec api bin/rails db:seed

# Docker 環境内で実行
docker compose exec api bin/rake todos:export_markdown

# またはローカル環境
bin/rake todos:export_markdown
```

**出力形式:**
```markdown
# Todoリスト
- [ ] 未完了のタスク1
- [ ] 未完了のタスク2
- [x] 完了したタスク1
- [x] 完了したタスク2
```

**ファイル保存先:** `tmp/Todoリスト.md`
```

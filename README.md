# dev-rails
開発用Railsアプリです。

Rails開発動作確認用のシンプルなTODOアプルです


APIサーバー
http://localhost:3000

フロントエンド
http://localhost:3001


## 環境

- PostgreSQL 16
- Ruby 3.4.1
- Rails 7.2

## セットアップ

```bash
# イメージをビルド
docker compose build

# バックグラウンドで起動
docker compose up -d

# デバッグ用にrdbgインストール
docker compose exec api gem install rdbg


# DBの初期化
docker compose exec api bin/rails db:drop
docker compose exec api bin/rails db:setup

# シードデータの投入
docker compose exec api bin/rails db:seed

# DBの初期化＆シードデータ投入
docker compose exec api bin/rails db:reset
```

## コマンド

```bash
# ruby環境の検証
docker run --rm -it -v ./apps/api:/rails -w /rails ruby:3.4.1-slim bash

# apiコンテナへ接続
docker compose exec api bash

# DBコンテナへ接続
docker compose exec db psql -U postgres -d dev_rails_development
```

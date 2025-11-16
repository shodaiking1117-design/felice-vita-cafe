# ホームページ公開ガイド

このガイドでは、Felice Vita Cafeのホームページを公開する手順を説明します。

## 📋 公開の手順

### ステップ1: ドメインの取得

ドメインを持っていない場合、以下のサービスからドメインを取得できます。

#### 日本のドメイン取得サービス（日本語対応・国内で人気）

1. **お名前.com**（推奨）
   - URL: https://www.onamae.com/
   - 料金: 年額約1,000円〜（.com、.netなど）
   - 日本語サポートあり

2. **ムームードメイン**
   - URL: https://muumuu-domain.com/
   - 料金: 年額約500円〜
   - お名前.comの姉妹サービス

3. **バリュードメイン**
   - URL: https://www.value-domain.com/
   - 料金: 年額約500円〜

#### 海外のドメイン取得サービス

1. **Namecheap**
   - URL: https://www.namecheap.com/
   - 料金: 年額約$10〜（約1,500円）

2. **Google Domains**
   - URL: https://domains.google/
   - シンプルで使いやすい

### ステップ2: ホスティングサービスの選定とデプロイ

無料プランで公開できる主要なホスティングサービス：

#### 方法A: Vercel（推奨・最も簡単）

1. **GitHubアカウントの準備**
   - GitHubアカウントを持っていない場合: https://github.com/ でアカウント作成

2. **プロジェクトをGitHubにプッシュ**
   ```bash
   # プロジェクトディレクトリで実行
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # GitHubでリポジトリを作成後
   git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
   git push -u origin main
   ```

3. **Vercelでデプロイ**
   - Vercelにアクセス: https://vercel.com/
   - GitHubアカウントでログイン
   - "Add New Project" をクリック
   - GitHubリポジトリを選択
   - 設定を確認（自動検出されるはず）:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `out`
   - "Deploy" をクリック
   - 数分で `https://プロジェクト名.vercel.app` で公開されます

4. **カスタムドメインの設定**
   - Vercelダッシュボードでプロジェクトを選択
   - "Settings" > "Domains" に移動
   - 取得したドメインを入力
   - Vercelが表示するDNS設定を、ドメイン取得サービスのDNS設定に追加
   - 反映まで数時間〜24時間かかる場合があります

#### 方法B: Netlify（Vercelと同等に簡単）

1. **GitHubアカウントの準備**（方法Aと同じ）

2. **プロジェクトをGitHubにプッシュ**（方法Aと同じ）

3. **Netlifyでデプロイ**
   - Netlifyにアクセス: https://www.netlify.com/
   - GitHubアカウントでログイン
   - "Add new site" > "Import an existing project"
   - GitHubリポジトリを選択
   - 設定を確認:
     - Build command: `npm run build`
     - Publish directory: `out`
   - "Deploy site" をクリック

4. **カスタムドメインの設定**
   - Netlifyダッシュボードで "Domain settings" に移動
   - "Add custom domain" をクリック
   - 取得したドメインを入力
   - DNS設定を追加（Netlifyが指示します）

#### 方法C: GitHub Pages（無料・シンプル）

1. **GitHubリポジトリを作成**（方法Aのステップ1-2と同じ）

2. **vite.config.tsの設定確認**
   - `base: '/'` になっていることを確認（デフォルト）

3. **GitHub Actionsで自動デプロイ**
   - `.github/workflows/deploy.yml` を作成（下記参照）

4. **GitHub Pagesの設定**
   - リポジトリの "Settings" > "Pages" に移動
   - Source を "GitHub Actions" に設定
   - `https://あなたのユーザー名.github.io/リポジトリ名/` で公開

### ステップ3: DNS設定（カスタムドメインを使用する場合）

取得したドメインをホスティングサービスに接続するには、DNS設定が必要です。

#### Vercelの場合

1. Vercelダッシュボードで "Settings" > "Domains" に移動
2. ドメインを追加
3. Vercelが表示するDNSレコード（AレコードまたはCNAME）をコピー
4. ドメイン取得サービス（お名前.comなど）のDNS設定画面で以下を設定:
   - レコードタイプ: AレコードまたはCNAME
   - ホスト名: @ または www
   - 値: Vercelが表示した値
5. 保存後、反映まで数時間かかる場合があります

#### ドメイン取得サービスでの設定例（お名前.com）

1. お名前.comにログイン
2. "ネームサーバーの設定" または "DNS関連機能の設定" に移動
3. Vercel/Netlifyの指示に従ってDNSレコードを追加
4. 反映を待つ（通常1〜24時間）

### ステップ4: HTTPS証明書の設定

Vercel、Netlify、GitHub Pagesは自動的にHTTPS証明書（SSL証明書）を提供します。
カスタムドメインを設定すると、自動的にHTTPSが有効になります。

### 📝 必要なファイル

このプロジェクトには以下の設定ファイルが含まれています：

- `vercel.json`: Vercel用の設定ファイル
- `netlify.toml`: Netlify用の設定ファイル

## 🔧 ローカルでのビルドテスト

公開前に、ローカルでビルドが正しく動作するか確認してください：

```bash
# 依存関係のインストール
npm install

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

ビルド後、`out` ディレクトリに静的ファイルが生成されます。

## 💰 料金目安

### 無料プランで利用可能なサービス

- **Vercel**: 無料プランあり（十分な機能）
- **Netlify**: 無料プランあり（十分な機能）
- **GitHub Pages**: 完全無料

### ドメイン取得費用

- **.com / .net**: 年額約1,000〜2,000円
- **.jp**: 年額約3,000円〜
- **.tokyo / .shop など**: 年額約2,000円〜

## 📞 サポートが必要な場合

- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/
- GitHub Pages: https://docs.github.com/ja/pages

## 🚀 推奨手順（最も簡単）

1. **お名前.comでドメインを取得**（例: felicevitacafe.com）
2. **GitHubにリポジトリを作成してコードをプッシュ**
3. **VercelでGitHubリポジトリをインポートしてデプロイ**
4. **Vercelでカスタムドメインを設定**
5. **お名前.comのDNS設定を更新**

これで完了です！


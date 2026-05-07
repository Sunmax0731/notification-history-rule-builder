export const productConfig = {
  "product": {
    "rank": 18,
    "tier": "P1",
    "score": 66,
    "domain": "WindowsApp",
    "ideaNo": 12,
    "ideaName": "通知履歴・ローカルルールビルダー",
    "repository": "notification-history-rule-builder",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "Windowsローカル通知の履歴化は小さく作れ、フォルダ監視や公開前チェックにも転用できる。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "重要通知履歴、フォルダ更新、時間条件の通知ルールを作る。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "Windows通知やフォルダ変化を後から追いにくい。",
    "differentiation": "通知を増やすより、重要なものだけ履歴化する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
